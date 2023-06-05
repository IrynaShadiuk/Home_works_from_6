export enum TicketType {
  General,
  VIP,
  Premium,
}

export interface ITicket {
  title: string;
  id: number;
  date: Date;
  type: TicketType;
  price: number;
  sold: boolean;
}