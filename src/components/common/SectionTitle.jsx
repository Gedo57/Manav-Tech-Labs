export function SectionTitle({ index = '01', kicker, title, accent, body }) {
  return (
    <div className="section-title-block">
      <div className="section-title-block__meta">
        <span className="section-title-block__index">{index}</span>
        <span className="section-title-block__kicker">{kicker}</span>
      </div>
      <h1 className="section-title-block__title">
        {title}
        {accent && <span>{accent}</span>}
      </h1>
      {body && <p className="section-title-block__body">{body}</p>}
    </div>
  );
}
