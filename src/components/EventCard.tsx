
import { CalendarCheck, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  attending: number;
  organizer?: string;
}

const EventCard = ({ id, title, date, time, location, image, price, attending, organizer }: EventProps) => {
  return (
    <Card className="bg-white text-black overflow-hidden border border-gray-200 card-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm font-semibold rounded">
          {price}
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-700">
            <CalendarCheck size={14} className="mr-2" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Clock size={14} className="mr-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <MapPin size={14} className="mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Users size={14} className="mr-2" />
            <span>{attending} attending</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0 pb-4">
        <Link to={`/events/${id}`} className="w-full">
          <Button 
            variant="default" 
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
