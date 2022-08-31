import vscode from 'vscode'

import ExtensionManager, { Logger, ChildLogger } from '@vscode-marquee/utils/extension'

import { DEFAULT_STATE } from './constants'
import type { State, Note } from './types'

const STATE_KEY = 'widgets.notes'

export class NoteExtensionManager extends ExtensionManager<State, {}> {
  #logger: ChildLogger

  constructor (context: vscode.ExtensionContext) {
    super(context, STATE_KEY, {}, DEFAULT_STATE)
    this.#logger = Logger.getChildLogger(STATE_KEY)
    this._disposables.push(
      /**
       * add file listeners
       */
      ...[
        ...(new Set(this.getItemsWithReference('notes').map((t) => t.path!.split(':')[0])))
      ].map(this.registerFileListenerForFile.bind(this, 'notes')),

      vscode.commands.registerTextEditorCommand('marquee.note.addEditor', this._addNote.bind(this)),
      vscode.commands.registerCommand('marquee.note.move', this._moveNote.bind(this)),
      vscode.commands.registerCommand('marquee.note.delete', this._deleteNote.bind(this)),
      vscode.commands.registerCommand('marquee.note.addEmpty', () => this.emit(
        'openDialog', { event: 'openAddNoteDialog', payload: true }
      ))
    )
  }

  /**
   * add note into text editor
   */
  private _addNote (editor: vscode.TextEditor) {
    const { text, name, path } = this.getTextSelection(editor)
    const file = editor.document.uri.path

    if (text.length < 1) {
      return vscode.window.showWarningMessage('Marquee: no text selected')
    }

    const worksapceId = this.getActiveWorkspace()?.id || ''
    const branch = this._gitProvider.branch
      ? `${worksapceId}#${this._gitProvider.branch}`
      : undefined
    const note: Note = {
      title: name,
      body: text,
      text: text,
      id: this.generateId(),
      workspaceId: worksapceId || null,
      path,
      origin: path,
      branch,
      commit: this._gitProvider.commit,
      gitUri: this._gitProvider.gitUri
    }

    const filesWithListeners = this.state.notes.map((t) => t.path).filter(Boolean)
    if (!filesWithListeners.includes(path)) {
      this._disposables.push(this.registerFileListenerForFile('notes', file))
    }

    const newNotes = [note].concat(this.state.notes)
    this.updateState('notes', newNotes)
    this.broadcast({ notes: newNotes })
    this.#logger.info(`New note added with id ${note.id}`)

    vscode.commands.executeCommand('marquee.refreshCodeActions')
    vscode.window.showInformationMessage(
      `Added ${name} to your notes in Marquee`,
      'Open Marquee'
    ).then((item) => item && this.emit('gui.open'))
  }

  /**
   * archive todo
   * @param item TreeView item that represents a todo in a tree view
   * @returns (un)archived todo
   */
  private _moveNote (item: { id: string, archived: boolean }) {
    const awsp = this.getActiveWorkspace()

    if (!awsp) {
      return console.warn('Can\'t move note, no workspace selected')
    }

    const noteIndex = this.state.notes.findIndex((s) => s.id === item.id)

    if (noteIndex < 0) {
      return console.warn(`Couldn't find note to toggle with id "${item.id}"`)
    }

    this.state.notes[noteIndex].workspaceId = awsp.id
    this.updateState('notes', this.state.notes)
    this.broadcast({ notes: this.state.notes })
  }

  /**
   * delete note (triggered from tree view)
   */
  private _deleteNote (item: { id: string }) {
    const newNotes = this.state.notes.filter((n) => n.id !== item.id)
    this.updateState('notes', newNotes)
    this.broadcast({ notes: this.state.notes })
  }
}

export function activate (context: vscode.ExtensionContext) {
  const stateManager = new NoteExtensionManager(context)

  return {
    marquee: {
      disposable: stateManager,
      defaultState: stateManager.state,
      defaultConfiguration: stateManager.configuration,
      setup: stateManager.setBroadcaster.bind(stateManager)
    }
  }
}
export * from './types'
