import React from 'react'
import { Home, Search, Calendar, User, Settings, Users, LayoutDashboard } from 'lucide-react'

type NavConfig = {
  icon: React.ElementType
  label: string
}

interface BottomNavProps {
  tabs: NavConfig[]
  activeIndex: number
  theme?: 'light' | 'dark'
}

export const BottomNav = ({ tabs, activeIndex, theme = 'dark' }: BottomNavProps) => {
  return (
    <div style={{
      height: 52,
      background: theme === 'dark' ? 'hsl(var(--background))' : '#0D2B2E',
      borderTop: theme === 'dark' ? '1px solid hsl(var(--border))' : '1px solid rgba(255,255,255,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      paddingLeft: 8, paddingRight: 8, flexShrink: 0,
    }}>
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex
        const Icon = tab.icon
        return (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            flex: 1, opacity: isActive ? 1 : 0.45, position: 'relative',
          }}>
            <Icon style={{
              width: 20, height: 20,
              color: isActive ? '#0A9E8A' : (theme === 'dark' ? '#3D5155' : 'rgba(255,255,255,0.70)'),
              strokeWidth: isActive ? 2.5 : 1.8,
            }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: isActive ? 600 : 400, fontSize: 9,
              color: isActive ? '#0A9E8A' : (theme === 'dark' ? '#8AAAB0' : 'rgba(255,255,255,0.55)'),
              letterSpacing: 0.2,
            }}>
              {tab.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export const PATIENT_NAV: NavConfig[] = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Search' },
  { icon: Calendar, label: 'Schedule' },
  { icon: User, label: 'Profile' },
]

export const DOCTOR_NAV: NavConfig[] = [
  { icon: Home, label: 'Home' },
  { icon: Users, label: 'Patients' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Settings, label: 'Settings' },
]

export const HOSPITAL_NAV: NavConfig[] = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Patients' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Settings, label: 'Settings' },
]
