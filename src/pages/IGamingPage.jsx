import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button.jsx';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

function StatIcon({ type }) {
  const paths = {
    projects: (
      <>
        <path d="m12 2 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 8.8l6.5-.9L12 2Z" />
      </>
    ),
    uptime: (
      <>
        <path d="M12 3 4.8 6v5.5c0 4.5 3 7.7 7.2 9.5 4.2-1.8 7.2-5 7.2-9.5V6L12 3Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.6" />
      </>
    ),
    players: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.4-3.4 2.2-5.2 5.5-5.2s5.1 1.8 5.5 5.2" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M15.2 14.7c3.1-.6 5 .8 5.3 3.7" />
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
    <span className="igaming-stat__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[type] ?? paths.projects}</svg>
    </span>
  );
}

function SectionHeading({ prefix, accent, id }) {
  return (
    <div className="igaming-section-heading" id={id}>
      <h2>
        {prefix} <span>{accent}</span>
      </h2>
    </div>
  );
}

export function IGamingPage() {
  const content = siteContent.igamingPage;

  return (
    <main className="igaming-page">
      <section className="igaming-hero" aria-labelledby="igaming-page-title">
        <div className="igaming-shell igaming-hero__grid">
          <div className="igaming-hero__copy">
            <p className="igaming-eyebrow">{content.eyebrow}</p>
            <h1 id="igaming-page-title" className="igaming-hero__title">
              <span className="igaming-hero__title-top">{content.titleTop}</span>
              <span className="igaming-hero__title-accent">{content.titleAccent}</span>
            </h1>
            <p className="igaming-hero__strapline">{content.strapline}</p>
            <p className="igaming-hero__description">{content.description}</p>

            <div className="igaming-hero__actions">
              <Button href="/contact" variant="primary">{content.primaryCta}</Button>
              <Button href="#igaming-case-studies" variant="secondary">{content.secondaryCta}</Button>
            </div>
          </div>

          <div className="igaming-hero__visual" aria-hidden="true">
            <div className="igaming-hero__halo" />
            <img src={assets.igaming.hero} alt="" />
          </div>
        </div>

        <div className="igaming-shell igaming-stats" aria-label="iGaming delivery highlights">
          {content.stats.map((stat) => (
            <article className="igaming-stat" key={stat.label}>
              <StatIcon type={stat.icon} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="igaming-section igaming-section--reasons" aria-labelledby="igaming-reasons-title">
        <div className="igaming-shell">
          <SectionHeading prefix="WHY MANAV FOR" accent="iGAMING?" id="igaming-reasons-title" />

          <div className="igaming-reasons-grid">
            {content.reasons.map((item) => (
              <article className="igaming-reason-card" key={item.title}>
                <div className="igaming-reason-card__icon-wrap">
                  <img src={assets.igaming.icons[item.icon]} alt="" />
                </div>
                <div className="igaming-reason-card__copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="igaming-section igaming-section--services" aria-labelledby="igaming-services-title">
        <div className="igaming-shell">
          <SectionHeading prefix="OUR" accent="iGAMING SERVICES" id="igaming-services-title" />

          <div className="igaming-services-grid">
            {content.services.map((item) => (
              <article className="igaming-service-card" key={item.title}>
                <div className="igaming-service-card__icon-wrap">
                  <img src={assets.igaming.icons[item.icon]} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="igaming-section igaming-section--cases" aria-labelledby="igaming-case-studies">
        <div className="igaming-shell">
          <SectionHeading prefix="CASE" accent="STUDIES" id="igaming-case-studies" />

          <div className="igaming-case-grid">
            {content.caseStudies.map((item, index) => (
              <article className="igaming-case-card" key={item.title}>
                <div className={`igaming-case-card__media igaming-case-card__media--${index + 1}`}>
                  <img className="igaming-case-card__media-bg" src={assets.igaming.hero} alt="" />
                  <span className="igaming-case-card__media-shade" />
                  <img className="igaming-case-card__media-icon" src={assets.igaming.icons[item.icon]} alt="" />
                </div>

                <div className="igaming-case-card__body">
                  <h3>{item.title}</h3>
                  <span className="igaming-case-card__tag">{item.tag}</span>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <Link className="igaming-case-card__link" to="/contact">
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
