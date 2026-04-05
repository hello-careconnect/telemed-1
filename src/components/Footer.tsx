import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import paymentMethods from '@/assets/payment-methods.png';

const forPatients = ['Find a Doctor', 'Video Consultation', 'Book Lab Test', 'Emergency', 'Read Reviews'];
const forDoctors = ['List Your Practice', 'Manage Schedule', 'Patient Reviews', 'BMDC Verification', 'Doctor Support'];
const forHospitals = ['ERP System', 'Queue Manager', 'Smart Scheduling', 'OPD Management', 'TV Queue Display'];
const company = ['About Us', 'How It Works', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'];
const socials = [{ name: 'Facebook', icon: Facebook }, { name: 'Instagram', icon: Instagram }, { name: 'LinkedIn', icon: Linkedin }, { name: 'WhatsApp', icon: MessageCircle }, { name: 'Email', icon: Mail }];

export const Footer = () => (
  <footer className="relative bg-dark-bg pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 overflow-hidden">
    <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12">
        <div>
          <Logo dark size={32} />
          <p className="mt-4 font-body font-light text-[15px] text-dark-text/60 leading-[1.7]">Bangladesh's first platform connecting patients with verified doctors, built for real people, in real cities.</p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a key={s.name} href="#" aria-label={s.name} className="w-9 h-9 rounded-full liquid-glass-dark hover:bg-primary flex items-center justify-center transition-colors duration-200 group">
                <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="-mt-10"><img src={paymentMethods} alt="Accepted payment methods" className="max-w-[280px] h-auto opacity-80 -ml-5" loading="lazy" /></div>
        </div>
        <div>
          <h4 className="font-body font-semibold text-[13px] text-dark-text uppercase tracking-widest mb-5">For Patients</h4>
          <ul className="space-y-3">{forPatients.map((l) => (<li key={l}><a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">{l}</a></li>))}</ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-[13px] text-dark-text uppercase tracking-widest mb-5">For Doctors</h4>
          <ul className="space-y-3">{forDoctors.map((l) => (<li key={l}><a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">{l}</a></li>))}</ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-[13px] text-dark-text uppercase tracking-widest mb-5">For Hospitals</h4>
          <ul className="space-y-3">{forHospitals.map((l) => (<li key={l}><a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">{l}</a></li>))}</ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-[13px] text-dark-text uppercase tracking-widest mb-5">Company</h4>
          <ul className="space-y-3">{company.map((l) => (<li key={l}><a href="#" className="font-body font-light text-[14px] text-dark-text/60 hover:text-dark-text hover:translate-x-1 transition-all duration-200 inline-block">{l}</a></li>))}</ul>
        </div>
      </div>
      <div className="border-t border-dark-text/[0.08] mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body font-light text-[13px] text-dark-text/40">© {new Date().getFullYear()} CareConnect. All rights reserved. Built for Bangladesh.</p>
        <p className="font-body font-light text-[12px] text-dark-text/30">This platform does not provide medical advice. Always consult a qualified physician.</p>
      </div>
    </div>
  </footer>
);
