
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import ServiceCard from '@/components/ServiceCard';
import { Building, Clipboard, BookOpen, Wrench, Tractor, Truck } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { services } from '@/data/services';

const serviceIcons = [
  <Building size={48} />,
  <Clipboard size={48} />,
  <BookOpen size={48} />,
  <Wrench size={48} />,
  <Tractor size={48} />,
  <Truck size={48} />,
];

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-poultry-brown mb-4">{t('our-services')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services-description')}
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={serviceIcons[index]}
                url={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-poultry-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-poultry-brown mb-4">
                {t('expert-consultation')}
              </h2>
              <div className="w-24 h-1 bg-poultry-green mb-6"></div>
              <p className="text-gray-700 mb-6">
                {t('consultation-description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>{t('farm-assessments')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>{t('breeding-program')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>{t('feed-formulation')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>{t('marketing-strategies')}</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Poultry farm consultation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-poultry-brown mb-4 text-center">
              {t('request-consultation')}
            </h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">{t('full-name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                    placeholder={t('full-name')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t('email-address')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2">{t('service-interested')}</label>
                <select 
                  id="service" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                  required
                >
                  <option value="">{t('select-service')}</option>
                  <option value="farm-setup">{t('farm-setup')}</option>
                  <option value="health">{t('health-consultation')}</option>
                  <option value="training">{t('training')}</option>
                  <option value="maintenance">{t('maintenance')}</option>
                  <option value="rental">{t('rental')}</option>
                  <option value="other">{t('other')}</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">{t('your-message')}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                  placeholder={t('message-placeholder')}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-poultry-brown hover:bg-poultry-brown/90 text-white font-medium py-2.5 px-6 rounded-md"
                >
                  {t('send-request')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Services;
