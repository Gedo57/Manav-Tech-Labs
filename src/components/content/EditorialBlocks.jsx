import { Link } from 'react-router-dom';

export function EditorialSection({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  align = 'left'
}) {
  return (
    <section id={id} className={`editorial-section editorial-section--${align} ${className}`.trim()}>
      <div className="editorial-section__inner">
        {(eyebrow || title || lead) && (
          <header className="editorial-heading">
            {eyebrow && <span className="editorial-heading__eyebrow">{eyebrow}</span>}
            {title && <h2 className="editorial-heading__title">{title}</h2>}
            {lead && <p className="editorial-heading__lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function MetricStrip({ items, ariaLabel = 'Company highlights' }) {
  return (
    <div className="metric-strip" aria-label={ariaLabel}>
      {items.map((item) => (
        <article className="metric-strip__item" key={item.label}>
          <strong className="metric-strip__value">{item.value}</strong>
          <span className="metric-strip__label">{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export function ArticleCard({ item, index, iconSrc }) {
  const badgeText = item.kicker ?? String(index + 1).padStart(2, '0');
  const badgeType = /^\d+$/.test(String(badgeText).trim()) ? 'number' : 'label';

  return (
    <article className={`article-card article-card--${item.tone ?? 'blue'} article-card--${badgeType}-index`}>
      <div className="article-card__topline">
        {iconSrc ? (
          <img className="article-card__icon" src={iconSrc} alt="" aria-hidden="true" />
        ) : (
          <span className={`article-card__index article-card__index--${badgeType}`} aria-hidden="true">{badgeText}</span>
        )}
        {iconSrc && item.kicker && <span className="article-card__kicker">{item.kicker}</span>}
      </div>
      <h3 className="article-card__title">{item.title}</h3>
      <p className="article-card__body">{item.body}</p>
      {item.points?.length > 0 && (
        <ul className="article-card__points">
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
    </article>
  );
}

export function ProjectPreviewCard({ project, imageSrc }) {
  return (
    <article className={`project-preview project-preview--${project.tone ?? 'blue'}`}>
      <div className="project-preview__media">
        <img src={imageSrc} alt={`${project.title} product preview`} loading="lazy" />
        <span className="project-preview__category">{project.category}</span>
      </div>
      <div className="project-preview__content">
        <div>
          <span className="project-preview__client">{project.client}</span>
          <h3 className="project-preview__title">{project.title}</h3>
        </div>
        <p className="project-preview__summary">{project.summary}</p>
        <ul className="project-preview__outcomes">
          {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
        </ul>
        <Link className="project-preview__link" to={project.href} aria-label={`View ${project.title} in our portfolio`}>
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function TextLink({ href, children, className = '' }) {
  return (
    <Link className={`editorial-text-link ${className}`.trim()} to={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
