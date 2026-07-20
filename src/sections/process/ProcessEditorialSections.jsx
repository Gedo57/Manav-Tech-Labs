import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function StageDeliverable({ item }) {
  return (
    <article className="process-deliverable">
      <span className="process-deliverable__number">{item.number}</span>
      <div className="process-deliverable__copy">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <strong>{item.deliverable}</strong>
      </div>
    </article>
  );
}

function SupportItem({ item, index }) {
  return (
    <article className="process-support-item">
      <span>{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

export function ProcessEditorialSections() {
  const content = siteContent.processEditorial;

  return (
    <div className="process-editorial" aria-label="Detailed Manav Tech Labs delivery process">
      <EditorialSection
        id="process-visibility"
        eyebrow={content.visibility.eyebrow}
        title={content.visibility.title}
        lead={content.visibility.lead}
        className="process-editorial__visibility"
      >
        <div className="process-visibility-grid">
          <div className="editorial-copy">
            {content.visibility.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="article-card-grid article-card-grid--three process-visibility-cards">
            {content.visibility.items.map((item, index) => (
              <ArticleCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="process-deliverables"
        eyebrow={content.stages.eyebrow}
        title={content.stages.title}
        lead={content.stages.lead}
        className="process-editorial__stages"
      >
        <div className="process-deliverable-grid">
          {content.stages.items.map((item) => <StageDeliverable key={item.id} item={item} />)}
        </div>
      </EditorialSection>

      <EditorialSection
        id="process-quality"
        eyebrow={content.quality.eyebrow}
        title={content.quality.title}
        lead={content.quality.lead}
        className="process-editorial__quality"
      >
        <div className="article-card-grid article-card-grid--four process-quality-grid">
          {content.quality.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="process-after-launch"
        eyebrow={content.support.eyebrow}
        title={content.support.title}
        lead={content.support.lead}
        className="process-editorial__support"
      >
        <div className="process-support-grid">
          {content.support.items.map((item, index) => (
            <SupportItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <section className="editorial-cta process-editorial__cta" aria-labelledby="process-editorial-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.support.cta.eyebrow}</span>
          <h2 id="process-editorial-cta-title">{content.support.cta.title}</h2>
          <p>{content.support.cta.body}</p>
        </div>
        <Button href="/contact">{content.support.cta.button}</Button>
      </section>
    </div>
  );
}
