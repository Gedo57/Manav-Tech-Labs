import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { portfolioPortraitLayout as layout } from '../../config/layout/portrait/portfolio.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function PortraitProjectCard({ project }) {
  const vars = cssVars({
    portraitPortfolioCardHeight: layout.card.height,
    portraitPortfolioCardImageHeight: layout.card.imageHeight,
    portraitPortfolioCardBadgeX: layout.card.badgeX,
    portraitPortfolioCardBadgeY: layout.card.badgeY,
    portraitPortfolioCardBadgeHeight: layout.card.badgeHeight,
    portraitPortfolioCardBadgeFontSize: layout.card.badgeFontSize,
    portraitPortfolioCardTitleX: layout.card.titleX,
    portraitPortfolioCardTitleY: layout.card.titleY,
    portraitPortfolioCardTitleSize: layout.card.titleSize,
    portraitPortfolioCardTitleWeight: layout.card.titleWeight,
    portraitPortfolioCardFeatureX: layout.card.featureX,
    portraitPortfolioCardFeatureY: layout.card.featureY,
    portraitPortfolioCardFeatureSize: layout.card.featureSize,
    portraitPortfolioCardFeatureGap: layout.card.featureGap,
    portraitPortfolioCardToolsX: layout.card.toolsX,
    portraitPortfolioCardToolsY: layout.card.toolsY,
    portraitPortfolioCardToolSize: layout.card.toolSize,
    portraitPortfolioCardToolGap: layout.card.toolGap
  });

  return (
    <article className="portrait-portfolio-card" style={vars}>
      <div className="portrait-portfolio-card__image-wrap">
        <img src={assets.portfolio.projects[project.image]} alt="" aria-hidden="true" />
      </div>
      <div className="portrait-portfolio-card__badge">{project.category}</div>
      <h3 className="portrait-portfolio-card__title">{project.title}</h3>
      <ul className="portrait-portfolio-card__features">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="portrait-portfolio-card__tools">
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </article>
  );
}

export function PortfolioPortrait() {
  const { portfolio } = siteContent;
  const featuredProjects = portfolio.projects
    .filter((project) => project.featured)
    .slice(0, portfolio.featuredLimit ?? 4);
  const ctaButton = typeof portfolio.cta === 'string'
    ? { label: portfolio.cta, href: '#projects', visible: true, ariaLabel: 'View all projects' }
    : portfolio.cta;
  const cardsVars = cssVars({
    portraitPortfolioCardsGap: layout.projects.gap
  });
  const ctaVars = cssVars({
    portraitPortfolioCtaFontSize: layout.cta.fontSize,
    portraitPortfolioCtaArrowSize: layout.cta.arrowSize
  });

  return (
    <ControlledSection
      id="portfolio"
      mode="portrait"
      section={layout.section}
      className="portfolio-portrait"
      ariaLabel="Manav Tech Labs mobile portfolio section"
    >
      <div className="portfolio-portrait__shade" aria-hidden="true" />
      <div className="portfolio-portrait__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.portfolio.background} alt="" />
      </div>

      <header className="portfolio-portrait__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="portfolio-title portfolio-title--portrait" style={textStyle(layout.title)}>
          <span className="portfolio-title__line portfolio-title__line--white">{portfolio.titleTop}</span>
          <span className="portfolio-title__line portfolio-title__line--gradient">{portfolio.titleAccent}</span>
        </h2>
      </header>

      <p className="portfolio-portrait__description controlled-box" style={textStyle(layout.description)}>{portfolio.description}</p>
      {ctaButton?.visible !== false && (
        <a
          className="portfolio-portrait__cta controlled-box"
          href={ctaButton?.href ?? '#projects'}
          style={{ ...boxStyle(layout.cta), ...ctaVars }}
          aria-label={ctaButton?.ariaLabel ?? ctaButton?.label ?? 'View all projects'}
        >
          <span>{ctaButton?.label ?? 'View All Projects'}</span>
          <span aria-hidden="true">→</span>
        </a>
      )}

      <div className="portrait-portfolio-grid controlled-box" style={{ ...boxStyle(layout.projects), ...cardsVars }}>
        {featuredProjects.map((project) => (
          <PortraitProjectCard key={project.id} project={project} />
        ))}
      </div>
    </ControlledSection>
  );
}
