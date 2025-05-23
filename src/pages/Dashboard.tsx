
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserTickets from "@/components/UserTickets";
import EventSalesTable from "@/components/EventSalesTable";
import DashboardStats from "@/components/DashboardStats";
import { mockUserPurchases } from "@/data/mockTicketPurchases";
import { mockEventSales } from "@/data/mockEventSales";

const Dashboard = () => {
  const [userType, setUserType] = useState<'client' | 'organizer'>('client');

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <Tabs
          defaultValue="client"
          onValueChange={(value) => setUserType(value as 'client' | 'organizer')}
          className="w-full md:w-auto"
        >
          <TabsList className="grid grid-cols-2 w-full md:w-[300px]">
            <TabsTrigger value="client">Client View</TabsTrigger>
            <TabsTrigger value="organizer">Organizer View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-6">
        {userType === 'client' ? (
          <>
            <DashboardStats sales={mockEventSales.slice(0, 2)} isOrganizer={false} />
            <UserTickets tickets={mockUserPurchases} />
          </>
        ) : (
          <>
            <DashboardStats sales={mockEventSales} isOrganizer={true} />
            <EventSalesTable sales={mockEventSales} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
