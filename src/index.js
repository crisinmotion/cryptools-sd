import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


import App from "./App";
import { store, persistor } from "./store/store";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
		<PersistGate loading={'null'} persistor={persistor}>
			<Router history={ history }>
				<App />
			</Router>
		</PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
