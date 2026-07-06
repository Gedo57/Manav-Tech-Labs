export function GlowIcon({ children, tone = 'blue' }) {
  return <span className={`glow-icon glow-icon--${tone}`}>{children}</span>;
}
