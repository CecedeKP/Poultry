
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-pattern py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-poultry-brown leading-tight">
              Fresh, Healthy, and Sustainable Poultry
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover our premium selection of farm-fresh eggs, quality poultry meat, and comprehensive farming services - all delivered from our family farm to your table.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-poultry-brown hover:bg-poultry-brown/90 text-white font-medium py-2.5 px-6 rounded-md">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-poultry-brown text-poultry-brown hover:bg-poultry-brown/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh Poultry Products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="bg-poultry-green/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-poultry-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat font-medium">100% Organic</p>
                  <p className="text-sm text-gray-500">No antibiotics or hormones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
