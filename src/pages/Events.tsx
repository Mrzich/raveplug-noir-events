
import { useState } from "react";
import { mockEvents } from "@/data/mockEvents";
import EventCard from "@/components/EventCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  
  // Filter events based on search query
  const filteredEvents = mockEvents.filter((event) => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.location.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Discover Events</h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Find your next electronic music adventure from hundreds of events
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                type="text"
                placeholder="Search events or locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="techno">Techno</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="trance">Trance</SelectItem>
                  <SelectItem value="dnb">Drum & Bass</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                </SelectContent>
              </Select>
              
              <Button className="bg-black text-white hover:bg-gray-800 gap-1">
                <Filter size={16} /> Filter
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="text-sm font-medium min-w-[80px]">Price Range:</span>
            <div className="flex-1">
              <Slider
                defaultValue={[0, 200000]}
                max={200000}
                step={5000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Event List */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
