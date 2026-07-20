import { ServicesLandscape } from '../sections/landscape/ServicesLandscape.jsx';
import { ServicesPortrait } from '../sections/portrait/ServicesPortrait.jsx';

export function ServicesPage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--services" data-page="services">
      {layoutMode === 'portrait' ? <ServicesPortrait /> : <ServicesLandscape />}
    </main>
  );
}
