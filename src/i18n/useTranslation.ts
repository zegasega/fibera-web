import { useLanguage } from '../context/LanguageContext';
import { translations, TranslationSchema } from './translations';

export const useTranslation = () => {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t: TranslationSchema = translations[language];

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
};
