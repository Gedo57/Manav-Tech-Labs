import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function CapabilityList({ items }) {
  return (
    <div className="capability-list" aria-label="Product capabilities">
      {items.map((item, index) => (
        <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>
      ))}
    </div>
  );
}

function TechnologyGroup({ group }) {
  return (
    <article className="technology-group">
      <h3>{group.label}</h3>
      <div>
        {group.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}

export function ServicesEditorialSections() {
  const content = siteContent.servicesEditorial;

  return (
    <div className="services-editorial" aria-label="Detailed Manav Tech Labs services">
      <EditorialSection
        id="services-product-development"
        eyebrow={content.productDevelopment.eyebrow}
        title={content.productDevelopment.title}
        lead={content.productDevelopment.lead}
        className="services-editorial__product"
      >
        <div className="services-product-grid">
          <div className="editorial-copy">
            {content.productDevelopment.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <CapabilityList items={content.productDevelopment.capabilities} />
        </div>
      </EditorialSection>

      <EditorialSection
        id="services-game-development"
        eyebrow={content.gameDevelopment.eyebrow}
        title={content.gameDevelopment.title}
        lead={content.gameDevelopment.lead}
        className="services-editorial__games"
      >
        <p className="section-article-copy">{content.gameDevelopment.body}</p>
        <div className="article-card-grid article-card-grid--four services-game-grid">
          {content.gameDevelopment.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="services-ai-automation"
        eyebrow={content.automation.eyebrow}
        title={content.automation.title}
        lead={content.automation.lead}
        className="services-editorial__automation"
      >
        <div className="article-card-grid article-card-grid--three">
          {content.automation.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="services-technology"
        eyebrow={content.technology.eyebrow}
        title={content.technology.title}
        lead={content.technology.lead}
        className="services-editorial__technology"
        align="center"
      >
        <div className="technology-grid">
          {content.technology.groups.map((group) => <TechnologyGroup key={group.id} group={group} />)}
        </div>
      </EditorialSection>

      <EditorialSection
        id="services-engagement"
        eyebrow={content.engagement.eyebrow}
        title={content.engagement.title}
        lead={content.engagement.lead}
        className="services-editorial__engagement"
      >
        <div className="article-card-grid article-card-grid--three">
          {content.engagement.options.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <section className="editorial-cta services-editorial__cta" aria-labelledby="services-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.engagement.cta.eyebrow}</span>
          <h2 id="services-cta-title">{content.engagement.cta.title}</h2>
          <p>{content.engagement.cta.body}</p>
        </div>
        <Button href="/contact">{content.engagement.cta.button}</Button>
      </section>
    </div>
  );
}
