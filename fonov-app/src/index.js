import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import Store from './redux/store'


let store = Store();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
