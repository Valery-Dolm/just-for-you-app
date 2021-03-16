import React, { Component } from 'react';
import "./column.css";
import ColumnItem from "../column-item/column-item";


const timelapse = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]

export default class Column extends Component {
  render () {
    return (
    <div className="column">
        <div className="column__day">
        <h3 className="column__day__name">{this.props.title}</h3>
        <h4 className="column__day__date">{this.props.date}</h4>
    </div>
    <div className="column__schedule">
        <ul className="column__schedule__list">
           {timelapse.map((time, i) => {
             return <ColumnItem time={time} key={i} />
           })} 
        </ul>
    </div>     
    </div>
    )    
  }  
}
