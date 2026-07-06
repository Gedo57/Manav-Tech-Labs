import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { whyUsPortraitLayout as layout } from '../../config/layout/portrait/why-us.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function PortraitWhyCard({ card }) {
  const cardVars = cssVars({
    portraitWhyCardHeight: layout.card.height,
    portraitWhyCardContentY: layout.card.contentY,
    portraitWhyCardTitleSize: layout.card.titleSize,
    portraitWhyCardBodySize: layout.card.bodySize,
    portraitWhyCardBodyWidth: layout.card.bodyWidth,
    portraitWhyCardBodyLineHeight: layout.card.bodyLineHeight
  });

  return (
    <article className="portrait-why-card" style={cardVars}>
      <img
        className="portrait-why-card__asset"
        src={assets.whyUs.cards[card.image]}
        alt=""
        aria-hidden="true"
      />
      <div className="portrait-why-card__content">
        <h3 className="portrait-why-card__title">
          {card.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="portrait-why-card__body">{card.body}</p>
      </div>
    </article>
  );
}

function PortraitStatItem({ item }) {
  return (
    <article className={`portrait-why-stat portrait-why-stat--${item.tone}`}>
      <img
        className="portrait-why-stat__icon"
        src={assets.whyUs.stats[item.image]}
        alt=""
        aria-hidden="true"
      />
      <strong className="portrait-why-stat__value">{item.value}</strong>
      <span className="portrait-why-stat__label">{item.label}</span>
    </article>
  );
}

export function WhyUsPortrait() {
  const { whyUs } = siteContent;
  const cardsVars = cssVars({
    portraitWhyCardsGap: layout.cards.gap
  });
  const statsVars = cssVars({
    portraitWhyStatsGap: layout.stats.gap,
    portraitWhyStatIconSize: layout.stat.iconSize,
    portraitWhyStatValueSize: layout.stat.valueSize,
    portraitWhyStatLabelSize: layout.stat.labelSize
  });

  return (
    <ControlledSection
      id="about"
      mode="portrait"
      section={layout.section}
      className="why-us-portrait"
      ariaLabel="Why Manav Tech Labs mobile section"
    >
      <div className="why-us-portrait__shade" aria-hidden="true" />

      <div className="why-us-portrait__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.whyUs.background} alt="" />
      </div>

      <header className="why-us-portrait__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="why-us-title why-us-title--portrait" style={textStyle(layout.title)}>
          <span className="why-us-title__line why-us-title__line--white">{whyUs.titleTop}</span>
          <span className="why-us-title__line why-us-title__line--gradient">{whyUs.titleAccent}</span>
        </h2>
      </header>

      <p className="why-us-portrait__description controlled-box" style={textStyle(layout.description)}>{whyUs.description}</p>

      <div className="portrait-why-cards controlled-box" style={{ ...boxStyle(layout.cards), ...cardsVars }} aria-label="Why us pillars">
        {whyUs.cards.map((card) => (
          <PortraitWhyCard key={card.id} card={card} />
        ))}
      </div>

      <div className="portrait-why-stats controlled-box" style={{ ...boxStyle(layout.stats), ...statsVars }} aria-label="Company highlights">
        {whyUs.stats.map((item) => (
          <PortraitStatItem key={item.id} item={item} />
        ))}
      </div>
    </ControlledSection>
  );
}
