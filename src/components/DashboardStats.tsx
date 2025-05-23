
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventSale } from "@/data/mockEventSales";

interface DashboardStatsProps {
  sales: EventSale[];
  isOrganizer?: boolean;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ sales, isOrganizer = false }) => {
  const totalRevenue = sales.reduce((sum, event) => sum + event.revenue, 0);
  const totalTicketsSold = sales.reduce((sum, event) => sum + event.ticketsSold, 0);
  const totalEvents = sales.length;
  const averageSellThrough = sales.length > 0 
    ? Math.round(sales.reduce((sum, event) => sum + (event.ticketsSold / event.totalTickets), 0) / sales.length * 100)
    : 0;

  const stats = isOrganizer 
    ? [
        { title: "Total Revenue", value: `₦${totalRevenue.toLocaleString()}` },
        { title: "Tickets Sold", value: totalTicketsSold.toString() },
        { title: "Events Created", value: totalEvents.toString() },
        { title: "Avg. Sell Through", value: `${averageSellThrough}%` },
      ]
    : [
        { title: "Events Attending", value: totalEvents.toString() },
        { title: "Total Spent", value: `₦${totalRevenue.toLocaleString()}` },
      ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
