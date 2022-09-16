import {createStore,applyMiddleware} from 'redux'
// import RootReducer from './reducers/RootReducer';
import RootReducer from '../reducers/RootReducer'
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../saga/RootSaga';

 const sagaMiddleware = createSagaMiddleware();

export default Store=createStore(RootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga);
