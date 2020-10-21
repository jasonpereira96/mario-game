import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

let store = createStore(rootReducer);

export default store;