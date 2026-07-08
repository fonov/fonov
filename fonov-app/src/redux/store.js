import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers/index'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'


const history = createHistory();

const route_middleware = routerMiddleware(history);


const middlewares = [ReduxThunk, route_middleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const reduxStore = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
);

export {
    reduxStore as store,
    history
}