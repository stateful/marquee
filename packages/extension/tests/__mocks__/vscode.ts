const vscode: any = {
  version: '1.2.3',
  env: {
    uiKind: 1,
    machineId: 'machineId',
    sessionId: 'sessionId'
  },
  ConfigurationTarget: { Global: 1 },
  CodeActionKind: { QuickFix: 1 },
  Uri: {
    parse: jest.fn((param: string) => `parsedUri-${param}`),
    joinPath: jest.fn((base: string, ...seg: string[]) => `${base}/${seg.join('/')}`)
  },
  Range: jest.fn(),
  ViewColumn: {
    One: 'ViewColumn.One'
  },
  TextEditorRevealType: {
    inCenter: 'TextEditorRevealType.inCenter'
  },
  UIKind: {
    Desktop: 1,
    Web: 2
  }
};
vscode.TreeItemCollapsibleState = {
  Expanded: 'foo',
  Collapsed: 'bar'
};

vscode.commands = {
  registerCommand: jest.fn().mockImplementation((cmd: string) => cmd),
  executeCommand: jest.fn()
};

vscode.TreeItem = jest.fn();
vscode.EventEmitter = jest.fn();
vscode.workspace = {
  name: 'foobarWorkspace',
  workspaceFile: { path: '/foo/bar' },
  getConfiguration: jest.fn().mockReturnValue({ get: jest.fn(), update: jest.fn() }),
  onDidChangeConfiguration: jest.fn(),
  fs: {
    readFile: jest.fn().mockResolvedValue('some file'),
    writeFile: jest.fn().mockResolvedValue({})
  },
  openTextDocument: jest.fn().mockResolvedValue({
    lineAt: jest.fn().mockReturnValue({ range: 'some range'})
  })
};
vscode.extensions = {
  all: []
};
vscode.window = {
  createOutputChannel: jest.fn().mockReturnValue({ appendLine: jest.fn() }),
  createTreeView: jest.fn().mockReturnValue({ reveal: jest.fn() }),
  onDidChangeActiveColorTheme: jest.fn(),
  showOpenDialog: jest.fn().mockResolvedValue(['/foo/bar']),
  showErrorMessage: jest.fn(),
  showWarningMessage: jest.fn(),
  showInformationMessage: jest.fn(),
  showSaveDialog: jest.fn().mockResolvedValue({ fsPath: '/bar/foo' }),
  createWebviewPanel: jest.fn().mockReturnValue({
    onDidChangeViewState: jest.fn(),
    onDidDispose: jest.fn(),
    iconPath: '/icon/path',
    webview: {
      onDidReceiveMessage: jest.fn(),
      asWebviewUri: jest.fn().mockReturnValue('some url'),
      cspSource: 'csp-source',
      html: '<html></html>'
    }
  }),
  showTextDocument: jest.fn().mockResolvedValue({
    revealRange: jest.fn()
  })
};

export default vscode;
