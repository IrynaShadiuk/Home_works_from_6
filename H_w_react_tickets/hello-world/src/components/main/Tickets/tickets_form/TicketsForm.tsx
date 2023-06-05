import React, { useState } from "react";
import { TicketType } from "../../../interfaced/tickets.dao";
import './userForm.scss'
import { ITicket } from "../../../interfaced/tickets.dao";

interface IProps {
    updateTicketsList: (ticket: ITicket) => void;
    closeModalWindow: () => void;
    }

    const TicketsListItem = (props: IProps) => {
        const { updateTicketsList, closeModalWindow } = props;
        
        const [title, setTitle] = useState<string>('');
        const [id, setId] = useState<number>(0);
        const [date, setDate] = useState<Date>(new Date());
        const [type, setType] = useState<TicketType>(TicketType.General);
        const [price, setPrice] = useState<number>(0);
        const [sold, setSold] = useState<boolean>(false);
        
        const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        };
        
        const handleId = (event: React.FormEvent<HTMLInputElement>) => {
        setId(Number(event.currentTarget.value));
        };
        
        const handleDate = (event: React.FormEvent<HTMLInputElement>) => {
        setDate(new Date(event.currentTarget.value));
        };
        
        const handleType = (event: React.FormEvent<HTMLSelectElement>) => {
        setType(Number(event.currentTarget.value));
        };
        
        const handlePrice = (event: React.FormEvent<HTMLInputElement>) => {
        setPrice(Number(event.currentTarget.value));
        };
        
        const handleSold = (event: React.FormEvent<HTMLInputElement>) => {
        setSold(event.currentTarget.checked);
        };
        
        const createTicket = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const newTicket: ITicket = {
        title: title,
        id: id,
        date: date,
        type: type,
        price: price,
        sold: sold,
        };
        updateTicketsList(newTicket);
        closeModalWindow();
        };

        return (
            <form action="" className="tickets-form">
            <div className="tickets-form__header">
            <h1>Create New Ticket</h1>
            <span onClick={closeModalWindow}>X</span>
            </div>
            <div className="tickets-form__content">
            <input type="text" placeholder="Title" onChange={handleTitle} />
            <input type="number" placeholder="ID" onChange={handleId} />
            <input type="date" onChange={handleDate} />
            <select onChange={handleType}>
            <option value={TicketType.General}>General</option>
            <option value={TicketType.VIP}>VIP</option>
            <option value={TicketType.Premium}>Premium</option>
            </select>
            <input type="number" placeholder="Price" onChange={handlePrice} />
            <label>
            <input type="checkbox" onChange={handleSold} />
            Sold
            </label>
            </div>
            <div className="user-form__footer">
            <button onClick={createTicket}>Create</button>
            <button onClick={closeModalWindow}>Cancel</button>
            </div>
            </form>
            );
    };

export default TicketsListItem;