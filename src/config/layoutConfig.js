export const layoutConfig = {
  landscape: {
    name: 'landscape',
    baseWidth: 1920,
    baseHeight: 1080,
    contentMaxWidth: 1920,
    minDesktopWidth: 768,
    maxScale: 1
  },
  portrait: {
    name: 'portrait',
    baseWidth: 430,
    baseHeight: 932,
    contentMaxWidth: 430,
    mobileMaxWidth: 767,
    maxScale: 1
  }
};

export function getLayoutModeFromViewport(width, height) {
  const isMobileWidth = width <= layoutConfig.portrait.mobileMaxWidth;
  const isPortrait = height >= width;

  if (isMobileWidth && isPortrait) {
    return 'portrait';
  }

  return 'landscape';
}

export function getDeviceType(width) {
  if (width < 768) return 'mobile';
  if (width < 1180) return 'tablet';
  return 'desktop';
}
