import { ProcessLandscape } from '../sections/landscape/ProcessLandscape.jsx';
import { ProcessPortrait } from '../sections/portrait/ProcessPortrait.jsx';

export function ProcessPage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--process" data-page="process">
      {layoutMode === 'portrait' ? <ProcessPortrait /> : <ProcessLandscape />}
    </main>
  );
}
