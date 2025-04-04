
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-poultry-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EcomotechFarm</h3>
            <p className="text-sm text-gray-200">Fresh, Healthy, and Sustainable Poultry for Every Home</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-poultry-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-poultry-yellow">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-poultry-yellow">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-poultry-yellow transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-poultry-yellow transition-colors">Shop</Link></li>
              <li><Link to="/services" className="text-sm hover:text-poultry-yellow transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm hover:text-poultry-yellow transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-poultry-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/eggs" className="text-sm hover:text-poultry-yellow transition-colors">Farm Fresh Eggs</Link></li>
              <li><Link to="/shop/meat" className="text-sm hover:text-poultry-yellow transition-colors">Chicken Meat</Link></li>
              <li><Link to="/shop/feed" className="text-sm hover:text-poultry-yellow transition-colors">Poultry Feed</Link></li>
              <li><Link to="/shop/equipment" className="text-sm hover:text-poultry-yellow transition-colors">Equipment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">info@ecomotechfarm.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">123 Farm Road, Countryside, State 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} EcomotechFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
