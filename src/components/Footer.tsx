import { Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-deep border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="text-xl font-bold text-gold">Gold Star Gym</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Since 2005, we've been transforming lives through fitness. Join our community of dedicated athletes and fitness enthusiasts.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Fitness Street<br />
                  Downtown District<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground">info@goldstargym.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                "Membership Plans",
                "Personal Training",
                "Group Classes", 
                "Nutrition Coaching",
                "About Us",
                "Contact"
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-muted-foreground hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gold Star Gym. All rights reserved. 
            <span className="text-gold"> Build to Sweat, Built to Shine.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;