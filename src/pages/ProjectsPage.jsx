import { Button } from '../components/common/Button.jsx';
import { projectsPageLayout as layout } from '../config/layout/projects.layout.js';
import { cssVars } from '../config/layout/styleHelpers.js';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

function getProjectsPageStyle() {
  return cssVars({
    projectsPageMaxWidth: layout.page.maxWidth,
    projectsPagePaddingTop: layout.page.paddingTop,
    projectsPagePaddingX: layout.page.paddingX,
    projectsPagePaddingBottom: layout.page.paddingBottom,
    projectsPagePortraitPaddingTop: layout.page.portraitPaddingTop,
    projectsPagePortraitPaddingX: layout.page.portraitPaddingX,
    projectsPagePortraitPaddingBottom: layout.page.portraitPaddingBottom,

    projectsEyebrowHeight: layout.eyebrow.height,
    projectsEyebrowPaddingX: layout.eyebrow.paddingX,
    projectsEyebrowFontSize: layout.eyebrow.fontSize,
    projectsEyebrowLetterSpacing: `${layout.eyebrow.letterSpacing}em`,
    projectsEyebrowPortraitHeight: layout.eyebrow.portraitHeight,
    projectsEyebrowPortraitPaddingX: layout.eyebrow.portraitPaddingX,
    projectsEyebrowPortraitFontSize: layout.eyebrow.portraitFontSize,
    projectsEyebrowPortraitLetterSpacing: `${layout.eyebrow.portraitLetterSpacing}em`,

    projectsHeroGap: layout.hero.gap,
    projectsHeroMarginTop: layout.hero.marginTop,
    projectsHeroPortraitMarginTop: layout.hero.portraitMarginTop,

    projectsTitleMinSize: layout.title.minSize,
    projectsTitleFluidSize: `${layout.title.fluidSize}vw`,
    projectsTitleMaxSize: layout.title.maxSize,
    projectsTitleLineHeight: layout.title.lineHeight,
    projectsTitlePortraitSize: layout.title.portraitSize,
    projectsTitlePortraitLineHeight: layout.title.portraitLineHeight,

    projectsDescriptionWidth: layout.description.width,
    projectsDescriptionMarginTop: layout.description.marginTop,
    projectsDescriptionFontSize: layout.description.fontSize,
    projectsDescriptionLineHeight: layout.description.lineHeight,
    projectsDescriptionPortraitMarginTop: layout.description.portraitMarginTop,
    projectsDescriptionPortraitFontSize: layout.description.portraitFontSize,
    projectsDescriptionPortraitLineHeight: layout.description.portraitLineHeight,

    projectsActionsGap: layout.actions.gap,
    projectsActionsPaddingBottom: layout.actions.paddingBottom,
    projectsActionsPortraitMarginTop: layout.actions.portraitMarginTop,
    projectsActionsPortraitButtonHeight: layout.actions.portraitButtonHeight,
    projectsActionsPortraitButtonFontSize: layout.actions.portraitButtonFontSize,

    projectsStatsColumns: String(layout.stats.columns),
    projectsStatsGap: layout.stats.gap,
    projectsStatsMarginTop: layout.stats.marginTop,
    projectsStatCardMinHeight: layout.stats.cardMinHeight,
    projectsStatCardPaddingY: layout.stats.cardPaddingY,
    projectsStatCardPaddingX: layout.stats.cardPaddingX,
    projectsStatCardRadius: layout.stats.cardRadius,
    projectsStatValueSize: layout.stats.valueSize,
    projectsStatLabelSize: layout.stats.labelSize,
    projectsStatLabelMarginTop: layout.stats.labelMarginTop,
    projectsStatsPortraitColumns: String(layout.stats.portraitColumns),
    projectsStatsPortraitGap: layout.stats.portraitGap,
    projectsStatsPortraitMarginTop: layout.stats.portraitMarginTop,
    projectsStatCardPortraitMinHeight: layout.stats.portraitCardMinHeight,
    projectsStatCardPortraitPadding: layout.stats.portraitCardPadding,
    projectsStatCardPortraitRadius: layout.stats.portraitCardRadius,
    projectsStatValuePortraitSize: layout.stats.portraitValueSize,
    projectsStatLabelPortraitSize: layout.stats.portraitLabelSize,
    projectsStatLabelPortraitMarginTop: layout.stats.portraitLabelMarginTop,

    projectsGridColumns: String(layout.grid.columns),
    projectsGridGap: layout.grid.gap,
    projectsGridMarginTop: layout.grid.marginTop,
    projectsGridPortraitColumns: String(layout.grid.portraitColumns),
    projectsGridPortraitGap: layout.grid.portraitGap,
    projectsGridPortraitMarginTop: layout.grid.portraitMarginTop,

    projectsCardMinHeight: layout.card.minHeight,
    projectsCardImageColumn: `${layout.card.imageColumnPercent}%`,
    projectsCardImageMinWidth: layout.card.imageMinWidth,
    projectsCardRadius: layout.card.radius,
    projectsCardBorderWidth: layout.card.borderWidth,
    projectsCardImageMinHeight: layout.card.imageMinHeight,
    projectsCardImageFit: layout.card.imageFit,
    projectsCardIndexX: layout.card.indexX,
    projectsCardIndexY: layout.card.indexY,
    projectsCardIndexWidth: layout.card.indexWidth,
    projectsCardIndexHeight: layout.card.indexHeight,
    projectsCardIndexRadius: layout.card.indexRadius,
    projectsCardIndexFontSize: layout.card.indexFontSize,
    projectsCardBodyPaddingTop: layout.card.bodyPaddingTop,
    projectsCardBodyPaddingX: layout.card.bodyPaddingX,
    projectsCardBodyPaddingBottom: layout.card.bodyPaddingBottom,
    projectsCardMetaGap: layout.card.metaGap,
    projectsCardMetaMarginBottom: layout.card.metaMarginBottom,
    projectsCardMetaHeight: layout.card.metaHeight,
    projectsCardMetaPaddingX: layout.card.metaPaddingX,
    projectsCardMetaFontSize: layout.card.metaFontSize,
    projectsCardTitleFontSize: layout.card.titleFontSize,
    projectsCardTitleLineHeight: layout.card.titleLineHeight,
    projectsCardSummaryMarginTop: layout.card.summaryMarginTop,
    projectsCardSummaryFontSize: layout.card.summaryFontSize,
    projectsCardSummaryLineHeight: layout.card.summaryLineHeight,
    projectsCardFeaturesGap: layout.card.featuresGap,
    projectsCardFeaturesMarginTop: layout.card.featuresMarginTop,
    projectsCardFeaturesFontSize: layout.card.featuresFontSize,
    projectsCardFeatureBulletSize: layout.card.featureBulletSize,
    projectsCardToolsGap: layout.card.toolsGap,
    projectsCardToolsMarginTop: layout.card.toolsMarginTop,
    projectsCardToolHeight: layout.card.toolHeight,
    projectsCardToolMinWidth: layout.card.toolMinWidth,
    projectsCardToolPaddingX: layout.card.toolPaddingX,
    projectsCardToolRadius: layout.card.toolRadius,
    projectsCardToolFontSize: layout.card.toolFontSize,
    projectsCardLinkHeight: layout.card.linkHeight,
    projectsCardLinkMarginTop: layout.card.linkMarginTop,
    projectsCardLinkPaddingX: layout.card.linkPaddingX,
    projectsCardLinkRadius: layout.card.linkRadius,
    projectsCardLinkFontSize: layout.card.linkFontSize,

    projectsCardPortraitRadius: layout.card.portraitRadius,
    projectsCardPortraitImageHeight: layout.card.portraitImageHeight,
    projectsCardPortraitIndexX: layout.card.portraitIndexX,
    projectsCardPortraitIndexY: layout.card.portraitIndexY,
    projectsCardPortraitIndexWidth: layout.card.portraitIndexWidth,
    projectsCardPortraitIndexHeight: layout.card.portraitIndexHeight,
    projectsCardPortraitIndexRadius: layout.card.portraitIndexRadius,
    projectsCardPortraitIndexFontSize: layout.card.portraitIndexFontSize,
    projectsCardPortraitBodyPaddingTop: layout.card.portraitBodyPaddingTop,
    projectsCardPortraitBodyPaddingX: layout.card.portraitBodyPaddingX,
    projectsCardPortraitBodyPaddingBottom: layout.card.portraitBodyPaddingBottom,
    projectsCardPortraitMetaGap: layout.card.portraitMetaGap,
    projectsCardPortraitMetaMarginBottom: layout.card.portraitMetaMarginBottom,
    projectsCardPortraitMetaHeight: layout.card.portraitMetaHeight,
    projectsCardPortraitMetaPaddingX: layout.card.portraitMetaPaddingX,
    projectsCardPortraitMetaFontSize: layout.card.portraitMetaFontSize,
    projectsCardPortraitTitleFontSize: layout.card.portraitTitleFontSize,
    projectsCardPortraitSummaryFontSize: layout.card.portraitSummaryFontSize,
    projectsCardPortraitFeaturesGap: layout.card.portraitFeaturesGap,
    projectsCardPortraitFeaturesMarginTop: layout.card.portraitFeaturesMarginTop,
    projectsCardPortraitFeaturesFontSize: layout.card.portraitFeaturesFontSize,
    projectsCardPortraitToolsGap: layout.card.portraitToolsGap,
    projectsCardPortraitToolsMarginTop: layout.card.portraitToolsMarginTop,
    projectsCardPortraitToolHeight: layout.card.portraitToolHeight,
    projectsCardPortraitToolMinWidth: layout.card.portraitToolMinWidth,
    projectsCardPortraitToolPaddingX: layout.card.portraitToolPaddingX,
    projectsCardPortraitToolFontSize: layout.card.portraitToolFontSize,
    projectsCardPortraitLinkHeight: layout.card.portraitLinkHeight,
    projectsCardPortraitLinkMarginTop: layout.card.portraitLinkMarginTop,
    projectsCardPortraitLinkPaddingX: layout.card.portraitLinkPaddingX,
    projectsCardPortraitLinkFontSize: layout.card.portraitLinkFontSize
  });
}

