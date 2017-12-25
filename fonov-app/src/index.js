import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers/index'


let store = createStore(Reducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
