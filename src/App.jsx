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
import { EnquiryPage } from './pages/EnquiryPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { IGamingPage } from './pages/IGamingPage.jsx';
import { MobileAppsPage } from './pages/MobileAppsPage.jsx';

const PROJECTS_HASH = '#projects';
const PRODUCTS_HASH = '#products';
const ENQUIRY_HASH = '#enquiry';
const CHECKOUT_HASH = '#checkout';
const IGAMING_HASH = '#igaming';
const MOBILE_APPS_HASH = '#mobile-apps';

function readHash() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.hash || '';
}

function getRouteFromHash(hash) {
  if (hash.startsWith(MOBILE_APPS_HASH)) return 'mobile-apps';
  if (hash.startsWith(IGAMING_HASH)) return 'igaming';
  if (hash === PROJECTS_HASH) return 'projects';
  if (hash === PRODUCTS_HASH) return 'products';
  if (hash.startsWith(ENQUIRY_HASH)) return 'enquiry';
  if (hash.startsWith(CHECKOUT_HASH)) return 'checkout';
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
    const isDetailLanding = route === 'igaming' || route === 'mobile-apps';

    if (isDetailLanding) {
      const targetId = hash.startsWith('#') ? hash.slice(1) : '';
      const routeRootId = route === 'igaming' ? 'igaming' : 'mobile-apps';

      window.requestAnimationFrame(() => {
        if (targetId && targetId !== routeRootId) {
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    if (route === 'projects' || route === 'products' || route === 'enquiry' || route === 'checkout') {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    const targetId = hash.startsWith('#') ? hash.slice(1) : '';
    if (
      !targetId
      || targetId.startsWith('igaming')
      || targetId.startsWith('mobile-apps')
      || targetId === 'projects'
      || targetId === 'products'
      || targetId.startsWith('enquiry')
      || targetId.startsWith('checkout')
    ) return;

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
      {route === 'mobile-apps' ? (
        <MobileAppsPage layoutMode={layout.mode} />
      ) : route === 'igaming' ? (
        <IGamingPage layoutMode={layout.mode} />
      ) : route === 'projects' ? (
        <ProjectsPage layoutMode={layout.mode} />
      ) : route === 'products' ? (
        <ProductsPage layoutMode={layout.mode} />
      ) : route === 'enquiry' ? (
        <EnquiryPage layoutMode={layout.mode} />
      ) : route === 'checkout' ? (
        <CheckoutPage layoutMode={layout.mode} />
      ) : (
        <LandingSections isPortrait={isPortrait} />
      )}
    </div>
  );
}
