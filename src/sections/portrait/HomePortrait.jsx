import { Button } from '../../components/common/Button.jsx';
import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { homePortraitLayout as layout } from '../../config/layout/portrait/home.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function PortraitServiceItem({ item }) {
  return (
    <article className={`portrait-home-service portrait-home-service--${item.tone}`}>
      <img
        className="portrait-home-service__icon"
        src={assets.home.icons[item.icon]}
        alt=""
        aria-hidden="true"
      />
      <h3 className="portrait-home-service__title">
        {item.title.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
    </article>
  );
}

export function HomePortrait() {
  const { home, cta } = siteContent;
  const actionsVars = cssVars({
    portraitHeroActionGap: layout.actions.gap,
    portraitHeroPrimaryWidth: layout.actions.buttonWidth,
    portraitHeroSecondaryWidth: layout.actions.secondaryWidth,
    portraitHeroButtonHeight: layout.actions.buttonHeight,
    portraitHeroButtonFontSize: layout.actions.fontSize
  });
  const stripVars = cssVars({
    portraitHomeServiceIconSize: layout.service.iconSize,
    portraitHomeServiceGap: layout.service.gap,
    portraitHomeServiceTitleSize: layout.service.titleSize,
    portraitHomeServiceTitleLineHeight: layout.service.titleLineHeight
  });

  return (
    <ControlledSection
      id="home"
      mode="portrait"
      section={layout.section}
      className="home-portrait"
      ariaLabel="Manav Tech Labs mobile home section"
    >
      <div className="portrait-home-hero__shade" aria-hidden="true" />

      <div className="portrait-home-hero__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.home.background} alt="" />
      </div>

      <div className="portrait-home-hero__copy controlled-box" style={boxStyle(layout.copy)}>
        <h1 className="portrait-home-hero__title" style={textStyle(layout.title)}>
          <span>{home.titleTop}</span>
          <span className="portrait-home-hero__title-accent">{home.titleAccent}</span>
          <span>{home.titleBottom}</span>
        </h1>
      </div>

      <p className="portrait-home-hero__subtitle controlled-box" style={textStyle(layout.subtitle)}>{home.subtitle}</p>

      <div className="portrait-home-hero__visual controlled-image" style={boxStyle(layout.visual)} aria-hidden="true">
        <img className="portrait-home-hero__device" src={assets.home.heroDevice} alt="" />
      </div>

      <div className="portrait-home-hero__actions controlled-box" style={{ ...boxStyle(layout.actions), ...actionsVars }} aria-label="Hero actions">
        <Button href="#contact">{cta.primary}</Button>
        <Button variant="secondary" href="#portfolio">{cta.secondary}</Button>
      </div>

      <div className="portrait-home-services controlled-box" style={{ ...boxStyle(layout.servicesStrip), ...stripVars }} aria-label="Core services">
        {home.services.map((item) => (
          <PortraitServiceItem key={item.id} item={item} />
        ))}
      </div>
    </ControlledSection>
  );
}
