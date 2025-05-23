
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { EventSale } from "@/data/mockEventSales";

interface EventSalesTableProps {
  sales: EventSale[];
}

const EventSalesTable: React.FC<EventSalesTableProps> = ({ sales }) => {
  const getStatusColor = (status: 'upcoming' | 'ongoing' | 'completed') => {
    switch (status) {
      case 'upcoming': return "bg-blue-500 hover:bg-blue-600";
      case 'ongoing': return "bg-green-500 hover:bg-green-600";
      case 'completed': return "bg-gray-500 hover:bg-gray-600";
      default: return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Sales</CardTitle>
      </CardHeader>
      <CardContent>
        {sales.length === 0 ? (
          <p className="text-center py-8 text-gray-500">No events found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Sold</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map(event => (
                <TableRow key={event.eventId}>
                  <TableCell className="font-medium">{event.eventName}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {event.ticketsSold} / {event.totalTickets}
                    <div className="text-xs text-gray-500">
                      {Math.round((event.ticketsSold / event.totalTickets) * 100)}%
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    ₦{event.revenue.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default EventSalesTable;
