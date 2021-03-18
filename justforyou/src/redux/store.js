import reducer from './reducer';
import {reactReduxFirebase} from 'react-redux-firebase';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import reduxThunk from "redux-thunk";
import authReducer from "./auth";
import firebase from '../firebase';
import {firebaseReducer} from 'react-redux-firebase';
const reducers = combineReducers({
    firebaseReducer,
    reducer,
    authReducer
  });
  

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
    createStore
);
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStoreWithFirebase(
    reducers,
    {},
    applyMiddleware(reduxThunk)
  );


export default store;