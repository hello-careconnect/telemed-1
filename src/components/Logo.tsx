export const Logo = ({ dark = false, size = 36 }: { dark?: boolean; size?: number }) => (
  <div className="flex items-center gap-2.5">
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#0A9E8A" />
      <rect x="13" y="27" width="38" height="10" rx="5" fill="white" />
      <rect x="27" y="13" width="10" height="38" rx="5" fill="white" />
      <circle cx="44" cy="20" r="3.5" fill="white" />
    </svg>
    <span
      className="font-heading font-bold tracking-tight"
      style={{
        fontSize: size * 0.56,
        color: dark ? '#E8F4F3' : '#0D1B1E',
        letterSpacing: '-0.025em',
      }}
    >
      CareConnect
    </span>
  </div>
);
