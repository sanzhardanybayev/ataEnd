export const ticketsLoaded = (value) => {
    return {
        type: 'TICKETS_LOADED',
        payload: value
    };
};
export const tourTicketIncrement = (value) => {
    return {
        type: 'TOUR_TICKET_INCREMENT',
        payload: value
    };
};

export const tourTicketDecrement = (value) => {
    return {
        type: 'TOUR_TICKET_DECREMENT',
        payload: value
    };
};

