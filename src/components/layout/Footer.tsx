import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../assets/Logo.png"
import { useState } from "react";

const Footer = () => {
  
  const [, setIsMobileMenuOpen] = useState(false);
const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
       
            {/* Replaced the <span> with an <img> tag */}
            <img
              src= {logo} // <--- IMPORTANT: Update this path to your actual logo image file
              alt="SHASH MAKEOVER Logo"
              className="h-10 w-auto  mb-4" // Adjust height (h-10) and width (w-auto for aspect ratio) as needed
            />
    
            <p className="text-sm text-muted-foreground mb-4">
              Experience luxury beauty treatments in an elegant, sophisticated setting.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Hair Styling</li>
              <li className="text-muted-foreground">Facial Treatments</li>
              <li className="text-muted-foreground">Makeup Services</li>
              <li className="text-muted-foreground">Bridal Packages</li>
              <li className="text-muted-foreground">Spa Treatments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>hiwari nagar nagpur 440008</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+7720966785" className="hover:text-primary transition-colors">
                  (772) 096-6785
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@bellaluxe.com" className="hover:text-primary transition-colors">
                  info@Shash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shash MakeOver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
