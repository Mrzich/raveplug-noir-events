
import { useState } from "react";
import { mockTickets } from "@/data/mockTickets";
import TicketResaleCard from "@/components/TicketResaleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, PlusCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Resell = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  
  // Filter tickets based on search
  const filteredTickets = mockTickets.filter((ticket) => {
    return ticket.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
           ticket.location.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const handleListTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form data to your backend
    
    toast({
      title: "Ticket listed successfully!",
      description: "Your ticket has been listed for resale.",
    });
    
    // Close dialog by simulating Esc key
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ticket Resale Marketplace</h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Buy and sell electronic music event tickets safely and securely
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input
              type="text"
              placeholder="Search tickets by event name or location..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date (Soonest)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-black text-white hover:bg-gray-800 gap-1">
              <Filter size={16} /> Filter
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-gray-800 gap-1">
                  <PlusCircle size={16} /> List Ticket
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>List a Ticket for Resale</DialogTitle>
                  <DialogDescription>
                    Enter the details of the ticket you want to resell.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleListTicket} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-name">Event Name</Label>
                    <Input id="event-name" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Event Date</Label>
                      <Input id="event-date" type="date" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="original-price">Original Price ($)</Label>
                      <Input id="original-price" type="number" min="0" step="0.01" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="selling-price">Asking Price ($)</Label>
                      <Input id="selling-price" type="number" min="0" step="0.01" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-info">Ticket Information</Label>
                    <Textarea 
                      id="ticket-info" 
                      placeholder="Additional details about your ticket (e.g., seat location, VIP perks, etc.)"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-image">Upload Ticket Image (Optional)</Label>
                    <Input id="ticket-image" type="file" accept="image/*" />
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                      List for Sale
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Ticket List */}
        {filteredTickets.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No tickets found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTickets.map((ticket) => (
              <TicketResaleCard key={ticket.id} {...ticket} />
            ))}
          </div>
        )}
        
        {/* Additional Info Section */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Safe Ticket Reselling</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Guaranteed Authenticity</h3>
              <p className="text-sm text-gray-600">
                All tickets are verified for authenticity before listing on our platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure Transactions</h3>
              <p className="text-sm text-gray-600">
                Payments are held in escrow until the ticket transfer is complete.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Buyer Protection</h3>
              <p className="text-sm text-gray-600">
                Full refund guarantee if your ticket is invalid or the event is canceled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resell;
