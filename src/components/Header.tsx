import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "User Registration", 
    "Training Dashboard",
    "Services",
    "Pricing",
    "Shop",
    "Contact"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-deep/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-black fill-current" />
          </div>
          <span className="text-xl font-bold text-gold">Gold Star Gym</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground hover:text-gold transition-smooth font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Button 
            variant="default" 
            className="bg-gradient-gold text-black font-semibold hover:shadow-gold transition-smooth"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black-medium border-t border-gold/20 animate-slide-up">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-foreground hover:text-gold transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              variant="default" 
              className="w-full bg-gradient-gold text-black font-semibold hover:shadow-gold transition-smooth mt-4"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;