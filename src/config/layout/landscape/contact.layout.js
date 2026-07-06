export const contactLandscapeLayout = {
  section: {
    width: 1920,
    height: 1080
  },

  // Full section background from public/assets/contact/contact-bg.png
  background: {
    x: 0,
    y: 0,
    width: 1920,
    height: 1080,
    opacity: 1
  },

  // Main title. 06 CONTACT is intentionally not rendered.
  titleBlock: {
    x: 68,
    y: 110,
    width: 800,
    height: 175
  },
  title: {
    fontSize: 67,
    lineHeight: 1.12,
    letterSpacing: '-0.035em',
    fontWeight: 900
  },

  description: {
    x: 68,
    y: 324,
    width: 540,
    fontSize: 25,
    lineHeight: 1.45,
    fontWeight: 400,
    letterSpacing: '-0.018em'
  },

  contactList: {
    x: 70,
    y: 414,
    width: 530,
    height: 238,
    gap: 28,
    iconSize: 54,
    titleSize: 24,
    bodySize: 20,
    bodyLineHeight: 1.32
  },

  form: {
    x: 860,
    y: 220,
    width: 980,
    height: 470,
    padding: 30,
    gap: 15,
    fieldHeight: 60,
    textareaHeight: 166,
    buttonHeight: 74,
    fontSize: 22,
    buttonFontSize: 23
  },

  faq: {
    x: 68,
    y: 700,
    width: 1784,
    height: 306,
    paddingX: 22,
    paddingY: 16,
    titleSize: 24,
    gapX: 40,
    gapY: 10,
    itemHeight: 50,
    itemFontSize: 21,
    plusSize: 27
  }
};
