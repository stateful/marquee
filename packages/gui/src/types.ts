import type { EmojiData } from 'emoji-mart';
import type { presetModes } from './constants';

export type LayoutSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type LayoutType = Record<LayoutSize, ReactGridLayout.Layout[]>;
export type PresetModes = typeof presetModes[number];

export interface Mode {
  layouts: LayoutType,
  widgets: Record<string, boolean>,
  icon?: EmojiData
}

export type ModeConfig = Record<PresetModes | string, Mode>;
export type WidgetComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<unknown>>>;
export interface WidgetMap {
  label: string
  element: WidgetComponent
}

export interface WidgetConfig {
  name: string
  icon: JSX.Element
  label?: string
  tags: string[]
  description: string
  component: WidgetComponent
}

export interface Theme {
  id: number
  background?: string
  backgroundColor?: string
  title: string
  description: string
  author: string
}

export interface State {
  modeName: string
  prevMode: string | null
}

export interface Configuration {
  modes: ModeConfig
}

export interface ReduxState extends State, Configuration {
  mode: Mode
  thirdPartyWidgets: WidgetConfig[]
  widgets: Record<string, WidgetMap>,
}
