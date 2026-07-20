import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function CaseStudyNote({ item }) {
  return (
    <article className={`portfolio-case-note portfolio-case-note--${item.tone ?? 'blue'}`}>
      <header className="portfolio-case-note__header">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
      </header>

      <div className="portfolio-case-note__story">
        <div>
          <strong>Challenge</strong>
          <p>{item.challenge}</p>
        </div>
        <div>
          <strong>Solution</strong>
          <p>{item.solution}</p>
        </div>
      </div>

      <div className="portfolio-case-note__technology">
        <span>Technology</span>
        <p>{item.technology}</p>
      </div>

      <ul className="portfolio-case-note__outcomes" aria-label={`${item.title} measurable outcomes`}>
        {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
      </ul>
    </article>
  );
}

export function PortfolioEditorialSections() {
  const content = siteContent.portfolioEditorial;

  return (
    <div className="portfolio-editorial" aria-label="Portfolio delivery notes and selected case studies">
      <EditorialSection
        id="portfolio-approach"
        eyebrow={content.approach.eyebrow}
        title={content.approach.title}
        lead={content.approach.lead}
        className="portfolio-editorial__approach"
      >
        <div className="portfolio-approach-grid">
          <div className="editorial-copy portfolio-approach-copy">
            {content.approach.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="article-card-grid article-card-grid--three portfolio-approach-cards">
            {content.approach.items.map((item, index) => (
              <ArticleCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="portfolio-case-notes"
        eyebrow={content.caseStudies.eyebrow}
        title={content.caseStudies.title}
        lead={content.caseStudies.lead}
        className="portfolio-editorial__cases"
      >
        <div className="portfolio-case-grid">
          {content.caseStudies.items.map((item) => <CaseStudyNote key={item.id} item={item} />)}
        </div>
        <p className="portfolio-case-note-disclaimer">{content.caseStudies.note}</p>
      </EditorialSection>

      <EditorialSection
        id="portfolio-delivery"
        eyebrow={content.delivery.eyebrow}
        title={content.delivery.title}
        lead={content.delivery.lead}
        className="portfolio-editorial__delivery"
      >
        <div className="article-card-grid portfolio-delivery-grid">
          {content.delivery.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <section className="editorial-cta portfolio-editorial__cta" aria-labelledby="portfolio-editorial-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.delivery.cta.eyebrow}</span>
          <h2 id="portfolio-editorial-cta-title">{content.delivery.cta.title}</h2>
          <p>{content.delivery.cta.body}</p>
        </div>
        <Button href="/contact">{content.delivery.cta.button}</Button>
      </section>
    </div>
  );
}
