import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface PhoneFrameProps {
  children: React.ReactNode
  screenKey: string | number
  className?: string
}

export const PhoneFrame = ({ children, screenKey, className = '' }: PhoneFrameProps) => {
  return (
    <div className={`relative select-none ${className}`} style={{ width: 280, flexShrink: 0 }}>

      {/* Volume Up */}
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: 100,
          width: 3,
          height: 32,
          borderRadius: '3px 0 0 3px',
          background: 'linear-gradient(180deg, #2a3a3a 0%, #1a2a2a 50%, #2a3a3a 100%)',
        }}
      />
      {/* Volume Down */}
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: 140,
          width: 3,
          height: 32,
          borderRadius: '3px 0 0 3px',
          background: 'linear-gradient(180deg, #2a3a3a 0%, #1a2a2a 50%, #2a3a3a 100%)',
        }}
      />
      {/* Silent switch */}
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: 64,
          width: 3,
          height: 20,
          borderRadius: '3px 0 0 3px',
          background: 'linear-gradient(180deg, #2a3a3a 0%, #1a2a2a 50%, #2a3a3a 100%)',
        }}
      />
      {/* Power button */}
      <div
        style={{
          position: 'absolute',
          right: -3,
          top: 110,
          width: 3,
          height: 56,
          borderRadius: '0 3px 3px 0',
          background: 'linear-gradient(180deg, #2a3a3a 0%, #1a2a2a 50%, #2a3a3a 100%)',
        }}
      />

      {/* Outer phone body */}
      <div
        style={{
          width: 280,
          height: 580,
          borderRadius: 48,
          background: 'linear-gradient(160deg, #1e2e2e 0%, #0d1b1e 40%, #0a1518 100%)',
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.50),
            0 0 0 1px rgba(255,255,255,0.08),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.30)
          `,
          padding: 7,
          position: 'relative',
        }}
      >

        {/* Screen glass */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 42,
            overflow: 'hidden',
            background: 'hsl(var(--background))',
            position: 'relative',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        >

          {/* Dynamic Island removed for better status bar visibility */}

          {/* Screen content with page transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screenKey}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Screen glare */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60%',
              height: '40%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
              borderRadius: '42px 0 0 0',
              pointerEvents: 'none',
              zIndex: 40,
            }}
          />
        </div>
      </div>
    </div>
  )
}
