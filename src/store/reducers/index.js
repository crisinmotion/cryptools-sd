import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import reducers, { blacklist, whitelist } from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  blacklist,
  whitelist
};

const rootReducer = combineReducers(reducers);

export default persistReducer(persistConfig, rootReducer);
