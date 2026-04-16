import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import paymentMethods from '@/assets/payment-methods.png';
import { useLang, tx } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';

const { footer: t } = translations;

const socials = [
  { name: 'Facebook',  icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'LinkedIn',  icon: Linkedin },
  { name: 'WhatsApp',  icon: MessageCircle },
  { name: 'Email',     icon: Mail },
];

export const Footer = () => {
  const { lang } = useLang();

  const banglaFont = lang === 'bn'
    ? { '--font-heading': 'var(--font-bangla)', '--font-body': 'var(--font-bangla)' } as React.CSSProperties
    : undefined;

  return (
    <footer style={banglaFont} className="relative bg-[#0a0a1a] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a1a] via-[#0f2524] to-[#0c1a1a]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0d9488] opacity-[0.08] blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#0f766e] opacity-[0.06] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Logo dark size={32} />
            <p className="mt-4 font-body font-light text-[15px] text-dark-text/60 leading-[1.7]">
              {tx(t.description, lang)}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href="#" aria-label={s.name} className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-primary flex items-center justify-center transition-colors duration-200 group">
                  <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="-mt-10">
              <img src={paymentMethods} alt="Accepted payment methods" className="max-w-[280px] h-auto opacity-80 -ml-5" loading="lazy" />
            </div>
          </div>

          {/* For Patients */}
          <div>
            <h4 className={`font-body font-semibold text-[13px] text-dark-text mb-5 ${lang === 'en' ? 'uppercase tracking-widest' : ''}`}>
              {tx(t.forPatients, lang)}
            </h4>
            <ul className="space-y-3">
              {t.patientLinks.map((l) => (
                <li key={l.en}>
                  <a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">
                    {tx(l, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h4 className={`font-body font-semibold text-[13px] text-dark-text mb-5 ${lang === 'en' ? 'uppercase tracking-widest' : ''}`}>
              {tx(t.forDoctors, lang)}
            </h4>
            <ul className="space-y-3">
              {t.doctorLinks.map((l) => (
                <li key={l.en}>
                  <a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">
                    {tx(l, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hospitals */}
          <div>
            <h4 className={`font-body font-semibold text-[13px] text-dark-text mb-5 ${lang === 'en' ? 'uppercase tracking-widest' : ''}`}>
              {tx(t.forHospitals, lang)}
            </h4>
            <ul className="space-y-3">
              {t.hospitalLinks.map((l) => (
                <li key={l.en}>
                  <a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">
                    {tx(l, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`font-body font-semibold text-[13px] text-dark-text mb-5 ${lang === 'en' ? 'uppercase tracking-widest' : ''}`}>
              {tx(t.company, lang)}
            </h4>
            <ul className="space-y-3">
              {t.companyLinks.map((l) => (
                <li key={l.en}>
                  <a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">
                    {tx(l, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-text/[0.08] mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body font-light text-[13px] text-dark-text/40">
            © {new Date().getFullYear()} CareConnect. {tx(t.copyright, lang)}
          </p>
          <p className="font-body font-light text-[12px] text-dark-text/30">
            {tx(t.disclaimer, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};
