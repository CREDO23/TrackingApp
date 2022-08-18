/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Admin/Fonts/icofont/icofont.min.css'
import App from './App';
import rootReducer from './redux/reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
