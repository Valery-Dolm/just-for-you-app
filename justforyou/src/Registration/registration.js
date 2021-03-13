import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./registration.css";
import Logo_pink from "../images/Logo_pink.png";


export default class Registration extends Component {
  render () {
    return (
    <div className="registration">
        <div className="registration-page">
            <div className="logo">
                <h1>Регистрация</h1>
                <img src={Logo_pink} alt="Pink logo just for you"/>
            </div>
            <form className="registration-form">
                <h2>Имя</h2>
                <input name="FIO" type="text"/>
                <h2>Номер телефона</h2>
                <input name="phoneNumber" type="number"/>
                <h2>E-mail </h2>
                <input name="email" type="email"/>
                <h2>Пароль</h2>
                <input name="password" type="text"/>
                <button type="submit">Зарегистрироваться и войти</button>
            </form>
        </div>      
    </div>
    )    
  }  
}