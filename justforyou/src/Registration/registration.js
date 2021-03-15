import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./registration.css";
import Logo_pink from "../images/Logo_pink.png";


export default class Registration extends Component {
  render () {
    return (
    <div className="registration">
        <div className="registration-page">
            <div className="registration-logo">
                <h1 className="registration-logo__text">Регистрация</h1>
                <img className="registration-logo__image"src={Logo_pink} alt="Pink logo just for you"/>
            </div>
            <form className="registration-form">
                <h2 className="registration-form__text">Имя</h2>
                <input className="registration-form__input" name="FIO" type="text"/>
                <h2 className="registration-form__text">Номер телефона</h2>
                <input className="registration-form__input" name="phoneNumber" type="number"/>
                <h2 className="registration-form__text">E-mail </h2>
                <input className="registration-form__input" name="email" type="email"/>
                <h2 className="registration-form__text">Пароль</h2>
                <input className="registration-form__input" name="password" type="password"/>
                <button className="registration-form__button"type="submit">Зарегистрироваться и войти</button>
            </form>
        </div>      
    </div>
    )    
  }  
}