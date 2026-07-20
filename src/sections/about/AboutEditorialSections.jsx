import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-card__avatar" aria-hidden="true">{member.initials}</div>
      <div className="team-card__heading">
        <h3>{member.name}</h3>
        <span>{member.role}</span>
      </div>
      <p>{member.body}</p>
      <strong>{member.focus}</strong>
    </article>
  );
}

export function AboutEditorialSections() {
  const content = siteContent.aboutEditorial;

  return (
    <div className="about-editorial" aria-label="More about Manav Tech Labs">
      <EditorialSection
        id="about-company"
        eyebrow={content.introduction.eyebrow}
        title={content.introduction.title}
        lead={content.introduction.lead}
        className="about-editorial__intro"
      >
        <div className="about-intro-grid">
          <div className="editorial-copy">
            {content.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="article-card-grid article-card-grid--two">
            <ArticleCard item={content.introduction.vision} index={0} />
            <ArticleCard item={content.introduction.mission} index={1} />
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="about-highlights"
        eyebrow={content.highlights.eyebrow}
        title={content.highlights.title}
        lead={content.highlights.lead}
        className="about-editorial__highlights"
      >
        <div className="article-card-grid about-highlight-grid">
          {content.highlights.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="about-team"
        eyebrow={content.team.eyebrow}
        title={content.team.title}
        lead={content.team.lead}
        className="about-editorial__team"
        align="center"
      >
        <div className="team-card-grid">
          {content.team.members.map((member) => <TeamCard key={member.id} member={member} />)}
        </div>
      </EditorialSection>

      <EditorialSection
        id="about-collaboration"
        eyebrow={content.collaboration.eyebrow}
        title={content.collaboration.title}
        lead={content.collaboration.lead}
        className="about-editorial__collaboration"
      >
        <div className="about-collaboration-grid">
          <article className="collaboration-panel">
            <h3>How We Work With Clients</h3>
            <ul>
              {content.collaboration.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
          <article className="industries-panel">
            <h3>Industries and Product Categories</h3>
            <div className="tag-cloud" aria-label="Industries supported">
              {content.collaboration.industries.map((industry) => <span key={industry}>{industry}</span>)}
            </div>
          </article>
        </div>
      </EditorialSection>

      <section className="editorial-cta about-editorial__cta" aria-labelledby="about-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.collaboration.cta.eyebrow}</span>
          <h2 id="about-cta-title">{content.collaboration.cta.title}</h2>
          <p>{content.collaboration.cta.body}</p>
        </div>
        <Button href="/contact">{content.collaboration.cta.button}</Button>
      </section>
    </div>
  );
}
