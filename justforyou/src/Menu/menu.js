import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./menu.css";


export default class Menu extends Component {
  render () {
    return (
    <div className="menu-page">
        <h1 className="menu-page__menu">Меню</h1>
        <ul className="menu-page__list">
            <li className="item">Календарь</li>
            <li className="item">Прайс</li>
            <li className="item">Информация о мастере</li>
            <li className="item">Информация о процедурах</li>
            <li className="item">Галерея</li>
            <li className="item">Контакты</li>
        </ul>      
    </div>
    )    
  }  
}