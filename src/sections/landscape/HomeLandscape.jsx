import { Button } from '../../components/common/Button.jsx';
import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { homeLandscapeLayout as layout } from '../../config/layout/landscape/home.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function ServiceItem({ item }) {
  return (
    <article className={`home-service home-service--${item.tone}`}>
      <img
        className="home-service__icon"
        src={assets.home.icons[item.icon]}
        alt=""
        aria-hidden="true"
      />
      <h3 className="home-service__title">
        {item.title.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
    </article>
  );
}

export function HomeLandscape() {
  const { home, cta } = siteContent;
  const actionsVars = cssVars({
    heroActionGap: layout.actions.gap,
    heroPrimaryWidth: layout.actions.buttonWidth,
    heroSecondaryWidth: layout.actions.secondaryWidth,
    heroButtonHeight: layout.actions.buttonHeight,
    heroButtonFontSize: layout.actions.fontSize
  });
  const stripVars = cssVars({
    homeServiceIconSize: layout.service.iconSize,
    homeServiceGap: layout.service.gap,
    homeServiceTitleSize: layout.service.titleSize,
    homeServiceTitleLineHeight: layout.service.titleLineHeight,
    homeServiceTitleWeight: layout.service.titleWeight
  });

  return (
    <ControlledSection
      id="home"
      mode="landscape"
      section={layout.section}
      className="home-landscape"
      ariaLabel="Manav Tech Labs home section"
    >
      <div className="home-hero__shade" aria-hidden="true" />

      <div className="home-hero__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.home.background} alt="" />
      </div>

      <div className="home-hero__copy controlled-box" style={boxStyle(layout.copy)}>
        <h1 className="home-hero__title" style={textStyle(layout.title)}>
          <span className="home-hero__title-line home-hero__title-line--white">{home.titleTop}</span>
          <span className="home-hero__title-line home-hero__title-line--gradient">{home.titleAccent}</span>
          <span className="home-hero__title-line home-hero__title-line--white">{home.titleBottom}</span>
        </h1>
      </div>

      <p className="home-hero__subtitle controlled-box" style={textStyle(layout.subtitle)}>{home.subtitle}</p>

      <div className="home-hero__actions controlled-box" style={{ ...boxStyle(layout.actions), ...actionsVars }} aria-label="Hero actions">
        <Button href="#contact">{cta.primary}</Button>
        <Button variant="secondary" href="#portfolio">{cta.secondary}</Button>
      </div>

      <div className="home-hero__visual controlled-image" style={boxStyle(layout.visual)} aria-hidden="true">
        <img className="home-hero__device" src={assets.home.heroDevice} alt="" />
      </div>

      <div className="home-services-strip controlled-box" style={{ ...boxStyle(layout.servicesStrip), ...stripVars }} aria-label="Core services">
        {home.services.map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
    </ControlledSection>
  );
}
