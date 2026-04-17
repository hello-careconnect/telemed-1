import React from 'react';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';

const content = {
  en: {
    title: 'Terms of Use',
    updated: 'Last Updated: April 11, 2026',
    intro: 'Using CareConnect means you agree to these terms. Please read them.',
    sections: [
      {
        heading: '1. What CareConnect Is',
        body: `CareConnect is a digital health platform that helps patients in Bangladesh find, book, and consult with verified doctors and healthcare facilities. We also provide tools for doctors and hospitals to manage their practices digitally.\n\nCareConnect is not a medical provider. We do not diagnose illness, prescribe medication, or provide medical advice directly. We connect you with licensed healthcare professionals who do. The doctors on our platform are independent practitioners, not employees of CareConnect.`,
      },
      {
        heading: '2. Who Can Use CareConnect',
        body: `You may use CareConnect if:\n• You are at least 18 years old, or between 13 and 17 with verifiable parental consent\n• You are located in or seeking care from Bangladesh\n• You provide accurate and truthful information when registering\n• You are not prohibited from using digital health services under any applicable law\n\nBy using the platform, you confirm all of the above are true.`,
      },
      {
        heading: '3. Your Account',
        body: `Creating an account: You must provide a valid name, email address, and phone number. You are responsible for keeping your login credentials secure.\n\nAccount accuracy: You must keep your profile information up to date. Providing false information — including about your identity, medical history, or professional credentials if you are a doctor — is a serious breach of these terms and may result in immediate account suspension.\n\nOne account per person: Each person may hold only one patient account and one doctor account on CareConnect.\n\nAccount security: If you suspect unauthorised access to your account, notify us immediately at support@careconnect.com.bd. You are responsible for all activity that occurs under your account unless you report a compromise promptly.`,
      },
      {
        heading: '4. For Patients — Your Responsibilities',
        body: `When using CareConnect as a patient, you agree to:\n• Provide accurate symptom information when booking or consulting\n• Attend scheduled appointments or cancel with reasonable notice (at least 2 hours before)\n• Pay the agreed consultation fee before or at the time of appointment\n• Use video consultation features only from a private, appropriate environment\n• Not record consultations without the explicit consent of the doctor\n• Treat all doctors and platform staff with respect\n• Understand that a digital consultation does not replace emergency medical care — in a medical emergency, call 999 or go to your nearest hospital immediately\n\nNo show policy: Repeated no-shows without cancellation may result in a temporary restriction on your booking ability.`,
      },
      {
        heading: '5. For Doctors — Your Responsibilities',
        body: `When using CareConnect as a registered doctor, you agree to:\n• Provide complete and accurate professional credentials including your BMDC registration number\n• Maintain an active and valid BMDC registration at all times\n• Conduct consultations in accordance with Bangladesh Medical and Dental Council guidelines\n• Keep your availability and profile information up to date\n• Issue prescriptions only where clinically appropriate\n• Not prescribe controlled substances via video consultation where restricted by Bangladesh regulations\n• Maintain patient confidentiality in accordance with applicable law\n• Respond to patient appointment requests within a reasonable timeframe\n• Not use the platform to solicit patients outside of CareConnect for consultations that should occur on the platform\n\nCareConnect reserves the right to suspend or remove any doctor whose credentials cannot be verified, who receives sustained negative patient feedback, or who violates medical ethics standards.`,
      },
      {
        heading: '6. For Hospitals and Clinics',
        body: `Healthcare facilities using CareConnect's institutional tools agree to:\n• Provide accurate facility registration and licensing information\n• Ensure that all doctors listed under your facility have valid credentials\n• Use the OPD and queue management tools in accordance with the guidelines provided\n• Not misrepresent capacity, available services, or doctor availability\n• Notify CareConnect of any changes to facility licensing or accreditation status`,
      },
      {
        heading: '7. Payments and Refunds',
        body: `Consultation fees are set by individual doctors and displayed clearly before booking. CareConnect may charge a platform service fee which will also be shown before you confirm payment.\n\nPayment methods accepted include bKash, Nagad, Rocket, and major bank debit and credit cards.\n\nRefund policy:\n• If a doctor cancels an appointment, you receive a full refund within 3 to 5 business days\n• If you cancel at least 2 hours before the appointment, you receive a full refund\n• If you cancel less than 2 hours before, a cancellation fee of 20% may apply\n• If a technical failure on CareConnect's side prevents a video consultation from taking place, you receive a full refund\n• No-shows are generally non-refundable, though we review cases individually\n\nFor refund requests, contact support@careconnect.com.bd within 7 days of the appointment.`,
      },
      {
        heading: '8. Medical Disclaimer',
        body: `This is important. Please read carefully.\n\nCareConnect is a platform connecting patients with independent licensed healthcare professionals. We are not a healthcare provider, hospital, or medical institution.\n\n• We do not guarantee the accuracy of any medical advice provided by doctors on our platform\n• We do not verify the accuracy of medical information entered by users\n• A consultation through CareConnect does not constitute an emergency medical service\n• You should always seek in-person medical attention for serious, acute, or life-threatening conditions\n• Prescriptions issued through the platform are the sole professional responsibility of the issuing doctor\n• CareConnect is not liable for any outcome of a medical consultation conducted through the platform\n\nIn a medical emergency: Call 999 or go to your nearest hospital immediately. Do not use CareConnect.`,
      },
      {
        heading: '9. Prohibited Uses',
        body: `You must not use CareConnect to:\n• Impersonate any person or misrepresent your identity or credentials\n• Upload or transmit content that is fraudulent, harmful, defamatory, or illegal\n• Attempt to access another user's account or data\n• Scrape, copy, or reproduce platform content without written permission\n• Attempt to reverse engineer, hack, or compromise platform security\n• Use the platform to arrange consultations and then conduct them off-platform to avoid fees\n• Post false reviews about doctors\n• Harass, threaten, or abuse any doctor, patient, or platform staff\n\nViolation of these prohibitions may result in immediate account termination and may be reported to relevant authorities.`,
      },
      {
        heading: '10. Intellectual Property',
        body: `All content on CareConnect — including the logo, design, software, text, and data compilations — is owned by CareConnect Ltd. or licensed to us. You may not copy, reproduce, distribute, or create derivative works from our content without written permission.\n\nYour health records and prescriptions belong to you. We claim no ownership over them.`,
      },
      {
        heading: '11. Platform Availability',
        body: `We aim to keep CareConnect available 24 hours a day, 7 days a week. However, we cannot guarantee uninterrupted service. We may take the platform offline for maintenance with advance notice where possible.\n\nWe are not liable for any loss caused by platform downtime, technical errors, or service interruptions beyond our reasonable control.`,
      },
      {
        heading: '12. Limitation of Liability',
        body: `To the maximum extent permitted by Bangladeshi law, CareConnect's total liability to you for any claim arising from your use of the platform shall not exceed the amount you paid to CareConnect in the 30 days preceding the claim.\n\nWe are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of health data, missed appointments, or outcomes of medical consultations.`,
      },
      {
        heading: '13. Termination',
        body: `By you: You may close your account at any time from your profile settings or by contacting us. Closing your account does not affect any outstanding payment obligations.\n\nBy us: We may suspend or terminate your account if you violate these terms, if your doctor credentials cannot be verified, or if your continued use poses a risk to other users or the platform. We will notify you unless the violation involves fraud or illegal activity.`,
      },
      {
        heading: '14. Governing Law',
        body: `These terms are governed by the laws of Bangladesh. Any disputes arising from your use of CareConnect shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.`,
      },
      {
        heading: '15. Changes to These Terms',
        body: `We may update these terms as the platform evolves. We will notify you at least 14 days before significant changes take effect. Continued use of CareConnect after that date constitutes acceptance of the updated terms.`,
      },
      {
        heading: '16. Contact',
        body: `CareConnect Ltd.\nEmail: legal@careconnect.com.bd\nSupport: support@careconnect.com.bd\nAddress: Dhaka, Bangladesh`,
      },
    ],
  },
  bn: {
    title: 'ব্যবহারের শর্তাবলী',
    updated: 'সর্বশেষ আপডেট: ১১ এপ্রিল, ২০২৬',
    intro: 'CareConnect ব্যবহার মানেই এই শর্তে রাজি। একটু পড়ে নিন।',
    sections: [
      {
        heading: '১. CareConnect কী',
        body: `CareConnect একটি ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম যেটি বাংলাদেশের রোগীদের যাচাইকৃত ডাক্তার ও স্বাস্থ্যসেবা প্রতিষ্ঠানের সাথে খুঁজে পেতে, বুকিং করতে এবং পরামর্শ নিতে সাহায্য করে।\n\nCareConnect কোনো চিকিৎসাসেবা প্রদানকারী নয়। আমরা সরাসরি রোগ নির্ণয়, ওষুধ প্রেসক্রিপশন বা চিকিৎসা পরামর্শ দিই না।`,
      },
      {
        heading: '২. কে CareConnect ব্যবহার করতে পারবেন',
        body: `আপনি CareConnect ব্যবহার করতে পারবেন যদি:\n• বয়স কমপক্ষে ১৮ হয়, অথবা ১৩ থেকে ১৭ বছর এবং অভিভাবকের যাচাইযোগ্য সম্মতি থাকে\n• বাংলাদেশে অবস্থান করছেন বা বাংলাদেশ থেকে সেবা নিতে চাইছেন\n• নিবন্ধনের সময় সঠিক ও সত্য তথ্য দিয়েছেন\n• কোনো প্রযোজ্য আইনে ডিজিটাল স্বাস্থ্যসেবা ব্যবহারে নিষিদ্ধ নন`,
      },
      {
        heading: '৩. আপনার অ্যাকাউন্ট',
        body: `অ্যাকাউন্ট খোলা: সঠিক নাম, ইমেইল ও ফোন নম্বর দিতে হবে।\n\nতথ্যের নির্ভুলতা: প্রোফাইল তথ্য আপডেট রাখতে হবে। মিথ্যা তথ্য দেওয়া এই শর্তের গুরুতর লঙ্ঘন।\n\nএক ব্যক্তি এক অ্যাকাউন্ট: প্রতিটি ব্যক্তি CareConnect-এ সর্বোচ্চ একটি রোগী অ্যাকাউন্ট ও একটি ডাক্তার অ্যাকাউন্ট রাখতে পারবেন।`,
      },
      {
        heading: '৪. রোগী হিসেবে আপনার দায়িত্ব',
        body: `• বুকিং বা পরামর্শের সময় সঠিক লক্ষণ জানাতে\n• নির্ধারিত অ্যাপয়েন্টমেন্টে আসতে, বা কমপক্ষে ২ ঘণ্টা আগে বাতিল করতে\n• সম্মত পরামর্শ ফি পরিশোধ করতে\n• ডাক্তারের সুস্পষ্ট সম্মতি ছাড়া পরামর্শ রেকর্ড না করতে\n• চিকিৎসা জরুরি অবস্থায় ৯৯৯ নম্বরে ফোন করুন বা কাছের হাসপাতালে যান`,
      },
      {
        heading: '৫. ডাক্তার হিসেবে আপনার দায়িত্ব',
        body: `• BMDC নিবন্ধন নম্বরসহ সম্পূর্ণ ও সঠিক পেশাদার যোগ্যতা প্রদান করতে\n• সবসময় সক্রিয় ও বৈধ BMDC নিবন্ধন বজায় রাখতে\n• বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিলের নির্দেশিকা অনুযায়ী পরামর্শ পরিচালনা করতে\n• রোগীর গোপনীয়তা বজায় রাখতে`,
      },
      {
        heading: '৬. হাসপাতাল ও ক্লিনিকের জন্য',
        body: `• সঠিক প্রতিষ্ঠান নিবন্ধন ও লাইসেন্স তথ্য প্রদান করতে\n• প্রতিষ্ঠানের অধীনে তালিকাভুক্ত সকল ডাক্তারের বৈধ যোগ্যতা নিশ্চিত করতে\n• লাইসেন্স বা স্বীকৃতির মর্যাদায় পরিবর্তন হলে CareConnect-কে জানাতে`,
      },
      {
        heading: '৭. পেমেন্ট ও রিফান্ড',
        body: `পেমেন্ট পদ্ধতি: bKash, Nagad, Rocket এবং প্রধান ব্যাংকের ডেবিট ও ক্রেডিট কার্ড।\n\nরিফান্ড নীতি:\n• ডাক্তার অ্যাপয়েন্টমেন্ট বাতিল করলে ৩-৫ কার্যদিবসে পূর্ণ রিফান্ড\n• কমপক্ষে ২ ঘণ্টা আগে বাতিল করলে পূর্ণ রিফান্ড\n• ২ ঘণ্টার কম আগে বাতিল করলে ২০% ক্যান্সেলেশন ফি প্রযোজ্য\n• রিফান্ডের জন্য ৭ দিনের মধ্যে support@careconnect.com.bd-তে যোগাযোগ করুন`,
      },
      {
        heading: '৮. চিকিৎসা সংক্রান্ত দাবিত্যাগ',
        body: `CareConnect স্বাস্থ্যসেবা প্রদানকারী নয়। প্ল্যাটফর্মের মাধ্যমে হওয়া চিকিৎসা পরামর্শের ফলাফলে CareConnect দায়বদ্ধ নয়।\n\nচিকিৎসা জরুরি অবস্থায়: ৯৯৯ নম্বরে ফোন করুন বা কাছের হাসপাতালে যান।`,
      },
      {
        heading: '৯. নিষিদ্ধ ব্যবহার',
        body: `CareConnect-কে আপনি ব্যবহার করতে পারবেন না:\n• কাউকে ভুলভাবে উপস্থাপন করতে\n• প্রতারণামূলক বা বেআইনি কোনো বিষয়বস্তু আপলোড করতে\n• অন্য ব্যবহারকারীর অ্যাকাউন্টে প্রবেশের চেষ্টা করতে\n• ডাক্তার সম্পর্কে মিথ্যা রিভিউ পোস্ট করতে`,
      },
      {
        heading: '১০. মেধাস্বত্ব',
        body: `CareConnect-এর সমস্ত বিষয়বস্তু CareConnect Ltd.-এর মালিকানাধীন। আপনার স্বাস্থ্য রেকর্ড ও প্রেসক্রিপশন আপনার নিজের।`,
      },
      {
        heading: '১১. দায় সীমাবদ্ধতা',
        body: `বাংলাদেশের আইনে সর্বোচ্চ অনুমোদিত পরিমাণ পর্যন্ত, CareConnect-এর মোট দায় দাবির আগের ৩০ দিনে আপনার পরিশোধিত পরিমাণের বেশি হবে না।`,
      },
      {
        heading: '১২. অ্যাকাউন্ট বাতিল',
        body: `আপনার পক্ষ থেকে: প্রোফাইল সেটিংস থেকে বা আমাদের সাথে যোগাযোগ করে যেকোনো সময় অ্যাকাউন্ট বন্ধ করতে পারেন।\n\nআমাদের পক্ষ থেকে: শর্ত লঙ্ঘন হলে বা আপনার ব্যবহার অন্যদের জন্য ঝুঁকি তৈরি করলে আমরা অ্যাকাউন্ট স্থগিত করতে পারি।`,
      },
      {
        heading: '১৩. প্রযোজ্য আইন',
        body: `এই শর্তগুলো বাংলাদেশের আইন দ্বারা পরিচালিত। যেকোনো বিরোধ বাংলাদেশের ঢাকার আদালতের এখতিয়ারের অধীন।`,
      },
      {
        heading: '১৪. এই শর্তে পরিবর্তন',
        body: `উল্লেখযোগ্য পরিবর্তন কার্যকর হওয়ার কমপক্ষে ১৪ দিন আগে জানাব। তারপরও ব্যবহার চালিয়ে গেলে আপডেট করা শর্ত মেনে নিয়েছেন বলে ধরা হবে।`,
      },
      {
        heading: '১৫. যোগাযোগ',
        body: `CareConnect Ltd.\nইমেইল: legal@careconnect.com.bd\nসহায়তা: support@careconnect.com.bd\nঠিকানা: ঢাকা, বাংলাদেশ`,
      },
    ],
  },
};

export default function TermsOfUse() {
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
