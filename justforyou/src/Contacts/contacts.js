import React, { Component } from 'react';
import Menu from "../Menu/menu";
import "./contacts.css";
import Whatsapp from "../images/whatsapp.png";
import Instagram from "../images/instagram.png";
import Screen from "../images/insta-screen.jpg";
import AddressPicture from "../images/address-picture.jpg";
import Vika from "../images/vika.jpg";

export default class Contacts extends Component {
    render () {
      return (
      <div className="contacts">
        <Menu />
        <div className="contacts-part">
            <h1 className="contacts-title">Контакты</h1>
            <div className="contacts__info">                
                    <div className="socials">
                        <h2 className="contacts__info__socials">Социальные сети</h2>
                            <div className="contacts__info__instagram">
                                <img className="instagram_img" src={Instagram} alt="logotype of instagram"/>
                                <a target="_blank" href="https://instagram.com/j.for_you?igshid=560n1yiqjitp" className="instagram__info">J.for_you</a>
                            </div>                       
                                <img className="instagram__info__screen" src={Screen} alt="Screenshot from Instagram"/>
                    </div>
                    <div className="address">
                        <h2 className="contacts__info__address">Адрес</h2>
                        <p className="address-text">Приморский край, г.Владивосток, ул. Алеутская, д.88, 3 этаж, каб. № 1</p>
                        <p className="address-text"></p>
                        <p className="address-text"></p>
                        <img className="address-picture" src={AddressPicture} alt="photoe of this house"/>
                    </div> 
                    <div className="phone">
                        <h2 className="contacts__info__phonenumber">Телефон/WhatsApp</h2>
                        <div className="phone-whatsapp">
                            <img className="whatsapp"src={Whatsapp} alt="logotype of whatsapp"/>
                            <p className="whatsapp__number">+7 924 722-28-14</p>                                                       
                        </div> 
                        <p className="whatsapp__name">Виктория Павлова</p> 
                        <img className="whatsapp__master"src={Vika} alt="photoe of master" />                      
                    </div>            
            </div>
        </div>
      </div>
      )    
    }  
  }