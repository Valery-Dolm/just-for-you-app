import React, { Component } from 'react';
import "./procedur-list.css";
import Arrow from "../images/Arrow_1.png";
import {Link} from 'react-router-dom';
import Menu from "../Menu/menu";

const prices = {
    "epil": 0,
    "epil-armpits": 800,
    "epil-deep-bikini": 1550,
    "epil-classic-bikini":900,
    "epil-legs":2300,
    "epil-shins-knees":1650,
    "epil-half-arms":1000,
    "epil-completely-hands":1500,
    "epil-areolas":550,
    "epil-abdomen":650,
    "epil-face":450,
    "complex": 0,
    "complex1": 1300,
    "complex2":1000,
    "complex3":2100,
    "complex4":2800,
    "complex5":3100,
    "complex6":3500,
    "carbon": 1500,
    "consult": 0,
    "remTatto":50
}


export default class ProcedurList extends Component {
    state = {
        OneZoneSelected: '',
        ComplexSelected:'',
        isCarbon: false,
        remTattoValue: '',
        isConsult:false,
        resultOneZone: 0,
        resultComplex: 0,
        resultCarbon: 0,
        resultRemoveTattoo:0,
        resultConsult: 0,
        generalResult: 0
    }
    carbonHandler = (event) => {
        this.setState({isCarbon:event.target.checked}, this.checkSumCarbon)
    };
    consultHandler = (event) => {
        this.setState({isConsult:event.target.checked}, this.checkSumConsult)
    };
    remTattooHandler = (event) => {       
        this.setState({remTattoValue: event.target.value}, this.checkSumRemove)
    };   
    oneZoneHandler =(event) => {
        this.setState({OneZoneSelected: event.target.value}, this.checkSumOnezone)
    };
    complexHandler = (event) => {        
        this.setState({ComplexSelected: event.target.value}, this.checkSumComplex)
    };       
       
