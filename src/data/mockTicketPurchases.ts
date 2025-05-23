
export interface TicketPurchase {
  id: string;
  eventId: string;
  eventName: string;
  purchaseDate: string;
  ticketType: string;
  price: number;
  quantity: number;
  status: 'active' | 'used' | 'expired';
  eventDate: string;
  location: string;
  image: string;
}

export const mockUserPurchases: TicketPurchase[] = [
  {
    id: "p1",
    eventId: "1",
    eventName: "Techno Fusion Night",
    purchaseDate: "2025-05-10",
    ticketType: "General Admission",
    price: 45000,
    quantity: 1,
    status: 'active',
    eventDate: "June 15, 2025",
    location: "Warehouse 23, Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "p2",
    eventId: "3",
    eventName: "House Music Marathon",
    purchaseDate: "2025-05-15",
    ticketType: "VIP Access",
    price: 75000,
    quantity: 2,
    status: 'active',
    eventDate: "July 1, 2025",
    location: "Sunset Terrace, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1571266028865-9a4e311e6a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];
