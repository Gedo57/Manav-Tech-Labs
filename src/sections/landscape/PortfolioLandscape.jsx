import { Link } from 'react-router-dom';
import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { portfolioLandscapeLayout as layout } from '../../config/layout/landscape/portfolio.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function ProjectCard({ project }) {
  const vars = cssVars({
    portfolioCardImageHeight: layout.card.imageHeight,
    portfolioCardBadgeX: layout.card.badgeX,
    portfolioCardBadgeY: layout.card.badgeY,
    portfolioCardBadgeHeight: layout.card.badgeHeight,
    portfolioCardBadgeFontSize: layout.card.badgeFontSize,
    portfolioCardTitleX: layout.card.titleX,
    portfolioCardTitleY: layout.card.titleY,
    portfolioCardTitleSize: layout.card.titleSize,
    portfolioCardTitleWeight: layout.card.titleWeight,
    portfolioCardFeatureX: layout.card.featureX,
    portfolioCardFeatureY: layout.card.featureY,
    portfolioCardFeatureSize: layout.card.featureSize,
    portfolioCardFeatureGap: layout.card.featureGap,
    portfolioCardToolsX: layout.card.toolsX,
    portfolioCardToolsY: layout.card.toolsY,
    portfolioCardToolSize: layout.card.toolSize,
    portfolioCardToolGap: layout.card.toolGap
  });

  return (
    <article className="portfolio-card portfolio-card--landscape" style={vars}>
      <div className="portfolio-card__image-wrap">
        <img src={assets.portfolio.projects[project.image]} alt="" aria-hidden="true" />
      </div>
      <div className="portfolio-card__badge">{project.category}</div>
      <h3 className="portfolio-card__title">{project.title}</h3>
      <ul className="portfolio-card__features" aria-label={`${project.title} features`}>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="portfolio-card__tools" aria-label={`${project.title} tools`}>
        {project.tools.map((tool) => (
          <span key={tool} className="portfolio-card__tool">{tool}</span>
        ))}
      </div>
    </article>
  );
}

export function PortfolioLandscape() {
  const { portfolio } = siteContent;
  const featuredProjects = portfolio.projects
    .filter((project) => project.featured)
    .slice(0, portfolio.featuredLimit ?? 4);
  const ctaButton = typeof portfolio.cta === 'string'
    ? { label: portfolio.cta, href: '/portfolio#project-directory', visible: true, ariaLabel: 'View all projects' }
    : portfolio.cta;
  const cardsVars = cssVars({
    portfolioCardsGap: layout.projects.gap
  });
  const ctaVars = cssVars({
    portfolioCtaFontSize: layout.cta.fontSize,
    portfolioCtaArrowSize: layout.cta.arrowSize
  });

  return (
    <ControlledSection
      id="portfolio"
      mode="landscape"
      section={layout.section}
      className="portfolio-landscape"
      ariaLabel="Manav Tech Labs portfolio section"
    >
      <div className="portfolio-landscape__shade" aria-hidden="true" />

      <div className="portfolio-landscape__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.portfolio.background} alt="" />
      </div>

      <header className="portfolio-landscape__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="portfolio-title portfolio-title--landscape" style={textStyle(layout.title)}>
          <span className="portfolio-title__line portfolio-title__line--white">{portfolio.titleTop}</span>
          <span className="portfolio-title__line portfolio-title__line--gradient">{portfolio.titleAccent}</span>
        </h2>
      </header>

      <p className="portfolio-landscape__description controlled-box" style={textStyle(layout.description)}>{portfolio.description}</p>

      {ctaButton?.visible !== false && (
        <Link
          className="portfolio-landscape__cta controlled-box"
          to={ctaButton?.href ?? '/portfolio#project-directory'}
          style={{ ...boxStyle(layout.cta), ...ctaVars }}
          aria-label={ctaButton?.ariaLabel ?? ctaButton?.label ?? 'View all projects'}
        >
          <span>{ctaButton?.label ?? 'View All Projects'}</span>
          <span className="portfolio-landscape__cta-arrow" aria-hidden="true">→</span>
        </Link>
      )}

      <div className="portfolio-grid portfolio-grid--landscape controlled-box" style={{ ...boxStyle(layout.projects), ...cardsVars }} aria-label="Selected work projects">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </ControlledSection>
  );
}
