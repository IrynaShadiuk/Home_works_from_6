import { ITicket, TicketType } from "../../../../interfaced/tickets.dao";
import './ticketsListItem.scss'
interface IProps {
  title: string;
  id: number;
  date: Date;
  type: TicketType;
  price: number;
  sold: boolean;
}

    const TicketsListItem = (props: IProps) => {
    const { title, id, date, type, price, sold } = props;

    return (
        <tr>
          <td className="title">{title}</td>
          <td className="id">(ID: {id})</td>
          <td className="date">{date.toString()}</td>
          <td className="type">{type}</td>
          <td className="price">${price}</td>
          <td className="status">{sold ? "Sold" : "Not Sold"}</td>
        </tr>
      );
    };

export default TicketsListItem;