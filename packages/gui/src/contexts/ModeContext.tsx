import React, {
  createContext,
  useState,
  useEffect,
  useMemo
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect, getEventListener, MarqueeEvents } from "@vscode-marquee/utils";
import { ThirdPartyWidget } from '@vscode-marquee/widget';
import type { MarqueeWindow, MarqueeInterface, ThirdPartyWidgetOptions } from '@vscode-marquee/utils';
import type { EmojiData } from 'emoji-mart';

import { defaultLayout, defaultEnabledWidgets, thirdPartyWidgetLayout } from "../constants";
import { widgetConfig } from "../constants";
import { Context, Mode, LayoutType, WidgetConfig, LayoutSize, WidgetMap, State, Configuration } from "../types";

declare const window: MarqueeWindow;

const pendingThirdPartyWidgets: ThirdPartyWidgetOptions[] = [];

interface Props {
  children: React.ReactChildren
}

const ModeContext = createContext<Context>({} as Context);
const WIDGET_ID = '@vscode-marquee/gui';

const ModeProvider = ({ children }: Props) => {
  const modeState = getEventListener<State & Configuration>(WIDGET_ID);
  const providerValues = connect<State & Configuration>(
    {
      ...window.marqueeStateConfiguration[WIDGET_ID].state,
      ...window.marqueeStateConfiguration[WIDGET_ID].configuration
    },
    modeState
  );
  const [thirdPartyWidgets, setThirdPartyWidgets] = useState([] as WidgetConfig[]);

  const widgetMapping: Record<string, WidgetMap> = useMemo(() => {
    const newMap: Record<string, WidgetMap> = {};
    [...widgetConfig, ...thirdPartyWidgets].map((widgetObj: WidgetConfig) => {
      newMap[widgetObj.name] = {
        label: widgetObj.label || 'Unknown Widget',
        element: widgetObj.component
      };
    });
    return newMap;
  }, [widgetConfig, thirdPartyWidgets]);

  if (!window.marqueeExtension) {
    window.marqueeExtension = {
      defineWidget: (
        widgetOptions: ThirdPartyWidgetOptions,
        constructor: CustomElementConstructor,
        options?: ElementDefinitionOptions
      ) => {
        customElements.define(widgetOptions.name, constructor, options);
        setThirdPartyWidgets([...thirdPartyWidgets, {
          name: widgetOptions.name,
          icon: <FontAwesomeIcon icon={widgetOptions.icon} />,
          label: widgetOptions.label,
          tags: widgetOptions.tags,
          description: widgetOptions.description,
          component: ThirdPartyWidget,
        }]);
        pendingThirdPartyWidgets.push(widgetOptions);
      }
    } as MarqueeInterface;
  }

  useEffect(() => {
    if (pendingThirdPartyWidgets.length) {
      for (const mn of Object.keys(providerValues.modes)) {
        for (const w of pendingThirdPartyWidgets) {
          if (typeof providerValues.modes[mn].widgets[w.name] === 'boolean') {
            continue;
          }
          providerValues.modes[mn].widgets[w.name] = true;
          for (const size of Object.keys(providerValues.modes[mn].layouts)) {
            providerValues.modes[mn].layouts[size as LayoutSize].push({
              ...thirdPartyWidgetLayout[size as LayoutSize],
              i: w.name
            });
          }
        }
      }

      providerValues.setModes(providerValues.modes);
    }
  }, [providerValues.modes]);


  const mode: Mode = useMemo(() => {
    return (providerValues.modes && providerValues.modes[providerValues.modeName]) || {};
  }, [providerValues.modes, providerValues.modeName]);

  const _setModeName = (newModeName: string) => {
    if (newModeName !== providerValues.modeName) {
      modeState.broadcast({
        modeName: newModeName,
        prevMode: providerValues.modeName,
        modes: providerValues.modes
      });
    }
  };

  const _setCurrentModeLayout = (newLayouts: ReactGridLayout.Layouts) => {
    providerValues.setModes({
      ...providerValues.modes,
      [providerValues.modeName]: {
        ...providerValues.modes[providerValues.modeName],
        layouts: newLayouts,
      } as Mode,
    });
  };

  const _setModeWidget = (targetMode: string, widgetName: string, value: ReactGridLayout.Layout | Boolean) => {
    providerValues.setModes({
      ...providerValues.modes,
      [targetMode]: {
        ...providerValues.modes[targetMode],
        widgets: {
          ...providerValues.modes[targetMode].widgets,
          [widgetName]: value,
        },
      } as Mode,
    });
  };

  const _removeModeWidget = (widgetName: string) => {
    _setModeWidget(providerValues.modeName || 'default', widgetName, false);
  };

  const _resetModes = () => {
    providerValues.setModes(undefined as any);
    providerValues.setModeName('default');
    providerValues.setPrevMode(null);
  };

  const _removeMode = (removeModeName: string) => {
    //it must exist
    if (!providerValues.modes[removeModeName]) {
      return;
    }

    //if we are deleting the selected mode
    if (removeModeName === providerValues.modeName) {
      providerValues.setModeName("default");
    }

    providerValues.setModes(Object.assign(
      {},
      ...Object.entries(providerValues.modes)
        .filter(([k]) => k !== removeModeName)
        .map(([k, v]) => ({ [k]: v }))
    ));
  };

  const _addModeWithParams = (newModeName: string, emoji: EmojiData, layouts: LayoutType, widgets: Record<string, boolean>) => {
    newModeName = newModeName.toLowerCase();

    if (!providerValues.modes[newModeName]) {
      let newModeObj: Mode = {
        layouts: layouts,
        widgets: widgets,
        icon: emoji,
      };
      providerValues.setModes({
        ...providerValues.modes,
        [newModeName]: newModeObj,
      });
    }
  };

  const _duplicateMode = (oldModeName: string, newModeName: string, newEmoji: EmojiData) => {
    let prevLayouts = Object.assign({}, providerValues.modes[oldModeName].layouts);
    let prevWidgets = Object.assign({}, providerValues.modes[oldModeName].widgets);
    _addModeWithParams(newModeName, newEmoji, prevLayouts, prevWidgets);
  };

  const _addMode = (newModeName: string, emoji: EmojiData) => {
    _addModeWithParams(
      newModeName,
      emoji,
      defaultLayout,
      defaultEnabledWidgets
    );
  };

  useEffect(() => {
    const eventListener = getEventListener<MarqueeEvents>();
    eventListener.emit('updateWidgetDisplay', mode.widgets);
  }, []);

  return (
    <ModeContext.Provider
      value={{
        ...providerValues,
        mode: mode,
        widgets: widgetMapping,
        thirdPartyWidgets: thirdPartyWidgets,

        _setModeName: _setModeName,
        _setCurrentModeLayout: _setCurrentModeLayout,
        _setModeWidget: _setModeWidget,
        _addMode: _addMode,
        _removeMode: _removeMode,
        _resetModes: _resetModes,
        _duplicateMode: _duplicateMode,
        _removeModeWidget: _removeModeWidget,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
export { ModeProvider };
