
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import { formatDistance } from "date-fns";

export interface EventCardProps {
  id: string;
  name: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  image,
  date,
  time,
  location,
  price,
  category,
}) => {
  const eventDate = new Date(date);
  const timeRemaining = formatDistance(eventDate, new Date(), { addSuffix: true });

  return (
    <Card className="overflow-hidden border-0 bg-white shadow-lg card-hover">
      <div className="relative h-48 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover"
        />
        {category && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-black text-white">{category}</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-2 mb-2">{name}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <p>{time}</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <p className="line-clamp-1">{location}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-gray-100 mt-2">
        <div className="font-bold">₦{price.toLocaleString()}</div>
        <div className="text-xs text-gray-500">{timeRemaining}</div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
