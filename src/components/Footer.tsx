
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/d4104dcc-7899-4b43-bc04-26d48fd53b29.png"
                alt="The Rave Plug Logo" 
                className="h-10"
              />
              <span className="text-lg font-bold">The Rave Plug</span>
            </div>
            <p className="text-sm text-gray-400">
              Your ultimate platform for event management and ticket reselling.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-rave-accent">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-rave-accent">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rave-accent">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@theraveplug.com" className="hover:text-rave-accent">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-sm text-gray-400 hover:text-white">Browse Events</Link></li>
              <li><Link to="/create-event" className="text-sm text-gray-400 hover:text-white">Create Event</Link></li>
              <li><Link to="/resell" className="text-sm text-gray-400 hover:text-white">Resell Tickets</Link></li>
              <li><Link to="/signup" className="text-sm text-gray-400 hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for updates on hot events and exclusive deals.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-rave-gray px-4 py-2 text-white text-sm rounded-l focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-white text-black px-4 py-2 text-sm font-medium rounded-r hover:bg-gray-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-rave-gray/30 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} The Rave Plug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
