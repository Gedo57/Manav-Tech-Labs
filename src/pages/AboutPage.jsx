import { WhyUsLandscape } from '../sections/landscape/WhyUsLandscape.jsx';
import { WhyUsPortrait } from '../sections/portrait/WhyUsPortrait.jsx';

export function AboutPage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--about" data-page="about">
      {layoutMode === 'portrait' ? <WhyUsPortrait /> : <WhyUsLandscape />}
    </main>
  );
}
