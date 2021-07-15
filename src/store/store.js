import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from "./reducers";

const middleware = [thunk, logger];

export const store = createStore(reducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);

const STORE_OBJECT = { store, persistor }

export default STORE_OBJECT;