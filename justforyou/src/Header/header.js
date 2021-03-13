import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./header.css";
import Arrow from "../images/Arrow_2.png";
import icon from "../images/akar-icons_calendar.png";

export default class Header extends Component {
  render () {
    return (
    <div className="header">
      <div className="header__high">
           <div className="this-week">
             <img className="this-week__icon" src={icon} alt="current week"/>
             <h4 className="this-week__icon__dates">15.03.2021-21.03.2021</h4>
             </div>
           <div className="legend">
             <h3 className="legend__legend">Условные обозначения:</h3>
             <div className="legend__time__time">
             <div className="legend__time">
                  <div className="rectangle__white">10:00</div>
                  <h6 className="legend__free-time">Время свободно для записи</h6>
             </div>
             <div className="legend__time">
                  <div className="rectangle__blue">10:00</div>
                  <h6 className="legend__busy-time__text">Данное время занято</h6>
             </div>
             </div>             
             </div> 
           <div className="client__name">
             <h3 className="client__name__name">Имя клиента</h3>
           </div>
      </div>  
      <div className="header__low">
            <h1 className="header__low__text">Календарь</h1>                   
             <button className="header__low__button">Следующая неделя
                <img src={Arrow} alt="arrow to next week"/>
            </button>
      </div>
    </div>
    )    
  }  
}