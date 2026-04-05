import React from 'react';
import {
  Search, CheckCircle, BadgeCheck, UserRound, Brain,
  Building2, Clock, Pill, Plus, Send, TrendingUp, Bell, Stethoscope,
  Banknote, GraduationCap, Camera, Languages, ChevronRight, Star, Pencil,
} from 'lucide-react';
import { StatusBar } from './mockup/StatusBar';
import { BottomNav, DOCTOR_NAV, PATIENT_NAV } from './mockup/BottomNav';
import doctorKarimThumb from '@/assets/doctor-karim-thumb.jpg';
import doctorAishaThumb from '@/assets/doctor-aisha-thumb.jpg';
import testimonialFarida from '@/assets/testimonial-farida.jpg';
import testimonialTanvir from '@/assets/testimonial-tanvir.jpg';
import testimonialNasreen from '@/assets/testimonial-nasreen.jpg';

const patientThumbs: Record<string, string> = { FH: testimonialFarida, TR: testimonialTanvir, NK: testimonialNasreen };
const F = 'DM Sans, sans-serif';
const FS = 'Sora, sans-serif';

export const DoctorScreen_Listing = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="9:41" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <UserRound style={{ width: 16, height: 16, color: 'white' }} />
        <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>My Profile</p>
      </div>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, overflow: 'hidden' }}>
          <img src={doctorKarimThumb} alt="Dr. Karim" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 13, color: '#0D1B1E', margin: 0 }}>Dr. Karim Hassan</p>
            <BadgeCheck style={{ width: 14, height: 14, color: '#0A9E8A' }} />
          </div>
          <p style={{ fontFamily: F, fontSize: 11, color: '#8AAAB0', margin: '2px 0 0' }}>Cardiologist</p>
          <span style={{ background: '#22C55E18', color: '#16A34A', borderRadius: 99, padding: '2px 8px', fontSize: 9, fontFamily: F, fontWeight: 600, display: 'inline-block', marginTop: 4 }}>BMDC Verified</span>
        </div>
      </div>
      {[
        { label: 'MBBS, MD, FCPS (Cardiology)', icon: GraduationCap },
        { label: 'Square Hospital, Dhaka', icon: Building2 },
        { label: 'Sun-Thu · 10 AM to 6 PM', icon: Clock },
        { label: 'BDT 800 per consultation', icon: Banknote },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <item.icon style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
          <p style={{ fontFamily: F, fontSize: 11, color: '#5A7A80', margin: 0 }}>{item.label}</p>
        </div>
      ))}
      <div style={{ background: 'linear-gradient(135deg, rgba(10,158,138,0.08) 0%, rgba(10,158,138,0.04) 100%)', border: '1px solid rgba(10,158,138,0.15)', borderRadius: 12, padding: '8px 10px', marginTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <Brain style={{ width: 12, height: 12, color: '#0A9E8A' }} />
          <p className="ai-shimmer-text" style={{ fontWeight: 600, fontSize: 10, margin: 0 }}>AI Summary</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <p style={{ fontFamily: F, fontSize: 10, color: '#5A7A80', margin: 0 }}>• <span style={{ color: '#0A9E8A', fontWeight: 600 }}>35% more</span> earning than last month</p>
          <p style={{ fontFamily: F, fontSize: 10, color: '#5A7A80', margin: 0 }}>• <span style={{ color: '#0A9E8A', fontWeight: 600 }}>6% more</span> bookings this month</p>
          <p style={{ fontFamily: F, fontSize: 10, color: '#5A7A80', margin: 0 }}>• <span style={{ color: '#0A9E8A', fontWeight: 600 }}>2% less</span> cancel requests</p>
          <p style={{ fontFamily: F, fontSize: 10, color: '#5A7A80', margin: 0 }}>• <span style={{ color: '#0A9E8A', fontWeight: 600 }}>Top 23</span> doctors in your category</p>
        </div>
      </div>
    </div>
    <BottomNav tabs={DOCTOR_NAV} activeIndex={0} />
  </div>
));
DoctorScreen_Listing.displayName = 'DoctorScreen_Listing';

