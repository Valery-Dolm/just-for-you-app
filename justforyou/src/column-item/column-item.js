import React, { Component } from 'react';
import {pickTimeByClient} from '../redux/actions';
import {connect} from "react-redux";
import "./column-item.css";

class ColumnItem extends Component {
  render () {
      const {pickTimeByClient, time} = this.props;
    return (    
        <li onClick={() => pickTimeByClient(time.id)} className={time.status === true? "column__schedule__item__dark" : "column__schedule__item"}>{time.time}</li>     
    )    
  }  
}

const mapStateToProps = (state, props) => ({
  time: state.times[props.index]
})

const mapDispatchToProps = {
  pickTimeByClient
}
 
const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const ConnectedDates = connectFunction(ColumnItem);

export default ConnectedDates;

