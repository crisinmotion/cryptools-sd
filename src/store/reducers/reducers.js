import { SETTINGS_REDUCER } from './settings.reducers.js'

const reducers = {
	settings: SETTINGS_REDUCER,
}

const whitelist = [ 'settings' ]
const blacklist = [ ]

export { whitelist, blacklist }

export default reducers