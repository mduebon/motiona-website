import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookieConsent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const handleClose = () => {
    // Closing without action is treated as decline
    handleDecline();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-white border-t-2 border-teal-600 shadow-2xl">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.cookieConsent.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                {t.cookieConsent.description}
              </p>
              <Link href="/privacy">
                <a className="text-teal-600 hover:text-teal-700 text-sm font-medium underline">
                  {t.cookieConsent.learnMore}
                </a>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors duration-200"
              >
                {t.cookieConsent.decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-white bg-teal-600 hover:bg-teal-700 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {t.cookieConsent.accept}
              </button>
              <button
                onClick={handleClose}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
