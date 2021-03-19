export const pickTimeByClient = (id, weekDay) => ({
    type: 'PICK_TIME',
    payload: {
        id, weekDay
    }
})

export const NextWeekHandler = () => ({
    type: 'SWITCH_TO_NEXT_WEEK',
});

export const PreviousWeekHandler = () => ({
    type: 'SWITCH_TO_PREVIOUS_WEEK',
});

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";

