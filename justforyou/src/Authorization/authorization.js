import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./authorization.css";
import Logo_pink from "../images/Logo_pink.png";


export default class Authorization extends Component {
  render () {
    return (
    <div className="authorization">
        <div className="authorization-page">
            <div className="logo">
                <h1>Авторизация</h1>
                <img src={Logo_pink} alt="Pink logo just for you"/>
            </div>
            <form className="authorization-form">
                <h2>Имя</h2>
                <input name="FIO" type="text"/>
                <h2>Пароль</h2>
                <input name="password" type="text"/>
                <p>Забыли пароль?</p>
                <button type="submit">Войти</button>
            </form>
            <footer>
                <p>Ещё нет аккаунта?</p>
                <a href="#">Зарегистрируйтесь</a>
            </footer>
        </div>      
    </div>
    )    
  }  
}