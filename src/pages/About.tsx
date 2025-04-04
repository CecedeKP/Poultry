
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import TestimonialSection from '@/components/TestimonialSection';

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-poultry-brown mb-4">About PoultryFarm</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to providing the highest quality poultry products through sustainable and ethical farming practices.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-poultry-brown mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-poultry-green mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2010, PoultryFarm began as a small family operation with a simple mission: to provide local communities with fresh, nutritious poultry products raised with care and respect for both the animals and the environment.
              </p>
              <p className="text-gray-700 mb-4">
                What started with just 50 chickens has grown into a thriving operation that now serves customers throughout the region. Despite our growth, we've remained true to our founding principles of quality, sustainability, and ethical farming.
              </p>
              <p className="text-gray-700">
                Today, we're proud to offer not only premium poultry products but also comprehensive services to support other farmers in establishing and maintaining successful poultry operations. Our team of experts brings decades of combined experience in all aspects of poultry farming.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Our farm" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-poultry-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poultry-brown">Our Values</h2>
            <div className="w-24 h-1 bg-poultry-green mx-auto mt-4 mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our core values guide everything we do, from how we raise our poultry to how we interact with our customers and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-poultry-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poultry-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-poultry-brown text-center mb-3">Quality</h3>
              <p className="text-gray-600 text-center">
                We never compromise on the quality of our products. From breeding to feeding to processing, we maintain the highest standards at every step.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-poultry-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poultry-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-poultry-brown text-center mb-3">Animal Welfare</h3>
              <p className="text-gray-600 text-center">
                We believe in treating our animals with care and respect. Our free-range approach allows our poultry to live stress-free, natural lives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-poultry-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poultry-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-poultry-brown text-center mb-3">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We implement eco-friendly practices throughout our operation, from water conservation to organic waste management and renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poultry-brown">Our Team</h2>
            <div className="w-24 h-1 bg-poultry-green mx-auto mt-4 mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the passionate individuals behind PoultryFarm who work tirelessly to bring quality products and services to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="John Smith" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-poultry-brown mb-1">John Smith</h3>
                <p className="text-poultry-green font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of experience in poultry farming, John leads our team with passion and vision for sustainable agriculture.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Emily Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-poultry-brown mb-1">Emily Johnson</h3>
                <p className="text-poultry-green font-medium mb-3">Head Veterinarian</p>
                <p className="text-gray-600">
                  Emily ensures the health and welfare of our poultry flocks, implementing preventive care and nutrition programs.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="David Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-poultry-brown mb-1">David Chen</h3>
                <p className="text-poultry-green font-medium mb-3">Farm Operations Manager</p>
                <p className="text-gray-600">
                  David oversees day-to-day operations, maintaining our high standards of efficiency, quality, and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default About;
