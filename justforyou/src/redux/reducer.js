import * as dayjs  from "dayjs";

import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import {Connect} from "react-redux";
dayjs.extend(localizedFormat);
dayjs.locale('ru');
console.log(dayjs().day(1).hour(11).minute(0));

const initialState = {
    today: dayjs(),
    times: [
        //monday
        {
        date: dayjs().day(1).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(1).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(1).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(1).hour(19).minute(0),
        name:'',
        status: false
    },
    //tuesday
    {
        date: dayjs().day(2).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(2).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(2).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(2).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(2).hour(19).minute(0),
        name:'',
        status: false
    },
    //wednesday
    {
        date: dayjs().day(3).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(13).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(3).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(16).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(3).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(3).hour(19).minute(0),
        name:'',
        status: true
    },
    //thursday
    {
        date: dayjs().day(4).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(4).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(4).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(4).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(4).hour(19).minute(0),
        name:'',
        status: false
    },
    //friday
    {
        date: dayjs().day(5).hour(10).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(5).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(13).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(5).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(5).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(5).hour(19).minute(0),
        name:'',
        status: true
    },
    //saturday
    {
        date: dayjs().day(6).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(16).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(6).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(6).hour(19).minute(0),
        name:'',
        status: false
    },
    //sunday

    //monday nextweek
    {
        date: dayjs().day(7).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(12).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(7).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(7).hour(19).minute(0),
        name:'',
        status: false
    },
    //tuesday nextweek
    {
        date: dayjs().day(8).hour(10).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(8).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(8).hour(12).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(8).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(8).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(8).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(8).hour(16).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(8).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(8).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(8).hour(19).minute(0),
        name:'',
        status: false
    },
    //wednesday nextweek
    {
        date: dayjs().day(9).hour(10).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(9).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(9).hour(12).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(9).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(9).hour(14).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(9).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(9).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(9).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(9).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(9).hour(19).minute(0),
        name:'',
        status: true
    },
    //thursday nextweek
    {
        date: dayjs().day(10).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(10).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(17).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(10).hour(19).minute(0),
        name:'',
        status: false
    },
    //friday nextweek
    {
        date: dayjs().day(11).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(11).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(11).hour(19).minute(0),
        name:'',
        status: false
    },
    //saturday nextweek
    {
        date: dayjs().day(12).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(12).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(16).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(12).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(12).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(12).hour(19).minute(0),
        name:'',
        status: false
    },
    //sunday nextweek
    {
        date: dayjs().day(13).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(11).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(14).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(13).hour(15).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(13).hour(18).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(13).hour(19).minute(0),
        name:'',
        status: false
    },
    {
        date: dayjs().day(14).hour(10).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(14).hour(11).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(14).hour(12).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(14).hour(13).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(14).hour(14).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(14).hour(15).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(14).hour(16).minute(0),
        name:'',
        status: false
    },
    {
        date:dayjs().day(14).hour(17).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(14).hour(18).minute(0),
        name:'',
        status: true
    },
    {
        date:dayjs().day(14).hour(19).minute(0),
        name:'',
        status: false
    },
]    
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'PICK_TIME': {
            const thisdate = action.payload.date;
            const array = state.times;
            const timeIndex= array.findIndex((item) => item.date === thisdate);
            array[timeIndex] = {
                ...array[timeIndex],
                status: !array[timeIndex].status
            };

            return {            
                ...state            
            }
        }
        case'SWITCH_TO_NEXT_WEEK': {
            return {
                ...state,
                today: state.today.day(8)
            }
        }
        case 'SWITCH_TO_PREVIOUS_WEEK': {
            return {
                ...state,
                today:state.today.day(-1)
            }
        }   
    }
    
    return state;
}

   

export default reducer;