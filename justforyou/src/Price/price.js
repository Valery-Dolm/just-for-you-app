import React, { Component } from 'react';
import Menu from "../Menu/menu";
import "./price.css";
import { Link } from "react-router-dom"
import Logo_white from "../images/Logo_white.png";

export default class Price extends Component {
  render () {
    return (
    <div className="price-page">      
        <Menu />           
        <div className="price__part"> 
        <div className="price__logo">
              <img className="price__logo__image"src={Logo_white} alt="white logo just for you" />                    
            </div> 
                <h1 className="price__title">Прайс</h1>
                  <p className="price__name-carbon"><b>Карбоновый пилинг:</b> 1500 рублей</p>
                  <p className="price__name-remove"><b>Удаление татуировок:</b> 500 рублей/1 см<sup>2</sup></p>                
                  <p className="price__name-consult"><b>Консультация с мастером:</b> бесплатно</p>
                  <div className="price__epilation">
                      <ul className="price__epilation__onezone">
                          <h3 className="price__epilation__title">Эпиляция (1 зона)</h3>
                            <li className="price__name"><b>Подмышечные впадины:</b> 800 рублей</li>
                            <li className="price__name"><b>Бикини глубокое:</b> 1550 рублей</li>
                            <li className="price__name"><b>Бикини классическое:</b> 800 рублей</li>
                            <li className="price__name"><b>Ноги полностью:</b> 2300 рублей</li>
                            <li className="price__name"><b>Голени + колени:</b> 1650 рублей</li>
                            <li className="price__name"><b>Руки до локтя:</b> 1000 рублей</li>
                            <li className="price__name"><b>Руки полностью:</b> 1500 рублей</li>
                            <li className="price__name"><b>Ареолы:</b> 550 рублей</li>
                            <li className="price__name"><b>Белая линия живота:</b> 650 рублей</li>
                            <li className="price__name"><b>Лицо/1 зона:</b> 450 рублей</li>
                      </ul> 
                      <ul className="price__epilation__complex">
                          <h3 className="price__epilation__title">Эпиляция (комплексы зон)</h3>
                            <li className="price__name"><b>Подмышечные впадины + глубокое бикини:</b> 1300 рублей</li>
                            <li className="price__name"><b>Подмышечные впадины + классическое бикини:</b> 1000 рублей</li>
                            <li className="price__name"><b>Подмышечные впадины + классическое бикини + голени:</b> 2100 рублей</li>
                            <li className="price__name"><b>Голени + глубокое бикини + подмышечные впадины:</b> 2800 рублей</li>
                            <li className="price__name"><b>Верхняя губа + Подмышечные впадины + белая линия живота + глубокое бикини + голени с коленями:</b> 3100 рублей</li>
                            <li className="price__name"><b>Всё тело:(Верхняя губа + подмышечные впадины + белая линия живота + глубокое бикини + ноги полностью):</b> 3500 рублей</li>             
                      </ul>
                  </div>                                  
        </div>              
    </div>    
    )    
  }  
}