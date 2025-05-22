
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-rave-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 logo-container">
            <img 
              src="/lovable-uploads/d4104dcc-7899-4b43-bc04-26d48fd53b29.png" 
              alt="The Rave Plug Logo" 
              className="h-12"
            />
            <span className="text-xl font-bold tracking-tight">The Rave Plug</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/events') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
            >
              Events
            </Link>
            <Link 
              to="/resell" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/resell') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
            >
              Resell Tickets
            </Link>
            <Link 
              to="/create-event" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/create-event') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'}`}
            >
              Create Event
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
                Sign Up
              </Button>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-rave-accent/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/events') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/resell" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/resell') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resell Tickets
            </Link>
            <Link 
              to="/create-event" 
              className={`text-sm font-medium hover:text-rave-accent transition-colors ${isActive('/create-event') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Create Event
            </Link>
            <Link 
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black transition-colors">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
