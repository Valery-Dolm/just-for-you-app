import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actions";
import firebase from "../firebase";
import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS, SIGNOUT_ERROR} from "./actions";



// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification();
        });
      })
      .then(dataAfterEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user.emailVerified) {
            // Email is verified
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
            });
          } else {
            // Email is not verified
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Something went wrong, we couldn't create your account. Please try again."
            });
          }
        });
      })
      .catch(function(error) {
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Something went wrong, we couldn't create your account. Please try again."
        });
      });
  } catch (err) {
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again."
    });
  }
};




// Signing in with Firebase
export const signin = (email, password, callback) => async dispatch => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGNIN_SUCCESS });
        callback();
      })
      .catch(() => {
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Invalid login credentials"
        });
      });
  } catch (err) {
    dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
  }
};


export const signout = () => async dispatch => {
    try {
      firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch({ 
          type: SIGNOUT_ERROR, 
          payload: "...some error message for the user..."
        });
      });
    } catch (err) {
      dispatch({ 
        type: SIGNOUT_ERROR, 
        payload: "...some error message for the user..."
      });
    }
  };

  const INITIAL_STATE = {
    authMsg: ""
  };
  
  export default function(state = INITIAL_STATE, action) {
    if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
      return { ...state, authMsg: "" };
    } else if (
      action.type === SIGNUP_SUCCESS ||
      action.type === SIGNUP_ERROR ||
      action.type === SIGNIN_ERROR ||    
      action.type === SIGNOUT_ERROR       
    ) {
      return { ...state, authMsg: action.payload };
    } else {
      return state;
    }
  }