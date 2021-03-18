import * as dayjs  from "dayjs";
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import {Connect} from "react-redux";
dayjs.extend(localizedFormat);
dayjs.locale('ru');


const initialState = {
    today: dayjs(),
    times: [
        {
            id: 0,
            time: "10:00",
            status: false
        },
        {
            id: 1,
            time: "11:00",
            status: false
        },
        {
            id: 2,
            time: "12:00",
            status: true
        },
        {
            id: 3,
            time: "13:00",
            status: true
        },
        {
            id: 4,
            time: "14:00",
            status: false
        },
        {
            id: 5,
            time: "15:00",
            status: false
        },
        {
            id: 6,
            time: "16:00",
            status: true
        },
        {
            id: 7,
            time: "17:00",
            status: true
        },
        {
            id: 8,
            time: "18:00",
            status: false
        },
        {
            id: 9,
            time: "19:00",
            status: true
        },
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'PICK_TIME': {
            const id = action.payload.id;
            const timeIndex= state.times.findIndex((item) => item.id === id);
            state.times[timeIndex] = {
                ...state.times[timeIndex],
                status: !state.times[timeIndex].status
            };

            return {            
                ...state,
                times: [
                    ...state.times               
                ]
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