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
                <div className="procedur__list logo">
                <h1>Список процедур</h1>
                    <img src={Logo_white} alt="white logo just for you" />                    
                </div>                
                <form>
                <select className="procedur__list procedur epilation">
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
                <select className="procedur__list procedur epilation">
                    <option selected="selected">Эпиляция(Выбрать комплекс зон)</option>
                    <option className="epilation__option">Подмышечные впадины + глубокое бикини</option>
                    <option className="epilation__option">Подмышечные впадины + классическое бикини</option>
                    <option className="epilation__option"> Подмышечные впадины + классическое бикини + ноги полностью</option>
                    <option className="epilation__option">Голени + глубокое бикини + подмышечные впадины</option>
                    <option className="epilation__option">Верхняя губа + Подмышечные впадины + белая линия живота + глубокое бикини + голени с коленями</option>
                    <option className="epilation__option">Всё тело:(Верхняя губа + подмышечные впадины + белая линия живота + глубокое бикини + ноги полностью)</option>
                </select>
                <div className="procedur__list procedur carbon">Карбоновый пилинг</div>
                <div className="procedur__list procedur delete">Удаление татуировок
                    <input type="procedur__list number"/>
                    <div className="procedur size">см<sup>2</sup></div>
                </div>
                <div className="procedur__list procedur consult">Консультация с мастером</div>
                <div className="procedur__list procedur result">Итого:    рублей</div>                
                </form>  
                <button className="procedur__list button"type="submit">
                    <p>Выбрать дату и время</p>
                    <img src={Arrow}/>
                   </button>              
            </div>
        </div>
    </div>
    )    
  }  
}