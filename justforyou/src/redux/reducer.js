import * as dayjs  from "dayjs";

import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import {Connect} from "react-redux";
dayjs.extend(localizedFormat);
dayjs.locale('ru');


const initialState = {
    today: dayjs(),
    timesMon: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: false
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: false
        },
        {
            id: 2,
            time: "12:00",
            clientName: 'Валерия',
            status: true
        },
        {
            id: 3,
            time: "13:00",
            clientName: 'Анна',
            status: true
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: false
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: false
        },
        {
            id: 6,
            time: "16:00",
            clientName: 'Татьяна',
            status: true
        },
        {
            id: 7,
            time: "17:00",
            clientName: 'Ксения',
            status: true
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: 'Ирина',
            status: true
        },
    ],
    timesTue: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: true
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: false
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: false
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: false
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: true
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: true
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: false
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: true
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: true
        },
    ],
    timesWed: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: true
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: true
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: false
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: true
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: false
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: false
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: false
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: false
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: true
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: true
        },
    ],
    timesThur: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: false
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: false
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: true
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: false
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: false
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: false
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: false
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: true
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: true
        },
    ],
    timesFri: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: true
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: true
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: false
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: false
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: false
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: false
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: false
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: false
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: true
        },
    ],
    timesSat: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: false
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: false
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: false
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: true
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: true
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: false
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: true
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: false
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: true
        },
    ],
    timesSun: [
        {
            id: 0,
            time: "10:00",
            clientName: '',
            status: false
        },
        {
            id: 1,
            time: "11:00",
            clientName: '',
            status: false
        },
        {
            id: 2,
            time: "12:00",
            clientName: '',
            status: false
        },
        {
            id: 3,
            time: "13:00",
            clientName: '',
            status: true
        },
        {
            id: 4,
            time: "14:00",
            clientName: '',
            status: true
        },
        {
            id: 5,
            time: "15:00",
            clientName: '',
            status: true
        },
        {
            id: 6,
            time: "16:00",
            clientName: '',
            status: false
        },
        {
            id: 7,
            time: "17:00",
            clientName: '',
            status: false
        },
        {
            id: 8,
            time: "18:00",
            clientName: '',
            status: false
        },
        {
            id: 9,
            time: "19:00",
            clientName: '',
            status: false
        },
    ],
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'PICK_TIME': {
            const id = action.payload.id;
            const weekDay = action.payload.weekDay;
            const array = state[weekDay];
            const timeIndex= array.findIndex((item) => item.id === id);
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