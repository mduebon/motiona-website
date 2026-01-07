import { useLanguage } from '@/contexts/LanguageContext';

export default function Imprint() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Main Content */}
      <div className="container max-w-4xl py-16 px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          {t.imprint.title}
        </h1>

        {/* Company Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            {t.imprint.companyDetails}
          </h2>
          <div className="space-y-2 text-slate-700">
            <p className="font-semibold text-lg">{t.imprint.companyName}</p>
            <p>{t.imprint.address}</p>
            <p>{t.imprint.city}</p>
            <p>{t.imprint.country}</p>
          </div>
        </section>

        {/* Legal Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            {t.imprint.legalInformation}
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <p className="font-semibold">{t.imprint.registerCourt}</p>
              <p>{t.imprint.registerCourtValue}</p>
            </div>
            <div>
              <p className="font-semibold">{t.imprint.managingDirector}</p>
              <p>{t.imprint.managingDirectorValue}</p>
            </div>
            <div>
              <p className="font-semibold">{t.imprint.vatId}</p>
              <p>{t.imprint.vatIdValue}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-teal-600">
            {t.imprint.contact}
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <p className="font-semibold">{t.imprint.phone}</p>
              <a href="tel:+4970711384161" className="text-teal-600 hover:text-teal-700">
                {t.imprint.phoneValue}
              </a>
            </div>
            <div>
              <p className="font-semibold">{t.imprint.email}</p>
              <a href="mailto:mail@duebon-engineering.de" className="text-teal-600 hover:text-teal-700">
                {t.imprint.emailValue}
              </a>
            </div>
            <div>
              <p className="font-semibold">{t.imprint.website}</p>
              <a 
                href="https://www.duebon-engineering.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                {t.imprint.websiteValue}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
