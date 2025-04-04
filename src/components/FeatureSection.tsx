
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Farm-Fresh Quality",
    description: "Our poultry products go straight from farm to table, ensuring maximum freshness and nutritional value."
  },
  {
    title: "Ethical Farming",
    description: "We prioritize animal welfare with free-range environments and natural, hormone-free feeding practices."
  },
  {
    title: "Sustainable Practices",
    description: "Our farming methods focus on environmental sustainability, reducing waste and carbon footprint."
  },
  {
    title: "Expert Consultation",
    description: "Access professional guidance for your poultry farming needs from our experienced team."
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1585153355023-d9401fb4db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Poultry farm" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-poultry-brown mb-4">Why Choose Our Poultry Products</h2>
              <div className="w-24 h-1 bg-poultry-green mb-6"></div>
              <p className="text-gray-600 mb-8">
                At PoultryFarm, we're committed to providing the highest quality poultry products while maintaining ethical and sustainable farming practices.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-poultry-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-poultry-brown">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
