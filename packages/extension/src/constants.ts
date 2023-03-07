import vscode from 'vscode'

export const DEFAULT_FONT_SIZE = 5

export const RETRY = 4 * 1000
export const INIT = 50
export const MODES_UPDATE_TIMEOUT = 2 * 1000
export const config = vscode.workspace.getConfiguration('marquee')
export const FILE_FILTER = { 'Marquee Settings': ['json'] }
export const CONFIG_FILE_TYPE = 'MarqueeSettings'
export const THIRD_PARTY_EXTENSION_DIR = '3rdParty'

export const DEFAULT_MODES: any = {
  default: {
    layouts: {
      lg: [
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 0, i: 'welcome', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 8, y: 12, i: 'todo', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 8, y: 0, i: 'weather', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 4, y: 12, i: 'github', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 12, i: 'news', moved: false, static: false },
        { minW: 3, minH: 12, w: 6, h: 13, x: 0, y: 24, i: 'snippets', moved: false, static: false },
        { minW: 3, minH: 12, w: 6, h: 13, x: 6, y: 24, i: 'notes', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 4, y: 0, i: 'projects', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 4, y: 0, i: 'projects', moved: false, static: false }
      ],
      md: [
        { minW: 3, minH: 12, w: 3, h: 12, x: 0, y: 0, i: 'welcome', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 6, y: 12, i: 'todo', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 7, y: 0, i: 'weather', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 3, y: 12, i: 'github', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 0, y: 12, i: 'news', moved: false, static: false },
        { minW: 3, minH: 12, w: 5, h: 13, x: 0, y: 24, i: 'snippets', moved: false, static: false },
        { minW: 3, minH: 12, w: 5, h: 13, x: 5, y: 24, i: 'notes', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 3, y: 0, i: 'projects', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 3, y: 0, i: 'projects', moved: false, static: false }
      ],
      sm: [
        { minW: 3, minH: 12, w: 3, h: 12, x: 0, y: 0, i: 'welcome', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 3, y: 24, i: 'todo', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 3, y: 12, i: 'weather', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 0, y: 24, i: 'github', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 0, y: 12, i: 'news', moved: false, static: false },
        { minW: 3, minH: 12, w: 6, h: 13, x: 0, y: 36, i: 'snippets', moved: false, static: false },
        { minW: 3, minH: 12, w: 6, h: 13, x: 0, y: 49, i: 'notes', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 3, y: 0, i: 'projects', moved: false, static: false },
        { minW: 3, minH: 12, w: 3, h: 12, x: 3, y: 0, i: 'projects', moved: false, static: false }
      ],
      xs: [
        { minW: 3, minH: 12, w: 2, h: 11, x: 0, y: 0, i: 'welcome', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 23, i: 'todo', moved: false, static: false },
        { minW: 3, minH: 12, w: 2, h: 11, x: 2, y: 0, i: 'weather', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 74, i: 'github', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 61, i: 'news', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 35, i: 'snippets', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 48, i: 'notes', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 11, i: 'projects', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 11, i: 'projects', moved: false, static: false }
      ],
      xxs: [
        { minW: 3, minH: 12, w: 4, h: 11, x: 0, y: 0, i: 'welcome', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 35, i: 'todo', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 11, i: 'weather', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 86, i: 'github', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 73, i: 'news', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 47, i: 'snippets', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 13, x: 0, y: 60, i: 'notes', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 23, i: 'projects', moved: false, static: false },
        { minW: 3, minH: 12, w: 4, h: 12, x: 0, y: 23, i: 'runme', moved: false, static: false }
      ]
    },
    widgets: {
      news: true,
      github: true,
      todo: true,
      weather: true,
      notes: true,
      welcome: true,
      snippets: true,
      projects: true,
      runme: true
    }
  },
  play: {
    layouts: {
      sm: [
        { w: 3, h: 12, x: 3, y: 11, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 12, x: 0, y: 11, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 36, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 11, x: 3, y: 0, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 13, x: 0, y: 23, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 11, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 48, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 60, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 60, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      xs: [
        { w: 4, h: 13, x: 0, y: 37, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 24, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 62, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 11, x: 0, y: 13, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 50, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 74, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 86, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 86, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      md: [
        { w: 4, h: 14, x: 5, y: 12, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 5, h: 14, x: 0, y: 12, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false, },
        { w: 4, h: 12, x: 5, y: 0, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 0, i: 'notes', minW: 3, minH: 12, moved: false, static: false, },
        { w: 5, h: 12, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 0, i: 'snippets', minW: 3, minH: 12, moved: false, static: false, },
        { w: 4, h: 12, x: 0, y: 0, i: 'projects', minW: 3, minH: 12, moved: false, static: false, },
        { w: 4, h: 12, x: 0, y: 0, i: 'runme', minW: 3, minH: 12, moved: false, static: false, }
      ],
      lg: [
        { w: 6, h: 14, x: 6, y: 14, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 14, x: 0, y: 14, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 14, x: 4, y: 29, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 14, x: 6, y: 0, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 15, x: 6, y: 0, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 14, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 29, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 41, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 41, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      xxs: [
        { w: 4, h: 13, x: 0, y: 37, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 24, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 62, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 11, x: 0, y: 13, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 50, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 74, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 86, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 86, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ]
    },
    widgets: {
      news: true,
      github: true,
      todo: false,
      weather: true,
      notes: false,
      welcome: true,
      snippets: false,
      projects: false,
      runme: false
    },
    icon: {
      id: 'beach_with_umbrella',
      name: 'Beach with Umbrella',
      short_names: [
        'beach_with_umbrella'
      ],
      colons: ':beach_with_umbrella:',
      unified: '1f3d6-fe0f',
      native: '🏖️'
    } as any
  },
  work: {
    layouts: {
      sm: [
        { w: 4, h: 12, x: 0, y: 47, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 59, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 11, x: 3, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 71, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 11, x: 0, y: 36, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 12, x: 0, y: 47, i: 'dependencies', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 11, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 13, x: 0, y: 23, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 12, x: 0, y: 11, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 12, x: 0, y: 11, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      xs: [
        { w: 4, h: 12, x: 0, y: 60, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 72, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 25, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 84, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 11, x: 0, y: 49, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 60, i: 'dependencies', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 37, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 13, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 13, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      md: [
        { w: 4, h: 12, x: 0, y: 0, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 0, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 14, x: 3, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 0, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 9, h: 13, x: 0, y: 28, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 9, h: 12, x: 0, y: 41, i: 'dependencies', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 14, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 5, h: 14, x: 0, y: 14, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 14, x: 5, y: 14, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 14, x: 5, y: 14, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      lg: [
        { w: 4, h: 12, x: 0, y: 28, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 40, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 8, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 52, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 15, x: 6, y: 13, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 12, h: 13, x: 0, y: 28, i: 'dependencies', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 15, x: 0, y: 13, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 4, y: 0, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 4, y: 0, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ],
      xxs: [
        { w: 4, h: 12, x: 0, y: 60, i: 'news', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 72, i: 'github', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 25, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 84, i: 'weather', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 11, x: 0, y: 49, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 12, x: 0, y: 60, i: 'dependencies', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 0, i: 'welcome', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 37, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 13, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 13, i: 'runme', minW: 3, minH: 12, moved: false, static: false }
      ]
    },
    widgets: {
      news: false,
      github: false,
      todo: true,
      weather: false,
      notes: true,
      welcome: true,
      snippets: true,
      projects: true,
      dependencies: true,
      runme: false
    },
    icon: {
      id: 'briefcase',
      name: 'Briefcase',
      short_names: [
        'briefcase'
      ],
      colons: ':briefcase:',
      unified: '1f4bc',
      native: '💼'
    } as any
  },
  project: {
    layouts: {
      lg: [
        { w: 3, h: 12, x: 5, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 17, x: 8, y: 24, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 17, x: 5, y: 24, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 12, x: 8, y: 0, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 12, x: 5, y: 12, i: 'npm-stats', minW: 3, minH: 12, moved: false, static: false },
        { w: 5, h: 41, x: 0, y: 0, i: 'markdown', minW: 3, minH: 12, moved: false, static: false }
      ],
      md: [
        { w: 4, h: 8, x: 6, y: 0, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 5, y: 27, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 5, h: 13, x: 0, y: 27, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 10, x: 6, y: 8, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 10, h: 9, x: 0, y: 18, i: 'npm-stats', moved: false, static: false },
        { w: 5, h: 18, x: 0, y: 0, i: 'markdown', minW: 3, minH: 12, moved: false, static: false },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'welcome' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'news' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'github' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'weather' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'stateful-marquee-widget' }
      ],
      sm: [
        { w: 3, h: 12, x: 0, y: 30, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 11, x: 0, y: 55, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 13, x: 0, y: 42, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 3, h: 12, x: 3, y: 30, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 12, x: 0, y: 18, i: 'npm-stats', minW: 3, minH: 12, moved: false, static: false },
        { w: 6, h: 18, x: 0, y: 0, i: 'markdown', minW: 3, minH: 12, moved: false, static: false },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'welcome' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'news' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'github' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'weather' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'stateful-marquee-widget' }
      ],
      xs: [
        { w: 4, h: 12, x: 0, y: 29, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 67, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 54, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 41, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 17, i: 'npm-stats', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 17, x: 0, y: 0, i: 'markdown', minW: 3, minH: 12, moved: false, static: false },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'welcome' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'news' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'github' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'weather' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'stateful-marquee-widget' }
      ],
      xxs: [
        { w: 4, h: 12, x: 0, y: 34, i: 'todo', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 72, i: 'projects', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 59, i: 'snippets', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 13, x: 0, y: 46, i: 'notes', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 12, x: 0, y: 22, i: 'npm-stats', minW: 3, minH: 12, moved: false, static: false },
        { w: 4, h: 22, x: 0, y: 0, i: 'markdown', minW: 3, minH: 12, moved: false, static: false },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'welcome' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'news' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'github' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'weather' },
        { minW: 3, minH: 12, static: false, moved: false, x: 0, y: 0, h: 12, w: 4, i: 'stateful-marquee-widget' }
      ]
    },
    widgets: {
      news: false,
      github: false,
      todo: true,
      weather: false,
      notes: true,
      markdown: true,
      welcome: false,
      snippets: true,
      projects: true,
      'npm-stats': true,
      runme: false
    },
    icon: {
      id: 'rocket',
      name: 'Rocket',
      short_names: [
        'rocket'
      ],
      colons: ':rocket:',
      emoticons: [],
      unified: '1f680',
      skin: null
    } as any
  }
}
