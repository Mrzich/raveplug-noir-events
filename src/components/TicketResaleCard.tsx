
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, Calendar, User } from "lucide-react";

export interface TicketResaleProps {
  id: string;
  eventName: string;
  eventDate: string;
  originalPrice: string;
  sellingPrice: string;
  sellerName: string;
  location: string;
  image: string;
}

const TicketResaleCard = ({ 
  id, 
  eventName, 
  eventDate, 
  originalPrice, 
  sellingPrice, 
  sellerName, 
  location,
  image 
}: TicketResaleProps) => {
  return (
    <Card className="bg-white text-black overflow-hidden border border-gray-200 card-hover">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={eventName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm font-semibold rounded flex items-center">
          <span className="text-gray-500 line-through mr-1">{originalPrice}</span>
          {sellingPrice}
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{eventName}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-700">
            <Calendar size={14} className="mr-2" />
            <span>{eventDate}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Ticket size={14} className="mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <User size={14} className="mr-2" />
            <span>Seller: {sellerName}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0 pb-4">
        <Button
          variant="default"
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          Purchase Ticket
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketResaleCard;
