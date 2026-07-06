export const homeLandscapeLayout = {
  section: {
    width: 1920,
    height: 960
  },

  // Neon grid/background behind the phone and controller
  background: {
    x: 690,
    y: 96,
    width: 1230,
    height: 800,
    opacity: 0.98
  },

  // Main title block. 01 HOME is intentionally not rendered.
  copy: {
    x: 68,
    y: 132,
    width: 880,
    height: 315
  },
  title: {
    fontSize: 80,
    lineHeight: 0.98,
    letterSpacing: '-0.022em',
    fontWeight: 900
  },

  // Body copy under title
  subtitle: {
    x: 70,
    y: 464,
    width: 690,
    fontSize: 26,
    lineHeight: 1.55,
    fontWeight: 400,
    letterSpacing: '-0.004em'
  },

  // Hero CTA buttons
  actions: {
    x: 70,
    y: 620,
    width: 650,
    height: 70,
    gap: 44,
    buttonWidth: 338,
    secondaryWidth: 240,
    buttonHeight: 68,
    fontSize: 16
  },

  // Phone + controller image
  visual: {
    x: 1140,
    y: 118,
    width: 820,
    height: 618
  },

  // Bottom services strip
  servicesStrip: {
    x: 62,
    y: 772,
    width: 1796,
    height: 150,
    radius: 18
  },
  service: {
    iconSize: 92,
    gap: 42,
    titleSize: 28,
    titleLineHeight: 1.14,
    titleWeight: 500
  }
};
