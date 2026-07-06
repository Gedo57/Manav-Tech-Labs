export const siteContent = {
  brand: {
    name: 'MANAV TECH LABS',
    shortName: 'MT',
    email: 'hello@manavtechlabs.com',
    location: 'Remote-first studio',
    tagline: 'Games & Apps Development Studio'
  },

  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ],

  cta: {
    primary: 'Start Your Project',
    secondary: 'View Our Work'
  },

  home: {
    titleTop: 'WE BUILD',
    titleAccent: 'GAMES & APPS',
    titleBottom: 'THAT PLAYERS LOVE.',
    subtitle: 'We design and develop mobile games, web apps, and scalable digital products for startups and businesses.',
    services: [
      {
        id: 'game-development',
        title: 'Game\nDevelopment',
        icon: 'gamepad',
        tone: 'purple'
      },
      {
        id: 'mobile-apps',
        title: 'Mobile\nApps',
        icon: 'phone',
        tone: 'purple'
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX\nDesign',
        icon: 'design',
        tone: 'cyan'
      },
      {
        id: 'backend-systems',
        title: 'Backend\nSystems',
        icon: 'backend',
        tone: 'purple'
      }
    ]
  },

  services: {
    titleTop: 'OUR',
    titleAccent: 'SERVICES',
    description: 'We build mobile apps, games, AR apps, VR games, and scalable backend systems for digital products.',
    cards: [
      {
        id: 'game-development',
        title: 'Game\nDevelopment',
        body: '2D and 3D games with gameplay loops, levels, rewards, multiplayer logic, and game UI/UX.',
        image: 'gameDevelopment'
      },
      {
        id: 'mobile-app-development',
        title: 'Mobile\nApps',
        body: 'Android and iOS apps with clean interfaces, smooth performance, and scalable product flows.',
        image: 'mobileApp'
      },
      {
        id: 'ar-apps',
        title: 'AR\nApps',
        body: 'Camera-based AR features, interactive demos, product previews, filters, and mobile AR flows.',
        image: 'webApp'
      },
      {
        id: 'vr-games',
        title: 'VR\nGames',
        body: 'VR game concepts, Oculus-style references, immersive interactions, environments, and prototypes.',
        image: 'liveOps'
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX\nDesign',
        body: 'Game screens, app flows, wireframes, clickable prototypes, icons, panels, and polished UI systems.',
        image: 'uiUx'
      },
      {
        id: 'backend-systems',
        title: 'Backend\nSystems',
        body: 'APIs, authentication, rooms, multiplayer, leaderboards, rewards, wallets, and admin tools.',
        image: 'backendApis'
      }
    ],
    // Hidden in the UI for now. Add names here again only if you want the tech strip back.
    stack: []
  },

  portfolio: {
    titleTop: 'SELECTED',
    titleAccent: 'WORK',
    description: 'Source-backed Games & Apps references from the Manav Tech Labs Work Directory, including game apps, a VR reference, and an iOS app listing.',
    cta: {
      label: 'View All Projects',
      href: '#projects',
      visible: true,
      ariaLabel: 'View all Manav Tech Labs projects'
    },
    featuredLimit: 4,
    projects: [
      {
        id: 'word-grid-puzzle',
        title: 'Word Grid Puzzle',
        category: 'Game App',
        platform: 'Android / Google Play',
        image: 'wordGridPuzzle',
        featured: true,
        features: ['Word Puzzle Gameplay', 'Grid-based Progression', 'Multiplayer Mode'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Word Grid',
        url: 'https://play.google.com/store/apps/details?id=com.wordgame.wordgrid.puzzle',
        summary: 'A casual word puzzle reference built around grid gameplay, vocabulary challenges, and multiplayer mode support.'
      },
      {
        id: 'multiplayer-crossword',
        title: 'Multiplayer Crossword',
        category: 'Game App',
        platform: 'Android / Google Play',
        image: 'multiplayerCrossword',
        features: ['Crossword Gameplay', 'Online Play', 'Timed Challenges'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Crossword',
        url: 'https://play.google.com/store/apps/details?id=com.wordgame.crossword.word.multiplayer',
        summary: 'A multiplayer crossword reference with online play, tournament-style flow, ranking potential, and time-challenge modes.'
      },
      {
        id: 'word-lane-puzzles',
        title: 'Word Lane Puzzles',
        category: 'Game App',
        platform: 'Android / Google Play',
        image: 'wordLanePuzzles',
        features: ['Word Search', 'Crossword Flow', 'Leaderboard Systems'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Word Lane',
        url: 'https://play.google.com/store/apps/details?id=com.wordlane.wordgame.puzzles',
        summary: 'A word search and crossword puzzle reference focused on brain-training loops, multiplayer engagement, daily retention, and leaderboard systems.'
      },
      {
        id: 'mini-golf-eldorado',
        title: 'Mini Golf Eldorado',
        category: '3D Game App',
        platform: 'Android / Google Play',
        image: 'miniGolfEldorado',
        featured: true,
        features: ['3D Mini Golf', '1v1 Multiplayer', 'Arcade Progression'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Eldorado',
        url: 'https://play.google.com/store/apps/details?id=com.MobileSportsTime.MiniGolfEldoradoGolfCourse',
        summary: 'A 3D mini golf reference for sports-arcade mechanics, course design, collectibles, player-versus-player loops, and mobile controls.'
      },
      {
        id: 'mini-golf-cartoon-forest',
        title: 'Mini Golf Cartoon Forest',
        category: '3D Game App',
        platform: 'Android / Google Play',
        image: 'miniGolfCartoonForest',
        features: ['Stylized 3D Courses', 'Real-time Multiplayer', 'Single-player Mode'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Cartoon Forest',
        url: 'https://play.google.com/store/apps/details?id=com.MobileSportsTime.MiniGolfInCartoonForest',
        summary: 'A stylized 3D mini golf reference showing cartoon environments, obstacle courses, reward loops, and real-time multiplayer support.'
      },
      {
        id: 'dice-friends',
        title: 'Dice Friends',
        category: 'Game App',
        platform: 'Android / Google Play',
        image: 'diceFriends',
        featured: true,
        features: ['Dice Board Gameplay', 'Room-based Multiplayer', 'Leaderboard'],
        tools: ['Android', 'Google Play'],
        status: 'Live Reference',
        linkLabel: 'Google Play - Dice Friends',
        url: 'https://play.google.com/store/apps/details?id=com.elixir.dicefriends',
        summary: 'A dice board game reference covering room-based multiplayer, social play, leaderboard systems, missions, and economy-style loops.'
      },
      {
        id: 'oculus-vr-game',
        title: 'Oculus VR Game',
        category: 'VR Game',
        platform: 'Meta / Oculus',
        image: 'oculusVrGame',
        features: ['VR Game Reference', 'Immersive Interaction', 'Oculus Platform'],
        tools: ['Meta', 'Oculus'],
        status: 'VR Reference',
        linkLabel: 'Meta/Oculus VR Link',
        url: 'https://www.oculus.com/vr/6525150070834263/',
        summary: 'A VR game reference listed inside the Games & Apps portfolio set, useful as a proof point for virtual reality project discussions.'
      },
      {
        id: 'startup-xpo-app',
        title: 'Startup Xpo App',
        category: 'Mobile App',
        platform: 'iOS / App Store reference',
        image: 'startupXpoApp',
        featured: true,
        features: ['Event-style App', 'Lead Management', 'iOS Listing'],
        tools: ['iOS', 'App Store'],
        status: 'Live Reference',
        linkLabel: 'App Store - Xpo Group Leads',
        url: 'https://apps.apple.com/gb/app/xpo-group-leads/id1636866451',
        summary: 'A startup and event-style mobile application reference included as the app listing in the selected Games & Apps portfolio set.'
      }
    ]
  },

  projectsPage: {
    eyebrow: 'Source-backed portfolio',
    titleTop: 'ALL',
    titleAccent: 'PROJECTS',
    description: 'Browse the complete Games & Apps project list with real project names, categories, platforms, live links, and build-positioning details.',
    stats: [
      { value: '8', label: 'Selected References' },
      { value: '6', label: 'Game App References' },
      { value: '1', label: 'VR Reference' },
      { value: '1', label: 'Mobile App Listing' }
    ]
  },

  process: {
    titleTop: 'OUR PROCESS',
    description: 'A clear workflow from concept to launch.',
    steps: [
      {
        id: 'discovery',
        number: '01',
        title: 'Discovery',
        body: 'We research your idea, goals, target audience, and project scope.'
      },
      {
        id: 'design',
        number: '02',
        title: 'Design',
        body: 'We create UI/UX, flows, wireframes, and prototypes.'
      },
      {
        id: 'development',
        number: '03',
        title: 'Development',
        body: 'We build the game or app with clean and scalable code.'
      },
      {
        id: 'testing',
        number: '04',
        title: 'Testing',
        body: 'We test performance, fix bugs, and ensure a smooth experience.'
      },
      {
        id: 'launch-support',
        number: '05',
        title: 'Launch & Support',
        body: 'We deploy your product and provide updates, optimization, and support.',
        tone: 'gold'
      }
    ]
  },


  contact: {
    titleTop: 'LET’S BUILD',
    titleMiddle: 'SOMETHING',
    titleAccent: 'AMAZING',
    description: 'Have a project in mind? Tell us about it and we’ll get back to you within 24 hours.',
    info: [
      {
        id: 'email',
        icon: 'email',
        title: 'Email',
        lines: ['Contact@manahtechlabs.com']
      },
      {
        id: 'location',
        icon: 'location',
        title: 'Location',
        lines: ['Remote-first studio', 'Serving clients worldwide']
      },
      {
        id: 'lets-talk',
        icon: 'clock',
        title: 'Let’s Talk',
        lines: ['We’re available on email', 'and chat during working hours.']
      }
    ],
    form: {
      submit: 'Send Message',
      projectTypes: ['Game Development', 'Mobile App', 'Web App', 'UI/UX Design', 'Backend & APIs'],
      budgetRanges: ['$1k - $5k', '$5k - $10k', '$10k - $25k', '$25k+']
    },
    faqTitle: 'FAQ',
    faq: [
      {
        question: 'What services do you offer?',
        answer: 'We design and develop games, mobile apps, web apps, UI/UX, backend systems, and support services.'
      },
      {
        question: 'How long does a project take?',
        answer: 'Timelines depend on scope. A small prototype can take weeks, while a full product takes longer.'
      },
      {
        question: 'Do you build both games and apps?',
        answer: 'Yes. We build game experiences, mobile apps, web platforms, dashboards, and backend systems.'
      },
      {
        question: 'Do you provide support after launch?',
        answer: 'Yes. We can handle bug fixing, updates, optimization, LiveOps, and post-launch support.'
      },
      {
        question: 'Can you work from just an idea?',
        answer: 'Yes. We can start from an idea, shape the scope, create flows, design UI, then build the product.'
      },
      {
        question: 'Can you build multiplayer or backend systems?',
        answer: 'Yes. We can build APIs, databases, realtime systems, multiplayer logic, and scalable backend architecture.'
      }
    ]
  },

  whyUs: {
    titleTop: 'WHY MANAV',
    titleAccent: 'TECH LABS?',
    description: 'We’re a passionate startup focused on creating engaging games and powerful digital products. We combine creativity, technology, and dedication to deliver real value.',
    cards: [
      {
        id: 'game-first-thinking',
        title: 'Game-first\nThinking',
        body: 'We understand gameplay, player experience, economy, and what makes games fun and engaging.',
        image: 'gameFirst'
      },
      {
        id: 'full-product-delivery',
        title: 'Full Product\nDelivery',
        body: 'From idea, prototype, and engine to development and testing, we handle it all from start to finish.',
        image: 'fullProduct'
      },
      {
        id: 'apps-backend',
        title: 'Apps +\nBackend',
        body: 'We build mobile apps, dedicated backends, and robust backend systems that scale with your product.',
        image: 'appsBackend'
      },
      {
        id: 'startup-friendly',
        title: 'Startup\nFriendly',
        body: 'Fast communication, flexible scope, transparent pricing, and practical solutions for startups.',
        image: 'startup'
      }
    ],
    stats: [
      {
        id: 'portfolio-references',
        value: '8',
        label: 'Portfolio References',
        image: 'games',
        tone: 'blue'
      },
      {
        id: 'game-app-references',
        value: '6',
        label: 'Game App References',
        image: 'apps',
        tone: 'blue'
      },
      {
        id: 'vr-reference',
        value: '1',
        label: 'VR Reference',
        image: 'clients',
        tone: 'purple'
      },
      {
        id: 'mobile-app-listing',
        value: '1',
        label: 'Mobile App Listing',
        image: 'support',
        tone: 'purple'
      }
    ]
  }
};