export const DoctorScreen_Patients = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="11:30" />
      <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>My Patients</p>
      <p style={{ fontFamily: F, fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>24 appointments this week</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { init: 'FH', name: 'Farida Hossain', age: '38F', visit: 'Today 10:00 AM', type: 'Follow-up', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#22C55E18' },
        { init: 'TR', name: 'Tanvir Rahman', age: '29M', visit: 'Today 11:30 AM', type: 'First visit', status: 'Confirmed', statusColor: '#16A34A', statusBg: '#22C55E18' },
        { init: 'NK', name: 'Nasreen K.', age: '45F', visit: 'Today 3:00 PM', type: 'Video call', status: 'Pending', statusColor: '#B45309', statusBg: '#F59E0B18' },
      ].map((p, i) => (
        <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 8px rgba(10,158,138,0.30)' }}>
              <img src={patientThumbs[p.init]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{p.name}</p>
                <span style={{ background: p.statusBg, color: p.statusColor, borderRadius: 99, padding: '2px 8px', fontSize: 9, fontFamily: F, fontWeight: 600 }}>{p.status}</span>
              </div>
              <p style={{ fontFamily: F, fontSize: 10, color: '#8AAAB0', margin: '2px 0 0' }}>{p.age} · {p.visit}</p>
              <p style={{ fontFamily: F, fontSize: 10, color: '#0A9E8A', margin: '2px 0 0' }}>{p.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <BottomNav tabs={DOCTOR_NAV} activeIndex={1} />
  </div>
));
DoctorScreen_Patients.displayName = 'DoctorScreen_Patients';

export const DoctorScreen_Prescription = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="2:15" />
      <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>Write Prescription</p>
      <p style={{ fontFamily: F, fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>Farida H. · Follow-up visit</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[{ name: 'Atenolol 50mg' }, { name: 'Aspirin 75mg' }].map((m, i) => (
        <div key={i} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Pill style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
          <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 11, color: '#0D1B1E', flex: 1, margin: 0 }}>{m.name}</p>
          <Pencil style={{ width: 14, height: 14, color: '#0A9E8A' }} />
        </div>
      ))}
      <div style={{ background: 'hsl(var(--background))', border: '1px dashed rgba(10,158,138,0.40)', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Plus style={{ width: 14, height: 14, color: '#0A9E8A' }} />
        <span style={{ fontFamily: F, fontSize: 11, color: '#8AAAB0' }}>Add medicine...</span>
      </div>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px' }}>
        <p style={{ fontFamily: F, fontSize: 10, color: '#8AAAB0', margin: 0 }}>Notes: Low sodium diet. Follow-up in 30 days.</p>
      </div>
      <button style={{ width: '100%', background: '#0A9E8A', color: 'white', borderRadius: 99, padding: '10px 14px', fontFamily: FS, fontWeight: 600, fontSize: 13, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 2px 8px rgba(10,158,138,0.35)', cursor: 'default' }}>
        <Send style={{ width: 14, height: 14 }} /> Issue Prescription
      </button>
    </div>
    <BottomNav tabs={DOCTOR_NAV} activeIndex={2} />
  </div>
));
DoctorScreen_Prescription.displayName = 'DoctorScreen_Prescription';

export const DoctorScreen_Analytics = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="8:50" />
      <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Practice Analytics</p>
      <p style={{ fontFamily: F, fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>This month</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[{ label: 'Profile Views', val: '847' }, { label: 'Bookings', val: '62' }, { label: 'Reviews', val: '4.9' }].map((s) => (
          <div key={s.label} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '8px 6px', textAlign: 'center' }}>
            <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 14, color: '#0A9E8A', margin: 0, fontVariantNumeric: 'tabular-nums' }}>{s.val}</p>
            <p style={{ fontFamily: F, fontSize: 9, color: '#8AAAB0', margin: '4px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px' }}>
        <p style={{ fontFamily: F, fontWeight: 500, fontSize: 10, color: '#8AAAB0', margin: '0 0 8px' }}>Weekly Appointments</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 48 }}>
          {[60, 80, 45, 90, 70, 85, 55].map((h, i) => (
            <div key={i} style={{ flex: 1, borderRadius: '3px 3px 0 0', height: `${h}%`, background: i === 4 ? '#0A9E8A' : 'rgba(10,158,138,0.15)' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <span key={i} style={{ fontFamily: F, fontSize: 9, color: '#8AAAB0', flex: 1, textAlign: 'center' }}>{d}</span>
          ))}
        </div>
      </div>
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontFamily: F, fontSize: 10, color: '#8AAAB0', margin: 0 }}>Monthly Revenue</p>
          <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 16, color: '#0A9E8A', margin: '2px 0 0', fontVariantNumeric: 'tabular-nums' }}>BDT 49,600</p>
        </div>
        <TrendingUp style={{ width: 24, height: 24, color: '#22C55E' }} />
      </div>
    </div>
    <BottomNav tabs={DOCTOR_NAV} activeIndex={0} />
  </div>
));
DoctorScreen_Analytics.displayName = 'DoctorScreen_Analytics';

