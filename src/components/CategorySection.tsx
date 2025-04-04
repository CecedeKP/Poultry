
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'eggs',
    name: 'Farm Fresh Eggs',
    description: 'Ethically sourced, nutritious eggs from free-range hens.',
    image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat',
    name: 'Chicken Meat',
    description: 'Premium quality, tender chicken meat from our farm.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'feed',
    name: 'Poultry Feed',
    description: 'Nutritious feed solutions for healthy poultry growth.',
    image: 'https://images.unsplash.com/photo-1581613868481-11711a7e9051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'equipment',
    name: 'Poultry Equipment',
    description: 'Quality equipment for effective poultry farming.',
    image: 'https://images.unsplash.com/photo-1582757345040-c89cbb9c50b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-poultry-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-poultry-brown">Shop By Category</h2>
          <div className="w-24 h-1 bg-poultry-green mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our range of quality poultry products sorted by category to find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop/${category.id}`} 
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-poultry-brown mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="inline-block text-poultry-green font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Shop Now &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
