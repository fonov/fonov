import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers/index'


const store = () => {
    if (process.env.NODE_ENV === 'development') {
        return createStore(
            Reducers,
            compose(
                applyMiddleware(logger),
                applyMiddleware(ReduxThunk)
            )
        );
    } else {
        return createStore(
            Reducers,
            compose(
                applyMiddleware(ReduxThunk)
            )
        );
    }
};

export default store