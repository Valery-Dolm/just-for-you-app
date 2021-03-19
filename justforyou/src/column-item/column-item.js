import React, { Component } from 'react';
import {pickTimeByClient} from '../redux/actions';
import {connect} from "react-redux";
import "./column-item.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import * as dayjs  from "dayjs";

import * as localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('ru');

class ColumnItem extends Component {
  handleClick = () => {
    const {pickTimeByClient, time} = this.props;
    pickTimeByClient(time.date);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Подтвердить запись?',
      showCancelButton: true,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет, я выберу другую дату',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(          
          'Ваша запись подтверждена',
          `Вы записаны на ${time.date.format('DD.MM.YYYY')} дату в ${time.date.format('HH:mm')}`,
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Запись не подтверждена',
          'Вы можете выбрать другую дату',
          'error'
        )
        pickTimeByClient(time.date);
      }
    })
  }
  render () {
    const { time } = this.props;
    return ( 
  <li onClick={() => this.handleClick()}
        className={time.status === true? "column__schedule__item__dark" : "column__schedule__item"}>
          {time.date.format('HH-mm')}  {time.name}</li>     
    )    
  }  
}

const mapStateToProps = (state, props) => {
  const param = state.times.find((item) => {
    const dateString = props.date;
    const timeString = props.time;
    
    if((item.date.format('HH:mm') === props.time) && (item.date.format('DD.MM.YYYY') === props.date)) {
      return true;
    } else {
      return false;
    }
  })
  if (!param) {
    return {
      time: {
        name: 'Запись закрыта',
        date: state.times[0].date,
        status: false
      }
    }
  }  return {
    time: param
  }
  
}

const mapDispatchToProps = {
  pickTimeByClient
} 
const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const ConnectedDates = connectFunction(ColumnItem);

export default ConnectedDates;

