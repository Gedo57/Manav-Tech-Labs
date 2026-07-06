export const processLandscapeLayout = {
  section: {
    width: 1920,
    height: 1080
  },

  // Circuit background on the top-right.
  background: {
    x: 0,
    y: -30,
    width: 1920,
    height: 1080,
    opacity: 0.88
  },

  titleBlock: {
    x: 68,
    y: 116,
    width: 735,
    height: 92
  },
  title: {
    fontSize: 72,
    lineHeight: 1,
    letterSpacing: '-0.035em',
    fontWeight: 900
  },

  description: {
    x: 70,
    y: 208,
    width: 570,
    fontSize: 26,
    lineHeight: 1.35,
    fontWeight: 400,
    letterSpacing: '-0.018em'
  },

  timeline: {
    x: 125,
    y: 250,
    width: 1570,
    height: 200,
    opacity: 1
  },

  steps: {
    y: 466,
    titleSize: 23,
    bodySize: 18,
    bodyLineHeight: 1.42,
    bodyWidth: 245,
    items: [
      { x: 220, align: 'center' },
      { x: 580, align: 'center' },
      { x: 920, align: 'center' },
      { x: 1260, align: 'center' },
      { x: 1600, align: 'center', tone: 'gold' }
    ]
  },

  panel: {
    x: 68,
    y: 612,
    width: 1784,
    height: 425,
    opacity: 1
  }
};
