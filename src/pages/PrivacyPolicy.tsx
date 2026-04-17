import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { privacyPolicy } from '@/i18n/legal';

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const c = privacyPolicy[lang] ?? privacyPolicy.en;

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-dark-text">
      <div className="border-b border-white/[0.06] py-4 px-6">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link to="/"><Logo dark size={28} /></Link>
          <Link to="/" className="text-sm text-dark-text/50 hover:text-dark-text transition-colors">
            ← {lang === 'bn' ? 'ফিরে যান' : 'Back'}
          </Link>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12 sm:py-16">
        <p className="text-sm text-dark-text/40 mb-2">{c.updated}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.title}</h1>
        <p className="text-base text-primary font-medium mb-6">{c.intro}</p>
        <p className="text-[15px] text-dark-text/70 leading-[1.8] mb-10 pb-10 border-b border-white/[0.06] whitespace-pre-line">{c.prelude}</p>

        <div className="space-y-10">
          {c.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-white mb-3">{section.heading}</h2>
              <div className="text-[15px] text-dark-text/70 leading-[1.8] whitespace-pre-line">{section.body}</div>
            </section>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-6 px-6 text-center">
        <p className="text-xs text-dark-text/30">© {new Date().getFullYear()} CareConnect Ltd. · Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}
