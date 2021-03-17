import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Menu from "../Menu/menu";
import Header from "../Header/header";
import Column from "../Column/column";
import "./calendar.css";
import * as dayjs  from "dayjs";
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import Connect from "react-redux";
dayjs.extend(localizedFormat);
dayjs.locale('ru');
let today = dayjs();

export default class Calendar extends Component {
  state = {

  }
  render () {
    return (
    <div className="calendar-page">      
          <Menu />
      <div className="calendar">
          <Header />
          <div className="columns">
          <Column title="Понедельник" date={today.day(1).format('DD.MM.YYYY')}/>
          <Column title="Вторник" date={today.day(2).format('DD.MM.YYYY')}/>
          <Column title="Среда" date={today.day(3).format('DD.MM.YYYY')}/>
          <Column title="Четверг" date={today.day(4).format('DD.MM.YYYY')}/>
          <Column title="Пятница" date={today.day(5).format('DD.MM.YYYY')}/>
          <Column title="Суббота" date={today.day(6).format('DD.MM.YYYY')}/>
          <Column title="Воскресенье" date={today.day(7).format('DD.MM.YYYY')}/>
          </div>
      </div>      
    </div>
    )    
  }  
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
const updatedDates = functionFromConnect(dates);
export default updatedDates;