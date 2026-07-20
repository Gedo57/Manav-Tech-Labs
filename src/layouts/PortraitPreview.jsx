import { Button } from '../components/common/Button.jsx';
import { NeonCard } from '../components/common/NeonCard.jsx';
import { SectionTitle } from '../components/common/SectionTitle.jsx';
import { siteContent } from '../data/siteContent.js';

export function PortraitPreview() {
  return (
    <main className="layout layout--portrait" id="home">
      <section className="portrait-stage">
        <SectionTitle
          index="01"
          kicker="Phase 01"
          title="Mobile"
          accent=" Portrait"
          body="This view is isolated for mobile portrait only. Landscape phones will use the landscape system."
        />
        <div className="portrait-stage__actions">
          <Button href="/contact">{siteContent.cta.primary}</Button>
          <Button variant="secondary" href="/portfolio">Work</Button>
        </div>
      </section>

      <section className="portrait-card-stack" aria-label="Phase one modules">
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
