import { useEffect, useState } from "react";
import TicketsList from './tickets_list/TicketsList'
import TicketsForm from './tickets_form/TicketsForm'

import { ITicket } from "../interfaced/tickets.dao";
import { TicketType } from "../interfaced/tickets.dao";


const Tickets = () => {
    let response: ITicket[] = [];
    const storage = localStorage.getItem('tickets');

    if(storage) {
        response = JSON.parse(storage);
    }
    
    const [tickets, setTickets] = useState<ITicket[]>(response)
    // const [tickets, setTickets] = useState<ITicket[]>([{ 
    // title: 'Example Ticket',
    // id: 1,
    // date: new Date(),
    // type: TicketType.General,
    // price: 10,
    // sold: false, }]);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const updateTicketsList = (newTicket: ITicket) => {
        setTickets([...tickets, newTicket]);
    }

     useEffect(() => {
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }, [tickets]);

    return (
        <div className="tickets">
            <TicketsList tickets={tickets} />
            <button onClick={() => setModalOpen(true)}>Add New Ticket</button>
            {isModalOpen &&
                <TicketsForm
                    updateTicketsList={updateTicketsList}
                    closeModalWindow={() => setModalOpen(false)}
                />
            }
        </div>
    );
}

export default Tickets;