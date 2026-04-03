import React from 'react';
import {
  Video, MapPin, Star, FileText,
  ChevronRight, Mic, PhoneOff, MessageSquare, Sparkles, Navigation,
  Download, FlaskConical, ClipboardList, Activity, Heart, Building2, User,
} from 'lucide-react';
import { StatusBar } from './mockup/StatusBar';
import { BottomNav, PATIENT_NAV } from './mockup/BottomNav';
import doctorAishaThumb from '@/assets/doctor-aisha-thumb.jpg';
import doctorKarimThumb from '@/assets/doctor-karim-thumb.jpg';
import doctorTanvirThumb from '@/assets/doctor-tanvir-thumb.jpg';

const doctorThumbs: Record<string, string> = { AR: doctorAishaThumb, KH: doctorKarimThumb, TR: doctorTanvirThumb };
const reviewerThumbs: Record<string, string> = { FH: doctorAishaThumb, TR: doctorTanvirThumb, NK: doctorKarimThumb };

export const PatientScreen_VideoConsult = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0D2B2E' }}>
    <StatusBar theme="light" />
    <div style={{
      background: '#0A9E8A',
      padding: '10px 18px 16px',
      flexShrink: 0,
    }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.75)', margin: 0, letterSpacing: 0.3 }}>Active Call</p>
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 18, color: '#FFFFFF', margin: '3px 0 2px', letterSpacing: -0.3 }}>Dr. Aisha Rahman</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.70)', margin: 0 }}>Cardiologist</p>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.40)' }} />
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,0.85)', margin: 0, fontVariantNumeric: 'tabular-nums' }}>04:23</p>
      </div>
    </div>
    <div style={{ flex: 1, position: 'relative', background: '#0a1a1e' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 0 0 8px rgba(10,158,138,0.12), 0 0 0 16px rgba(10,158,138,0.06)',
        }}>
          <img src={doctorAishaThumb} alt="Dr. Aisha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)', pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', bottom: 16, right: 14, width: 68, height: 90, borderRadius: 14,
        background: 'linear-gradient(160deg, #14393D 0%, #0D2B2E 100%)',
        border: '2px solid rgba(10,158,138,0.50)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 3,
        overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.40)',
      }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(10,158,138,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User style={{ width: 14, height: 14, color: '#0A9E8A' }} />
        </div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 10, color: 'rgba(255,255,255,0.60)' }}>You</span>
      </div>
      <div style={{
        position: 'absolute', top: 14, right: 14, background: 'rgba(10,158,138,0.25)',
        borderRadius: 20, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 5,
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.80)' }}>HD</span>
      </div>
    </div>
    <div style={{
      background: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))',
      height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '0 20px', flexShrink: 0,
    }}>
      <ControlButton icon={Mic} label="Mute" active />
      <ControlButton icon={Video} label="Camera" active />
      <ControlButton icon={PhoneOff} label="End" variant="danger" />
      <ControlButton icon={MessageSquare} label="Chat" active />
    </div>
  </div>
));
PatientScreen_VideoConsult.displayName = 'PatientScreen_VideoConsult';

interface ControlButtonProps {
  icon: React.ElementType
  label: string
  active?: boolean
  variant?: 'default' | 'danger'
}

const ControlButton = ({ icon: Icon, label, active = false, variant = 'default' }: ControlButtonProps) => {
  const bgColor = variant === 'danger' ? '#EF4444' : active ? 'hsl(var(--accent))' : 'hsl(var(--border))'
  const iconColor = variant === 'danger' ? '#FFFFFF' : '#0D1B1E'
  const size = variant === 'danger' ? 44 : 40

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%', background: bgColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: variant === 'danger' ? '0 4px 16px rgba(239,68,68,0.40)' : '0 1px 4px rgba(0,0,0,0.10)',
      }}>
        <Icon style={{ width: 16, height: 16, color: iconColor, strokeWidth: 2 }} />
      </div>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0', fontWeight: 500 }}>{label}</span>
    </div>
  )
}

