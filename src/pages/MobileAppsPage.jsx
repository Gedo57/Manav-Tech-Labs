import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button.jsx';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

function MobileStatIcon({ type }) {
  const paths = {
    apps: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2.5" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </>
    ),
    experience: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3.4 2" />
      </>
    ),
    satisfaction: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H5.5A1.5 1.5 0 0 1 4 17.5V13Zm16 0h-3v6h1.5a1.5 1.5 0 0 0 1.5-1.5V13Z" />
        <path d="M17 19c-.8 1.3-2.2 2-4.2 2" />
      </>
    )
  };

  return (
    <span className="mobile-apps-stat__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[type] ?? paths.apps}</svg>
    </span>
  );
}

function SectionHeading({ prefix, accent, id }) {
  return (
    <div className="mobile-apps-section-heading" id={id}>
      <h2>
        {prefix} <span>{accent}</span>
      </h2>
    </div>
  );
}

export function MobileAppsPage() {
  const content = siteContent.mobileAppsPage;

  return (
    <main className="mobile-apps-page">
      <section className="mobile-apps-hero" aria-labelledby="mobile-apps-page-title">
        <div className="mobile-apps-shell mobile-apps-hero__inner">
          <div className="mobile-apps-hero__copy">
            <p className="mobile-apps-eyebrow">
              <span className="mobile-apps-eyebrow__icon" aria-hidden="true">▯</span>
              {content.eyebrow}
            </p>

            <h1 id="mobile-apps-page-title" className="mobile-apps-hero__title">
              <span>{content.titleTop}</span>
              <span className="mobile-apps-gradient-text">{content.titleAccent}</span>
            </h1>

            <p className="mobile-apps-hero__strapline">{content.strapline}</p>
            <p className="mobile-apps-hero__description">{content.description}</p>

            <div className="mobile-apps-hero__actions">
              <Button href="/contact" variant="primary">{content.primaryCta}</Button>
              <Button href="#mobile-apps-case-studies" variant="secondary">{content.secondaryCta}</Button>
            </div>
          </div>
        </div>

        <div className="mobile-apps-hero__visual" aria-hidden="true">
          <img src={assets.mobileApps.hero} alt="" />
        </div>

        <div className="mobile-apps-shell mobile-apps-stats" aria-label="Mobile app delivery highlights">
          {content.stats.map((stat) => (
            <article className="mobile-apps-stat" key={stat.label}>
              <MobileStatIcon type={stat.icon} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-apps-section mobile-apps-section--reasons" aria-labelledby="mobile-apps-reasons-title">
        <div className="mobile-apps-shell">
          <SectionHeading prefix="WHY CHOOSE OUR" accent="APP TEAM?" id="mobile-apps-reasons-title" />

          <div className="mobile-apps-reasons-grid">
            {content.reasons.map((item) => (
              <article className="mobile-apps-reason-card" key={item.title}>
                <div className="mobile-apps-reason-card__icon-wrap">
                  <img src={assets.mobileApps.icons[item.icon]} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-apps-section mobile-apps-section--services" aria-labelledby="mobile-apps-services-title">
        <div className="mobile-apps-shell">
          <SectionHeading prefix="OUR" accent="MOBILE APP SERVICES" id="mobile-apps-services-title" />

          <div className="mobile-apps-services-grid">
            {content.services.map((item) => (
              <article className="mobile-apps-service-card" key={item.title}>
                <div className="mobile-apps-service-card__icon-wrap">
                  <img src={assets.mobileApps.icons[item.icon]} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-apps-section mobile-apps-section--cases" aria-labelledby="mobile-apps-case-studies">
        <div className="mobile-apps-shell">
          <SectionHeading prefix="CASE" accent="STUDIES" id="mobile-apps-case-studies" />

          <div className="mobile-apps-case-grid">
            {content.caseStudies.map((item) => (
              <article className="mobile-apps-case-card" key={item.title}>
                <div className="mobile-apps-case-card__media">
                  <img src={assets.mobileApps.cases[item.image]} alt="" />
                </div>
                <div className="mobile-apps-case-card__body">
                  <h3>{item.title}</h3>
                  <span className="mobile-apps-case-card__tag">{item.tag}</span>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <Link className="mobile-apps-case-card__link" to="/contact">
                    <span>View Case Study</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
