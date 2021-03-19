import reducer from './reducer';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";  


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;