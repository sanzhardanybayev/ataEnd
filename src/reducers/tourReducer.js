
export default function (state = [], action) {
    switch (action.type) {
        case 'TICKETS_LOADED':
            return action.payload.tickets.map(ticket => {
                ticket.count = 1;
                ticket.initialPrice = ticket.price;
                return ticket;
            });
        case 'TOUR_TICKET_INCREMENT':
            return state.map(ticket => {
                if(ticket.type === action.payload.type){
                    ticket.count = ticket.count + 1;
                    ticket.price = ticket.price + action.payload.price;
                }
                return ticket;
            });
        case 'TOUR_TICKET_DECREMENT':
            return state.map(ticket => {
                if(ticket.type === action.payload.type){
                    ticket.count = ticket.count - 1;
                    ticket.price = ticket.price - action.payload.price;
                }
                return ticket;
            });
        default:
            return state;
    }
}
