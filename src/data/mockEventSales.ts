
export interface EventSale {
  eventId: string;
  eventName: string;
  date: string;
  totalTickets: number;
  ticketsSold: number;
  revenue: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export const mockEventSales: EventSale[] = [
  {
    eventId: "1",
    eventName: "Techno Fusion Night",
    date: "June 15, 2025",
    totalTickets: 500,
    ticketsSold: 320,
    revenue: 14400000, // 320 tickets * 45000
    status: 'upcoming'
  },
  {
    eventId: "2",
    eventName: "Bass Sanctuary",
    date: "June 22, 2025",
    totalTickets: 300,
    ticketsSold: 180,
    revenue: 6300000, // 180 tickets * 35000
    status: 'upcoming'
  },
  {
    eventId: "3",
    eventName: "House Music Marathon",
    date: "July 1, 2025",
    totalTickets: 600,
    ticketsSold: 450,
    revenue: 22500000, // 450 tickets * 50000
    status: 'upcoming'
  }
];
