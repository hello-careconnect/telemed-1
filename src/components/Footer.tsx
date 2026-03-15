import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';
import paymentMethods from '@/assets/payment-methods.png';

const forPatients = ['Find a Doctor', 'Video Consultation', 'Book Lab Test', 'Emergency', 'Read Reviews'];
const forDoctors = ['List Your Practice', 'Manage Schedule', 'Patient Reviews', 'BMDC Verification', 'Doctor Support'];
const company = ['About Us', 'How It Works', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'];

const socials = [
  { name: 'Facebook', icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Email', icon: Mail },
];

export const Footer = () => (
  <footer className="bg-dark-bg pt-20 pb-10">
    <div className="container max-w-[1440px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Logo dark size={32} />
          <p className="mt-4 font-body font-light text-[15px] text-[rgba(255,255,255,0.60)] leading-[1.7]">
            Bangladesh's first platform connecting patients with verified doctors — built for real people, in real cities.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-primary flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-primary-foreground text-[12px] font-bold">{s[0]}</span>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <img src={paymentMethods} alt="Accepted payment methods" className="max-w-full h-auto opacity-80" loading="lazy" />
          </div>
        </div>

        {/* For Patients */}
        <div>
          <h4 className="font-body font-semibold text-[13px] text-primary-foreground uppercase tracking-widest mb-5">
            For Patients
          </h4>
          <ul className="space-y-3">
            {forPatients.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Doctors */}
        <div>
          <h4 className="font-body font-semibold text-[13px] text-primary-foreground uppercase tracking-widest mb-5">
            For Doctors
          </h4>
          <ul className="space-y-3">
            {forDoctors.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-body font-semibold text-[13px] text-primary-foreground uppercase tracking-widest mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {company.map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-[14px] text-[rgba(255,255,255,0.60)] hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(255,255,255,0.08)] mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
