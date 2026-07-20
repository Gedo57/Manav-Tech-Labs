import { Link } from 'react-router-dom';

function isInternalHref(href = '') {
  return href.startsWith('/') || href.startsWith('#');
}

export function Button({ children, variant = 'primary', href = '/contact', className = '', style, onClick }) {
  const content = (
    <>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">→</span>
    </>
  );
  const classes = `button button--${variant} ${className}`.trim();

  if (isInternalHref(href)) {
    return (
      <Link className={classes} to={href} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} style={style} onClick={onClick}>
      {content}
    </a>
  );
}
