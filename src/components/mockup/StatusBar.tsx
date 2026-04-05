import React from 'react'

interface StatusBarProps {
  theme?: 'light' | 'dark'
  time?: string
}

export const StatusBar = ({ theme = 'dark', time = '9:41' }: StatusBarProps) => {
  const color = theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(13,27,30,0.90)'

  return (
    <div style={{
      height: 36, paddingTop: 10, paddingLeft: 20, paddingRight: 16,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', zIndex: 20, flexShrink: 0,
    }}>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 11, color, letterSpacing: -0.3 }}>
        {time}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <SignalIcon color={color} />
        <WifiIcon color={color} />
        <BatteryIcon color={color} />
      </div>
    </div>
  )
}

const SignalIcon = ({ color }: { color: string }) => (
  <svg width="14" height="10" viewBox="0 0 17 12" fill="none">
    <rect x="0" y="8" width="3" height="4" rx="0.8" fill={color} />
    <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" fill={color} />
    <rect x="9" y="2.5" width="3" height="9.5" rx="0.8" fill={color} />
    <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill={color} />
  </svg>
)

const WifiIcon = ({ color }: { color: string }) => (
  <svg width="13" height="10" viewBox="0 0 16 12" fill="none">
    <circle cx="8" cy="10.5" r="1.2" fill={color} />
    <path d="M5.5 8.5a3.5 3.5 0 0 1 5 0" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M3 6a7 7 0 0 1 10 0" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M0.5 3.5a10.5 10.5 0 0 1 15 0" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none"/>
  </svg>
)

const BatteryIcon = ({ color }: { color: string }) => (
  <svg width="20" height="10" viewBox="0 0 25 12" fill="none">
    <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={color} strokeWidth="1" opacity="0.35"/>
    <rect x="2" y="2" width="16" height="8" rx="1.5" fill={color}/>
    <path d="M22.5 4V8C23.3 7.6 24 6.9 24 6C24 5.1 23.3 4.4 22.5 4Z" fill={color} opacity="0.4"/>
  </svg>
)
