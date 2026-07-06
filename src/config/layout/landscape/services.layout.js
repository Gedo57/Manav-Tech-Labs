export const servicesLandscapeLayout = {
  section: {
    width: 1920,
    height: 1080
  },

  // Circuit background on the top-right.
  background: {
    x: 0,
    y: -40,
    width: 1920,
    height: 1080,
    opacity: 0.92
  },

  // Main title block only: OUR SERVICES
  titleBlock: {
    x: 60,
    y: 128,
    width: 580,
    height: 175
  },
  title: {
    fontSize: 79,
    lineHeight: 0.99,
    letterSpacing: '-0.03em',
    fontWeight: 900
  },

  // Paragraph under title
  description: {
    x: 60,
    y: 313,
    width: 750,
    fontSize: 25,
    lineHeight: 1.42,
    fontWeight: 400,
    letterSpacing: '-0.018em'
  },

  // Six cards only.
  cards: {
    x: 60,
    y: 398,
    width: 1800,
    height: 482,
    gapX: 32,
    gapY: 20
  },
  card: {
    titleX: 248,
    titleY: 37,
    titleWidth: 285,
    titleSize: 30,
    titleWeight: 800,
    titleLineHeight: 1.05,
    bodyX: 248,
    bodyY: 115,
    bodyWidth: 305,
    bodySize: 19,
    bodyLineHeight: 1.34,
    bodyWeight: 400
  },

  // Tech stack strip below the service cards.
  stack: {
    x: 60,
    y: 928,
    width: 1800,
    height: 66,
    fontSize: 20
  }
};
