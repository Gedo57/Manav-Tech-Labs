import { PortfolioEditorialSections } from '../sections/portfolio/PortfolioEditorialSections.jsx';
import { PortfolioLandscape } from '../sections/landscape/PortfolioLandscape.jsx';
import { PortfolioPortrait } from '../sections/portrait/PortfolioPortrait.jsx';
import { ProjectsPage } from './ProjectsPage.jsx';

export function PortfolioLandingPage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--portfolio" data-page="portfolio">
      {layoutMode === 'portrait' ? <PortfolioPortrait /> : <PortfolioLandscape />}
      <ProjectsPage layoutMode={layoutMode} embedded excludeFeatured />
      <PortfolioEditorialSections />
    </main>
  );
}
