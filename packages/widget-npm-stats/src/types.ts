import type { ContextProperties } from '@vscode-marquee/utils'

export type StatResponse = {
  [packageName: string]: Record<string, number>
}

export interface State {
  stats: StatResponse
  isLoading: boolean
  error?: Error | null
}
export interface Configuration {
  packageNames: string[]
}

export interface Context extends ContextProperties<Configuration & State> {}
