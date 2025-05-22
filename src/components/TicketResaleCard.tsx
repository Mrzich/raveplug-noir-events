
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User } from "lucide-react";

interface TicketResaleCardProps {
  id: string;
  eventName: string;
  image: string;
  date: string;
  location: string;
  originalPrice: number;
  resalePrice: number;
  sellerName: string;
  sellerRating: number;
}

const TicketResaleCard: React.FC<TicketResaleCardProps> = ({
  id,
  eventName,
  image,
  date,
  location,
  originalPrice,
  resalePrice,
  sellerName,
  sellerRating,
}) => {
  // Calculate discount or markup percentage
  const priceDiff = resalePrice - originalPrice;
  const percentageDiff = Math.round((priceDiff / originalPrice) * 100);
  const isDiscount = percentageDiff < 0;

  return (
    <Card className="overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-40 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={eventName}
          className="h-full w-full object-cover"
        />
        {isDiscount ? (
          <div className="absolute top-2 right-2">
            <Badge className="bg-green-600 text-white">
              {Math.abs(percentageDiff)}% Off
            </Badge>
          </div>
        ) : percentageDiff > 0 ? (
          <div className="absolute top-2 right-2">
            <Badge className="bg-amber-500 text-white">
              {percentageDiff}% Markup
            </Badge>
          </div>
        ) : null}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-2 mb-2">{eventName}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <p className="line-clamp-1">{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <User size={14} />
            <p>
              {sellerName} • {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className={i < sellerRating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-gray-100 mt-2">
        <div>
          <div className="font-bold">₦{resalePrice.toLocaleString()}</div>
          <div className="text-xs text-gray-500">
            Original: ₦{originalPrice.toLocaleString()}
          </div>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800">
          Buy Ticket
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketResaleCard;
