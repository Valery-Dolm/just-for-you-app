import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./menu.css";
import {Link} from 'react-router-dom';


export default class Menu extends Component {
  // clickCalendarHandler = () => {
  //   window.location = '/calendar';
  // };
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
            <li className="item"><Link to="/calendar">Календарь</Link></li>
            <li className="item"><Link to="/price">Прайс</Link></li>
            <li className="item"><Link to="/info-master">Информация о мастере</Link></li>
            <li className="item"><Link to="/info-procedurs">Информация о процедурах</Link></li>
            <li className="item"><Link to="/gallery">Галерея</Link></li>
            <li className="item"><Link to="/contacts" style={{ textDecoration: 'none'}}>Контакты</Link></li>
        </ul> 
        <button onClick={this.logOutHandler} className="logOut"><Link to="/authorization">Выйти</Link></button>   
    </div>
    )    
  }  
}