    checkSumOnezone =(event)=> { 
        let sumOneZone = 0;
        if(this.state.OneZoneSelected !== "epil") {
            if(this.state.OneZoneSelected === "epil-armpits") {
                sumOneZone = prices["epil-armpits"];
            } if(this.state.OneZoneSelected === "epil-deep-bikini") {
                sumOneZone = prices["epil-deep-bikini"];
            } if(this.state.OneZoneSelected === "epil-classic-bikini") {
                sumOneZone = prices["epil-classic-bikini"];
            } if(this.state.OneZoneSelected === "epil-legs") {
                sumOneZone = prices["epil-legs"];
            } if(this.state.OneZoneSelected === "epil-shins-knees") {
                sumOneZone = prices["epil-shins-knees"];
            } if(this.state.OneZoneSelected === "epil-half-arms") {
                sumOneZone = prices["epil-half-arms"]; 
            } if (this.state.OneZoneSelected === "epil-completely-hands") {
                sumOneZone = prices["epil-completely-hands"];
            } if (this.state.OneZoneSelected === "epil-areolas") {
                sumOneZone = prices["epil-areolas"]; 
            } if(this.state.OneZoneSelected === "epil-abdomen") {
                sumOneZone = prices["epil-abdomen"];  
            } if(this.state.OneZoneSelected === "epil-face") {
                sumOneZone = prices["epil-face"];  
            }
        } 
        this.setState({resultOneZone: sumOneZone}, this.checkGeneralResult) 
    };
    checkSumComplex = () => {
        let sumComplex = 0;
        if(this.state.ComplexSelected !== "complex") {
            if(this.state.ComplexSelected === "complex1") {
                sumComplex = prices["complex1"];
            } if(this.state.ComplexSelected === "complex2") {
                sumComplex = prices["complex2"];
            } if(this.state.ComplexSelected === "complex3") {
                sumComplex = prices["complex3"];
            } if(this.state.ComplexSelected === "complex4") {
                sumComplex = prices["complex4"];
            } if(this.state.ComplexSelected === "complex5") {
                sumComplex = prices["complex5"];
            } if(this.state.ComplexSelected === "complex6") {
                sumComplex = prices["complex5"];
            }
        }
        this.setState({resultComplex: sumComplex}, this.checkGeneralResult)
    };
    checkSumCarbon = () => {
        let sumCarbon = 0;
        if(this.state.isCarbon === true) {
            sumCarbon = prices["carbon"]
        } else {
            sumCarbon = 0;
        }
        this.setState({resultCarbon: sumCarbon}, this.checkGeneralResult)
    };
    checkSumRemove = () => {
        let sumRemove = 0;
        if(this.state.remTattoValue <= 0) {
            alert('Площадь татуировки должна быть больше нуля')
        } else {
            sumRemove = prices["remTatto"] * this.state.remTattoValue;
        }
        this.setState({resultRemoveTattoo: sumRemove}, this.checkGeneralResult)
    };
    checkSumConsult = () => {
        let sumConsult = 0;
        this.setState({resultConsult: sumConsult}, this.checkGeneralResult)
    };
    checkGeneralResult = () => {
        let general = this.state.resultOneZone + this.state.resultComplex + this.state.resultCarbon + this.state.resultRemoveTattoo + this.state.resultConsult;
        this.setState({generalResult: general})
    };
  render () {
      const {OneZoneSelected, ComplexSelected, isCarbon, remTattoValue, isConsult, generalResult} = this.state;
    return (
    <div className="procedur__list">
        <Menu />
        <div className="procedur__list-page">
        <h1 className="procedur__list__header__text">Список процедур</h1>                                    
                <form 
                className="procedur__list__procedur__epilation__form">
                <select className="procedur__list__procedur__epilation"
                onChange={this.oneZoneHandler}>
                    <option value="epil"selected>Эпиляция(Выбрать одну зону)</option>
                    <option value="epil-armpits"className="epilation__option">Подмышечные впадины</option>
                    <option value="epil-deep-bikini" className="epilation__option">Бикини глубокое</option>
                    <option value="epil-classic-bikini" className="epilation__option">Бикини классическое</option>
                    <option value="epil-legs" className="epilation__option">Ноги полностью</option>
                    <option value="epil-shins-knees" className="epilation__option">Голени + колени</option>
                    <option value="epil-half-arms" className="epilation__option">Руки до локтя</option>
                    <option value="epil-completely-hands" className="epilation__option">Руки полностью</option>
                    <option value="epil-areolas" className="epilation__option">Ареолы</option>
                    <option value="epil-abdomen" className="epilation__option">Белая линия живота</option>
                    <option value="epil-face" className="epilation__option">Лицо/1 зона</option>
                </select>
                <select className="procedur__list__procedur__epilation"
                onChange={this.complexHandler}>
                    <option value="complex" selected>Эпиляция(Выбрать комплекс зон)</option>
                    <option value="complex1" className="epilation__option">1.Подмышечные впадины + глубокое бикини</option>
                    <option value="complex2" className="epilation__option">2.Подмышечные впадины + классическое бикини</option>
                    <option value="complex3" className="epilation__option">3.Подмышечные впадины + классическое бикини + голени</option>
                    <option value="complex4" className="epilation__option">4.Голени + глубокое бикини + подмышечные впадины</option>
                    <option value="complex5" className="epilation__option">5.Верхняя губа + Подмышечные впадины + белая линия живота + глубокое бикини + голени с коленями</option>
                    <option value="complex6" className="epilation__option">6.Всё тело:(Верхняя губа + подмышечные впадины + белая линия живота + глубокое бикини + ноги полностью)</option>
                </select>
                <label className="procedur__list__procedur__epilation">
                    Карбоновый пилинг
                    <input className="checkbox"
                    onChange={this.carbonHandler}
                        type="checkbox"
                        checked={isCarbon}/>
                </label>
                <div className="procedur__list__procedur__epilation__delete">Удаление татуировок
                    <input
                        onChange={this.remTattooHandler}
                        name="removeTattoo"
                        value={remTattoValue}
                        className="procedur__list__input"
                        type="text"/>
                    <div className="procedur__size">см<sup>2</sup></div>
                </div>
                <label className="procedur__list__procedur__epilation">
                Консультация с мастером
                    <input
                        className="checkbox"
                        onChange={this.consultHandler}
                        type="checkbox"
                        checked={isConsult}/>
                </label>
                <div className="procedur__list__procedur__result">Итого:{' '}{generalResult}{' '}рублей</div>                
                </form>  
                <button 
                className="procedur__list__button"
                type="submit"
                disabled = {!(OneZoneSelected || ComplexSelected || isCarbon || isConsult || remTattoValue)}>
                    <Link to="/calendar" style={{ textDecoration: 'none'}}>
                    <p className="procedur__list__button__text">Выбрать дату и время</p>
                    <img className="procedur__list__button__image"src={Arrow}/>
                    </Link>
                </button> 
        </div>                
    </div>
    )    
  }  
}