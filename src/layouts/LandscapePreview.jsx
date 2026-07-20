import { Button } from '../components/common/Button.jsx';
import { NeonCard } from '../components/common/NeonCard.jsx';
import { SectionTitle } from '../components/common/SectionTitle.jsx';
import { siteContent } from '../data/siteContent.js';

export function LandscapePreview() {
  return (
    <main className="layout layout--landscape" id="home">
      <section className="stage stage--phase-one">
        <div className="stage__copy">
          <SectionTitle
            index="01"
            kicker={siteContent.phaseOnePreview.kicker}
            title="Design System"
            accent=" Ready"
            body={siteContent.phaseOnePreview.description}
          />
          <div className="stage__actions">
            <Button href="/contact">{siteContent.cta.primary}</Button>
            <Button variant="secondary" href="/portfolio">{siteContent.cta.secondary}</Button>
          </div>
        </div>

        <div className="stage__panel">
          <div className="system-spec">
            <span>Landscape Base</span>
            <strong>1920 × 1080</strong>
          </div>
          <div className="system-spec">
            <span>Portrait Base</span>
            <strong>430 × 932</strong>
          </div>
          <div className="system-spec">
            <span>Control</span>
            <strong>Tokens + Data + CSS</strong>
          </div>
        </div>
      </section>

      <section className="phase-grid" aria-label="Phase one modules">
        {siteContent.designCards.map((card, index) => (
          <NeonCard
            key={card.title}
            title={card.title}
            body={card.body}
            icon={['⬢', '◇', '✦'][index]}
            tone={['blue', 'purple', 'gold'][index]}
          />
        ))}
      </section>
    </main>
  );
}
