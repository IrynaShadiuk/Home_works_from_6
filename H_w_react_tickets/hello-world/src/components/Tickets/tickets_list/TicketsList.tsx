import { ITicket } from "../../interfaced/tickets.dao";
import TicketsListItem from "./tickets-list-item/TicketsListItem";
import { TicketType } from "../../interfaced/tickets.dao";


interface IProps {
    tickets: ITicket[];
}

const TicketsList = (props: IProps) => {
    const tickets = props.tickets;


      
    return (
        <table className="tickets-list">
          <tr>
            <th className="title">Title</th>
            <th className="id">ID</th>
            <th className="date">Date</th>
            <th className="type">Type</th>
            <th className="price">Price</th>
            <th className="status">Status</th>
          </tr>
    
          {tickets.map(tickets => (
        <TicketsListItem
          title={tickets.title}
          id={tickets.id}
          date={tickets.date}
          type={tickets.type}
          price={tickets.price}
          sold={tickets.sold}
        />)
          )}
          
        </table>
      );
    };
       


export default TicketsList;