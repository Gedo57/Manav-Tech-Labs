import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function ContactStep({ item }) {
  return (
    <article className="contact-next-step">
      <span>{item.number}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

export function ContactEditorialSections() {
  const content = siteContent.contactEditorial;

  return (
    <div className="contact-editorial" aria-label="How to start a project with Manav Tech Labs">
      <EditorialSection
        id="contact-project-brief"
        eyebrow={content.brief.eyebrow}
        title={content.brief.title}
        lead={content.brief.lead}
        className="contact-editorial__brief"
      >
        <div className="contact-brief-grid">
          <div className="editorial-copy contact-brief-copy">
            {content.brief.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="contact-brief-points" aria-label="Useful project brief details">
            {content.brief.points.map((point, index) => (
              <article key={point.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="contact-next-steps"
        eyebrow={content.nextSteps.eyebrow}
        title={content.nextSteps.title}
        lead={content.nextSteps.lead}
        className="contact-editorial__next"
        align="center"
      >
        <div className="contact-next-grid">
          {content.nextSteps.items.map((item) => <ContactStep key={item.id} item={item} />)}
        </div>
      </EditorialSection>

      <EditorialSection
        id="contact-engagement-models"
        eyebrow={content.engagement.eyebrow}
        title={content.engagement.title}
        lead={content.engagement.lead}
        className="contact-editorial__engagement"
      >
        <div className="article-card-grid article-card-grid--three">
          {content.engagement.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="contact-confidentiality"
        eyebrow={content.confidentiality.eyebrow}
        title={content.confidentiality.title}
        lead={content.confidentiality.lead}
        className="contact-editorial__confidentiality"
      >
        <div className="contact-confidentiality-panel">
          <div>
            <h3>{content.confidentiality.panelTitle}</h3>
            <p>{content.confidentiality.body}</p>
          </div>
          <ul>
            {content.confidentiality.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </EditorialSection>

      <section className="editorial-cta contact-editorial__cta" aria-labelledby="contact-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.cta.eyebrow}</span>
          <h2 id="contact-cta-title">{content.cta.title}</h2>
          <p>{content.cta.body}</p>
        </div>
        <Button href="#contact">{content.cta.button}</Button>
      </section>
    </div>
  );
}
