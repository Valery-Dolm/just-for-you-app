import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Menu from "../Menu/menu";
import Header from "../Header/header";
import Column from "../Column/column";
import "./calendar.css";

export default class Calendar extends Component {
  render () {
    return (
    <div className="calendar-page">      
          <Menu />
      <div className="calendar">
          <Header />
          <div className="columns">
          <Column title="Понедельник" date="15 марта 2021 года"/>
          <Column title="Вторник" date="16 марта 2021 года"/>
          <Column title="Среда" date="17 марта 2021 года"/>
          <Column title="Четверг" date="18 марта 2021 года"/>
          <Column title="Пятница" date="19 марта 2021 года"/>
          <Column title="Суббота" date="20 марта 2021 года"/>
          <Column title="Воскресенье" date="21 марта 2021 года"/>
          </div>
      </div>      
    </div>
    )    
  }  
}