export const DoctorScreen_Scheduler = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="12:05" />
      <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 24, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Search style={{ width: 13, height: 13, color: 'rgba(255,255,255,0.65)', strokeWidth: 2 }} />
        <span style={{ fontFamily: F, fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Search doctors...</span>
      </div>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
      <div>
        <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 14, color: '#0D1B1E', margin: 0 }}>Today</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {[{n:12,d:'S'},{n:13,d:'M'},{n:14,d:'T',active:true},{n:15,d:'W'},{n:16,d:'T'},{n:17,d:'F'}].map((day) => (
            <div key={day.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 99, width: 32, padding: '4px 0', background: (day as any).active ? '#0A9E8A' : 'transparent' }}>
              <span style={{ fontFamily: FS, fontWeight: 700, fontSize: 12, color: (day as any).active ? 'white' : '#0D1B1E' }}>{day.n}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 12, color: '#0D1B1E', margin: 0 }}>Schedule Today</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: 'rgba(10,158,138,0.10)', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src={doctorKarimThumb} alt="Dr. Karim" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>Dr. Karim H.</p>
            <p style={{ fontFamily: F, fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>Cardiologist · 10:00 AM</p>
          </div>
          <button style={{ background: '#0A9E8A', color: 'white', borderRadius: 99, padding: '4px 12px', fontSize: 9, fontFamily: FS, fontWeight: 600, border: 'none', cursor: 'default' }}>Join</button>
        </div>
        <div style={{ background: 'rgba(245,158,11,0.10)', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src={doctorAishaThumb} alt="Dr. Aisha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>Dr. Nasreen K.</p>
            <p style={{ fontFamily: F, fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>Pediatrician · 2:30 PM</p>
          </div>
          <button style={{ background: '#F59E0B', color: 'white', borderRadius: 99, padding: '4px 12px', fontSize: 9, fontFamily: FS, fontWeight: 600, border: 'none', cursor: 'default' }}>Join</button>
        </div>
      </div>
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Bell style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
        <p style={{ fontFamily: F, fontSize: 10, color: '#5A7A80', margin: 0 }}>Upcoming: Dr. Karim consultation in 2 hours</p>
      </div>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={2} />
  </div>
));
DoctorScreen_Scheduler.displayName = 'DoctorScreen_Scheduler';

export const DoctorScreen_ProfileEditor = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" time="5:40" />
      <p style={{ fontFamily: FS, fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>Edit Profile</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, overflow: 'hidden' }}>
            <img src={doctorKarimThumb} alt="Dr. Karim" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -4, right: -4, width: 20, height: 20, borderRadius: '50%', background: '#0A9E8A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Camera style={{ width: 10, height: 10, color: 'white' }} />
          </div>
        </div>
        <div>
          <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 13, color: '#0D1B1E', margin: 0 }}>Dr. Karim Hassan</p>
          <p style={{ fontFamily: F, fontSize: 10, color: '#0A9E8A', margin: '2px 0 0' }}>Edit profile photo</p>
        </div>
      </div>
      {[
        { label: 'Specialty', value: 'Cardiologist', icon: Stethoscope },
        { label: 'Consultation Fee', value: 'BDT 800', icon: Banknote },
        { label: 'Chamber Hours', value: 'Sun-Thu 10AM-6PM', icon: Clock },
        { label: 'Languages', value: 'Bangla, English', icon: Languages },
      ].map((field, i) => (
        <div key={i} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <field.icon style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: F, fontSize: 9, color: '#8AAAB0', margin: 0 }}>{field.label}</p>
            <p style={{ fontFamily: FS, fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: '2px 0 0' }}>{field.value}</p>
          </div>
          <ChevronRight style={{ width: 14, height: 14, color: '#8AAAB0' }} />
        </div>
      ))}
    </div>
    <BottomNav tabs={DOCTOR_NAV} activeIndex={3} />
  </div>
));
DoctorScreen_ProfileEditor.displayName = 'DoctorScreen_ProfileEditor';
