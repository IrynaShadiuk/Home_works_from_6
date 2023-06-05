import { ITicket } from "../../../interfaced/tickets.dao";
import TicketsListItem from "./tickets-list-item/TicketsListItem";
import { TicketType } from "../../../interfaced/tickets.dao";


interface IProps {
    tickets: ITicket[];
}

const TicketsList = (props: IProps) => {
    const tickets = props.tickets;

    return (
        <ul>
            {tickets.map(tickets=> {
                return <TicketsListItem
                title={tickets.title}
                id={tickets.id}
                date={tickets.date}
                type={tickets.type}
                price={tickets.price}
                sold={tickets.sold}
            />
            })}
        </ul>
    );
}

export default TicketsList;