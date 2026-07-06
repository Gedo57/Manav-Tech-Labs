import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';
import { cssVars } from '../../config/layout/styleHelpers.js';

export function LogoMark({ compact = false, layout = {}, className = '', style }) {
  const logoVars = cssVars({
    logoWidth: layout.width ?? 324,
    logoHeight: layout.height ?? 60,
    logoIconWidth: layout.iconWidth ?? 78,
    logoIconHeight: layout.iconHeight ?? 56,
    logoNameSize: layout.nameSize ?? 30,
    logoLabsSize: layout.labsSize ?? 11,
    logoGap: layout.gap ?? 14
  });

  return (
    <a
      className={`logo-mark ${compact ? 'logo-mark--compact' : 'logo-mark--full'} ${className}`.trim()}
      href="#home"
      aria-label={siteContent.brand.name}
      style={{ ...logoVars, ...style }}
    >
      {assets.logos.full && !compact ? (
        <img className="logo-mark__full-image" src={assets.logos.full} alt="Manav Tech Labs" />
      ) : (
        <img className="logo-mark__icon" src={assets.logos.icon} alt="Manav Tech Labs logo" />
      )}
    </a>
  );
}
