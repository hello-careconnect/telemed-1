// ─── All UI text in one place ────────────────────────────────────────────────
// To add a new language, extend every entry with a new key (e.g. `hi: '...'`).
// Usage:  tx(translations.nav.login, lang)

export const translations = {
  nav: {
    forPatients:  { en: 'For Patients',  bn: 'রোগীর জন্য' },
    forDoctors:   { en: 'For Doctors',   bn: 'ডাক্তারের জন্য' },
    forHospitals: { en: 'For Hospitals', bn: 'হাসপাতালের জন্য' },
    howItWorks:   { en: 'How it Works',  bn: 'কীভাবে কাজ করে' },
    login:        { en: 'Log in',        bn: 'লগ ইন' },
    joinWaitlist: { en: 'Join Waitlist', bn: 'ওয়েটলিস্টে যোগ করুন' },
  },

  hero: {
    badge:        { en: 'Early Access · Launching in Dhaka & Chattogram', bn: 'আর্লি অ্যাক্সেস · ঢাকা ও চট্টগ্রামে চালু হচ্ছে' },
    findThe:      { en: 'Find the',       bn: 'বিশ্বস্ত' },
    youCanTrust:  { en: 'you can trust.', bn: 'খুঁজুন সহজেই।' },
    words: {
      en: ['doctor', 'hospital', 'specialist', 'clinic'],
      bn: ['ডাক্তার', 'হাসপাতাল', 'স্পেশালিস্ট', 'ক্লিনিক'],
    },
    desc: {
      en: "Bangladesh's first platform that puts patients in control — verified credentials, honest reviews, and booking in minutes.",
      bn: 'বাংলাদেশের প্রথম প্ল্যাটফর্ম যেখানে রোগীরা নিজেরাই সিদ্ধান্ত নেন। যাচাইকৃত সনদ, বিশ্বস্ত রিভিউ এবং মিনিটেই বুকিং।',
    },
    rotatingLines: {
      en: ['Book in under 2 minutes.', 'Real reviews from real patients.', 'Video consults, 24/7.', 'No more guessing.'],
      bn: ['বুকিং করুন ২ মিনিটে।', 'রিয়েল রিভিউ, রিয়েল রোগী।', 'ভিডিও কনসালট, ২৪/৭।', 'অনুমান করার দরকার নেই।'],
    },
    joinWaitlist:   { en: 'Join the Waitlist', bn: 'ওয়েটলিস্টে যোগ করুন' },
    seeHowItWorks:  { en: 'See how it works',  bn: 'কীভাবে কাজ করে দেখুন' },
    doctorsJoining: { en: 'Doctors joining',   bn: 'ডাক্তাররা প্রতিদিন যোগ' },
    everyDay:       { en: 'every day',         bn: 'দিচ্ছেন' },
  },

  heroFeatures: {
    bmdc:    { title: { en: 'BMDC Verified Doctors',    bn: 'বিএমডিসি যাচাইকৃত ডাক্তার' }, desc: { en: 'Every doctor credential-checked & verified', bn: 'প্রতিটি ডাক্তারের সনদ যাচাই করা হয়েছে' } },
    reviews: { title: { en: 'Transparent Reviews',      bn: 'স্বচ্ছ রিভিউ' },               desc: { en: 'Real ratings from real patients',            bn: 'প্রকৃত রোগীদের সত্যিকারের রেটিং' } },
    video:   { title: { en: 'Video Consult 24/7',        bn: 'ভিডিও কনসালট ২৪/৭' },          desc: { en: 'See a doctor anytime, from anywhere',        bn: 'যেকোনো সময়, যেকোনো জায়গা থেকে ডাক্তার দেখান' } },
    booking: { title: { en: 'Instant Booking',           bn: 'তাৎক্ষণিক বুকিং' },             desc: { en: 'Book appointments in under 2 minutes',       bn: '২ মিনিটেরও কম সময়ে অ্যাপয়েন্টমেন্ট বুক করুন' } },
    ai:      { title: { en: 'AI-Powered Matching',       bn: 'এআই-চালিত ম্যাচিং' },            desc: { en: 'Find the right specialist for your needs',   bn: 'আপনার প্রয়োজন অনুযায়ী সঠিক বিশেষজ্ঞ খুঁজুন' } },
    nearby:  { title: { en: 'Nearby Hospitals',          bn: 'কাছের হাসপাতাল' },               desc: { en: 'Locate trusted clinics & hospitals near you', bn: 'কাছের বিশ্বস্ত ক্লিনিক ও হাসপাতাল খুঁজুন' } },
    health:  { title: { en: 'Health Records',            bn: 'স্বাস্থ্য রেকর্ড' },              desc: { en: 'Your medical history, always accessible',    bn: 'আপনার স্বাস্থ্য ইতিহাস, সবসময় হাতের নাগালে' } },
  },

  heroMobileGrid: {
    certified:    { label: { en: 'Certified Doctors',  bn: 'সার্টিফাইড ডাক্তার' }, desc: { en: 'BMDC verified credentials',   bn: 'বিএমডিসি যাচাইকৃত সনদ' } },
    availability: { label: { en: '24/7 Availability',  bn: '২৪/৭ পরিষেবা' },       desc: { en: 'Video consults anytime',      bn: 'যেকোনো সময় ভিডিও কনসালট' } },
    secure:       { label: { en: 'Secure & Private',   bn: 'নিরাপদ ও গোপনীয়' },   desc: { en: 'Your data, your control',     bn: 'আপনার ডেটা, আপনার নিয়ন্ত্রণ' } },
    easy:         { label: { en: 'Easy & Accessible',  bn: 'সহজ ও সুলভ' },          desc: { en: 'Book in under 2 mins',        bn: '২ মিনিটেরও কম সময়ে বুক করুন' } },
  },

  stats: {
    doctors:  { value: { en: '5,000+',  bn: '৫০০০+' },    label: { en: 'DOCTORS BEING VERIFIED', bn: 'ডাক্তার যাচাই হচ্ছেন' } },
    booking:  { value: { en: '< 2 min', bn: '< ২ মিনিট' }, label: { en: 'AVERAGE BOOKING TIME',   bn: 'গড় বুকিং সময়' } },
    video:    { value: { en: '24/7',    bn: '২৪/৭' },       label: { en: 'VIDEO CONSULTATIONS',    bn: 'ভিডিও কনসালটেশন' } },
    free:     { value: { en: 'Free',    bn: 'বিনামূল্যে' }, label: { en: 'FIRST CONSULTATION',     bn: 'প্রথম পরামর্শ' } },
  },
} as const;
