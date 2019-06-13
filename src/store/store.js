import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/rootReducers';

const configureStore = () => createStore(rootReducers, applyMiddleware(thunk));

export default configureStore;