function ProjectPageCard({ project, index }) {
  return (
    <article className="projects-page-card">
      <div className="projects-page-card__media">
        <img src={assets.portfolio.projects[project.image]} alt="" aria-hidden="true" />
        <span className="projects-page-card__index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="projects-page-card__body">
        <div className="projects-page-card__meta">
          <span>{project.category}</span>
          <span>{project.platform}</span>
          <span>{project.status}</span>
        </div>

        <h2>{project.title}</h2>
        <p>{project.summary}</p>

        <ul className="projects-page-card__features" aria-label={`${project.title} project highlights`}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="projects-page-card__tools" aria-label={`${project.title} tools`}>
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <a
          className="projects-page-card__link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} live project link`}
        >
          <span>{project.linkLabel}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectsPage({ layoutMode }) {
  const { portfolio, projectsPage } = siteContent;
  const isPortrait = layoutMode === 'portrait';

  return (
    <main id="projects" className="projects-page" data-mode={layoutMode} style={getProjectsPageStyle()}>
      <div className="projects-page__background" aria-hidden="true" />
      <section className="projects-page__shell" aria-label="All Manav Tech Labs projects">
        <div className="projects-page__eyebrow">{projectsPage.eyebrow}</div>

        <div className="projects-page__hero">
          <div className="projects-page__copy">
            <h1>
              <span>{projectsPage.titleTop}</span>
              <span>{projectsPage.titleAccent}</span>
            </h1>
            <p>{projectsPage.description}</p>
          </div>

          <div className="projects-page__actions" aria-label="Projects page actions">
            <Button href="#home" variant="secondary">Back Home</Button>
            {!isPortrait && <Button href="#contact">Start Project</Button>}
          </div>
        </div>

        <div className="projects-page__stats" aria-label="Portfolio summary">
          {projectsPage.stats.map((stat) => (
            <div key={stat.label} className="projects-page__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="projects-page__grid">
          {portfolio.projects.map((project, index) => (
            <ProjectPageCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
