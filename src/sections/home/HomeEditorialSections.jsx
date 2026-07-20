import { Button } from '../../components/common/Button.jsx';
import {
  ArticleCard,
  EditorialSection,
  MetricStrip,
  ProjectPreviewCard,
  TextLink
} from '../../components/content/EditorialBlocks.jsx';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

export function HomeEditorialSections() {
  const content = siteContent.homeEditorial;

  return (
    <div className="home-editorial" aria-label="More about Manav Tech Labs">
      <EditorialSection
        id="home-about"
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        lead={content.about.lead}
        className="home-editorial__about"
      >
        <div className="home-editorial__about-grid">
          <div className="home-editorial__article-copy">
            {content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <TextLink href="/about">More about the company</TextLink>
          </div>
          <MetricStrip items={content.about.metrics} />
        </div>
      </EditorialSection>

      <EditorialSection
        id="home-capabilities"
        eyebrow={content.capabilities.eyebrow}
        title={content.capabilities.title}
        lead={content.capabilities.lead}
        className="home-editorial__capabilities"
      >
        <div className="article-card-grid article-card-grid--three">
          {content.capabilities.items.map((item, index) => (
            <ArticleCard
              key={item.id}
              item={item}
              index={index}
              iconSrc={assets.home.icons[item.icon]}
            />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="home-selected-work"
        eyebrow={content.selectedWork.eyebrow}
        title={content.selectedWork.title}
        lead={content.selectedWork.lead}
        className="home-editorial__work"
      >
        <div className="project-preview-grid">
          {content.selectedWork.projects.map((project) => (
            <ProjectPreviewCard
              key={project.id}
              project={project}
              imageSrc={assets.home.selectedWork[project.image]}
            />
          ))}
        </div>
        <div className="home-editorial__section-action">
          <Button variant="secondary" href="/portfolio">Explore All Projects</Button>
        </div>
      </EditorialSection>

      <EditorialSection
        id="home-delivery"
        eyebrow={content.delivery.eyebrow}
        title={content.delivery.title}
        lead={content.delivery.lead}
        className="home-editorial__delivery"
      >
        <div className="article-card-grid article-card-grid--four">
          {content.delivery.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <section className="home-editorial-cta" aria-labelledby="home-editorial-cta-title">
        <div className="home-editorial-cta__glow" aria-hidden="true" />
        <div className="home-editorial-cta__content">
          <span className="home-editorial-cta__eyebrow">{content.cta.eyebrow}</span>
          <h2 id="home-editorial-cta-title">{content.cta.title}</h2>
          <p>{content.cta.body}</p>
        </div>
        <Button href="/contact">{content.cta.button}</Button>
      </section>
    </div>
  );
}
