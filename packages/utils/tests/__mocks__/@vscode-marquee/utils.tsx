import React from 'react';
import { createTheme } from "@material-ui/core/styles";
import { EventEmitter } from 'events';

import GlobalContextImport from '../../../src/contexts/Global';
import NetworkErrorImport from '../../../src/components/NetworkError';
import BetterCompleteImport from '../../../src/components/BetterComplete';
import DoubleClickHelperImport from '../../../src/components/DoubleClickHelper';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
  },
});

const eventListener = new EventEmitter();
// @ts-expect-error mock tangle
eventListener.listen = eventListener.on;
export const defaultName = "name here...";
export const getEventListener = () => eventListener;
export const GlobalContext = GlobalContextImport;
export const updateName = jest.fn();

export const setGlobalScope = jest.fn();
export const GlobalProvider = ({ children }: any) => (
  <GlobalContext.Provider value={{
    globalScope: true,
    workspaces: [{ id: '1', name: 'test workspace' }],
    activeWorkspace: { id: 'foobar' },
    setGlobalScope
   } as any}>
    <div role="GlobalProvider">{children}</div>
  </GlobalContext.Provider>
);
const handlers = new Map();
export const stores = new Map();
export const store = (name: string) => {
  const s = new Map();
  stores.set(name, s);
  // @ts-expect-error store mock
  s.subscribe = (cb: Function) => (
    handlers.set(name, [...(handlers.get(name) || []), cb])
  );
  return s;
};
export const emitStore = (name: string, payload: any) => (
  [...(handlers.get(name) || [])].map((handler) => handler(payload))
);
export const NetworkError = NetworkErrorImport;
export const BetterComplete = BetterCompleteImport;
export const DoubleClickHelper = DoubleClickHelperImport;
export const createConsumer = () => ({ subscribe: jest.fn() });
