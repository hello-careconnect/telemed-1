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
  const isLight = theme === 'light'
  const inactiveColor = isLight ? '#8E8E93' : 'rgba(255,255,255,0.38)'
  const activeColor = '#0A9E8A'

  return (
    <div
      style={{
        background: isLight
          ? 'rgba(249,249,249,0.97)'
          : 'rgba(22,22,24,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: `0.5px solid ${isLight ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.08)'}`,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 28,
        flexShrink: 0,
      }}
    >
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex
        const Icon = tab.icon
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              flex: 1,
            }}
          >
            <Icon
              style={{
                width: 22,
                height: 22,
                color: isActive ? activeColor : inactiveColor,
                strokeWidth: isActive ? 2.2 : 1.6,
              }}
            />
            <span style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              fontWeight: isActive ? 500 : 400,
              fontSize: 10,
              color: isActive ? activeColor : inactiveColor,
              letterSpacing: -0.1,
              lineHeight: 1,
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
