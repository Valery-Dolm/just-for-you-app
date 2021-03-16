import React, { Component } from 'react';
import "./column-item.css";


export default class ColumnItem extends Component {
    state = {
        isClicked: false
    }
    itemClickHandler = () => {
        this.setState({isClicked: true})
    }
  render () {
      const {isClicked} = this.state;
    return (    
        <li onClick={this.itemClickHandler} className={isClicked ? "column__schedule__item__dark" : "column__schedule__item"}>{this.props.time}</li>     
    )    
  }  
}