export const PatientScreen_NearbyHospitals = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Nearby Hospitals</p>
      <div style={{ marginTop: 8, background: 'rgba(255,255,255,0.18)', borderRadius: 24, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <MapPin style={{ width: 13, height: 13, color: 'rgba(255,255,255,0.65)', strokeWidth: 2 }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Dhanmondi, Dhaka</span>
      </div>
    </div>
    <div style={{ height: 100, background: '#c8e6e2', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'repeating-linear-gradient(0deg, #0A9E8A22 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #0A9E8A22 0px, transparent 1px, transparent 20px)' }} />
      {[[30, 40], [60, 70], [75, 30]].map(([x, y], i) => (
        <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            background: i === 0 ? '#0A9E8A' : 'white', border: i === 0 ? 'none' : '2px solid #0A9E8A',
          }}>
            <MapPin style={{ width: 12, height: 12, color: i === 0 ? 'white' : '#0A9E8A' }} />
          </div>
        </div>
      ))}
    </div>
    <div style={{ flex: 1, overflow: 'hidden', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { name: 'Square Hospital', dist: '0.8 km', rating: '4.8', open: true },
        { name: 'Popular Medical', dist: '1.2 km', rating: '4.6', open: true },
        { name: 'IBN Sina', dist: '2.1 km', rating: '4.5', open: false },
      ].map((h, i) => (
        <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(10,158,138,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Building2 style={{ width: 16, height: 16, color: '#0A9E8A' }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{h.name}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0' }}>{h.dist}</span>
              <Star style={{ width: 10, height: 10, fill: '#F59E0B', color: '#F59E0B' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0' }}>{h.rating}</span>
            </div>
          </div>
          <span style={{ background: h.open ? '#22C55E18' : '#EF444418', color: h.open ? '#16A34A' : '#EF4444', borderRadius: 99, padding: '3px 8px', fontSize: 9, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{h.open ? 'Open' : 'Closed'}</span>
        </div>
      ))}
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={1} />
  </div>
));
PatientScreen_NearbyHospitals.displayName = 'PatientScreen_NearbyHospitals';

export const PatientScreen_AIMatching = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Sparkles style={{ width: 16, height: 16, color: 'white' }} />
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>AI Doctor Match</p>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>Describe your symptoms below</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ background: '#0A9E8A', color: 'white', borderRadius: '16px 4px 16px 16px', padding: '8px 12px', maxWidth: '70%' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, margin: 0 }}>I have chest pain and shortness of breath for 2 days</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(10,158,138,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Sparkles style={{ width: 12, height: 12, color: '#0A9E8A' }} />
        </div>
        <div style={{ background: 'hsl(var(--accent))', borderRadius: '4px 16px 16px 16px', padding: '8px 12px', maxWidth: '75%' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#0D1B1E', margin: 0 }}>Matching you with 3 specialists...</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
        {[
          { init: 'AR', name: 'Dr. Aisha R.', spec: 'Cardiologist', match: '98%' },
          { init: 'KH', name: 'Dr. Karim H.', spec: 'Pulmonologist', match: '91%' },
        ].map((d, i) => (
          <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 8px rgba(10,158,138,0.30)' }}>
              <img src={doctorThumbs[d.init]} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{d.name}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: '2px 0 0' }}>{d.spec}</p>
            </div>
            <span style={{ background: '#22C55E18', color: '#16A34A', borderRadius: 99, padding: '3px 8px', fontSize: 9, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{d.match}</span>
          </div>
        ))}
      </div>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={0} />
  </div>
));
PatientScreen_AIMatching.displayName = 'PatientScreen_AIMatching';

export const PatientScreen_HealthRecords = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Health Records</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>3 recent documents</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { icon: FileText, label: 'Prescription', sub: 'Dr. Rahman · 14 Jan', color: '#0A9E8A', bg: 'rgba(10,158,138,0.10)' },
        { icon: FlaskConical, label: 'Blood Test Report', sub: 'Popular Lab · 10 Jan', color: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
        { icon: ClipboardList, label: 'Consultation Notes', sub: 'Dr. Karim · 5 Jan', color: '#22C55E', bg: 'rgba(34,197,94,0.10)' },
      ].map((r, i) => (
        <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: r.bg }}>
            <r.icon style={{ width: 18, height: 18, color: r.color }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 12, color: '#0D1B1E', margin: 0 }}>{r.label}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: '2px 0 0' }}>{r.sub}</p>
          </div>
          <ChevronRight style={{ width: 14, height: 14, color: '#8AAAB0' }} />
        </div>
      ))}
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Activity style={{ width: 16, height: 16, color: '#0A9E8A' }} />
          <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 12, color: '#0D1B1E', margin: 0 }}>Health Summary</p>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: '6px 0 0' }}>Next checkup: 15 Feb · BP: Normal · Last visit: 3 weeks ago</p>
      </div>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={2} />
  </div>
));
PatientScreen_HealthRecords.displayName = 'PatientScreen_HealthRecords';

