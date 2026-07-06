export function Button({ children, variant = 'primary', href = '#contact', className = '', style }) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} href={href} style={style}>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">→</span>
    </a>
  );
}
