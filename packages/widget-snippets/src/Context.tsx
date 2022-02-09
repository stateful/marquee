import React, { createContext, useState, useEffect } from "react";
import { connect, getEventListener, MarqueeEvents, MarqueeWindow } from "@vscode-marquee/utils";

import AddDialog from "./dialogs/AddDialog";
import EditDialog from "./dialogs/EditDialog";
import { DEFAULT_STATE } from './constants';
import type { State, Context, Snippet } from './types';

declare const window: MarqueeWindow;
const SnippetContext = createContext<Context>({} as Context);

const SnippetProvider = ({ children }: { children: React.ReactElement }) => {
  const eventListener = getEventListener<MarqueeEvents>();
  const widgetState = getEventListener<State>('@vscode-marquee/snippets-widget');
  const providerValues = connect<State>(DEFAULT_STATE, widgetState);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState<string | undefined>();

  const _addSnippet = (
    snippet: Pick<Snippet, 'title' | 'body' | 'language'>,
    isWorkspaceTodo: boolean
  ): string => {
    const globalSnippets = providerValues.snippets;
    const id = [...Array(8)].map(() => Math.random().toString(36)[2]).join('');

    const newSnippet: Snippet = Object.assign({}, snippet, {
      id,
      archived: false,
      createdAt: new Date().getTime(),
      workspaceId: isWorkspaceTodo
        ? window.activeWorkspace?.id || null
        : null
    });

    globalSnippets.unshift(newSnippet);
    providerValues.setSnippets(globalSnippets);
    return id;
  };

  useEffect(() => {
    eventListener.on('openAddSnippetDialog', setShowAddDialog);
    eventListener.on('openEditSnippetDialog', setShowEditDialog);
    eventListener.on('addSnippet', (snippet: Snippet) => {
      if (typeof snippet !== 'object') {
        return;
      }
      _addSnippet(snippet, true);
    });
  }, []);

  const _removeSnippet = (id: string) => {
    const globalSnippets = providerValues.snippets;
    const index = globalSnippets.findIndex((snippet) => snippet.id === id);

    if (index < 0) {
      return console.error(`Couldn't find note with id "${id}"`);
    }

    globalSnippets.splice(index, 1);
    providerValues.setSnippets(globalSnippets);
  };

  const _updateSnippet = (snippet: Snippet) => {
    const globalSnippets = providerValues.snippets;
    const index = globalSnippets.findIndex((s) => s.id === snippet.id);

    if (index < 0) {
      return console.error(`Couldn't find note with id "${snippet.id}"`);
    }

    globalSnippets[index] = snippet;
    providerValues.setSnippets(globalSnippets);
  };

  return (
    <SnippetContext.Provider
      value={{
        ...providerValues,
        _addSnippet,
        _removeSnippet,
        _updateSnippet,

        showAddDialog,
        setShowAddDialog,
        showEditDialog,
        setShowEditDialog
      }}
    >
      { showAddDialog && (
        <AddDialog close={() => setShowAddDialog(false)} />
      )}
      { showEditDialog && providerValues.snippets.find((s) => showEditDialog === s.id) && (
        <EditDialog snippet={providerValues.snippets.find((s) => showEditDialog === s.id)!} close={() => setShowEditDialog(undefined) } />
      )}
      {children}
    </SnippetContext.Provider>
  );
};

export default SnippetContext;

export { SnippetProvider };
