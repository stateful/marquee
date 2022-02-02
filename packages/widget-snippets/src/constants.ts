import type { State } from './types';

export const DEFAULT_STATE: State = {
  snippets: [],
  snippetFilter: '',
  snippetSelected: '',
  snippetSplitter: undefined
};

export const languages = [
  { name: "python", value: "python" },
  { name: "markdown", value: "markdown" },
  { name: "clike", value: "clike" },
  { name: "shell", value: "shell" },
  { name: "css", value: "css" },
  { name: "sass", value: "sass" },
  { name: "scss", value: "sass" },
  { name: "sql", value: "sql" },
  { name: "stylus", value: "stylus" },
  { name: "tsx", value: "jsx" },
  { name: "javascript", value: "javascript" },
  { name: "diff", value: "diff" },
  { name: "git", value: "shell" },
  { name: "go", value: "go" },
  { name: "toml", value: "toml" },
  { name: "json", value: "javascript" },
  { name: "less", value: "css" },
  { name: "cmake", value: "cmake" },
  { name: "makefile", value: "shell" },
  { name: "objectivec", value: "clike" },
  { name: "yaml", value: "yaml" },
  { name: "markup", value: "htmlmixed" },
  { name: "jsx", value: "jsx" },
  { name: "text", value: "text" },
  { name: "xml", value: "xml" },
  { name: "vue", value: "vue" },
  { name: "rust", value: "rust" },
  { name: "ruby", value: "ruby" },
  { name: "html", value: "htmlmixed" },
] as const;

export const vscLanguages = {
  markdown: "markdown",
  text: "text",
  yaml: "yaml",
  sql: "sql",
  typescriptreact: "jsx",
  typescript: "javascript",
  scss: "scss",
  sass: "sass",
  css: "css",
  less: "less",
  rust: "rust",
  ruby: "clike",
  python: "python",
  php: "clike",
  cpp: "c",
  diff: "diff",
  "git-commit": "git",
  "git-rebase": "git",
  html: "markup",
  shellscript: "shell",
  javascriptreact: "jsx",
  javascript: "javascript",
  json: "json",
  makefile: "shell",
  plaintext: "text",
  xml: "markup",
  jsonc: "json",
  "objective-c": "objectivec",
  go: "go",
} as const;
