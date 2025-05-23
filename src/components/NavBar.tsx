
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import useMobile from "@/hooks/use-mobile";

const NavBar = () => {
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Resell", href: "/resell" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/d4104dcc-7899-4b43-bc04-26d48fd53b29.png"
            alt="RavePlug Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg text-white">RavePlug</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black text-white">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `p-2 hover:bg-gray-800 ${isActive ? "text-white font-semibold" : "text-gray-300"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <hr className="border-gray-800 my-2" />
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-white text-black hover:bg-gray-200">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-white ${
                    isActive ? "text-white font-medium" : "text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
