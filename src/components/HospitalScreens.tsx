import React from 'react';
import {
  Pill,
  Receipt, BedDouble, AlertCircle, Cpu, Building2,
} from 'lucide-react';
import { StatusBar } from './mockup/StatusBar';
import { BottomNav, HOSPITAL_NAV } from './mockup/BottomNav';

export const HospitalScreen_ERP = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0D2B2E', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>Hospital ERP</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.60)', margin: '4px 0 0' }}>Square Hospital · Dashboard</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { label: 'OPD Today', val: '184', icon: Building2, color: '#0A9E8A', bg: 'rgba(10,158,138,0.10)' },
          { label: 'Pending Bills', val: '23', icon: Receipt, color: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
          { label: 'Beds Available', val: '12', icon: BedDouble, color: '#22C55E', bg: 'rgba(34,197,94,0.10)' },
          { label: 'Pharmacy Rx', val: '67', icon: Pill, color: '#0A9E8A', bg: 'rgba(10,158,138,0.10)' },
        ].map((s) => (
          <div key={s.label} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px' }}>
            <div style={{ width: 28, height: 28, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6, background: s.bg }}>
              <s.icon style={{ width: 14, height: 14, color: s.color }} />
            </div>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 14, color: '#0D1B1E', margin: 0, fontVariantNumeric: 'tabular-nums' }}>{s.val}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 10, color: '#8AAAB0', margin: '0 0 6px' }}>Dept. Activity Today</p>
        {['Cardiology', 'Pediatrics', 'ENT'].map((dept, i) => (
          <div key={dept} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', flex: 1, margin: 0 }}>{dept}</p>
            <div style={{ width: 80, height: 6, background: 'hsl(var(--border))', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: '#0A9E8A', borderRadius: 99, width: `${[75, 90, 55][i]}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav tabs={HOSPITAL_NAV} activeIndex={0} />
  </div>
));
HospitalScreen_ERP.displayName = 'HospitalScreen_ERP';

export const HospitalScreen_Queue = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0D2B2E', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>Live Queue</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.60)', margin: '4px 0 0' }}>OPD · Cardiology · Dr. Rahman</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: '#0A9E8A', borderRadius: 14, padding: '12px 14px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.70)', margin: 0 }}>Now Serving</p>
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 28, color: 'white', margin: '2px 0', fontVariantNumeric: 'tabular-nums' }}>A-012</p>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.80)', margin: 0 }}>Farida H. · 10:00 AM</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { t: 'A-013', n: 'Tanvir R.', w: '~8 min', s: 'Waiting' },
          { t: 'A-014', n: 'Nasreen K.', w: '~16 min', s: 'Waiting' },
          { t: 'A-015', n: 'Rashid M.', w: '~24 min', s: 'Check-in' },
        ].map((p) => (
          <div key={p.t} style={{ background: 'hsl(var(--accent))', borderRadius: 10, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 11, color: '#0A9E8A', width: 40, fontVariantNumeric: 'tabular-nums' }}>{p.t}</span>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#0D1B1E', flex: 1, margin: 0 }}>{p.n}</p>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0' }}>{p.w}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(245,158,11,0.10)', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <AlertCircle style={{ width: 14, height: 14, color: '#F59E0B', flexShrink: 0 }} />
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', margin: 0 }}>A-016 marked as late arrival</p>
      </div>
    </div>
    <BottomNav tabs={HOSPITAL_NAV} activeIndex={1} />
  </div>
));
HospitalScreen_Queue.displayName = 'HospitalScreen_Queue';

export const HospitalScreen_Scheduling = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0D2B2E', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>Smart Schedule</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.60)', margin: '4px 0 0' }}>AI-optimised · Mon 14 Jan</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { time: '9:00', patient: 'Farida H.', type: 'Confirmed', dur: '20 min', bg: 'rgba(34,197,94,0.10)', border: 'rgba(34,197,94,0.30)' },
        { time: '9:25', patient: 'Tanvir R.', type: 'Follow-up', dur: '15 min', bg: 'rgba(10,158,138,0.08)', border: 'rgba(10,158,138,0.20)' },
        { time: '10:00', patient: 'Walk-in', type: 'Last minute', dur: '10 min', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.20)' },
        { time: '10:15', patient: 'Nasreen K.', type: 'Waitlisted', dur: '20 min', bg: 'hsl(var(--accent))', border: 'hsl(var(--border))' },
      ].map((s, i) => (
        <div key={i} style={{ border: `1px solid ${s.border}`, borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, background: s.bg }}>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 11, color: '#0A9E8A', width: 40, fontVariantNumeric: 'tabular-nums' }}>{s.time}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 11, color: '#0D1B1E', margin: 0 }}>{s.patient}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>{s.type} · {s.dur}</p>
          </div>
        </div>
      ))}
      <div style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Cpu style={{ width: 14, height: 14, color: '#0A9E8A', flexShrink: 0 }} />
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', margin: 0 }}>AI optimised: 92% slot efficiency today</p>
      </div>
    </div>
    <BottomNav tabs={HOSPITAL_NAV} activeIndex={2} />
  </div>
));
HospitalScreen_Scheduling.displayName = 'HospitalScreen_Scheduling';

export const HospitalScreen_OPD = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ background: '#0D2B2E', padding: '0 16px 14px', flexShrink: 0 }}>
      <StatusBar theme="light" />
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 14, color: 'white', margin: 0 }}>OPD Management</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.60)', margin: '4px 0 0' }}>3 centers · 12 departments</p>
    </div>
    <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { label: 'Doctor Yield', val: '+20%', sub: 'vs last month', color: '#22C55E' },
          { label: 'Wait Time', val: '-8%', sub: 'avg reduction', color: '#22C55E' },
          { label: 'Active Doctors', val: '24', sub: 'across centers', color: '#0A9E8A' },
          { label: 'Departments', val: '12', sub: 'all managed', color: '#0A9E8A' },
        ].map((s) => (
          <div key={s.label} style={{ background: 'hsl(var(--accent))', borderRadius: 14, padding: '10px 12px' }}>
            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 16, color: s.color, margin: 0, fontVariantNumeric: 'tabular-nums' }}>{s.val}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 10, color: '#0D1B1E', margin: '2px 0 0' }}>{s.label}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: '#8AAAB0', margin: '2px 0 0' }}>{s.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 14, padding: '10px 12px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 10, color: '#8AAAB0', margin: '0 0 8px' }}>Centers</p>
        {['Gulshan Branch', 'Dhanmondi Unit', 'Uttara Center'].map((c) => (
          <div key={c} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#5A7A80', margin: 0 }}>{c}</p>
            <span style={{ background: '#22C55E18', color: '#16A34A', borderRadius: 99, padding: '2px 8px', fontSize: 9, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Active</span>
          </div>
        ))}
      </div>
    </div>
    <BottomNav tabs={HOSPITAL_NAV} activeIndex={0} />
  </div>
));
HospitalScreen_OPD.displayName = 'HospitalScreen_OPD';

export const HospitalScreen_TV = React.memo(() => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0D1B1E' }}>
    <StatusBar theme="light" />
    <div style={{ padding: '6px 16px 14px', flexShrink: 0 }}>
      <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 13, color: 'white', margin: 0 }}>Queue Display</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.50)', margin: '4px 0 0' }}>Cardiology OPD · Live</p>
    </div>
    <div style={{ flex: 1, padding: '0 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ background: '#0A9E8A', borderRadius: 14, padding: '10px 12px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.70)', textTransform: 'uppercase', letterSpacing: 0.8, margin: 0 }}>Now Serving</p>
        <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 22, color: 'white', margin: '2px 0', fontVariantNumeric: 'tabular-nums' }}>A-012</p>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.80)', margin: 0 }}>Dr. Rahman · Room 3</p>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '8px 10px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.50)', margin: '0 0 6px' }}>Up Next</p>
        {[{ t: 'A-013', r: 'Room 3' }, { t: 'B-005', r: 'Room 1' }, { t: 'A-014', r: 'Room 3' }].map((q) => (
          <div key={q.t} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 12, color: 'white', fontVariantNumeric: 'tabular-nums' }}>{q.t}</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.60)' }}>{q.r}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '8px 10px', overflow: 'hidden' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.40)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Estimated wait: Room 1 = 12 min · Room 3 = 8 min · Room 2 = 20 min</p>
      </div>
    </div>
    <div style={{ height: 40, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.30)', margin: 0 }}>Powered by CareConnect Hospital Suite</p>
    </div>
  </div>
));
HospitalScreen_TV.displayName = 'HospitalScreen_TV';
