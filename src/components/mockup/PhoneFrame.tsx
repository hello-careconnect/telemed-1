import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface PhoneFrameProps {
  children: React.ReactNode
  screenKey: string | number
  className?: string
}

export const PhoneFrame = ({ children, screenKey, className = '' }: PhoneFrameProps) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: 288, flexShrink: 0 }}>

      {/* ── Left buttons ── */}

      {/* Action button */}
      <div style={{
        position: 'absolute', left: -5, top: 104,
        width: 5, height: 34,
        borderRadius: '6px 0 0 6px',
        background: 'linear-gradient(90deg, #2a2a2c, #1c1c1e)',
        boxShadow: '-1px 0 2px rgba(0,0,0,0.18)',
      }} />

      {/* Volume up */}
      <div style={{
        position: 'absolute', left: -5, top: 156,
        width: 5, height: 62,
        borderRadius: '6px 0 0 6px',
        background: 'linear-gradient(90deg, #2a2a2c, #1c1c1e)',
        boxShadow: '-1px 0 2px rgba(0,0,0,0.18)',
      }} />

      {/* Volume down */}
      <div style={{
        position: 'absolute', left: -5, top: 232,
        width: 5, height: 62,
        borderRadius: '6px 0 0 6px',
        background: 'linear-gradient(90deg, #2a2a2c, #1c1c1e)',
        boxShadow: '-1px 0 2px rgba(0,0,0,0.18)',
      }} />

      {/* ── Right buttons ── */}

      {/* Side / power button */}
      <div style={{
        position: 'absolute', right: -5, top: 180,
        width: 5, height: 92,
        borderRadius: '0 6px 6px 0',
        background: 'linear-gradient(270deg, #2a2a2c, #1c1c1e)',
        boxShadow: '1px 0 2px rgba(0,0,0,0.18)',
      }} />


{/* ── Main body ── */}
      <div style={{
        width: 288,
        height: 620,
        borderRadius: 44,
        background: '#111113',
        boxShadow: `
          0 0 0 1.5px rgba(255,255,255,0.10),
          0 0 0 2.5px rgba(0,0,0,0.9),
          0 12px 24px rgba(0,0,0,0.12),
          0 4px 10px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.14)
        `,
        padding: 3,
        position: 'relative',
        boxSizing: 'border-box',
      }}>

        {/* Screen glass */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 41,
          overflow: 'hidden',
          background: 'hsl(var(--background))',
          position: 'relative',
        }}>

          {/* Screen content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screenKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Island */}
          <div style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 88,
            height: 24,
            borderRadius: 12,
            background: '#000',
            zIndex: 50,
          }} />

          {/* Home indicator */}
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 118,
            height: 4,
            borderRadius: 3,
            background: 'rgba(0,0,0,0.18)',
            zIndex: 50,
          }} />
        </div>
      </div>
    </div>
  )
}
