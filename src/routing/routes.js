export const ROUTES = Object.freeze({
  home: '/',
  about: '/about',
  services: '/services',
  igaming: '/igaming',
  mobileApps: '/mobile-apps',
  portfolio: '/portfolio',
  process: '/process',
  products: '/products',
  contact: '/contact',
  projects: '/projects',
  enquiry: '/enquiry',
  checkout: '/checkout'
});

export function getRouteId(pathname = ROUTES.home) {
  const normalizedPathname = pathname !== ROUTES.home
    ? pathname.replace(/\/+$/, '') || ROUTES.home
    : ROUTES.home;

  switch (normalizedPathname) {
    case ROUTES.about:
      return 'about';
    case ROUTES.services:
      return 'services';
    case ROUTES.igaming:
      return 'igaming';
    case ROUTES.mobileApps:
      return 'mobile-apps';
    case ROUTES.portfolio:
      return 'portfolio';
    case ROUTES.process:
      return 'process';
    case ROUTES.products:
      return 'products';
    case ROUTES.contact:
      return 'contact';
    case ROUTES.projects:
      return 'portfolio';
    case ROUTES.enquiry:
      return 'enquiry';
    case ROUTES.checkout:
      return 'checkout';
    default:
      return 'home';
  }
}

export function getNavigationRouteId(routeId = 'home') {
  if (routeId === 'checkout' || routeId === 'enquiry') return 'products';
  if (routeId === 'projects') return 'portfolio';
  return routeId || 'home';
}

export function getLegacyHashTarget(hash = '') {
  if (!hash) return '';

  const dedicatedPageHashes = {
    '#home': ROUTES.home,
    '#about': ROUTES.about,
    '#services': ROUTES.services,
    '#portfolio': ROUTES.portfolio,
    '#process': ROUTES.process,
    '#contact': ROUTES.contact
  };

  if (dedicatedPageHashes[hash]) {
    return dedicatedPageHashes[hash];
  }

  if (hash.startsWith('#mobile-apps')) {
    const suffix = hash === '#mobile-apps' ? '' : hash;
    return `${ROUTES.mobileApps}${suffix}`;
  }

  if (hash.startsWith('#igaming')) {
    const suffix = hash === '#igaming' ? '' : hash;
    return `${ROUTES.igaming}${suffix}`;
  }

  if (hash === '#projects') return `${ROUTES.portfolio}#project-directory`;
  if (hash === '#products') return ROUTES.products;

  if (hash.startsWith('#enquiry')) {
    const queryIndex = hash.indexOf('?');
    return queryIndex === -1 ? ROUTES.enquiry : `${ROUTES.enquiry}${hash.slice(queryIndex)}`;
  }

  if (hash.startsWith('#checkout')) {
    const queryIndex = hash.indexOf('?');
    return queryIndex === -1 ? ROUTES.checkout : `${ROUTES.checkout}${hash.slice(queryIndex)}`;
  }

  return '';
}
