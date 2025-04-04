
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className={`px-2 text-sm ${language === 'en' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <span className="text-gray-400">|</span>
      <Button
        variant="ghost"
        className={`px-2 text-sm ${language === 'fr' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageToggle;
