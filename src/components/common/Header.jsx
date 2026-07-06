import { useEffect, useMemo, useState } from 'react';
import { headerLandscapeLayout } from '../../config/layout/landscape/header.layout.js';
import { headerPortraitLayout } from '../../config/layout/portrait/header.layout.js';
import { boxStyle, cssVars } from '../../config/layout/styleHelpers.js';
import { siteContent } from '../../data/siteContent.js';
import { Button } from './Button.jsx';
import { LogoMark } from './LogoMark.jsx';

function getHashId(href = '') {
  return href.startsWith('#') ? href.slice(1) : '';
}

function getCurrentSectionId(navItems) {
  if (typeof window === 'undefined') {
    return navItems[0]?.id ?? 'home';
  }

  const headerOffset = Math.max(88, window.innerHeight * 0.18);
  const currentScrollPoint = window.scrollY + headerOffset;
  let activeId = navItems[0]?.id ?? 'home';

  navItems.forEach((item) => {
    const sectionId = getHashId(item.href) || item.id;
    const section = document.getElementById(sectionId);

    if (!section) return;

    const sectionTop = section.offsetTop;
    if (sectionTop <= currentScrollPoint) {
      activeId = item.id;
    }
  });

  return activeId;
}

export function Header({ layoutMode }) {
  const isPortrait = layoutMode === 'portrait';
  const layout = isPortrait ? headerPortraitLayout : headerLandscapeLayout;
  const navItems = siteContent.navigation;
  const defaultActiveId = navItems[0]?.id ?? 'home';
  const [activeId, setActiveId] = useState(defaultActiveId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerStyle = cssVars({
    headerStageWidth: layout.stage.width,
    headerStageHeight: layout.stage.height,
    navGap: layout.nav?.gap ?? 0,
    navFontSize: layout.nav?.fontSize ?? 16,
    navUnderlineY: layout.nav?.underlineY ?? 34,
    headerCtaFontSize: layout.cta?.fontSize ?? 16,
    headerCtaHeight: layout.cta?.height ?? 56
  });

  const mobileMenuId = 'mobile-main-menu';
  const menuLayout = layout.menu ?? { x: 0, y: 0, width: 0, height: 0 };

  const mobileNavStyle = useMemo(() => {
    const menuWidth = 250;

    return {
      left: `${Math.max(18, menuLayout.x + menuLayout.width - menuWidth)}px`,
      top: `${menuLayout.y + menuLayout.height + 12}px`,
      width: `${menuWidth}px`
    };
  }, [menuLayout.height, menuLayout.width, menuLayout.x, menuLayout.y]);

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(getCurrentSectionId(navItems));
    };

    let animationFrame = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [navItems]);

  useEffect(() => {
    if (!isPortrait && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, isPortrait]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (item) => {
    setActiveId(item.id);
    setIsMenuOpen(false);
  };

  const renderNavLink = (item, classNamePrefix) => {
    const isActive = activeId === item.id;

    return (
      <a
        key={item.id}
        className={`${classNamePrefix}__link ${isActive ? `${classNamePrefix}__link--active` : ''}`.trim()}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        onClick={() => handleNavClick(item)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="site-header site-header--controlled" style={headerStyle}>
      <LogoMark
        compact={isPortrait}
        layout={layout.logo}
        className="site-header__logo"
        style={boxStyle(layout.logo)}
      />

      {!isPortrait && (
        <nav className="site-nav" aria-label="Main navigation" style={boxStyle(layout.nav)}>
          {navItems.map((item) => renderNavLink(item, 'site-nav'))}
        </nav>
      )}

      {isPortrait ? (
        <>
          <button
            className={`mobile-menu-button ${isMenuOpen ? 'mobile-menu-button--active' : ''}`.trim()}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            style={boxStyle(layout.menu)}
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
            style={mobileNavStyle}
          >
            {navItems.map((item) => renderNavLink(item, 'mobile-nav'))}
          </nav>
        </>
      ) : (
        <Button variant="outline-gold" href="#contact" className="site-header__cta" style={boxStyle(layout.cta)}>
          {siteContent.cta.primary}
        </Button>
      )}
    </header>
  );
}