export const PatientScreen_Reviews = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Dr. Aisha Rahman</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
        {[1,2,3,4,5].map(s => <Star key={s} style={{ width: 12, height: 12, fill: '#F59E0B', color: '#F59E0B' }} />)}
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.80)', marginLeft: 4 }}>4.9 (127 reviews)</span>
      </div>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
      {[
        { init: 'FH', name: 'Farida H.', text: 'Extremely thorough. Took time to explain everything clearly.', stars: 5 },
        { init: 'TR', name: 'Tanvir R.', text: 'Best cardiologist in Dhaka. Diagnosed in one visit.', stars: 5 },
        { init: 'NK', name: 'Nasreen K.', text: 'Very professional. Video call was smooth.', stars: 4 },
      ].map((r, i) => (
        <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden' }}><img src={reviewerThumbs[r.init]} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E' }}>{r.name}</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>{[...Array(r.stars)].map((_, j) => <Star key={j} style={{ width: 10, height: 10, fill: '#F59E0B', color: '#F59E0B' }} />)}</div>
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', margin: 0, lineHeight: 1.4 }}>{r.text}</p>
        </div>
      ))}
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={0} />
  </div>
));
PatientScreen_Reviews.displayName = 'PatientScreen_Reviews';

export const PatientScreen_InstantBooking = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Book Appointment</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>Dr. Karim H. · Pediatrician</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px' }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 11, color: '#8AAAB0', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Select Date</p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[{d:'Mon',n:'13'},{d:'Tue',n:'14',active:true},{d:'Wed',n:'15'},{d:'Thu',n:'16'}].map((day) => (
          <div key={day.n} style={{ flex: 1, borderRadius: 14, padding: '8px 0', textAlign: 'center', background: (day as any).active ? '#0A9E8A' : 'hsl(var(--accent))' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: (day as any).active ? 'rgba(255,255,255,0.70)' : '#8AAAB0', margin: 0 }}>{day.d}</p>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 13, marginTop: 2, color: (day as any).active ? 'white' : '#0D1B1E', margin: '2px 0 0' }}>{day.n}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 11, color: '#8AAAB0', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Time Slots</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {['10:00 AM','11:00 AM','2:00 PM','3:00 PM','4:30 PM','5:00 PM'].map((t, i) => (
          <div key={t} style={{ borderRadius: 10, padding: '6px 0', textAlign: 'center', fontSize: 10, fontWeight: 500, fontFamily: 'DM Sans, sans-serif', background: i === 3 ? '#0A9E8A' : 'hsl(var(--accent))', color: i === 3 ? 'white' : '#5A7A80' }}>{t}</div>
        ))}
      </div>
      <button style={{ width: '100%', marginTop: 16, background: '#0A9E8A', color: 'white', borderRadius: 99, padding: '10px 14px', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 13, border: 'none', boxShadow: '0 2px 8px rgba(10,158,138,0.35)', cursor: 'default' }}>
        Confirm Booking
      </button>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={0} />
  </div>
));
PatientScreen_InstantBooking.displayName = 'PatientScreen_InstantBooking';

