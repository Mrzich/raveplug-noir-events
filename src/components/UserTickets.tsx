
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { TicketPurchase } from "@/data/mockTicketPurchases";

interface UserTicketsProps {
  tickets: TicketPurchase[];
}

const UserTickets: React.FC<UserTicketsProps> = ({ tickets }) => {
  const getStatusColor = (status: 'active' | 'used' | 'expired') => {
    switch (status) {
      case 'active': return "bg-green-500 hover:bg-green-600";
      case 'used': return "bg-gray-500 hover:bg-gray-600";
      case 'expired': return "bg-red-500 hover:bg-red-600";
      default: return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        {tickets.length === 0 ? (
          <p className="text-center py-8 text-gray-500">You haven't purchased any tickets yet.</p>
        ) : (
          <div className="grid gap-4">
            {tickets.map(ticket => (
              <Card key={ticket.id} className="overflow-hidden border">
                <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                  <div className="relative h-48 md:h-full w-full">
                    <img
                      src={ticket.image || "/placeholder.svg"}
                      alt={ticket.eventName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg mb-2">{ticket.eventName}</h3>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <p>{ticket.eventDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <p className="line-clamp-1">{ticket.location}</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Ticket Type:</span>
                        <span>{ticket.ticketType}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Quantity:</span>
                        <span>{ticket.quantity}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold">₦{ticket.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserTickets;
