import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import Authorization from "./Authorization/authorization";
// import Registration from "./Registration/registration";
import ProcedurList from "./Procedur-list/procedur-list";
// import Calendar from "./Calendar/calendar";
// import Header from "./Header/header";
import "./index.css";

export default class App extends Component {
  render () {
    return (
    <div className="app">
      {/* <Authorization /> */}
      {/* <Registration />  */}
      <ProcedurList />
      {/* <Calendar /> */}
      {/* <Header /> */}
    </div>
    )    
  }  
}


