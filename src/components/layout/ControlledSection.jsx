export function ControlledSection({ id, className = '', mode, section, ariaLabel, children }) {
  const stageStyle = {
    '--section-base-width': `${section.width}px`,
    '--section-base-height': `${section.height}px`
  };

  return (
    <section
      id={id}
      className={`controlled-section controlled-section--${mode} ${className}`.trim()}
      style={stageStyle}
      aria-label={ariaLabel}
    >
      <div className="controlled-section__stage">
        {children}
      </div>
    </section>
  );
}
