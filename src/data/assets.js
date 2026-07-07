const publicAsset = (path) => `/assets/${path}`;

export const assets = {
  logos: {
    full: publicAsset('logos/manav-logo-full.png'),
    icon: publicAsset('logos/manav-logo-icon.png')
  },
  home: {
    background: publicAsset('home/home-bg.png'),
    heroDevice: publicAsset('home/home-hero-device.png'),
    icons: {
      gamepad: publicAsset('home/icon-gamepad.png'),
      phone: publicAsset('home/icon-phone.png'),
      design: publicAsset('home/icon-design.png'),
      backend: publicAsset('home/icon-backend.png')
    }
  },
  services: {
    background: publicAsset('services/services-bg.png'),
    cards: {
      gameDevelopment: publicAsset('services/card-game-development.png'),
      mobileApp: publicAsset('services/card-mobile-app.png'),
      webApp: publicAsset('services/card-web-app.png'),
      uiUx: publicAsset('services/card-ui-ux.png'),
      backendApis: publicAsset('services/card-backend-apis.png'),
      liveOps: publicAsset('services/card-liveops-support.png')
    }
  },
  portfolio: {
    background: publicAsset('portfolio/portfolio-bg.png'),
    projects: {
      wordGridPuzzle: publicAsset('portfolio/word-grid-puzzle.webp'),
      multiplayerCrossword: publicAsset('portfolio/multiplayer-crossword.webp'),
      wordLanePuzzles: publicAsset('portfolio/word-lane-puzzles.webp'),
      miniGolfEldorado: publicAsset('portfolio/mini-golf-eldorado.webp'),
      miniGolfCartoonForest: publicAsset('portfolio/mini-golf-cartoon-forest.webp'),
      diceFriends: publicAsset('portfolio/dice-friends.webp'),
      oculusVrGame: publicAsset('portfolio/oculus-vr-game.webp'),
      startupXpoApp: publicAsset('portfolio/startup-xpo-app.webp')
    }
  },
  products: {
    boxBlue: publicAsset('products/b1.png'),
    boxGreen: publicAsset('products/b2.png'),
    boxRed: publicAsset('products/b3.png'),
    boxPurple: publicAsset('products/b4.png'),
    boxGold: publicAsset('products/b5.png')
  },
  process: {
    background: publicAsset('process/process-bg.png'),
    timeline: publicAsset('process/process-timeline.png'),
    panel: publicAsset('process/process-panel.png')
  },
  contact: {
    background: publicAsset('contact/contact-bg.png')
  },
  whyUs: {
    background: publicAsset('why-us/why-us-bg.png'),
    cards: {
      gameFirst: publicAsset('why-us/card-game-first.png'),
      fullProduct: publicAsset('why-us/card-full-product.png'),
      appsBackend: publicAsset('why-us/card-apps-backend.png'),
      startup: publicAsset('why-us/card-startup.png')
    },
    stats: {
      games: publicAsset('why-us/stat-games.png'),
      apps: publicAsset('why-us/stat-apps.png'),
      clients: publicAsset('why-us/stat-clients.png'),
      support: publicAsset('why-us/stat-support.png')
    }
  }
};
