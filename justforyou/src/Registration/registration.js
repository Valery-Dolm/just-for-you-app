import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./registration.css";

export default class Registration extends Component {
  state ={
    valueName: '',
    valueSurName: '',
    valueMail: '',
    valuePass1: '',
    valuePass2: '',
    isChecked: false,
    ////////////
    isValidName: false,
    isValidSurname: false,
    isValidMail: false,
    isValidpass1:false,
    isValidPass2:false
  }
  nameHandler =(event) => {
    this.setState({valueName: event.target.value, isValidName:true})
  };
  surnameHandler =(event) => {
    this.setState({valueSurName: event.target.value, isValidSurname:true})
  };
  mailHandler =(event) => {
    this.setState({valueMail: event.target.value, isValidMail:true})
  };
  pass1Handler =(event) => {
    this.setState({valuePass1: event.target.value, isValidpass1:true}) 
  };
  pass2Handler =(event) => {
    this.setState({valuePass2: event.target.value, isValidpass2:true}) 
  };
  checkHandler =(event) => {
    this.setState({isChecked: event.target.checked})
  };
  comparePassHandler = (event) => {
    event.preventDefault();
    if(this.state.valuePass1 !== this.state.valuePass2) {
        alert('Пароли не совпадают')
    } else {
      this.props.history.push("/procedur-list");      
    }
  } 
  render () {
    const {valueName, valueSurName, valuePhone, valueMail, valuePass1, valuePass2, isChecked} = this.state;
    return (
    <div className="registration">
        <div className="registration-page">
                <h1 className="registration-header__text">Регистрация</h1>            
            <form className="registration-form"
            onSubmit={this.comparePassHandler}>
                <h2 className="registration-form__text">Имя*</h2>
                <input
                    className="registration-form__input"
                    minLength="3"
                    maxLength="30"
                    pattern="[а-яА-ЯёЁ]+"  
                    placeholder="Введите имя"
                    required
                    value={valueName}
                    onChange={this.nameHandler}
                    name="name"
                    type="text"/>
                <h2 className="registration-form__text">Фамилия*</h2>
                <input
                    className="registration-form__input"
                    minLength="2"
                    maxLength="30"
                    pattern="[а-яА-ЯёЁ]+"
                    placeholder="Введите фамилию"
                    required 
                    value={valueSurName}
                    onChange={this.surnameHandler}
                    name="surname"
                    type="text"/>
                    <p className="regHint">*Имя и фамилия должны быть указаны на русском языке</p>
                <h2 className="registration-form__text">E-mail </h2>
                <input
                    className="registration-form__input"
                    name="email"
                    required
                    placeholder="Введите свою электронную почту"
                    onChange={this.mailHandler}
                    value={valueMail}
                    pattern='/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)'
                    type="email"/>
                <h2 className="registration-form__text">Пароль*</h2>
                <input
                    className="registration-form__input"
                    name="password"
                    required
                    onChange={this.pass1Handler}
                    placeholder="Введите пароль"
                    value={valuePass1}
                    minLength="8"
                    maxLength="10"
                    type="password"/>
                    <p className="regHint">*Пароль не менее 8 символов</p>
                <h2 className="registration-form__text">Введите пароль повторно*</h2>
                <input
                    className="registration-form__input"
                    name="password"
                    required
                    onChange={this.pass2Handler}
                    placeholder="Введите пароль"
                    value={valuePass2}
                    min="8"
                    max="10"
                    type="password"/>
                <div className="remember__me">
                <h3 className="registration-form__remember-me">Запомнить меня?</h3>
                <input
                    className="checkbox"
                    name="remember_me"
                    type="checkbox"
                    onChange={this.checkHandler}
                    checked={isChecked}/>
                </div> 
                <p className="regHint">*Данные поля обязательны для заполнения</p>
                <button
                onSubmit={this.comparePassHandler}
                    disabled={!(valueName && valueSurName && valueMail && valuePass1 && valuePass2)} 
                    className="registration-form__button"
                    type="submit">                    
                    Зарегистрироваться и войти                    
                    </button>
            </form>
        </div>      
    </div>
    )    
  }  
}