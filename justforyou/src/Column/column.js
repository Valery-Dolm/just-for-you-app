import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./column.css";


export default class Column extends Component {
  state = {
    isClicked:false
  }
  itemClickHandler = () => {
    this.setState({isClicked: true})
  }
  render () {
    const {isClicked} = this.state;
    return (
    <div className="column">
        <div className="column__day">
        <h3 className="column__day__name">{this.props.title}</h3>
        <h4 className="column__day__date">{this.props.date}</h4>
    </div>
    <div className="column__schedule">
        <ul className="column__schedule__list">
            <li onClick={this.itemClickHandler}
             className={this.state.isClicked ? "column__schedule__item" : "column__schedule__item__dark"}>10:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">11:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">12:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">13:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">14:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">15:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">16:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">17:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">18:00</li>
            <li onClick={this.itemClickHandler} className="column__schedule__item">19:00</li>
        </ul>
    </div>     
    </div>
    )    
  }  
}