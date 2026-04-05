import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import paymentMethods from '@/assets/payment-methods.png';

const forPatients = ['Find a Doctor', 'Video Consultation', 'Book Lab Test', 'Emergency', 'Read Reviews'];
const forDoctors = ['List Your Practice', 'Manage Schedule', 'Patient Reviews', 'BMDC Verification', 'Doctor Support'];
const company = ['About Us', 'How It Works', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'];

const socials = [
  { name: 'Facebook', icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'Email', icon: Mail },
];

export const Footer = () => (
  <footer className="bg-dark-bg pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
    <div className="container max-w-[1140px] mx-auto px-6">
      {/* Brand + social */}
      <div className="mb-8 lg:mb-0 lg:hidden">
        <Logo dark size={32} />
        <p className="mt-3 font-body font-light text-[14px] text-[rgba(255,255,255,0.60)] leading-[1.7] max-w-sm">
          Bangladesh's first platform connecting patients with verified doctors, built for real people, in real cities.
        </p>
        <div className="mt-4 flex gap-3">
          {socials.map((s) => (
            <a key={s.name} href="#" aria-label={s.name}
              className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-primary flex items-center justify-center transition-colors duration-200 group">
              <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <div className="mt-4">
          <img src={paymentMethods} alt="Accepted payment methods" className="max-w-[220px] h-auto opacity-80" loading="lazy" />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-6 lg:gap-12">
        {/* Brand — desktop only */}
        <div className="hidden lg:block">
          <Logo dark size={32} />
          <p className="mt-4 font-body font-light text-[15px] text-[rgba(255,255,255,0.60)] leading-[1.7]">
            Bangladesh's first platform connecting patients with verified doctors, built for real people, in real cities.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a key={s.name} href="#" aria-label={s.name}
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-primary flex items-center justify-center transition-colors duration-200 group">
                <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="mt-5">
            <img src={paymentMethods} alt="Accepted payment methods" className="max-w-[240px] h-auto opacity-80" loading="lazy" />
          </div>
        </div>

        {/* For Patients */}
        <div>
          <h4 className="font-body font-semibold text-[11px] sm:text-[13px] text-primary-foreground uppercase tracking-widest mb-4">
            For Patients
          </h4>
          <ul className="space-y-2.5">
            {forPatients.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground transition-colors duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Doctors */}
        <div>
          <h4 className="font-body font-semibold text-[11px] sm:text-[13px] text-primary-foreground uppercase tracking-widest mb-4">
            For Doctors
          </h4>
          <ul className="space-y-2.5">
            {forDoctors.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground transition-colors duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-body font-semibold text-[11px] sm:text-[13px] text-primary-foreground uppercase tracking-widest mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            {company.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground transition-colors duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(255,255,255,0.08)] mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-[13px] text-[rgba(255,255,255,0.40)]">
          © {new Date().getFullYear()} CareConnect. All rights reserved. Built for Bangladesh.
        </p>
        <p className="font-body text-[12px] text-[rgba(255,255,255,0.30)]">
          This platform does not provide medical advice. Always consult a qualified physician.
        </p>
      </div>
    </div>
  </footer>
);
