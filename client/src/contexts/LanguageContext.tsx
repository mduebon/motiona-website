import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Startsprache aus der Adresse: `?lang=en` bzw. `?lang=de`.
 *
 * Gebraucht wird das für den Kinetik-Bereich. Dessen Link wird einzeln an
 * Empfänger verschickt, teils an englischsprachige — ohne diesen Parameter
 * landen sie auf deutschem Fließtext und müssten erst den Umschalter finden.
 *
 * Bewusst kein localStorage: eine gespeicherte Sprachwahl wäre ein weiterer
 * Eintrag im Browser des Besuchers und damit ein Fall für die
 * Datenschutzerklärung. Innerhalb der Anwendung bleibt die Wahl ohnehin
 * erhalten, weil die Navigation clientseitig läuft; verloren geht sie nur beim
 * harten Neuladen.
 */
function startSprache(): Language {
  if (typeof window === 'undefined') return 'de';
  const wunsch = new URLSearchParams(window.location.search).get('lang');
  return wunsch === 'en' || wunsch === 'de' ? wunsch : 'de';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(startSprache);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
