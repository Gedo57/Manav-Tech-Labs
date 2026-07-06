import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { servicesPortraitLayout as layout } from '../../config/layout/portrait/services.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function PortraitServiceCard({ card }) {
  const vars = cssVars({
    portraitServicesCardHeight: layout.card.height,
    portraitServicesCardTitleX: layout.card.titleX,
    portraitServicesCardTitleY: layout.card.titleY,
    portraitServicesCardTitleWidth: layout.card.titleWidth,
    portraitServicesCardTitleSize: layout.card.titleSize,
    portraitServicesCardTitleWeight: layout.card.titleWeight,
    portraitServicesCardTitleLineHeight: layout.card.titleLineHeight,
    portraitServicesCardBodyX: layout.card.bodyX,
    portraitServicesCardBodyY: layout.card.bodyY,
    portraitServicesCardBodyWidth: layout.card.bodyWidth,
    portraitServicesCardBodySize: layout.card.bodySize,
    portraitServicesCardBodyLineHeight: layout.card.bodyLineHeight,
    portraitServicesCardBodyWeight: layout.card.bodyWeight
  });

  return (
    <article className="portrait-services-card" style={vars}>
      <img
        className="portrait-services-card__asset"
        src={assets.services.cards[card.image]}
        alt=""
        aria-hidden="true"
      />
      <h3 className="portrait-services-card__title">
        {card.title.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
      <p className="portrait-services-card__body">{card.body}</p>
    </article>
  );
}

export function ServicesPortrait() {
  const { services } = siteContent;
  const cardsVars = cssVars({
    portraitServicesCardsGap: layout.cards.gap
  });

  return (
    <ControlledSection
      id="services"
      mode="portrait"
      section={layout.section}
      className="services-portrait"
      ariaLabel="Manav Tech Labs mobile services section"
    >
      <div className="services-portrait__shade" aria-hidden="true" />

      <div className="services-portrait__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.services.background} alt="" />
      </div>

      <header className="services-portrait__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="services-title services-title--portrait" style={textStyle(layout.title)}>
          <span className="services-title__line services-title__line--white">{services.titleTop}</span>
          <span className="services-title__line services-title__line--gradient">{services.titleAccent}</span>
        </h2>
      </header>

      <p className="services-portrait__description controlled-box" style={textStyle(layout.description)}>{services.description}</p>

      <div className="portrait-services-cards controlled-box" style={{ ...boxStyle(layout.cards), ...cardsVars }} aria-label="Development services">
        {services.cards.map((card) => (
          <PortraitServiceCard key={card.id} card={card} />
        ))}
      </div>
    </ControlledSection>
  );
}
