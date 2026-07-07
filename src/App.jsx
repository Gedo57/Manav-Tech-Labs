import { useEffect, useMemo, useState } from 'react';
import { useLayoutMode } from './hooks/useLayoutMode.js';
import { Header } from './components/common/Header.jsx';
import { HomeLandscape } from './sections/landscape/HomeLandscape.jsx';
import { WhyUsLandscape } from './sections/landscape/WhyUsLandscape.jsx';
import { ServicesLandscape } from './sections/landscape/ServicesLandscape.jsx';
import { PortfolioLandscape } from './sections/landscape/PortfolioLandscape.jsx';
import { ProcessLandscape } from './sections/landscape/ProcessLandscape.jsx';
import { ContactLandscape } from './sections/landscape/ContactLandscape.jsx';
import { HomePortrait } from './sections/portrait/HomePortrait.jsx';
import { WhyUsPortrait } from './sections/portrait/WhyUsPortrait.jsx';
import { ServicesPortrait } from './sections/portrait/ServicesPortrait.jsx';
import { PortfolioPortrait } from './sections/portrait/PortfolioPortrait.jsx';
import { ProcessPortrait } from './sections/portrait/ProcessPortrait.jsx';
import { ContactPortrait } from './sections/portrait/ContactPortrait.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ProductsPage } from './pages/ProductsPage.jsx';

const PROJECTS_HASH = '#projects';
const PRODUCTS_HASH = '#products';

function readHash() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.hash || '';
}

function getRouteFromHash(hash) {
  if (hash === PROJECTS_HASH) return 'projects';
  if (hash === PRODUCTS_HASH) return 'products';
  return 'landing';
}

function LandingSections({ isPortrait }) {
  return isPortrait ? (
    <>
      <HomePortrait />
      <WhyUsPortrait />
      <ServicesPortrait />
      <PortfolioPortrait />
      <ProcessPortrait />
      <ContactPortrait />
    </>
  ) : (
    <>
      <HomeLandscape />
      <WhyUsLandscape />
      <ServicesLandscape />
      <PortfolioLandscape />
      <ProcessLandscape />
      <ContactLandscape />
    </>
  );
}

export default function App() {
  const layout = useLayoutMode();
  const isPortrait = layout.mode === 'portrait';
  const [hash, setHash] = useState(readHash);

  const route = useMemo(() => getRouteFromHash(hash), [hash]);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(readHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (route === 'projects' || route === 'products') {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    const targetId = hash.startsWith('#') ? hash.slice(1) : '';
    if (!targetId || targetId === 'projects' || targetId === 'products') return;

    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [hash, route]);

  return (
    <div className="app-root" data-layout={layout.mode} data-device={layout.device} data-route={route}>
      <Header layoutMode={layout.mode} route={route} />
      {route === 'projects' ? (
        <ProjectsPage layoutMode={layout.mode} />
      ) : route === 'products' ? (
        <ProductsPage layoutMode={layout.mode} />
      ) : (
        <LandingSections isPortrait={isPortrait} />
      )}
    </div>
  );
}
