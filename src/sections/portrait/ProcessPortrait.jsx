import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { processPortraitLayout as layout } from '../../config/layout/portrait/process.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function PortraitProcessStep({ step }) {
  return (
    <article className={`portrait-process-step ${step.tone === 'gold' ? 'portrait-process-step--gold' : ''}`}>
      <span className="portrait-process-step__number">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </article>
  );
}

export function ProcessPortrait() {
  const { process } = siteContent;
  const stepsVars = cssVars({
    portraitProcessStepsGap: layout.steps.gap,
    portraitProcessItemHeight: layout.steps.itemHeight
  });

  return (
    <ControlledSection
      id="process"
      mode="portrait"
      section={layout.section}
      className="process-portrait"
      ariaLabel="Manav Tech Labs mobile process section"
    >
      <div className="process-portrait__shade" aria-hidden="true" />
      <div className="process-portrait__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.process.background} alt="" />
      </div>

      <header className="process-portrait__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="process-title process-title--portrait" style={textStyle(layout.title)}>
          <span className="process-title__line process-title__line--white">{process.titleTop}</span>
        </h2>
      </header>

      <p className="process-portrait__description controlled-box" style={textStyle(layout.description)}>{process.description}</p>

      <div className="portrait-process-steps controlled-box" style={{ ...boxStyle(layout.steps), ...stepsVars }}>
        {process.steps.map((step) => (
          <PortraitProcessStep key={step.id} step={step} />
        ))}
      </div>

      <div className="process-portrait__panel controlled-image" style={boxStyle(layout.panel)} aria-hidden="true">
        <img src={assets.process.panel} alt="" />
      </div>
    </ControlledSection>
  );
}
