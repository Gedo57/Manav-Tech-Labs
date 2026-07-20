import { useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/common/Header.jsx';
import { useLayoutMode } from './hooks/useLayoutMode.js';
import { AboutPage } from './pages/AboutPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { EnquiryPage } from './pages/EnquiryPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { IGamingPage } from './pages/IGamingPage.jsx';
import { MobileAppsPage } from './pages/MobileAppsPage.jsx';
import { PortfolioLandingPage } from './pages/PortfolioLandingPage.jsx';
import { ProcessPage } from './pages/ProcessPage.jsx';
import { ProductsPage } from './pages/ProductsPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { getLegacyHashTarget, getRouteId, ROUTES } from './routing/routes.js';

function LegacyHashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== ROUTES.home) return;

    const target = getLegacyHashTarget(location.hash);
    if (target) {
      navigate(target, { replace: true });
    }
  }, [location.hash, location.pathname, navigate]);

  return null;
}

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let requestedHashId = '';

    if (location.hash) {
      try {
        requestedHashId = decodeURIComponent(location.hash.slice(1));
      } catch {
        requestedHashId = location.hash.slice(1);
      }
    }

    const scrollToTarget = () => {
      if (requestedHashId && requestedHashId !== 'home') {
        const target = document.getElementById(requestedHashId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(scrollToTarget);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [location.hash, location.key, location.pathname]);

  return null;
}

function RouteAnnouncer() {
  const location = useLocation();
  const announcement = useMemo(() => {
    const routeId = getRouteId(location.pathname);
    const labels = {
      home: 'Home',
      about: 'About',
      services: 'Services',
      igaming: 'iGaming Solutions',
      'mobile-apps': 'Mobile App Development',
      portfolio: 'Portfolio',
      process: 'Process',
      products: 'Products',
      contact: 'Contact',
      enquiry: 'Product Enquiry',
      checkout: 'Checkout'
    };

    return `${labels[routeId] ?? 'Page'} loaded`;
  }, [location.pathname]);

  return <div className="route-announcer" aria-live="polite" aria-atomic="true">{announcement}</div>;
}

export default function App() {
  const layout = useLayoutMode();
  const location = useLocation();
  const route = getRouteId(location.pathname);

  return (
    <div className="app-root" data-layout={layout.mode} data-device={layout.device} data-route={route}>
      <LegacyHashRedirect />
      <RouteScrollManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header layoutMode={layout.mode} device={layout.device} route={route} />
      <RouteAnnouncer />

      <div id="main-content" className="route-outlet" tabIndex="-1">
        <Routes>
          <Route path={ROUTES.home} element={<HomePage layoutMode={layout.mode} />} />
          <Route path={ROUTES.about} element={<AboutPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.services} element={<ServicesPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.portfolio} element={<PortfolioLandingPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.process} element={<ProcessPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.contact} element={<ContactPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.mobileApps} element={<MobileAppsPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.igaming} element={<IGamingPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.projects} element={<Navigate to={`${ROUTES.portfolio}#project-directory`} replace />} />
          <Route path={ROUTES.products} element={<ProductsPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.enquiry} element={<EnquiryPage layoutMode={layout.mode} />} />
          <Route path={ROUTES.checkout} element={<CheckoutPage layoutMode={layout.mode} />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </div>
    </div>
  );
}
