import { HomeEditorialSections } from '../sections/home/HomeEditorialSections.jsx';
import { HomeLandscape } from '../sections/landscape/HomeLandscape.jsx';
import { HomePortrait } from '../sections/portrait/HomePortrait.jsx';

export function HomePage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--home" data-page="home">
      {layoutMode === 'portrait' ? <HomePortrait /> : <HomeLandscape />}
      <HomeEditorialSections />
    </main>
  );
}
