
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  url: string;
}

const ServiceCard = ({ title, description, icon, url }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 text-poultry-brown">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-poultry-brown">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Button asChild variant="outline" className="border-poultry-brown text-poultry-brown hover:bg-poultry-brown/10">
        <Link to={url}>{t('learn-more')}</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
