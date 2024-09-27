import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootsaga from '../sagas/RootSaga';

const sagamiddleware = createSagaMiddleware();

const store = createStore(RootReducer, {}, applyMiddleware(sagamiddleware));

sagamiddleware.run(rootsaga);

export default store;
