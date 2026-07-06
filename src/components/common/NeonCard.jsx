export function NeonCard({ title, body, icon = '✦', tone = 'purple' }) {
  return (
    <article className={`neon-card neon-card--${tone}`}>
      <div className="neon-card__icon" aria-hidden="true">{icon}</div>
      <h3 className="neon-card__title">{title}</h3>
      <p className="neon-card__body">{body}</p>
    </article>
  );
}
