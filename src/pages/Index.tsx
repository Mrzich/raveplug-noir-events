
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { mockEvents } from "@/data/mockEvents";

const Index = () => {
  // Select featured events (first 3)
  const featuredEvents = mockEvents.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Events</h2>
            <Link to="/events">
              <Button variant="link" className="text-black flex items-center gap-1 hover:gap-2 transition-all">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">The Ultimate Platform for Ravers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rave-gray/10 p-6 rounded-lg text-center border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Calendar size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Events</h3>
              <p className="text-gray-300">
                Find the hottest electronic music events in your area. Filter by genre, date, and venue.
              </p>
            </div>
            
            <div className="bg-rave-gray/10 p-6 rounded-lg text-center border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Create & Manage</h3>
              <p className="text-gray-300">
                Easily create and manage your own events. Sell tickets directly through our platform.
              </p>
            </div>
            
            <div className="bg-rave-gray/10 p-6 rounded-lg text-center border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Ticket size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Buy & Resell</h3>
              <p className="text-gray-300">
                Can't make an event? Resell your tickets safely and securely on our marketplace.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/signup">
              <Button className="bg-white text-black hover:bg-gray-200 min-w-[160px]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Next Event?</h2>
              <p className="text-gray-300 max-w-lg">
                Join thousands of event organizers who trust The Rave Plug to manage their events and ticket sales.
              </p>
            </div>
            <Link to="/create-event">
              <Button className="bg-white text-black hover:bg-gray-200 min-w-[160px]">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
