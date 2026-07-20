import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { headerLandscapeLayout } from '../../config/layout/landscape/header.layout.js';
import { boxStyle, cssVars } from '../../config/layout/styleHelpers.js';
import { siteContent } from '../../data/siteContent.js';
import { getNavigationRouteId, ROUTES } from '../../routing/routes.js';
import { Button } from './Button.jsx';
import { LogoMark } from './LogoMark.jsx';

const PRODUCTS_SEARCH_EVENT = 'manav-products-search';
const PRODUCTS_FAVORITES_EVENT = 'manav-products-favorites';

function HeaderQuickIcon({ type, label, onClick, showLabel = false }) {
  const isHeart = type === 'heart';

  return (
    <button
      className={`site-header-action ${showLabel ? 'site-header-action--labeled' : ''}`.trim()}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {isHeart ? (
          <path d="M20.8 5.8a5.1 5.1 0 0 0-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21.8l8.8-8.8a5.1 5.1 0 0 0 0-7.2Z" />
        ) : (
          <>
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 5 5" />
          </>
        )}
      </svg>
      {showLabel && <span>{label}</span>}
    </button>
  );
}

function dispatchProductsHeaderEvent(eventName) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(eventName));
}

function dispatchAfterNavigation(eventName) {
  if (typeof window === 'undefined') return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => dispatchProductsHeaderEvent(eventName));
  });
}

export function Header({ layoutMode, device, route }) {
  const navigate = useNavigate();
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const isPortrait = layoutMode === 'portrait';
  const isCompactHeader = isPortrait || device !== 'desktop';
  const layout = headerLandscapeLayout;
  const navItems = siteContent.navigation;
  const activeId = getNavigationRouteId(route);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isProductsRoute = activeId === 'products';

  const headerStyle = isCompactHeader
    ? undefined
    : cssVars({
        headerStageWidth: layout.stage.width,
        headerStageHeight: layout.stage.height,
        navGap: layout.nav?.gap ?? 0,
        navFontSize: layout.nav?.fontSize ?? 16,
        navUnderlineY: layout.nav?.underlineY ?? 34,
        headerCtaFontSize: layout.cta?.fontSize ?? 16,
        headerCtaHeight: layout.cta?.height ?? 56,
        headerQuickActionsGap: layout.quickActions?.gap ?? 0
      });

  const mobileMenuId = 'mobile-main-menu';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [route]);

  useEffect(() => {
    if (!isCompactHeader && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isCompactHeader, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.classList.add('mobile-nav-open');
    document.body.style.overflow = 'hidden';

    const focusFrame = window.requestAnimationFrame(() => firstMenuLinkRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('mobile-nav-open');
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = ({ restoreFocus = false } = {}) => {
    setIsMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const renderNavLink = (item, classNamePrefix, index = 0) => {
    const isActive = activeId === item.id;

    return (
      <Link
        key={item.id}
        ref={classNamePrefix === 'mobile-nav' && index === 0 ? firstMenuLinkRef : undefined}
        className={`${classNamePrefix}__link ${isActive ? `${classNamePrefix}__link--active` : ''}`.trim()}
        to={item.href}
        aria-current={isActive ? 'page' : undefined}
        tabIndex={classNamePrefix === 'mobile-nav' && !isMenuOpen ? -1 : undefined}
        onClick={() => closeMenu()}
      >
        {item.label}
      </Link>
    );
  };

  const openProductsPanel = (eventName) => {
    closeMenu();

    if (route === 'products') {
      dispatchProductsHeaderEvent(eventName);
      return;
    }

    navigate(ROUTES.products);
    dispatchAfterNavigation(eventName);
  };

  return (
    <>
      <header
        className={`site-header ${isCompactHeader ? 'site-header--compact' : 'site-header--controlled'}`.trim()}
        data-header-route={activeId}
        data-header-variant={isCompactHeader ? 'compact' : 'desktop'}
        style={headerStyle}
      >
        <LogoMark
          compact={isPortrait}
          layout={isCompactHeader ? { width: isPortrait ? 48 : 206, height: isPortrait ? 44 : 52 } : layout.logo}
          className="site-header__logo"
          style={isCompactHeader ? undefined : boxStyle(layout.logo)}
          onClick={isCompactHeader ? () => closeMenu() : undefined}
        />

        {!isCompactHeader && (
          <nav className="site-nav" aria-label="Main navigation" style={boxStyle(layout.nav)}>
            {navItems.map((item, index) => renderNavLink(item, 'site-nav', index))}
          </nav>
        )}

        {isCompactHeader ? (
          <>
            <button
              ref={menuButtonRef}
              className={`mobile-menu-button ${isMenuOpen ? 'mobile-menu-button--active' : ''}`.trim()}
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls={mobileMenuId}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>

            <nav
              id={mobileMenuId}
              className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`.trim()}
              aria-label="Mobile navigation"
              aria-hidden={!isMenuOpen}
            >
              <div className="mobile-nav__links">
                {navItems.map((item, index) => renderNavLink(item, 'mobile-nav', index))}
              </div>

              {isProductsRoute && (
                <div className="mobile-nav__product-actions" aria-label="Product tools">
                  <HeaderQuickIcon
                    type="search"
                    label="Search products"
                    showLabel
                    onClick={() => openProductsPanel(PRODUCTS_SEARCH_EVENT)}
                  />
                  <HeaderQuickIcon
                    type="heart"
                    label="Saved products"
                    showLabel
                    onClick={() => openProductsPanel(PRODUCTS_FAVORITES_EVENT)}
                  />
                </div>
              )}

              <Button
                variant="outline-gold"
                href={ROUTES.contact}
                className="mobile-nav__cta"
                style={undefined}
                onClick={() => closeMenu()}
              >
                {siteContent.cta.primary}
              </Button>
            </nav>
          </>
        ) : (
          <>
            <Button variant="outline-gold" href={ROUTES.contact} className="site-header__cta" style={boxStyle(layout.cta)}>
              {siteContent.cta.primary}
            </Button>

            {layout.quickActions && isProductsRoute && (
              <div className="site-header__quick-actions" style={boxStyle(layout.quickActions)}>
                <HeaderQuickIcon
                  type="search"
                  label="Search products"
                  onClick={() => openProductsPanel(PRODUCTS_SEARCH_EVENT)}
                />
                <HeaderQuickIcon
                  type="heart"
                  label="Saved products"
                  onClick={() => openProductsPanel(PRODUCTS_FAVORITES_EVENT)}
                />
              </div>
            )}
          </>
        )}
      </header>

      {isCompactHeader && (
        <button
          className={`mobile-nav-backdrop ${isMenuOpen ? 'mobile-nav-backdrop--visible' : ''}`.trim()}
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => closeMenu({ restoreFocus: true })}
        />
      )}
    </>
  );
}
