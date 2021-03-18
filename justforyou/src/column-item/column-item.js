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
  handleClick =() => {
    const {pickTimeByClient, time, weekDay, today} = this.props;
    pickTimeByClient(time.id, weekDay);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Подтвердить запись и покинуть сайт?',
      showCancelButton: true,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет, я выберу другую дату',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          
          'Ваша запись подтверждена',
          `Вы записаны на ${today.day()} дату в ${time.time}`,
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Запись не подтверждена',
          'Вы можете выбрать другую дату',
          'error'
        )
      }
    })
  }
  render () {
    const { time, weekDay} = this.props;
    return ( 
  <li onClick={() => this.handleClick()}
        className={time.status === true? "column__schedule__item__dark" : "column__schedule__item"}>
          {time.time}</li>     
    )    
  }  
}

const mapStateToProps = (state, props) => {
  
  return {
    time: state[props.weekDay][props.index]
  }
}


const mapDispatchToProps = {
  pickTimeByClient
}
 
const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const ConnectedDates = connectFunction(ColumnItem);

export default ConnectedDates;

