export const whyUsLandscapeLayout = {
  section: {
    width: 1920,
    height: 1080
  },

  // Circuit background image on the right side
  background: {
    x: 965,
    y: 0,
    width: 955,
    height: 520,
    opacity: 0.96
  },

  // Main title block. 02 WHY US is intentionally not rendered.
  titleBlock: {
    x: 92,
    y: 138,
    width: 700,
    height: 188
  },
  title: {
    fontSize: 76,
    lineHeight: 0.98,
    letterSpacing: '-0.028em',
    fontWeight: 900
  },

  // Paragraph under title
  description: {
    x: 94,
    y: 338,
    width: 615,
    fontSize: 26,
    lineHeight: 1.45,
    fontWeight: 400,
    letterSpacing: '-0.018em'
  },

  // Four cards row
  cards: {
    x: 92,
    y: 512,
    width: 1736,
    height: 370,
    gap: 31
  },
  card: {
    contentY: 132,
    titleSize: 31,
    titleWeight: 800,
    bodySize: 19,
    bodyWidth: 270,
    bodyLineHeight: 1.29
  },

  // Stats bar
  stats: {
    x: 92,
    y: 910,
    width: 1736,
    height: 126
  },
  stat: {
    iconSize: 78,
    gap: 36,
    valueSize: 38,
    valueWeight: 900,
    labelSize: 21
  }
};
