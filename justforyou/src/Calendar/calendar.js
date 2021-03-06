import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Menu from "../Menu/menu";
import Header from "../Header/header";
import Column from "../Column/column";
import "./calendar.css";
import {connect} from "react-redux";

class Calendar extends Component {  
  render () {
    const {today} = this.props;
    return (
    <div className="calendar-page">      
          <Menu />
      <div className="calendar">
          <Header />
          <div className="columns">
          <Column weekDay="timesMon" title="Понедельник" date={today.day(1).format('DD.MM.YYYY')}/>
          <Column weekDay="timesTue" title="Вторник" date={today.day(2).format('DD.MM.YYYY')}/>
          <Column weekDay="timesWed" title="Среда" date={today.day(3).format('DD.MM.YYYY')}/>
          <Column weekDay="timesThur" title="Четверг" date={today.day(4).format('DD.MM.YYYY')}/>
          <Column weekDay="timesFri" title="Пятница" date={today.day(5).format('DD.MM.YYYY')}/>
          <Column weekDay="timesSat" title="Суббота" date={today.day(6).format('DD.MM.YYYY')}/>
          <Column weekDay="timesSun" title="Воскресенье" date={today.day(7).format('DD.MM.YYYY')}/>
          </div>
      </div>      
    </div>
    )    
  }  
}

const mapStateToProps = (state) => ({
  today: state.today
})

const connectFunction = connect(mapStateToProps);
const ConnectedDates = connectFunction(Calendar);

export default ConnectedDates;

