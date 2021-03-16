import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./authorization.css";
import {Link} from 'react-router-dom';
import Logo_pink from "../images/Logo_pink.png";


export default class Authorization extends Component {
    state = {
        valueName: '',
        valueSurName: '',
        valuePass: '',
        isValidsurname: false,
        isValidName: false,
        isValidPass: false
    }
    
    nameHandler =(event) => {        
        this.setState({valueName: event.target.value, isValidName: true})
    };
    surNameHandler = (event) => {
        this.setState({valueSurName: event.target.value, isValidsurname: true})
    };
    passHandler = (event) => {
        this.setState({valuePass: event.target.value, isValidPass: true})
    };    
    render () {
      const {valueName, valuePass, isValidName, isValidPass, valueSurName, isValidsurname} = this.state;
    return (
    <div className="authorization">
        <div className="authorization-page">
            <div className="logo">
                <h1 className="logo__text">Авторизация</h1>
                <img className="logo__image"src={Logo_pink} alt="Pink logo just for you"/>
            </div>
            <form className="authorization-form">
                <h2 className="authorization-form__text">Имя</h2>
                <input
                    className="authorization-form__input"
                    minLength="3"
                    maxLength="30"
                    pattern="[а-яА-ЯёЁ]+"  
                    placeholder="Введите имя"
                    required
                    name="name"
                    value={valueName} 
                    onChange={this.nameHandler}
                    type="text"/>
                <h2 className="authorization-form__text">Фамилия</h2>
                <input className="authorization-form__input"
                    minLength="2"
                    maxLength="30"
                    pattern="[а-яА-ЯёЁ]+"  
                    placeholder="Введите фамилию"
                    required
                    name="name"
                    value={valueSurName} 
                    onChange={this.surNameHandler}
                    type="text"/>
                <p className={isValidName ? "hint-name" : "invisible"}>*Имя и фамилия должны быть указаны на русском языке</p>                
                <h2 className="authorization-form__text">Пароль</h2>
                <div className="password">
                <input className="authorization-form__input"
                    minLength="8"
                    maxLength="10"
                    required
                    placeholder="Длина пароля не менее 8 символов"
                    name="password"
                    value={valuePass} 
                    onChange={this.passHandler}
                    type="password"/>
                    <p className="authorization-form__forgot__pass">Забыли пароль?</p>
                </div>             
                <p className={isValidPass ? "hint-pass" : "invisible"}>*Придумайте более сложный пароль</p>                
                <button
                    disabled={!(isValidName && isValidPass && isValidsurname)}
                    className="authorization-form__button"
                    type="submit">
                    <Link to="/procedur-list" style={{ textDecoration: 'none'}}>Войти</Link>                       
                </button>
            </form>
            <footer className="footer">
                <p className="footer__text">Ещё нет аккаунта?</p>
                <p className="footer__link"><Link to="/registration" style={{ textDecoration: 'underline'}}>Зарегистрируйтесь</Link></p>
            </footer>
        </div>      
    </div>
    )    
  }  
}