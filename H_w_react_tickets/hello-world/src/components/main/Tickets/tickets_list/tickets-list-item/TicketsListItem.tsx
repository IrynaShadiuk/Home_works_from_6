import { TicketType } from "../../../../interfaced/tickets.dao";
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
        <li>
            {title} (ID: {id})
            <br />
            Date: {date.toString()}
            <br />
            Type: {type}
            <br />
            Price: ${price}
            <br />
            {sold ? "Sold" : "Not Sold"}
        </li>
    );
}

export default TicketsListItem;