import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { servicesLandscapeLayout as layout } from '../../config/layout/landscape/services.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function ServiceCard({ card }) {
  const vars = cssVars({
    servicesCardTitleX: layout.card.titleX,
    servicesCardTitleY: layout.card.titleY,
    servicesCardTitleWidth: layout.card.titleWidth,
    servicesCardTitleSize: layout.card.titleSize,
    servicesCardTitleWeight: layout.card.titleWeight,
    servicesCardTitleLineHeight: layout.card.titleLineHeight,
    servicesCardBodyX: layout.card.bodyX,
    servicesCardBodyY: layout.card.bodyY,
    servicesCardBodyWidth: layout.card.bodyWidth,
    servicesCardBodySize: layout.card.bodySize,
    servicesCardBodyLineHeight: layout.card.bodyLineHeight,
    servicesCardBodyWeight: layout.card.bodyWeight
  });

  return (
    <article className="services-card services-card--landscape" style={vars}>
      <img
        className="services-card__asset"
        src={assets.services.cards[card.image]}
        alt=""
        aria-hidden="true"
      />
      <h3 className="services-card__title">
        {card.title.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
      <p className="services-card__body">{card.body}</p>
    </article>
  );
}

function ServicesStack({ stack }) {
  const vars = cssVars({
    servicesStackFontSize: layout.stack.fontSize
  });

  return (
    <ul className="services-stack controlled-box" style={{ ...boxStyle(layout.stack), ...vars }} aria-label="Technologies we use">
      {stack.map((name) => (
        <li key={name} className="services-stack__item">{name}</li>
      ))}
    </ul>
  );
}

export function ServicesLandscape() {
  const { services } = siteContent;
  const cardsVars = cssVars({
    servicesCardsGapX: layout.cards.gapX,
    servicesCardsGapY: layout.cards.gapY
  });

  return (
    <ControlledSection
      id="services"
      mode="landscape"
      section={layout.section}
      className="services-landscape"
      ariaLabel="Manav Tech Labs services section"
    >
      <div className="services-landscape__shade" aria-hidden="true" />

      <div className="services-landscape__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.services.background} alt="" />
      </div>

      <header className="services-landscape__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="services-title services-title--landscape" style={textStyle(layout.title)}>
          <span className="services-title__line services-title__line--white">{services.titleTop}</span>
          <span className="services-title__line services-title__line--gradient">{services.titleAccent}</span>
        </h2>
      </header>

      <p className="services-landscape__description controlled-box" style={textStyle(layout.description)}>{services.description}</p>

      <div className="services-cards services-cards--landscape controlled-box" style={{ ...boxStyle(layout.cards), ...cardsVars }} aria-label="Development services">
        {services.cards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>

      {services.stack.length > 0 && <ServicesStack stack={services.stack} />}
    </ControlledSection>
  );
}
