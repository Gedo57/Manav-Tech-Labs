import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { processLandscapeLayout as layout } from '../../config/layout/landscape/process.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function ProcessStep({ step, item }) {
  const vars = cssVars({
    processStepTitleSize: layout.steps.titleSize,
    processStepBodySize: layout.steps.bodySize,
    processStepBodyLineHeight: layout.steps.bodyLineHeight,
    processStepBodyWidth: layout.steps.bodyWidth
  });

  return (
    <article
      className={`process-step process-step--landscape ${item.tone === 'gold' || step.tone === 'gold' ? 'process-step--gold' : ''}`}
      style={{ left: `${item.x}px`, top: `${layout.steps.y}px`, textAlign: item.align, ...vars }}
    >
      <h3 className="process-step__title">{step.title}</h3>
      <p className="process-step__body">{step.body}</p>
    </article>
  );
}

export function ProcessLandscape() {
  const { process } = siteContent;

  return (
    <ControlledSection
      id="process"
      mode="landscape"
      section={layout.section}
      className="process-landscape"
      ariaLabel="Manav Tech Labs process section"
    >
      <div className="process-landscape__shade" aria-hidden="true" />

      <div className="process-landscape__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.process.background} alt="" />
      </div>

      <header className="process-landscape__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="process-title process-title--landscape" style={textStyle(layout.title)}>
          <span className="process-title__line process-title__line--white">{process.titleTop}</span>
        </h2>
      </header>

      <p className="process-landscape__description controlled-box" style={textStyle(layout.description)}>{process.description}</p>

      <div className="process-landscape__timeline controlled-image" style={boxStyle(layout.timeline)} aria-hidden="true">
        <img src={assets.process.timeline} alt="" />
      </div>

      {process.steps.map((step, index) => (
        <ProcessStep key={step.id} step={step} item={layout.steps.items[index]} />
      ))}

      <div className="process-landscape__panel controlled-image" style={boxStyle(layout.panel)} aria-hidden="true">
        <img src={assets.process.panel} alt="" />
      </div>
    </ControlledSection>
  );
}
