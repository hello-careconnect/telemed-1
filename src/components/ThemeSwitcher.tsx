import { useState } from 'react';
import { ChevronDown, Palette } from 'lucide-react';

const primaryThemes = [
  { id: '',        label: 'Teal',    color: 'hsl(168, 85%, 33%)' },
  { id: 'indigo',  label: 'Indigo',  color: 'hsl(255, 65%, 38%)' },
  { id: 'violet',  label: 'Violet',  color: 'hsl(270, 45%, 42%)' },
  { id: 'emerald', label: 'Emerald', color: 'hsl(155, 70%, 25%)' },
  { id: 'slate',   label: 'Slate',   color: 'hsl(220, 55%, 40%)' },
  { id: 'voilet2', label: 'Violet2', color: 'hsl(266, 32%, 64%)' },
  { id: 'sage',    label: 'Sage',    color: '#99d98c' },
  { id: 'ocean',   label: 'Ocean',   color: '#168aad' },
];

const fontThemes = [
  { id: '',            label: 'Helvetica',    font: 'Helvetica, sans-serif' },
  { id: 'sf',          label: 'SF Pro',       font: '-apple-system, system-ui, sans-serif' },
  { id: 'georgia',     label: 'Georgia',      font: 'Georgia, serif' },
  { id: 'gillsans',    label: 'Gill Sans',    font: "Gill Sans, Gill Sans MT, sans-serif" },
  { id: 'optima',      label: 'Optima',       font: 'Optima, Candara, sans-serif' },
  { id: 'baskerville', label: 'Baskerville',  font: 'Baskerville, serif' },
  { id: 'trebuchet',   label: 'Trebuchet',    font: 'Trebuchet MS, sans-serif' },
  { id: 'arial',       label: 'Arial',        font: 'Arial, sans-serif' },
];

const foregroundThemes = [
  { id: '',       label: 'Default', preview: ['hsl(216, 40%, 19%)', 'hsl(216, 22%, 32%)'] },
  { id: 'warm',   label: 'Warm',    preview: ['hsl(24, 30%, 18%)',  'hsl(20, 18%, 35%)']  },
  { id: 'cool',   label: 'Cool',    preview: ['hsl(230, 30%, 18%)', 'hsl(225, 18%, 36%)'] },
  { id: 'ink',    label: 'Ink',     preview: ['hsl(0, 0%, 8%)',     'hsl(0, 0%, 25%)']    },
  { id: 'soft',   label: 'Soft',    preview: ['hsl(210, 20%, 30%)', 'hsl(210, 12%, 45%)'] },
];

const backgroundThemes = [
  { id: '',          label: 'Mint',    color: 'hsl(160, 30%, 97%)' },
  { id: 'bg-sage',   label: 'Sage',    color: '#e8eddf' },
  { id: 'bg-white',  label: 'White',   color: '#ffffff' },
  { id: 'bg-cream',  label: 'Cream',   color: '#faf7f0' },
  { id: 'bg-blush',  label: 'Blush',   color: '#fdf2f2' },
  { id: 'bg-stone',  label: 'Stone',   color: '#f5f2ee' },
  { id: 'bg-sky',    label: 'Sky',     color: '#f0f7ff' },
];

export const ThemeSwitcher = () => {
  const [activePrimary, setActivePrimary] = useState('');
  const [activeFg, setActiveFg] = useState('');
  const [activeBg, setActiveBg] = useState('');
  const [activeFont, setActiveFont] = useState('');
  const [minimized, setMinimized] = useState(false);

  const applyPrimary = (id: string) => {
    setActivePrimary(id);
    if (id) {
      document.documentElement.setAttribute('data-theme', id);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const applyFg = (id: string) => {
    setActiveFg(id);
    if (id) {
      document.documentElement.setAttribute('data-fg', id);
    } else {
      document.documentElement.removeAttribute('data-fg');
    }
  };

  const applyFont = (id: string) => {
    setActiveFont(id);
    if (id) {
      document.documentElement.setAttribute('data-font', id);
    } else {
      document.documentElement.removeAttribute('data-font');
    }
  };

  const applyBg = (id: string) => {
    setActiveBg(id);
    if (id) {
      document.documentElement.setAttribute('data-bg', id);
    } else {
      document.documentElement.removeAttribute('data-bg');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-3 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Theme Studio</span>
        </div>
        <button
          onClick={() => setMinimized((m) => !m)}
          className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${minimized ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {!minimized && <>
      {/* Primary color */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide w-10">Color</span>
        <div className="flex flex-wrap gap-2">
          {primaryThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => applyPrimary(t.id)}
              title={t.label}
              className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                activePrimary === t.id
                  ? 'border-gray-900 scale-110 shadow-md'
                  : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: t.color }}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Background */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide w-10">BG</span>
        <div className="flex flex-wrap gap-2">
          {backgroundThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => applyBg(t.id)}
              title={t.label}
              className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                activeBg === t.id
                  ? 'border-gray-900 scale-110 shadow-md'
                  : 'border-gray-300 hover:scale-105'
              }`}
              style={{ backgroundColor: t.color }}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Foreground / text */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide w-10">Text</span>
        <div className="flex gap-2">
          {foregroundThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => applyFg(t.id)}
              title={t.label}
              className={`w-7 h-7 rounded-full border-2 transition-all duration-200 overflow-hidden flex flex-col items-stretch ${
                activeFg === t.id
                  ? 'border-gray-900 scale-110 shadow-md'
                  : 'border-gray-200 hover:scale-105'
              }`}
            >
              <span className="flex-1" style={{ backgroundColor: t.preview[0] }} />
              <span className="flex-1" style={{ backgroundColor: t.preview[1] }} />
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Font */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Font</span>
        <div className="flex flex-wrap gap-1.5">
          {fontThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => applyFont(t.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 ${
                activeFont === t.id
                  ? 'border-gray-900 bg-gray-900 text-white shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
              }`}
              style={{ fontFamily: t.font }}
            >
              <span className="text-[15px] font-bold leading-none">Aa</span>
              <span className="text-[11px] leading-none opacity-80">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
      </>}
    </div>
  );
};
