import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./authorization.css";
import {Link} from 'react-router-dom';
import Logo_pink from "../images/Logo_pink.png";


export default class Authorization extends Component {
    state = {
        value: '',
        isValid: false,
    }
    clickRegistrationHandler = () => {
        window.location = '/registration';
    };
    changeHandler =(event) => {
        this.setState({value: event.target.value, isValid: true})
    };
    passHandler = (event) => {
        this.setState({value: event.target.value, isValid: true})
    };    
  render () {
    //   const {value, isValid} = this.state;
    return (
    <div className="authorization">
        <div className="authorization-page">
            <div className="logo">
                <h1 className="logo__text">Авторизация</h1>
                <img className="logo__image"src={Logo_pink} alt="Pink logo just for you"/>
            </div>
            <form className="authorization-form">
                <h2 className="authorization-form__text">Имя</h2>
                <input className="authorization-form__input"
                    minLength="4"
                    maxLength="30"  
                    placeholder="Введите имя и фамилию через пробел"
                    required
                    name="name"
                    value={this.state.value} 
                    onChange={this.changeHandler}
                    type="text"/>
                <p className={this.state.isValid ? "hint-name" : "invisible"}>*Имя и фамилия должны быть указаны на русском языке</p>                
                <h2 className="authorization-form__text">Пароль</h2>
                <div className="password">
                <input className="authorization-form__input"
                    minLength="8"
                    maxLength="10"
                    required
                    placeholder="Длина пароля не менее 6 символов"
                    name="password"
                    // value={this.state.value} 
                    onChange={this.passHandler}
                    type="password"/>
                    <p className="authorization-form__forgot__pass">Забыли пароль?</p>
                </div>             
                <p className={this.state.isValid ? "hint-pass" : "invisible"}>*Придумайте более сложный пароль</p>                
                <button className="authorization-form__button" type="submit">Войти</button>
            </form>
            <footer className="footer">
                <p className="footer__text">Ещё нет аккаунта?</p>
                <button onClick={this.clickRegistrationHandler} className="footer__link">Зарегистрируйтесь</button>
            </footer>
        </div>      
    </div>
    )    
  }  
}