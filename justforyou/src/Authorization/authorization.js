import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./authorization.css";
import {Link} from 'react-router-dom';



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
    submitHandler =(event) => {
        event.preventDefault();
        this.props.history.push("/procedur-list");
    };   
    render () {
      const {valueName, valuePass, isValidName, isValidPass, valueSurName, isValidsurname} = this.state;
    return (
    <div className="authorization">
        <div className="authorization-page">           
                <h1 className="header__text">Авторизация</h1>        
            <form 
            onSubmit={this.submitHandler}
            disabled={!(isValidName && isValidPass && isValidsurname)}
            className="authorization-form">
                <h2 className="authorization-form__text">Имя*</h2>
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
                <h2 className="authorization-form__text">Фамилия*</h2>
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
                 <p className="hint">*Имя и фамилия должны быть указаны на русском языке</p>
                <h2 className="authorization-form__text">Пароль*</h2>
                <div className="password">
                <input className="authorization-form__input"
                    minLength="8"
                    maxLength="10"
                    required
                    placeholder="Введите ваш пароль"
                    name="password"
                    value={valuePass} 
                    onChange={this.passHandler}
                    type="password"/>
                </div>             
                <p className="hint">*Все поля обязательны для заполнения</p>
                <button                    
                    disabled={!(isValidName && isValidPass && isValidsurname)}
                    className="authorization-form__button"
                    type="submit">
                    Войти                       
                </button>
            </form>
            
        </div>
        <footer className="footer">
                <p className="footer__text">Ещё нет аккаунта?</p>
                <p className="footer__link"><Link to="/registration" style={{ textDecoration: 'underline'}}>Зарегистрируйтесь</Link></p>
            </footer>      
    </div>
    )    
  }  
}