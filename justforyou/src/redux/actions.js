export const pickTimeByClient = (id) => ({
    type: 'PICK_TIME',
    payload: {
        id
    }
})

export const NextWeekHandler = () => ({
    type: 'SWITCH_TO_NEXT_WEEK',
});

export const PreviousWeekHandler = () => ({
    type: 'SWITCH_TO_PREVIOUS_WEEK',
})

