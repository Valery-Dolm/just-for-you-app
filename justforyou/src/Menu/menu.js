import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./menu.css";
import {Link} from 'react-router-dom';


export default class Menu extends Component {
  clickCalendarHandler = () => {
    window.location = '/calendar';
  };
  clickPriceHandler = () => {
    window.location = '/price';
  };
  clickInfoMasterHandler = () => {
    window.location = '/info-master';
  };
  clickInfoProcedursHandler = () => {
    window.location = '/info-procedurs';
  };
  clickGalleryHandler = () => {
    window.location = '/gallery';
  };
  clickContactsHandler = () => {
    window.location = '/contacts';
  };
  logOutHandler = () => {
    window.location = '/authorization';
  };
  render () {
    return (
    <div className="menu-page">
        <h1 className="menu-page__menu">Меню</h1>
        <ul className="menu-page__list">
            <li onClick={this.clickCalendarHandler}className="item">Календарь</li>
            <li onClick={this.clickPriceHandler} className="item">Прайс</li>
            <li onClick={this.clickInfoMasterHandler} className="item">Информация о мастере</li>
            <li onClick={this.clickInfoProcedursHandler} className="item">Информация о процедурах</li>
            <li onClick={this.clickGalleryHandler} className="item">Галерея</li>
            <li onClick={this.clickContactsHandler} className="item">Контакты</li>
        </ul> 
        <button onClick={this.logOutHandler} className="logOut">Выйти</button>   
    </div>
    )    
  }  
}