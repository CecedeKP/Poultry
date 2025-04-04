
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The eggs from PoultryFarm are the freshest I've ever tasted! Their delivery is always on time, and the quality is consistently excellent. I can't recommend them enough!",
    author: "Sarah Johnson",
    location: "Home Cook",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    text: "As a restaurant owner, quality is paramount. The poultry products from this farm have elevated our dishes and impressed our customers. Their consistency and reliability make them a valuable partner.",
    author: "Michael Chen",
    location: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    text: "Their consultation service helped us set up our small poultry farm with proper guidelines. The ongoing support and advice have been invaluable for our business growth.",
    author: "Emma Roberts",
    location: "Small Farm Owner",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-poultry-green/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-poultry-brown">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-poultry-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-6 left-6 text-poultry-yellow">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-700 italic mb-8 pt-8 pl-8">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-poultry-brown">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-poultry-brown" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <span 
                    key={index} 
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? 'bg-poultry-brown' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-poultry-brown" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