export const PatientScreen_ClosestDoctor = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MapPin style={{ width: 16, height: 16, color: 'white' }} />
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Doctors Near You</p>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>Sorted by distance</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { init: 'AR', name: 'Dr. Aisha R.', spec: 'Cardiologist', dist: '0.4 km', avail: 'Now' },
        { init: 'KH', name: 'Dr. Karim H.', spec: 'Pediatrician', dist: '0.8 km', avail: '2:30 PM' },
        { init: 'TR', name: 'Dr. Tanvir R.', spec: 'Dermatologist', dist: '1.2 km', avail: 'Tomorrow' },
      ].map((d, i) => (
        <div key={i} style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 2px 8px rgba(10,158,138,0.30)' }}>
              <img src={doctorThumbs[d.init]} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {i === 0 && <div style={{ position: 'absolute', bottom: -2, right: -2, width: 12, height: 12, borderRadius: '50%', background: '#22C55E', border: '2px solid white' }} />}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{d.name}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: '2px 0 0' }}>{d.spec}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#0A9E8A', fontWeight: 500, margin: 0 }}>{d.dist}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>{d.avail}</p>
          </div>
        </div>
      ))}
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Navigation style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', margin: 0 }}>Using your current location. Tap to change.</p>
      </div>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={0} />
  </div>
));
PatientScreen_ClosestDoctor.displayName = 'PatientScreen_ClosestDoctor';

export const PatientScreen_Prescription = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FileText style={{ width: 16, height: 16, color: 'white' }} />
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Digital Prescription</p>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>Dr. Aisha Rahman · 14 Jan 2026</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { name: 'Atenolol 50mg', dose: '1 tablet', freq: 'Once daily', dur: '30 days' },
          { name: 'Aspirin 75mg', dose: '1 tablet', freq: 'After meals', dur: '30 days' },
          { name: 'Rosuvastatin', dose: '1 tablet', freq: 'Night', dur: '60 days' },
        ].map((m, i) => (
          <div key={i} style={{ background: 'hsl(var(--background))', borderRadius: 10, padding: '8px 10px' }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{m.name}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: '2px 0 0' }}>{m.dose} · {m.freq} · {m.dur}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#8AAAB0', margin: 0 }}>Doctor's notes: Follow low-sodium diet. Return if symptoms worsen. Follow-up in 30 days.</p>
      </div>
      <button style={{ width: '100%', background: '#0A9E8A', color: 'white', borderRadius: 99, padding: '8px 14px', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 12, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 2px 8px rgba(10,158,138,0.35)', cursor: 'default' }}>
        <Download style={{ width: 14, height: 14 }} /> Download PDF
      </button>
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={2} />
  </div>
));
PatientScreen_Prescription.displayName = 'PatientScreen_Prescription';

export const PatientScreen_AIAnalysis = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0A9E8A', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Activity style={{ width: 16, height: 16, color: 'white' }} />
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>Health Analysis</p>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.72)', margin: '4px 0 0' }}>AI-powered insights</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '12px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 12, color: '#0D1B1E', margin: 0 }}>Overall Health Score</p>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 16, color: '#22C55E', fontVariantNumeric: 'tabular-nums' }}>78</span>
        </div>
        <div style={{ height: 6, background: 'hsl(var(--border))', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #0A9E8A, #22C55E)', width: '78%' }} />
        </div>
      </div>
      {[
        { label: 'Blood Pressure', val: 'Normal', color: '#22C55E', icon: Heart },
        { label: 'Cholesterol', val: 'Monitor', color: '#F59E0B', icon: Activity },
        { label: 'Visit Frequency', val: 'On Track', color: '#22C55E', icon: Activity },
      ].map((it, i) => (
        <div key={i} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'hsl(var(--background))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <it.icon style={{ width: 16, height: 16, color: '#0A9E8A' }} />
          </div>
          <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', flex: 1, margin: 0 }}>{it.label}</p>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: it.color }}>{it.val}</span>
        </div>
      ))}
    </div>
    <BottomNav tabs={PATIENT_NAV} activeIndex={0} />
  </div>
));
PatientScreen_AIAnalysis.displayName = 'PatientScreen_AIAnalysis';
