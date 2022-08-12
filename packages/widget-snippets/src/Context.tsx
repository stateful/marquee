import React, { createContext, useState, useEffect, useContext } from 'react'
import { connect, getEventListener, MarqueeWindow, MarqueeEvents, GlobalContext } from '@vscode-marquee/utils'

import { WIDGET_ID } from './constants'
import type { State, Context, Snippet, Events } from './types'

declare const window: MarqueeWindow
const SnippetContext = createContext<Context>({} as Context)

const SnippetProvider = ({ children }: { children: React.ReactElement }) => {
  const { commit, branch } = useContext(GlobalContext)
  const eventListener = getEventListener<Events & MarqueeEvents>()
  const widgetEvents = getEventListener<Events>(WIDGET_ID)
  const widgetState = getEventListener<State>(WIDGET_ID)
  const providerValues = connect<State>(window.marqueeStateConfiguration[WIDGET_ID].state, widgetState)

  /**
   * for so far unknown reason the `providerValues.snippets` doesn't change when
   * `providerValues.setSnippets` is called within the context, therefor we need
   * to maintain a local state
   */
  const [snippets, _setSnippets] = useState<Snippet[]>(providerValues.snippets)

  const setSnippets = (snippets: Snippet[]) => {
    _setSnippets(snippets)
    providerValues.setSnippets(snippets)
  }

  const _addSnippet = (
    snippet: Pick<Snippet, 'title' | 'body'>,
    isWorkspaceTodo: boolean
  ): string => {
    eventListener.emit('telemetryEvent', { eventName: 'addSnippet' })
    const globalSnippets = snippets
    const id = [...Array(8)].map(() => Math.random().toString(36)[2]).join('')

    const workspaceId = window.activeWorkspace?.id || ''
    const newSnippet: Partial<Snippet> = Object.assign({}, snippet, {
      id,
      commit,
      branch: `${workspaceId}#${branch}`,
      archived: false,
      createdAt: new Date().getTime(),
      workspaceId: isWorkspaceTodo
        ? workspaceId || null
        : null
    })

    globalSnippets.unshift(newSnippet as Snippet)
    setSnippets(globalSnippets)
    return id
  }

  useEffect(() => {
    widgetEvents.on('selectSnippet', (id) => providerValues.setSnippetSelected(id))
    eventListener.on('addSnippet', (snippet) => _addSnippet(
      snippet,
      snippet.workspaceId === window.activeWorkspace?.id
    ))

    return () => {
      widgetState.removeAllListeners()
      eventListener.removeAllListeners()
    }
  }, [])

  const _removeSnippet = (id: string) => {
    eventListener.emit('telemetryEvent', { eventName: 'removeSnippet' })
    const globalSnippets = snippets
    const index = globalSnippets.findIndex((snippet) => snippet.id === id)

    if (index < 0) {
      return console.error(`Couldn't find note with id "${id}"`)
    }

    globalSnippets.splice(index, 1)
    setSnippets(globalSnippets)
  }

  const _updateSnippet = (snippet: Snippet) => {
    eventListener.emit('telemetryEvent', { eventName: 'updateSnippet' })
    const globalSnippets = snippets
    const index = globalSnippets.findIndex((s) => s.id === snippet.id)

    if (index < 0) {
      return console.error(`Couldn't find note with id "${snippet.id}"`)
    }

    globalSnippets[index] = snippet
    setSnippets(globalSnippets)
  }

  return (
    <SnippetContext.Provider
      value={{
        ...providerValues,
        _addSnippet,
        _removeSnippet,
        _updateSnippet,
      }}
    >
      {children}
    </SnippetContext.Provider>
  )
}

export default SnippetContext

export { SnippetProvider }
