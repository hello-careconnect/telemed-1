import React from 'react';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';

const content = {
  en: {
    title: 'Cookie Policy',
    updated: 'Last Updated: April 11, 2026',
    intro: 'Cookies keep things working. Here is exactly how we use them.',
    sections: [
      {
        heading: '1. What is a Cookie?',
        body: `A cookie is a small text file that a website places on your device when you visit. It stays there and sends information back to us when you return. Cookies cannot carry viruses or access other files on your device.\n\nSimilar technologies like local storage and session storage work the same way and are covered by this policy.`,
      },
      {
        heading: '2. Cookies We Use',
        body: `Category 1 — Essential Cookies\nThese cannot be turned off. Without them, the platform does not work.\n\n  session_token — Keeps you logged in securely (Session)\n  csrf_token — Prevents cross-site request forgery attacks (Session)\n  cookie_consent — Remembers your cookie preferences (1 year)\n  lang — Remembers your language preference EN/BN (1 year)\n\nCategory 2 — Functional Cookies\nThese improve your experience. You can turn them off but some features may not work as well.\n\n  search_history — Saves your recent doctor searches for autocomplete (30 days)\n  last_city — Remembers your selected city for location-based results (90 days)\n  user_type_pref — Remembers whether you are a patient or doctor (1 year)\n  theme_pref — Stores display preferences (1 year)\n\nCategory 3 — Analytics Cookies\nThese help us understand how people use CareConnect so we can improve it. No personal health data is included.\n\n  _ga (Google Analytics) — Distinguishes unique visitors (2 years)\n  _gid (Google Analytics) — Tracks sessions (24 hours)\n  _gat — Limits data collection rate (1 minute)\n  cc_session_id — Our internal session analytics (Session)\n\nWe use Google Analytics with IP anonymisation enabled. This means Google cannot identify individual users from the data we send.\n\nCategory 4 — Marketing Cookies\nThese are only activated when you consent. They help us show relevant ads on other platforms.\n\n  _fbp (Facebook Pixel) — Tracks conversions from Facebook ads (90 days)\n  _fbc (Facebook Click ID) — Links ad clicks to conversions (90 days)\n\nMarketing cookies are off by default. They are only activated if you click "Accept All" on the cookie banner.`,
      },
      {
        heading: '3. Third-Party Cookies',
        body: `Some cookies are placed by third-party services we use. These third parties have their own privacy policies:\n• Google — Analytics and OAuth sign-in\n• Facebook/Meta — Advertising pixel\n• Supabase — Backend authentication\n\nCareConnect does not control how these third parties use the information collected through their cookies.`,
      },
      {
        heading: '4. Your Cookie Choices',
        body: `On first visit: A cookie banner appears at the bottom of the screen. You can:\n• Accept All — enables all four cookie categories\n• Decline — enables only Essential cookies\n• Manage Preferences — choose category by category\n\nAfter your first visit: You can change your preferences at any time from the Privacy Settings link in the footer.\n\nBrowser settings: You can also control cookies directly in your browser.\n• Chrome: Settings > Privacy and Security > Cookies\n• Firefox: Settings > Privacy and Security > Cookies\n• Safari: Settings > Privacy > Cookies\n\nNote: Blocking essential cookies will prevent you from logging in.`,
      },
      {
        heading: '5. Do Not Track',
        body: `Some browsers send a "Do Not Track" signal. We honour this signal by disabling analytics and marketing cookies when it is detected.`,
      },
      {
        heading: '6. Updates to This Policy',
        body: `If we add new cookie types or change how we use them, we will update this policy and show a new consent notice. The date at the top of this page shows when it was last updated.`,
      },
      {
        heading: '7. Contact',
        body: `CareConnect Ltd.\nEmail: privacy@careconnect.com.bd`,
      },
    ],
  },
  bn: {
    title: 'কুকি নীতি',
    updated: 'সর্বশেষ আপডেট: ১১ এপ্রিল, ২০২৬',
    intro: 'কুকি জিনিসগুলো চালু রাখে। আমরা ঠিক কীভাবে ব্যবহার করি, সেটাই এখানে বলা আছে।',
    sections: [
      {
        heading: '১. কুকি আসলে কী?',
        body: `কুকি হলো একটা ছোট্ট টেক্সট ফাইল যেটা আপনি ভিজিট করলে ওয়েবসাইট আপনার ডিভাইসে রেখে যায়। কুকি ভাইরাস বহন করে না বা আপনার ডিভাইসের অন্য ফাইল দেখতে পায় না।`,
      },
      {
        heading: '২. আমরা কোন কুকি ব্যবহার করি',
        body: `বিভাগ ১ — অপরিহার্য কুকি (বন্ধ করা যাবে না):\n  session_token — নিরাপদে লগ ইন রাখে (সেশন)\n  csrf_token — নিরাপত্তা আক্রমণ ঠেকায় (সেশন)\n  cookie_consent — কুকি পছন্দ মনে রাখে (১ বছর)\n  lang — ভাষার পছন্দ মনে রাখে (১ বছর)\n\nবিভাগ ২ — কার্যকরী কুকি:\n  search_history — সাম্প্রতিক ডাক্তার সার্চ দেখায় (৩০ দিন)\n  last_city — শহর মনে রাখে (৯০ দিন)\n  user_type_pref — রোগী না ডাক্তার মনে রাখে (১ বছর)\n  theme_pref — ডিসপ্লে পছন্দ সংরক্ষণ (১ বছর)\n\nবিভাগ ৩ — বিশ্লেষণ কুকি:\n  _ga, _gid, _gat — Google Analytics (২ বছর/২৪ ঘণ্টা/১ মিনিট)\n  cc_session_id — আমাদের নিজস্ব সেশন বিশ্লেষণ (সেশন)\n\nবিভাগ ৪ — মার্কেটিং কুকি (ডিফল্টে বন্ধ):\n  _fbp, _fbc — Facebook বিজ্ঞাপন ট্র্যাকিং (৯০ দিন)`,
      },
      {
        heading: '৩. তৃতীয় পক্ষের কুকি',
        body: `কিছু কুকি আমরা যেসব তৃতীয় পক্ষের সেবা ব্যবহার করি তারা দেয়:\n• Google — বিশ্লেষণ ও OAuth সাইন-ইন\n• Facebook/Meta — বিজ্ঞাপন পিক্সেল\n• Supabase — ব্যাকএন্ড অথেন্টিকেশন`,
      },
      {
        heading: '৪. আপনার কুকি নির্বাচন',
        body: `প্রথম ভিজিটে কুকি ব্যানার আসবে। আপনি পারবেন:\n• Accept All — চারটি বিভাগই চালু করতে\n• Decline — শুধু অপরিহার্য কুকি রাখতে\n• Manage Preferences — বিভাগ ধরে নিজে ঠিক করতে\n\nমনে রাখবেন: অপরিহার্য কুকি ব্লক করলে লগ ইন করা সম্ভব হবে না।`,
      },
      {
        heading: '৫. Do Not Track সিগন্যাল',
        body: `কিছু ব্রাউজার "Do Not Track" সিগন্যাল পাঠায়। আমরা এটি সম্মান করি এবং বিশ্লেষণ ও মার্কেটিং কুকি বন্ধ রাখি।`,
      },
      {
        heading: '৬. যোগাযোগ',
        body: `CareConnect Ltd.\nইমেইল: privacy@careconnect.com.bd`,
      },
    ],
  },
};

export default function CookiePolicy() {
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
