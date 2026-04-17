import React from 'react';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last Updated: April 2026',
    intro: 'We built CareConnect for you. Your privacy is part of that promise.',
    sections: [
      {
        heading: '1. Who We Are',
        body: `CareConnect is a Bangladeshi digital health platform connecting patients with verified doctors, clinics, and hospitals. We are operated by CareConnect Ltd., registered in Bangladesh.\n\nIf you have questions about this policy, contact us at: privacy@careconnect.com.bd`,
      },
      {
        heading: '2. What Information We Collect',
        body: `Information you give us directly:\n• Full name, email address, phone number, city\n• Date of birth, gender, blood group\n• Health symptoms you describe when searching or booking\n• Uploaded documents such as prescriptions and lab reports\n• Payment references (bKash/Nagad transaction IDs — we never store card numbers)\n• Reviews and ratings you write about doctors\n\nInformation we collect automatically:\n• Device type, browser, operating system\n• IP address and approximate location\n• Pages you visit, searches you perform, features you use\n• Time and duration of your sessions\n• Referral source (how you found us)\n\nInformation from third parties:\n• If you sign in via Google, we receive your name and email from Google\n• If a doctor adds you as a patient, they may enter basic information on your behalf`,
      },
      {
        heading: '3. Why We Collect It',
        body: `We use your information to:\n• Create and manage your account\n• Match you with the right doctors based on your symptoms, location, and preferences\n• Process bookings and send appointment confirmations\n• Enable video consultations and store related prescription records\n• Send you appointment reminders and important health notifications\n• Improve our AI matching and recommendation systems\n• Detect fraud and keep the platform secure\n• Comply with Bangladesh's health and data regulations\n• Respond to your support requests\n\nWe do not use your health data to show you advertisements. We do not sell your personal information to anyone, ever.`,
      },
      {
        heading: '4. Who We Share Your Information With',
        body: `Doctors and healthcare providers: When you book an appointment, the relevant doctor receives your name, contact details, and any symptoms or notes you provided. This is necessary for your care.\n\nTechnology partners: We work with companies that help us run the platform — hosting, analytics, payment processing, and SMS/email delivery. They access only what they need and are bound by strict confidentiality agreements.\n\nLegal requirements: If required by Bangladeshi law or a lawful court order, we may disclose information to government authorities. We will notify you where legally permitted to do so.\n\nBusiness transfers: If CareConnect is ever acquired or merges with another company, your data may transfer as part of that transaction. We will notify you in advance.\n\nWe do not share your health information with insurance companies, pharmaceutical companies, or advertisers.`,
      },
      {
        heading: '5. How We Protect Your Information',
        body: `• All data is encrypted in transit using TLS 1.3\n• Health records and prescriptions are stored in encrypted form\n• Access to patient data is restricted to authorised personnel only\n• Our database infrastructure runs on Supabase with row-level security\n• We conduct regular security audits\n• Payment transactions are handled via encrypted payment gateways — we never see your card details`,
      },
      {
        heading: '6. Health Records and Prescriptions',
        body: `Your health records belong to you. We store them so you can access them any time. You can:\n• Download any prescription or record at any time\n• Share records with any doctor on the platform or externally\n• Request permanent deletion of your health records\n\nDoctors can access only the records relevant to appointments they have conducted with you.`,
      },
      {
        heading: '7. Your Rights',
        body: `You have the right to:\n• Access all personal data we hold about you\n• Correct inaccurate information\n• Delete your account and associated data\n• Export your data in a portable format\n• Withdraw consent for communications at any time\n• Object to how we process your data\n\nTo exercise any of these rights, email us at privacy@careconnect.com.bd and we will respond within 30 days.`,
      },
      {
        heading: '8. Children\'s Privacy',
        body: `CareConnect is not designed for children under 13. We do not knowingly collect data from children under 13. If you believe a child has registered, please contact us immediately and we will delete the account.\n\nPatients aged 13 to 17 may use the platform with parental consent.`,
      },
      {
        heading: '9. Cookies',
        body: `We use cookies to keep you logged in, remember your preferences, and understand how people use the platform. For full details, please read our Cookie Policy.`,
      },
      {
        heading: '10. Changes to This Policy',
        body: `If we make significant changes to this policy, we will notify you by email and display a notice on the platform at least 14 days before the change takes effect. Your continued use of CareConnect after that date means you accept the updated policy.`,
      },
      {
        heading: '11. Contact Us',
        body: `CareConnect Ltd.\nEmail: privacy@careconnect.com.bd\nAddress: Dhaka, Bangladesh`,
      },
    ],
  },
  bn: {
    title: 'গোপনীয়তা নীতি',
    updated: 'সর্বশেষ আপডেট: এপ্রিল ২০২৬',
    intro: 'আমরা CareConnect বানিয়েছি আপনার জন্য। আপনার গোপনীয়তা আমাদের প্রতিশ্রুতির অংশ।',
    sections: [
      {
        heading: '১. আমরা কে',
        body: `CareConnect একটি বাংলাদেশি ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম। কোনো প্রশ্ন থাকলে যোগাযোগ করুন: privacy@careconnect.com.bd`,
      },
      {
        heading: '২. আমরা কী তথ্য সংগ্রহ করি',
        body: `আপনি সরাসরি যা দেন:\n• পুরো নাম, ইমেইল, ফোন নম্বর, শহর\n• জন্ম তারিখ, লিঙ্গ, রক্তের গ্রুপ\n• স্বাস্থ্যগত লক্ষণ\n• আপলোড করা প্রেসক্রিপশন বা ল্যাব রিপোর্ট\n• পেমেন্ট রেফারেন্স (কার্ড নম্বর আমরা কখনোই সংরক্ষণ করি না)\n\nস্বয়ংক্রিয়ভাবে যা সংগৃহীত হয়:\n• ডিভাইসের ধরন, ব্রাউজার, অপারেটিং সিস্টেম\n• আইপি অ্যাড্রেস ও আনুমানিক অবস্থান`,
      },
      {
        heading: '৩. কেন সংগ্রহ করি',
        body: `আমরা আপনার তথ্য ব্যবহার করি অ্যাকাউন্ট পরিচালনা, সঠিক ডাক্তার খুঁজে দিতে, বুকিং প্রক্রিয়া করতে এবং প্ল্যাটফর্ম নিরাপদ রাখতে।\n\nআপনার স্বাস্থ্য তথ্য দিয়ে আমরা কোনো বিজ্ঞাপন দেখাই না। আপনার ব্যক্তিগত তথ্য কাউকে বিক্রি করি না, কখনোই না।`,
      },
      {
        heading: '৪. কার সাথে তথ্য শেয়ার করি',
        body: `বুকিং করলে সংশ্লিষ্ট ডাক্তার আপনার নাম, যোগাযোগের তথ্য এবং লক্ষণ দেখতে পান।\n\nআমরা আপনার স্বাস্থ্য তথ্য বীমা কোম্পানি, ওষুধ কোম্পানি বা বিজ্ঞাপনদাতাদের সাথে শেয়ার করি না।`,
      },
      {
        heading: '৫. কীভাবে তথ্য সুরক্ষিত রাখি',
        body: `• সমস্ত ডেটা TLS 1.3 এনক্রিপশন দিয়ে সুরক্ষিত\n• স্বাস্থ্য রেকর্ড ও প্রেসক্রিপশন এনক্রিপ্টেড অবস্থায় সংরক্ষিত\n• নিয়মিত নিরাপত্তা অডিট করা হয়`,
      },
      {
        heading: '৬. স্বাস্থ্য রেকর্ড ও প্রেসক্রিপশন',
        body: `আপনার স্বাস্থ্য রেকর্ড আপনার নিজের। আপনি যেকোনো সময় ডাউনলোড, শেয়ার বা স্থায়ীভাবে মুছে ফেলার অনুরোধ করতে পারেন।`,
      },
      {
        heading: '৭. আপনার অধিকার',
        body: `আপনার অধিকার আছে: তথ্য দেখার, সংশোধন করার, মুছে ফেলার, ডেটা রপ্তানি করার এবং যোগাযোগের সম্মতি প্রত্যাহার করার।\n\nএই অধিকার প্রয়োগ করতে privacy@careconnect.com.bd-তে ইমেইল করুন।`,
      },
      {
        heading: '৮. শিশুদের গোপনীয়তা',
        body: `CareConnect ১৩ বছরের কম বয়সী শিশুদের জন্য নয়। ১৩-১৭ বছর বয়সীরা অভিভাবকের সম্মতিতে ব্যবহার করতে পারবেন।`,
      },
      {
        heading: '৯. এই নীতিতে পরিবর্তন',
        body: `বড় কোনো পরিবর্তন হলে কার্যকর হওয়ার কমপক্ষে ১৪ দিন আগে ইমেইলে জানাব।`,
      },
      {
        heading: '১০. যোগাযোগ করুন',
        body: `CareConnect Ltd.\nইমেইল: privacy@careconnect.com.bd\nঠিকানা: ঢাকা, বাংলাদেশ`,
      },
    ],
  },
};

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const c = content[lang] ?? content.en;

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
        <p className="text-base text-primary font-medium mb-10 pb-10 border-b border-white/[0.06]">{c.intro}</p>

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
