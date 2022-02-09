import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import { interval, ConnectableObservable } from "rxjs";
import { take, publish } from "rxjs/operators";

import { PrefProvider, theme, GlobalProvider } from "@vscode-marquee/utils";
import { SnippetProvider } from "@vscode-marquee/widget-snippets";
import type { MarqueeWindow } from '@vscode-marquee/utils';

import Sentry from "./sentry";
import Container from "./Container";

import { ModeProvider } from "./contexts/ModeContext";

import "./css/index.css";

declare const window: MarqueeWindow;

window.vscode = window.acquireVsCodeApi() as MarqueeWindow['vscode'];
window.uptime = interval(1000).pipe(take(11), publish()) as ConnectableObservable<number>;
window.uptime!.connect();

Sentry.init();

export const Providers = ({ children }: any) => {
  return (
    <GlobalProvider>
      <ModeProvider>
        <PrefProvider>
          <SnippetProvider>
            {children}
          </SnippetProvider>
        </PrefProvider>
      </ModeProvider>
    </GlobalProvider>
  );
};

export const App = () => {
  useEffect(() => {
    window.vscode.postMessage({ ready: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Providers>
        <Container />
      </Providers>
    </ThemeProvider>
  );
};

if (process.env.NODE_ENV !== 'test') {
  ReactDOM.render(<App />, document.getElementById("root"));
}
