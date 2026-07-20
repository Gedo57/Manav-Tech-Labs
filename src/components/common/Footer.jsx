import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent.js';
import { LogoMark } from './LogoMark.jsx';

function FooterLinkGroup({ group }) {
  return (
    <nav className="site-footer__group" aria-label={group.title}>
      <h2>{group.title}</h2>
      <div>
        {group.links.map((item) => (
          <Link key={`${group.title}-${item.label}`} to={item.href}>{item.label}</Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  const content = siteContent.footer;

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__brand-column">
          <LogoMark className="site-footer__logo" layout={{ width: 250, height: 56 }} />
          <p>{content.description}</p>
          <div className="site-footer__brand-actions">
            <Link className="site-footer__primary-link" to="/contact">Start a Project</Link>
            <a className="site-footer__download" href="/Manav_Tech_Labs.pdf" download>
              Download Company Profile <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="site-footer__links">
          {content.groups.map((group) => <FooterLinkGroup key={group.title} group={group} />)}
        </div>
      </div>

      <div className="site-footer__trust">
        {content.trust.map((item) => (
          <span key={item.label}><strong>{item.value}</strong>{item.label}</span>
        ))}
      </div>

      <div className="site-footer__bottom">
        <p>{content.disclaimer}</p>
        <span>© {new Date().getFullYear()} Manav Tech Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}
