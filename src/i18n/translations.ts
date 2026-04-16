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
    findThe:      { en: 'Find the',       bn: 'সহজেই বিশ্বস্ত' },
    youCanTrust:  { en: 'you can trust.', bn: 'খুঁজুন।' },
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

  howItWorks: {
    badge:    { en: 'Introducing AI-powered healthcare', bn: 'এআই-চালিত স্বাস্থ্যসেবার সাথে পরিচয় করুন' },
    heading:  { en: 'How CareConnect',                  bn: 'CareConnect কীভাবে' },
    headingAccent: { en: 'works',                       bn: 'কাজ করে' },
    subtext:  { en: 'From your first message to your care plan - 4 simple steps.', bn: 'আপনার প্রথম বার্তা থেকে কেয়ার প্ল্যান পর্যন্ত — ৪টি সহজ ধাপ।' },
    steps: [
      {
        step:   { en: 'Step 01', bn: 'ধাপ ০১' },
        title:  { en: "Share What's on Your Mind",   bn: 'আপনার কথা বলুন' },
        body:   { en: 'Tell us your symptoms or describe your health concern. Our smart system matches you to the right specialist instantly.', bn: 'আপনার উপসর্গ বা স্বাস্থ্য সমস্যা বলুন। আমাদের স্মার্ট সিস্টেম আপনাকে সাথে সাথে সঠিক বিশেষজ্ঞের সাথে মিলিয়ে দেবে।' },
        detail: { en: 'Describe in your own words, no medical jargon needed. Available in Bangla & English.', bn: 'নিজের ভাষায় বলুন, মেডিকেল পরিভাষা জানার দরকার নেই। বাংলা ও ইংরেজিতে উপলব্ধ।' },
      },
      {
        step:   { en: 'Step 02', bn: 'ধাপ ০২' },
        title:  { en: 'Match with the Right Doctor',  bn: 'সঠিক ডাক্তার খুঁজুন' },
        body:   { en: 'Browse verified doctors by specialty, read real patient reviews, and choose the one that fits your needs and schedule.', bn: 'বিশেষত্ব অনুযায়ী যাচাইকৃত ডাক্তার দেখুন, রিয়েল রিভিউ পড়ুন এবং আপনার সুবিধামতো ডাক্তার বেছে নিন।' },
        detail: { en: 'Every doctor is BMDC-verified. Filter by rating, availability, or fee.', bn: 'প্রতিটি ডাক্তার বিএমডিসি-যাচাইকৃত। রেটিং, সময়সূচি বা ফি অনুযায়ী ফিল্টার করুন।' },
      },
      {
        step:   { en: 'Step 03', bn: 'ধাপ ০৩' },
        title:  { en: 'Talk Face-to-Face',            bn: 'সরাসরি কথা বলুন' },
        body:   { en: 'Meet your doctor via secure HD video call or visit in-person. Get the care you need, when you need it, 24/7.', bn: 'নিরাপদ এইচডি ভিডিও কলে বা সরাসরি দেখা করুন। যখন দরকার, তখনই সেবা নিন, ২৪/৭।' },
        detail: { en: 'End-to-end encrypted. Works on any device, no app download required.', bn: 'এন্ড-টু-এন্ড এনক্রিপ্টেড। যেকোনো ডিভাইসে কাজ করে, অ্যাপ ডাউনলোডের দরকার নেই।' },
      },
      {
        step:   { en: 'Step 04', bn: 'ধাপ ০৪' },
        title:  { en: 'Get Your Care Plan',           bn: 'কেয়ার প্ল্যান নিন' },
        body:   { en: 'Receive a digital prescription, order medicines, and get follow-up reminders, all from one platform.', bn: 'ডিজিটাল প্রেসক্রিপশন পান, ওষুধ অর্ডার করুন এবং ফলো-আপ রিমাইন্ডার পান — সব একটি প্ল্যাটফর্মে।' },
        detail: { en: 'Prescriptions sent directly to your phone. Medicine delivery available.', bn: 'প্রেসক্রিপশন সরাসরি আপনার ফোনে। ওষুধ ডেলিভারিও পাওয়া যায়।' },
      },
    ],
  },

  faqSection: {
    badge:         { en: 'FAQ',                                  bn: 'সচরাচর জিজ্ঞাসা' },
    headingLine1:  { en: 'Got questions?',                       bn: 'মনে কোনো প্রশ্ন আছে?' },
    headingLine2:  { en: "We've got answers.",                   bn: 'উত্তর আছে এখানেই।' },
    subtext:       { en: "Everything you need to know before joining CareConnect. Can't find your answer? Reach out to us anytime.", bn: 'CareConnect-এ যোগ দেওয়ার আগে আপনার যা জানা দরকার সব কিছু এখানে আছে। উত্তর না পেলে যেকোনো সময় আমাদের সাথে যোগাযোগ করুন।' },
    statEarlyLabel:   { en: 'Early signups',         bn: 'আর্লি সাইনআপ' },
    statRatingLabel:  { en: 'User rating',           bn: 'ব্যবহারকারীর রেটিং' },
    statSupportLabel: { en: 'Support',               bn: 'সাপোর্ট' },
    faqs: [
      {
        q: { en: 'How do I know which specialist is right for me?',      bn: 'কোন বিশেষজ্ঞ আমার জন্য সঠিক তা কীভাবে বুঝব?' },
        a: { en: 'Our matching system considers 3 key factors: your symptoms and health history, specialist success rates with similar cases, and your preferred communication style.', bn: 'আমাদের ম্যাচিং সিস্টেম ৩টি মূল বিষয় বিবেচনা করে: আপনার লক্ষণ ও স্বাস্থ্য ইতিহাস, একই ধরনের ক্ষেত্রে বিশেষজ্ঞের সাফল্যের হার এবং আপনার পছন্দের যোগাযোগের ধরন।' },
      },
      {
        q: { en: 'When does the platform launch?',                        bn: 'প্ল্যাটফর্মটি কখন লঞ্চ হবে?' },
        a: { en: "We're targeting launch within 4–6 weeks in Dhaka and Chattogram. Waitlist members are notified first and get first access.", bn: 'আমরা ঢাকা ও চট্টগ্রামে ৪-৬ সপ্তাহের মধ্যে লঞ্চ করার লক্ষ্য রাখি। ওয়েটলিস্ট সদস্যরা সবার আগে জানতে পারবেন এবং প্রথম অ্যাক্সেস পাবেন।' },
      },
      {
        q: { en: 'What happens after I book my first appointment?',       bn: 'প্রথম অ্যাপয়েন্টমেন্ট বুক করার পরে কী হবে?' },
        a: { en: "You'll receive a confirmation with your doctor's details, appointment time, and preparation tips. You can also video-consult from home.", bn: 'আপনি আপনার ডাক্তারের বিবরণ, অ্যাপয়েন্টমেন্টের সময় এবং প্রস্তুতির টিপস সহ একটি কনফার্মেশন পাবেন। ঘরে বসেও ভিডিও কনসালট করতে পারবেন।' },
      },
      {
        q: { en: 'How does your AI monitoring work?',                     bn: 'আপনাদের এআই মনিটরিং কীভাবে কাজ করে?' },
        a: { en: 'Our diagnostic systems learn from 300k+ health data points to surface insights most doctors might miss, always under physician supervision.', bn: 'আমাদের ডায়াগনস্টিক সিস্টেম ৩ লক্ষাধিক স্বাস্থ্য ডেটা পয়েন্ট থেকে শিখে এমন তথ্য সামনে আনে যা অনেক ডাক্তার হয়তো মিস করতে পারেন — সবসময় চিকিৎসকের তত্ত্বাবধানে।' },
      },
      {
        q: { en: 'Will I know costs before treatment?',                   bn: 'চিকিৎসার আগে কি আমি খরচ জানতে পারব?' },
        a: { en: 'Yes, transparent pricing is core to our platform. You see the full cost before booking. No hidden fees. Pay via bKash, Nagad, or card.', bn: 'হ্যাঁ, স্বচ্ছ মূল্য নির্ধারণ আমাদের প্ল্যাটফর্মের মূল বিষয়। বুকিংয়ের আগেই সম্পূর্ণ খরচ দেখতে পাবেন। কোনো লুকানো ফি নেই। বিকাশ, নগদ বা কার্ডে পেমেন্ট করুন।' },
      },
      {
        q: { en: "I'm a doctor. How do I list my practice?",              bn: 'আমি একজন ডাক্তার। কীভাবে আমার প্র্যাকটিস লিস্ট করব?' },
        a: { en: "Use the same waitlist form above and select 'I'm a Doctor.' Our team will reach out with a dedicated onboarding process and your free verified listing.", bn: "উপরের ওয়েটলিস্ট ফর্মটি ব্যবহার করুন এবং 'আমি একজন ডাক্তার' নির্বাচন করুন। আমাদের টিম একটি ডেডিকেটেড অনবোর্ডিং প্রক্রিয়া ও বিনামূল্যে ভেরিফাইড লিস্টিং নিয়ে যোগাযোগ করবে।" },
      },
    ],
  },

  footer: {
    description: { en: "Bangladesh's first platform connecting patients with verified doctors, built for real people, in real cities.", bn: 'বাংলাদেশের প্রথম প্ল্যাটফর্ম যেখানে রোগীরা যাচাইকৃত ডাক্তারদের সাথে সংযুক্ত হতে পারেন। আসল মানুষের জন্য, আসল শহরে তৈরি।' },
    forPatients:  { en: 'For Patients',          bn: 'রোগীদের জন্য' },
    forDoctors:   { en: 'For Doctors',           bn: 'ডাক্তারের জন্য' },
    forHospitals: { en: 'For Hospitals',         bn: 'হাসপাতালের জন্য' },
    company:      { en: 'Company',               bn: 'কোম্পানি' },
    patientLinks: [
      { en: 'Find a Doctor',        bn: 'ডাক্তার খুঁজুন' },
      { en: 'Video Consultation',   bn: 'ভিডিও কনসালটেশন' },
      { en: 'Book Lab Test',        bn: 'ল্যাব টেস্ট বুকিং' },
      { en: 'Emergency',            bn: 'জরুরি সেবা' },
      { en: 'Read Reviews',         bn: 'রিভিউ পড়ুন' },
    ],
    doctorLinks: [
      { en: 'List Your Practice',   bn: 'প্রাকটিস লিস্টিং করুন' },
      { en: 'Manage Schedule',      bn: 'শিডিউল ম্যানেজমেন্ট' },
      { en: 'Patient Reviews',      bn: 'পেশেন্ট রিভিউ' },
      { en: 'BMDC Verification',    bn: 'BMDC ভেরিফিকেশন' },
      { en: 'Doctor Support',       bn: 'ডক্টর সাপোর্ট' },
    ],
    hospitalLinks: [
      { en: 'ERP System',           bn: 'ERP সিস্টেম' },
      { en: 'Queue Manager',        bn: 'কিউ ম্যানেজার' },
      { en: 'Smart Scheduling',     bn: 'স্মার্ট শিডিউলিং' },
      { en: 'OPD Management',       bn: 'OPD ম্যানেজমেন্ট' },
      { en: 'TV Queue Display',     bn: 'TV কিউ ডিসপ্লে' },
    ],
    companyLinks: [
      { en: 'About Us',             bn: 'আমাদের সম্পর্কে' },
      { en: 'How It Works',         bn: 'কীভাবে কাজ করে' },
      { en: 'Careers',              bn: 'ক্যারিয়ার' },
      { en: 'Privacy Policy',       bn: 'প্রাইভেসি পলিসি' },
      { en: 'Terms of Service',     bn: 'ব্যবহারের শর্তাবলি' },
      { en: 'Contact',              bn: 'যোগাযোগ করুন' },
    ],
    copyright:   { en: 'All rights reserved. Built for Bangladesh.',                     bn: 'সমস্ত অধিকার সংরক্ষিত। বাংলাদেশের জন্য তৈরি।' },
    disclaimer:  { en: 'This platform does not provide medical advice. Always consult a qualified physician.', bn: 'এই প্ল্যাটফর্মটি চিকিৎসা পরামর্শ প্রদান করে না। সর্বদা একজন যোগ্য চিকিৎসকের পরামর্শ নিন।' },
  },

  exitIntent: {
    decorative:  { en: 'Your health, our commitment — anytime, anywhere.',  bn: 'আপনার স্বাস্থ্য, আমাদের অঙ্গীকার, যেকোনো সময়, যেকোনো প্রান্তে।' },
    badge:       { en: "Don't miss your spot",                              bn: 'সুযোগটি হাতছাড়া করবেন না' },
    heading1:    { en: '412 spots left.',                                   bn: '৪১২টি স্পট বাকি।' },
    heading2:    { en: 'Claim yours.',                                      bn: 'আপনারটি নিন।' },
    subtext:     { en: 'Your free consultation is waiting, but only for the first 500.', bn: 'আপনার ফ্রি কনসালটেশন আপনার অপেক্ষায়, শুধুমাত্র প্রথম ৫০০ জনের জন্য।' },
    placeholder: { en: 'your@email.com',                                   bn: 'আপনার ইমেইল দিন' },
    cta:         { en: 'Claim My Free Spot',                               bn: 'আমার ফ্রি স্পটটি বুক করুন' },
    dismiss:     { en: "No thanks, I'll wait",                             bn: 'না ধন্যবাদ, আমি পরেই দেখব' },
  },

  doctorsTeam: {
    badge:         { en: 'Our Specialists',       bn: 'আমাদের স্পেশালিস্ট' },
    headingBefore: { en: 'Meet our',              bn: 'আমাদের' },
    headingAccent: { en: 'expert',                bn: 'বিশেষজ্ঞ' },
    headingAfter:  { en: 'doctors',               bn: 'ডাক্তারদের সাথে পরিচিত হোন' },
    subtext:       { en: "Bangladesh's most trusted doctors are verifying their listings ahead of launch.", bn: 'লঞ্চের আগেই বাংলাদেশের সবচেয়ে নির্ভরযোগ্য ডাক্তাররা তাদের প্রোফাইল ভেরিফাই করে নিচ্ছেন।' },
    verified:      { en: 'Verified',              bn: 'ভেরিফাইড' },
    scheduleCall:  { en: 'Schedule a Call',       bn: 'কল নিবন্ধন করুন' },
    checkOthers:   { en: 'Check Other Doctors',   bn: 'অন্যান্য ডাক্তারও দেখুন' },
    specialties: [
      { en: 'Family Medicine Specialist', bn: 'ফ্যামিলি মেডিসিন স্পেশালিস্ট' },
      { en: 'Cardiology Expert',          bn: 'কার্ডিওলজি এক্সপার্ট' },
      { en: 'Gynecologist',               bn: 'গাইনোকোলজিস্ট' },
      { en: 'Dermatologist',              bn: 'ডার্মাটোলজিস্ট' },
      { en: 'Neurologist',                bn: 'নিউরোলজিস্ট' },
      { en: 'Orthopedic Surgeon',         bn: 'অর্থোপেডিক সার্জন' },
    ],
  },

  incentiveBlock: {
    badge:        { en: 'Limited Early Access — Closing Soon',         bn: 'লিমিটেড আর্লি অ্যাক্সেস — শেষ হচ্ছে দ্রুতই' },
    headingBefore:{ en: "Health shouldn't be",                         bn: 'স্বাস্থ্যসেবা হওয়া উচিত নয়' },
    headingAccent:{ en: 'complicated.',                                 bn: 'জটিল।' },
    subtext:      { en: 'Join CareConnect and get your first GP consultation free. Worth BDT 300 — no card, no catch.', bn: 'CareConnect-এ যোগ দিন এবং আপনার প্রথম কনসালটেশন পান একদম ফ্রি। ৩০০ টাকা সমমূলার এই অফারটি পেতে কোনো হিডেন চার্জ বা কার্ডের প্রয়োজন নেই।' },
    days:         { en: 'Days',    bn: 'দিন' },
    hours:        { en: 'Hours',   bn: 'ঘন্টা' },
    mins:         { en: 'Mins',    bn: 'মিনিট' },
    secs:         { en: 'Secs',    bn: 'সেকেন্ড' },
    cta:          { en: 'Claim Your Free Consultation',                 bn: 'আপনার ফ্রি কনসালটেশন বুঝে নিন' },
    spotsLeft:    { en: (r: number, t: number) => `${r} of ${t} spots left`,   bn: (r: number, t: number) => `${t}টির মধ্যে ${r}টি স্পট বাকি` },
    claimed:      { en: (p: number) => `${p}% claimed`,                        bn: (p: number) => `${p}% ক্লেইম হয়েছে` },
    trust: [
      { en: 'No payment needed', bn: 'কোনো পেমেন্ট লাগবে না' },
      { en: 'Instant access',    bn: 'ইন্সট্যান্ট অ্যাক্সেস' },
      { en: 'Verified doctors',  bn: 'ভেরিফাইড ডাক্তার' },
    ],
  },

  waitlistForm: {
    badge:          { en: 'Early Access · Limited Spots',        bn: 'আর্লি অ্যাক্সেস · লিমিটেড স্পট' },
    headingBefore:  { en: 'Join the',                            bn: 'ওয়েটলিস্টে' },
    headingAccent:  { en: 'waitlist',                            bn: 'যোগ দিন' },
    subBefore:      { en: 'First 500 signups receive a',         bn: 'প্রথম ৫০০ জন সাইন-আপকারী পাচ্ছেন' },
    subAccent:      { en: 'free GP consultation',                bn: 'একটি ফ্রি কনসালটেশন' },
    subAfter:       { en: ', worth BDT 300.',                    bn: ', ৩০০ টাকা সমমূল।' },
    labelName:      { en: 'Full name',                           bn: 'পুরো নাম' },
    placeholderName:{ en: 'Your full name',                      bn: 'আপনার নাম লিখুন' },
    labelEmail:     { en: 'Email',                               bn: 'ইমেইল' },
    labelPhone:     { en: 'Phone',                               bn: 'ফোন নম্বর' },
    labelCity:      { en: 'City',                                bn: 'শহর' },
    selectCity:     { en: 'Select city',                         bn: 'শহর নির্বাচন করুন' },
    cities: [
      { en: 'Dhaka',      bn: 'ঢাকা' },
      { en: 'Chattogram', bn: 'চট্টগ্রাম' },
      { en: 'Sylhet',     bn: 'সিলেট' },
      { en: 'Rajshahi',   bn: 'রাজশাহী' },
      { en: 'Other',      bn: 'অন্যান্য' },
    ],
    roleLabel:      { en: 'I am a…',                             bn: 'আমি একজন...' },
    rolePatient:    { title: { en: 'Patient',  bn: 'রোগী' },     desc: { en: 'Find & book doctors',    bn: 'ডাক্তার খুঁজুন ও বুক করুন' } },
    roleDoctor:     { title: { en: 'Doctor',   bn: 'ডাক্তার' },  desc: { en: 'List your practice',     bn: 'আপনার প্রাকটিস লিস্ট করুন' } },
    roleHospital:   { title: { en: 'Hospital', bn: 'হাসপাতাল' }, desc: { en: 'Manage facility',        bn: 'ফ্যাসিলিটি ম্যানেজ করুন' } },
    doctorNote:     { en: 'Doctors get a free verified listing at launch.',      bn: 'ডাক্তাররা লঞ্চে বিনামূল্যে ভেরিফাইড লিস্টিং পাবেন।' },
    hospitalNote:   { en: 'Hospitals get free ERP onboarding at launch.',        bn: 'হাসপাতালগুলো লঞ্চে বিনামূল্যে ইআরপি অনবোর্ডিং পাবে।' },
    submitIdle:     { en: 'Claim My Free Consultation',          bn: 'আমার ফ্রি কনসালটেশন নিন' },
    submitSuccess:  { en: "You're on the list!",                 bn: 'আপনি তালিকায় আছেন!' },
    privacy:        { en: 'No spam. Unsubscribe anytime.',       bn: 'কোনো স্প্যাম নয়। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।' },
    spotsLeft:      { en: '412 of 500 spots left',               bn: '৫০০ স্পটের মধ্যে ৪১২টি খালি আছে' },
    claimed:        { en: '18% claimed',                         bn: '১৮% ক্লেইম করা হয়েছে' },
  },

  doctorJourney: {
    badge:   { en: 'For Doctors',                                                        bn: 'ডাক্তারদের জন্য' },
    heading: { en: 'Grow your practice with CareConnect',                                bn: 'CareConnect-এর মাধ্যমে আপনার প্র্যাকটিস বাড়ান' },
    subtext: { en: 'From verified listing to analytics. Everything you need to manage and grow your patient base.', bn: 'ভেরিফাইড লিস্টিং থেকে অ্যানালিটিক্স পর্যন্ত। আপনার রোগীর ভিত্তি পরিচালনা ও বৃদ্ধি করতে যা যা দরকার সব এক জায়গায়।' },
    features: [
      {
        title:       { en: 'Free Verified Listing',        bn: 'ফ্রি ভেরিফাইড লিস্টিং' },
        description: { en: 'Create your professional profile at no cost. Include qualifications, specialties, chamber hours, and accept online bookings. BMDC verification badge increases patient trust immediately.', bn: 'বিনামূল্যে আপনার প্রফেশনাল প্রোফাইল তৈরি করুন। যোগ্যতা, বিশেষত্ব, চেম্বারের সময় যুক্ত করুন এবং অনলাইন বুকিং গ্রহণ করুন। বিএমডিসি ভেরিফিকেশন ব্যাজ তাৎক্ষণিকভাবে রোগীর আস্থা বাড়ায়।' },
      },
      {
        title:       { en: 'Reach Verified Patients',      bn: 'ভেরিফাইড রোগীদের কাছে পৌঁছান' },
        description: { en: 'Patients on CareConnect are verified and serious. No spam bookings, no no-shows. Build your reputation with genuine reviews that are tied to real appointments.', bn: 'CareConnect-এর রোগীরা যাচাইকৃত এবং সিরিয়াস। স্প্যাম বুকিং নেই, নো-শো নেই। প্রকৃত অ্যাপয়েন্টমেন্টের সাথে যুক্ত বিশ্বস্ত রিভিউ দিয়ে আপনার সুনাম গড়ুন।' },
      },
      {
        title:       { en: 'Issue Digital Prescriptions',  bn: 'ডিজিটাল প্রেসক্রিপশন ইস্যু করুন' },
        description: { en: 'Write and send prescriptions digitally during or after any consultation. Patients receive a PDF immediately. Your records stay organized automatically.', bn: 'যেকোনো কনসালটেশনের সময় বা পরে ডিজিটালি প্রেসক্রিপশন লিখুন ও পাঠান। রোগীরা সাথে সাথে পিডিএফ পান। আপনার রেকর্ড স্বয়ংক্রিয়ভাবে গোছানো থাকে।' },
      },
      {
        title:       { en: 'Practice Analytics Dashboard', bn: 'প্র্যাকটিস অ্যানালিটিক্স ড্যাশবোর্ড' },
        description: { en: 'See your patient reach, profile views, booking rates, and revenue trends in one clean dashboard. Know which specialties drive the most appointments.', bn: 'একটি পরিষ্কার ড্যাশবোর্ডে আপনার রোগীর পরিধি, প্রোফাইল ভিউ, বুকিং রেট ও আয়ের ধারা দেখুন। কোন বিশেষত্ব সবচেয়ে বেশি অ্যাপয়েন্টমেন্ট আনে তা জানুন।' },
      },
      {
        title:       { en: 'Smart Appointment Scheduler',  bn: 'স্মার্ট অ্যাপয়েন্টমেন্ট শিডিউলার' },
        description: { en: 'Manage your full schedule from your phone. Receive appointment reminders, see patient status at a glance, approve rescheduling requests, and reduce no-shows automatically.', bn: 'ফোন থেকে সম্পূর্ণ শিডিউল পরিচালনা করুন। অ্যাপয়েন্টমেন্ট রিমাইন্ডার পান, রোগীর অবস্থা এক নজরে দেখুন, রিশিডিউল অনুরোধ অনুমোদন করুন এবং নো-শো স্বয়ংক্রিয়ভাবে কমান।' },
      },
      {
        title:       { en: 'Advanced Profile Editor',      bn: 'অ্যাডভান্সড প্রোফাইল এডিটর' },
        description: { en: 'Control every aspect of your public profile. Update chamber times, fees, accepted insurance, and photos. Add services. Manage your online presence as professionally as your practice.', bn: 'আপনার পাবলিক প্রোফাইলের প্রতিটি দিক নিয়ন্ত্রণ করুন। চেম্বারের সময়, ফি, বীমা ও ছবি আপডেট করুন। আপনার অনলাইন উপস্থিতি আপনার প্র্যাকটিসের মতোই প্রফেশনালভাবে পরিচালনা করুন।' },
      },
    ],
  },

  hospitalJourney: {
    badge:   { en: 'For Hospitals and Clinics',                                          bn: 'হাসপাতাল এবং ক্লিনিকের জন্য' },
    heading: { en: 'Run smarter operations from every touchpoint',                       bn: 'প্রতিটি ধাপে স্মার্ট অপারেশন পরিচালনা করুন' },
    subtext: { en: 'A complete digital infrastructure for modern healthcare facilities in Bangladesh.', bn: 'বাংলাদেশের আধুনিক স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য একটি সম্পূর্ণ ডিজিটাল অবকাঠামো।' },
    features: [
      {
        title:       { en: 'ERP System',                   bn: 'ইআরপি সিস্টেম' },
        description: { en: 'A unified system connecting your OPD, pharmacy, billing, and records. Reduce manual coordination, eliminate data silos, and operate every department from one interface.', bn: 'আপনার ওপিডি, ফার্মেসি, বিলিং ও রেকর্ড সংযুক্তকারী একটি একীভূত সিস্টেম। ম্যানুয়াল সমন্বয় কমান, ডেটা সাইলো দূর করুন এবং একটি ইন্টারফেস থেকে প্রতিটি বিভাগ পরিচালনা করুন।' },
        subFeatures: [],
      },
      {
        title:       { en: 'Intelligent Queue Manager',    bn: 'ইন্টেলিজেন্ট কিউ ম্যানেজার' },
        description: { en: 'Replace chaotic waiting rooms with a smart digital queue. Patients check in via phone or reception. Staff see real-time status. Delays update automatically.', bn: 'বিশৃঙ্খল ওয়েটিং রুমের পরিবর্তে স্মার্ট ডিজিটাল কিউ ব্যবহার করুন। রোগীরা ফোন বা রিসেপশনের মাধ্যমে চেক-ইন করেন। স্টাফ রিয়েল-টাইম অবস্থা দেখেন। বিলম্ব স্বয়ংক্রিয়ভাবে আপডেট হয়।' },
        subFeatures: [
          { en: 'Reduced wait time and chaos at OPD',                                        bn: 'ওপিডিতে অপেক্ষার সময় ও বিশৃঙ্খলা কমায়' },
          { en: 'Higher appointment reliability',                                             bn: 'অ্যাপয়েন্টমেন্টের নির্ভরযোগ্যতা বৃদ্ধি' },
          { en: "Efficient utilisation of doctor's time",                                     bn: 'ডাক্তারের সময়ের দক্ষ ব্যবহার' },
          { en: 'Real-time patient status: check-in, check-out, no-show, late arrivals, wait time', bn: 'রিয়েল-টাইম রোগীর অবস্থা: চেক-ইন, চেক-আউট, নো-শো, দেরিতে আসা, অপেক্ষার সময়' },
        ],
      },
      {
        title:       { en: 'Smart Scheduling Engine',      bn: 'স্মার্ট শিডিউলিং ইঞ্জিন' },
        description: { en: 'Appointment duration calculated from specialty, visit type, and historical data. Doctor calendars modelled as virtual queues. SLAs auto-applied based on appointment type.', bn: 'বিশেষত্ব, ভিজিটের ধরন ও ঐতিহাসিক ডেটা থেকে অ্যাপয়েন্টমেন্টের সময়কাল গণনা করা হয়। ডাক্তারের ক্যালেন্ডার ভার্চুয়াল কিউ হিসেবে মডেল করা। অ্যাপয়েন্টমেন্টের ধরন অনুযায়ী এসএলএ স্বয়ংক্রিয়ভাবে প্রযোজ্য।' },
        subFeatures: [
          { en: "Doctor's calendar modelled as a virtual queue",          bn: 'ডাক্তারের ক্যালেন্ডার ভার্চুয়াল কিউ হিসেবে মডেল করা' },
          { en: 'Duration based on specialty and historical data',        bn: 'বিশেষত্ব ও ঐতিহাসিক ডেটার ভিত্তিতে সময়কাল নির্ধারণ' },
          { en: 'SLAs for confirmed, waitlisted, and walk-in patients',   bn: 'কনফার্মড, ওয়েটলিস্টেড ও ওয়াক-ইন রোগীদের জন্য এসএলএ' },
        ],
      },
      {
        title:       { en: 'OPD Management System',        bn: 'OPD ম্যানেজমেন্ট সিস্টেম' },
        description: { en: 'A single interface manages multiple centers, departments, and doctors simultaneously. Algorithm-driven scheduling with minimal manual intervention.', bn: 'একটি একক ইন্টারফেস থেকে একসাথে একাধিক সেন্টার, বিভাগ ও ডাক্তার পরিচালনা করুন। ন্যূনতম ম্যানুয়াল হস্তক্ষেপে অ্যালগরিদম-চালিত শিডিউলিং।' },
        subFeatures: [
          { en: 'Increases doctor yield by up to 20%',                             bn: 'ডাক্তারের উৎপাদনশীলতা ২০% পর্যন্ত বৃদ্ধি করে' },
          { en: 'Reduces patient wait time by up to 8%',                           bn: 'রোগীর অপেক্ষার সময় ৮% পর্যন্ত কমায়' },
          { en: 'Single interface for multiple centers and departments',            bn: 'একাধিক সেন্টার ও বিভাগের জন্য একক ইন্টারফেস' },
          { en: 'Enables easy scheduling for resources and health checkups',        bn: 'রিসোর্স ও হেলথ চেকআপের জন্য সহজ শিডিউলিং' },
        ],
      },
      {
        title:       { en: 'TV Queue Management System',   bn: 'TV কিউ ম্যানেজমেন্ট সিস্টেম' },
        description: { en: 'Display live queue status on waiting room screens. Dynamic updates reflect changes instantly. Handle online and walk-in patients from one unified view.', bn: 'ওয়েটিং রুমের স্ক্রিনে লাইভ কিউ অবস্থা প্রদর্শন করুন। ডায়নামিক আপডেট তাৎক্ষণিকভাবে পরিবর্তন প্রতিফলিত করে। একটি একীভূত ভিউ থেকে অনলাইন ও ওয়াক-ইন রোগী পরিচালনা করুন।' },
        subFeatures: [
          { en: 'Dynamic queuing automatically reflects schedule changes and delays', bn: 'ডায়নামিক কিউ স্বয়ংক্রিয়ভাবে শিডিউল পরিবর্তন ও বিলম্ব প্রতিফলিত করে' },
          { en: 'Multiple doctor OPD on one screen',                                 bn: 'একটি স্ক্রিনে একাধিক ডাক্তারের ওপিডি' },
          { en: 'Unified queue for online appointments and walk-in patients',        bn: 'অনলাইন অ্যাপয়েন্টমেন্ট ও ওয়াক-ইন রোগীদের জন্য একীভূত কিউ' },
        ],
      },
    ],
  },

  services: {
    badge:    { en: 'Our Services',                   bn: 'আমাদের সেবা' },
    heading:  { en: 'Our consultation',               bn: 'আমাদের কনসালটেশন' },
    headingAccent: { en: 'services',                  bn: 'সেবা' },
    subtext:  { en: 'Comprehensive healthcare at your fingertips, from general checkups to specialized treatments.', bn: 'সাধারণ চেকআপ থেকে শুরু করে বিশেষজ্ঞ চিকিৎসা, সব ধরণের স্বাস্থ্যসেবা এখন আপনার হাতের মুঠোয়।' },
    items: [
      { title: { en: 'General Health Consultations',   bn: 'সাধারণ স্বাস্থ্য সেবা' },        desc: { en: 'Talk to certified GPs, get prescriptions, and manage your health, all from home.',                                      bn: 'সার্টিফাইড জিপির সাথে কথা বলুন, প্রেসক্রিপশন নিন এবং ঘরে বসেই আপনার স্বাস্থ্য পরিচালনা করুন।' } },
      { title: { en: "Women's Health & Wellness",      bn: 'নারী স্বাস্থ্য ও ওয়েলনেস' },    desc: { en: 'Confidential consultations for reproductive health, pregnancy care, and more.',                                          bn: 'প্রজনন স্বাস্থ্য, গর্ভাবস্থার যত্ন এবং আরও বিষয়ে গোপনীয় পরামর্শ।' } },
      { title: { en: 'Pediatric & Child Care',         bn: 'শিশু স্বাস্থ্য সেবা' },           desc: { en: "Expert advice for your child's health from trusted pediatricians across Bangladesh.",                                   bn: 'বাংলাদেশের বিশ্বস্ত শিশু বিশেষজ্ঞদের কাছ থেকে আপনার সন্তানের স্বাস্থ্য বিষয়ক বিশেষজ্ঞ পরামর্শ।' } },
      { title: { en: 'Skin & Dermatology Care',        bn: 'স্কিন ও ডার্মাটোলজি কেয়ার' },   desc: { en: 'Get expert dermatology care for skin conditions, acne, allergies, and cosmetic concerns.',                              bn: 'ত্বকের সমস্যা, ব্রণ, অ্যালার্জি এবং কসমেটিক উদ্বেগের জন্য বিশেষজ্ঞ ডার্মাটোলজি সেবা নিন।' } },
      { title: { en: 'Mental Health & Counseling',     bn: 'মানসিক স্বাস্থ্য ও কাউন্সেলিং সেবা' }, desc: { en: 'Access licensed therapists and counselors for stress, anxiety, depression, and more.',                             bn: 'স্ট্রেস, উদ্বেগ, বিষণ্নতা এবং আরও বিষয়ে লাইসেন্সপ্রাপ্ত থেরাপিস্ট ও কাউন্সেলরের সাথে যোগাযোগ করুন।' } },
      { title: { en: 'Nutrition & Lifestyle Coaching', bn: 'পুষ্টি ও লাইফস্টাইল কোচিং' },   desc: { en: 'Personalized dietary plans and lifestyle guidance from certified nutritionists.',                                       bn: 'সার্টিফাইড পুষ্টিবিদদের কাছ থেকে ব্যক্তিগতকৃত ডায়েট পরিকল্পনা ও জীবনযাত্রার গাইডেন্স।' } },
    ],
  },

  stats: {
    doctors:  { value: { en: '5,000+',  bn: '৫,০০০+' },   label: { en: 'DOCTORS BEING VERIFIED', bn: 'ভেরিফাইড ডাক্তার' } },
    booking:  { value: { en: '< 2 min', bn: '< ২ মিনিট' }, label: { en: 'AVERAGE BOOKING TIME',   bn: 'গড় বুকিং সময়' } },
    video:    { value: { en: '24/7',    bn: '২৪/৭' },       label: { en: 'VIDEO CONSULTATIONS',    bn: 'ভিডিও কনসালটেশন' } },
    free:     { value: { en: 'Free',    bn: 'ফ্রি' },       label: { en: 'FIRST CONSULTATION',     bn: 'প্রথম পরামর্শ' } },
  },
} as const;
