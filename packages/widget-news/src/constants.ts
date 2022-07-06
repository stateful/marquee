import { State, Configuration } from './types'

export const FETCH_DATA_TIMEOUT = 10000
export const DEFAULT_STATE: State = {
  news: [],
  isFetching: true,
  channel: 'Newest'
}
export const DEFAULT_CONFIGURATION: Configuration = {
  feeds: {}
}
