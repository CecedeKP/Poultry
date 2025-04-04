
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

type Translations = {
  [key: string]: {
    en: string;
    fr: string;
  };
};

export const translations: Translations = {
  // Navbar
  'home': { en: 'Home', fr: 'Accueil' },
  'shop': { en: 'Shop', fr: 'Boutique' },
  'services': { en: 'Services', fr: 'Services' },
  'about': { en: 'About', fr: 'À propos' },
  'contact': { en: 'Contact', fr: 'Contact' },
  'account': { en: 'My Account', fr: 'Mon Compte' },
  
  // Services page
  'our-services': { en: 'Our Services', fr: 'Nos Services' },
  'services-description': { 
    en: 'We provide expert guidance and support for all aspects of poultry farming, from setup to maintenance.', 
    fr: 'Nous fournissons des conseils et un support d\'experts pour tous les aspects de l\'élevage de volailles, de l\'installation à la maintenance.' 
  },
  'expert-consultation': { 
    en: 'Expert Consultation for Your Poultry Business', 
    fr: 'Consultation d\'experts pour votre entreprise avicole' 
  },
  'consultation-description': { 
    en: 'Our team of experienced poultry farming specialists is dedicated to helping you achieve optimal results in your farming operations. Whether you\'re just starting out or looking to improve an established farm, we provide tailored solutions to meet your specific needs.', 
    fr: 'Notre équipe de spécialistes expérimentés en aviculture se consacre à vous aider à obtenir des résultats optimaux dans vos opérations agricoles. Que vous débutiez ou que vous cherchiez à améliorer une ferme établie, nous proposons des solutions adaptées à vos besoins spécifiques.' 
  },
  'farm-assessments': { 
    en: 'Personalized farm assessments and improvement plans', 
    fr: 'Évaluations personnalisées des fermes et plans d\'amélioration' 
  },
  'breeding-program': { 
    en: 'Breeding program development and genetic improvement', 
    fr: 'Développement de programmes d\'élevage et amélioration génétique' 
  },
  'feed-formulation': { 
    en: 'Feed formulation and nutrition management', 
    fr: 'Formulation d\'aliments et gestion de la nutrition' 
  },
  'marketing-strategies': { 
    en: 'Marketing strategies for poultry products', 
    fr: 'Stratégies de marketing pour les produits avicoles' 
  },
  'request-consultation': { 
    en: 'Request a Consultation', 
    fr: 'Demander une Consultation' 
  },
  'full-name': { en: 'Full Name', fr: 'Nom Complet' },
  'email-address': { en: 'Email Address', fr: 'Adresse Email' },
  'service-interested': { en: 'Service Interested In', fr: 'Service Qui Vous Intéresse' },
  'select-service': { en: 'Select a service', fr: 'Sélectionner un service' },
  'your-message': { en: 'Your Message', fr: 'Votre Message' },
  'message-placeholder': { 
    en: 'Please describe your needs or questions...', 
    fr: 'Veuillez décrire vos besoins ou questions...' 
  },
  'send-request': { en: 'Send Request', fr: 'Envoyer la Demande' },
  'learn-more': { en: 'Learn More', fr: 'En Savoir Plus' },
  'request-service': { en: 'Request This Service', fr: 'Demander Ce Service' },
  'service-not-found': { en: 'Service Not Found', fr: 'Service Non Trouvé' },
  'back-to-services': { en: 'Back to Services', fr: 'Retour aux Services' },
  'about-service': { en: 'About This Service', fr: 'À Propos de Ce Service' },
  
  // Service Titles
  'farm-setup': { en: 'Farm Setup & Design', fr: 'Installation et Conception de Ferme' },
  'health-consultation': { en: 'Poultry Health Consultation', fr: 'Consultation sur la Santé des Volailles' },
  'training': { en: 'Training Programs', fr: 'Programmes de Formation' },
  'maintenance': { en: 'Equipment Maintenance', fr: 'Maintenance des Équipements' },
  'rental': { en: 'Equipment Rental', fr: 'Location d\'Équipements' },
  'logistics': { en: 'Logistics & Transport', fr: 'Logistique et Transport' },
  'other': { en: 'Other', fr: 'Autre' },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
