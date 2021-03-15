import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Route } from 'react-router-dom';
import Authorization from "./Authorization/authorization";
import Registration from "./Registration/registration";
import ProcedurList from "./Procedur-list/procedur-list";
import Calendar from "./Calendar/calendar"; 
import Price from "./Price/price";
// import Gallery from "./Gallery/gallery";
// import Infomaster from "./Info-master/info-master";
// import Infoprocedurs from "./Info-procedurs/info-procedurs";
import Contacts from "./Contacts/contacts";
import "./index.css";

export default class App extends Component {
  render () {
    return (
    <div className="app">
        <Route path="/authorization" exact component={Authorization}/>     
        <Route path="/registration" exact component={Registration}/>
        <Route path="/procedurlist" exact component={ProcedurList}/>
        <Route path="/calendar" exact component={Calendar}/>
        <Route path="/price" exact component={Price}/> 
        {/* <Route path="/gallery" exact component={Gallery}/>  */}
        {/* <Route path="/info-master" exact component={Infomaster}/> */}
        {/* <Route path="/info-procedurs" exact component={Infoprocedurs}/> */}
        <Route path="/contacts" exact component={Contacts}/>     
    </div>
    )    
  }  
}


