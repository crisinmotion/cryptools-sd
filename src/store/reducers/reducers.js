import { SETTINGS_REDUCER } from './settings.reducers.js'
import { BOARDS_REDUCER } from './boards.reducers.js'

const reducers = {
	settings: SETTINGS_REDUCER,
	boards: BOARDS_REDUCER,
}

const whitelist = [ 'settings', 'boards']
const blacklist = [ ]

export { whitelist, blacklist }

export default reducers