import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Authorization from "./Authorization/authorization";
import Registration from "./Registration/registration";
import ProcedurList from "./Procedur-list/procedur-list";
import Calendar from "./Calendar/calendar"; 
import Price from "./Price/price";
import Infoprocedurs from "./Info-procedurs/info-procedurs";
import Contacts from "./Contacts/contacts";
import "./index.css";
import {connect} from 'react-redux';

class App extends Component { 

  render () {
    console.log(this.props);
    return (
    <div className="app">
    {/* //     <Route path="/authorization" exact component={Authorization}/>     
    //     <Route path="/registration" exact component={Registration}/>
    //     <Route path="/procedur-list" exact component={ProcedurList}/>
    //     <Route path="/calendar" exact component={Calendar}/>
    //     <Route path="/price" exact component={Price}/>
    //     <Route path="/info-procedurs" exact component={Infoprocedurs}/> 
    //     <Route path="/contacts" exact component={Contacts}/>         */}
    </div>
    )    
  }  
}


function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(App);