import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { whyUsLandscapeLayout as layout } from '../../config/layout/landscape/why-us.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function WhyCard({ card }) {
  const cardVars = cssVars({
    whyCardContentY: layout.card.contentY,
    whyCardTitleSize: layout.card.titleSize,
    whyCardTitleWeight: layout.card.titleWeight,
    whyCardBodySize: layout.card.bodySize,
    whyCardBodyWidth: layout.card.bodyWidth,
    whyCardBodyLineHeight: layout.card.bodyLineHeight
  });

  return (
    <article className="why-card why-card--landscape" style={cardVars}>
      <img
        className="why-card__asset"
        src={assets.whyUs.cards[card.image]}
        alt=""
        aria-hidden="true"
      />
      <div className="why-card__content">
        <h3 className="why-card__title">
          {card.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="why-card__body">{card.body}</p>
      </div>
    </article>
  );
}

function StatItem({ item }) {
  return (
    <article className={`why-stat why-stat--${item.tone}`}>
      <img
        className="why-stat__icon"
        src={assets.whyUs.stats[item.image]}
        alt=""
        aria-hidden="true"
      />
      <div className="why-stat__copy">
        <strong className="why-stat__value">{item.value}</strong>
        <span className="why-stat__label">{item.label}</span>
      </div>
    </article>
  );
}

export function WhyUsLandscape() {
  const { whyUs } = siteContent;
  const cardsVars = cssVars({
    whyCardsGap: layout.cards.gap
  });
  const statsVars = cssVars({
    whyStatIconSize: layout.stat.iconSize,
    whyStatGap: layout.stat.gap,
    whyStatValueSize: layout.stat.valueSize,
    whyStatValueWeight: layout.stat.valueWeight,
    whyStatLabelSize: layout.stat.labelSize
  });

  return (
    <ControlledSection
      id="about"
      mode="landscape"
      section={layout.section}
      className="why-us-landscape"
      ariaLabel="Why Manav Tech Labs section"
    >
      <div className="why-us__shade" aria-hidden="true" />

      <div className="why-us-landscape__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.whyUs.background} alt="" />
      </div>

      <header className="why-us-landscape__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="why-us-title why-us-title--landscape" style={textStyle(layout.title)}>
          <span className="why-us-title__line why-us-title__line--white">{whyUs.titleTop}</span>
          <span className="why-us-title__line why-us-title__line--gradient">{whyUs.titleAccent}</span>
        </h2>
      </header>

      <p className="why-us-landscape__description controlled-box" style={textStyle(layout.description)}>{whyUs.description}</p>

      <div className="why-us-cards why-us-cards--landscape controlled-box" style={{ ...boxStyle(layout.cards), ...cardsVars }} aria-label="Why us pillars">
        {whyUs.cards.map((card) => (
          <WhyCard key={card.id} card={card} />
        ))}
      </div>

      <div className="why-us-stats why-us-stats--landscape controlled-box" style={{ ...boxStyle(layout.stats), ...statsVars }} aria-label="Company highlights">
        {whyUs.stats.map((item) => (
          <StatItem key={item.id} item={item} />
        ))}
      </div>
    </ControlledSection>
  );
}
