
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';

// Import the services array from data/services
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<Service | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const foundService = services.find(s => s.id === id);
    setService(foundService || null);
  }, [id]);

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-bold text-poultry-brown mb-4">{t('service-not-found')}</h1>
          <p className="text-gray-600 mb-8">We couldn't find the service you're looking for.</p>
          <Button asChild>
            <a href="/services">{t('back-to-services')}</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-poultry-brown mb-4">{service.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-poultry-brown mb-4">{t('about-service')}</h2>
              <div className="w-24 h-1 bg-poultry-green mb-6"></div>
              <p className="text-gray-700 whitespace-pre-line mb-8">
                {service.fullDescription}
              </p>
              <Button className="bg-poultry-brown hover:bg-poultry-brown/90">
                {t('request-service')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
