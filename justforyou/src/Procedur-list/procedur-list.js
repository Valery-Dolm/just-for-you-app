import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./procedur-list.css";
import Logo_white from "../images/Logo_white.png";
import Arrow from "../images/Arrow_1.png";


export default class ProcedurList extends Component {
  render () {
    return (
    <div className="procedur__list">
        <div className="procedur__list pink-background">
            <div className="procedur__list white-background">
                <div className="procedur__list__logo">
                <h1 className="procedur__list__logo__text">Список процедур</h1>
                    <img className="procedur__list__logo__image"src={Logo_white} alt="white logo just for you" />                    
                </div>                
                <form className="procedur__list__procedur__epilation__form">
                <select className="procedur__list__procedur__epilation">
                    <option selected="selected">Эпиляция(Выбрать одну зону)</option>
                    <option className="epilation__option">Подмышечные впадины</option>
                    <option className="epilation__option">Бикини глубокое</option>
                    <option className="epilation__option">Бикини классическое</option>
                    <option className="epilation__option">Ноги полностью</option>
                    <option className="epilation__option">Голени + колени</option>
                    <option className="epilation__option">Руки до локтя</option>
                    <option className="epilation__option">Руки полностью</option>
                    <option className="epilation__option">Ареолы</option>
                    <option className="epilation__option">Белая линия живота</option>
                    <option className="epilation__option">Лицо/1 зона</option>
                </select>
                <select className="procedur__list__procedur__epilation">
                    <option selected="selected">Эпиляция(Выбрать комплекс зон)</option>
                    <option className="epilation__option">Подмышечные впадины + глубокое бикини</option>
                    <option className="epilation__option">Подмышечные впадины + классическое бикини</option>
                    <option className="epilation__option"> Подмышечные впадины + классическое бикини + голени</option>
                    <option className="epilation__option">Голени + глубокое бикини + подмышечные впадины</option>
                    <option className="epilation__option">Верхняя губа + Подмышечные впадины + белая линия живота + глубокое бикини + голени с коленями</option>
                    <option className="epilation__option">Всё тело:(Верхняя губа + подмышечные впадины + белая линия живота + глубокое бикини + ноги полностью)</option>
                </select>
                <div className="procedur__list__procedur__epilation">Карбоновый пилинг</div>
                <div className="procedur__list__procedur__epilation__delete">Удаление татуировок
                    <input className="procedur__list__input" type="text"/>
                    <div className="procedur__size">см<sup>2</sup></div>
                </div>
                <div className="procedur__list__procedur__epilation">Консультация с мастером</div>
                <div className="procedur__list__procedur__result">Итого:    рублей</div>                
                </form>  
                <button className="procedur__list__button" type="submit">
                    <p className="procedur__list__button__text">Выбрать дату и время</p>
                    <img className="procedur__list__button__image"src={Arrow}/>
                   </button>              
            </div>
        </div>
    </div>
    )    
  }  
}