import React from 'react'

interface StatusBarProps {
  theme?: 'light' | 'dark'
  time?: string
}

export const StatusBar = ({ theme = 'dark', time = '9:41' }: StatusBarProps) => {
  const color = theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(13,27,30,0.90)'

  return (
    <div
      style={{
        height: 44,
        paddingTop: 14,
        paddingLeft: 20,
        paddingRight: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 20,
        flexShrink: 0,
      }}
    >
      <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 13, color, letterSpacing: -0.3 }}>
        {time}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <SignalIcon color={color} />
        <WifiIcon color={color} />
        <BatteryIcon color={color} />
      </div>
    </div>
  )
}

const SignalIcon = ({ color }: { color: string }) => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <rect x="0" y="8" width="3" height="4" rx="0.8" fill={color} opacity="1"/>
    <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" fill={color} opacity="1"/>
    <rect x="9" y="2.5" width="3" height="9.5" rx="0.8" fill={color} opacity="1"/>
    <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill={color} opacity="1"/>
  </svg>
)

const WifiIcon = ({ color }: { color: string }) => (
  <svg width="16" height="13" viewBox="-1 -1 18 14" fill="none">
    <path d="M8 10.5L8 10.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M5.2 8.1C6.0 7.2 7.0 6.7 8 6.7C9.0 6.7 10.0 7.2 10.8 8.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M2.8 5.7C4.3 4.0 6.1 3 8 3C9.9 3 11.7 4.0 13.2 5.7" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M0.5 3.3C2.6 1.8 5.2 1 8 1C10.8 1 13.4 1.8 15.5 3.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
  </svg>
)

const BatteryIcon = ({ color }: { color: string }) => (
  <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
    <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={color} strokeWidth="1" opacity="0.35"/>
    <rect x="2" y="2" width="16" height="8" rx="1.5" fill={color}/>
    <path d="M22.5 4V8C23.3 7.6 24 6.9 24 6C24 5.1 23.3 4.4 22.5 4Z" fill={color} opacity="0.4"/>
  </svg>
)
