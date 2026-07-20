export const siteContent = {
  brand: {
    name: 'MANAV TECH LABS',
    shortName: 'MT',
    email: 'hello@manavtechlabs.com',
    location: 'Remote-first studio',
    tagline: 'Games & Apps Development Studio'
  },

  navigation: [
    { id: 'home', label: 'Home', href: '/', sectionId: 'home' },
    { id: 'about', label: 'About', href: '/about', sectionId: 'about' },
    { id: 'services', label: 'Services', href: '/services', sectionId: 'services' },
    { id: 'igaming', label: 'iGaming', href: '/igaming' },
    { id: 'mobile-apps', label: 'Mobile Apps', href: '/mobile-apps' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio', sectionId: 'portfolio' },
    { id: 'process', label: 'Process', href: '/process', sectionId: 'process' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'contact', label: 'Contact', href: '/contact', sectionId: 'contact' }
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
      label: 'Explore Full Portfolio',
      href: '/portfolio#project-directory',
      visible: true,
      ariaLabel: 'Explore the complete Manav Tech Labs portfolio'
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


  igamingPage: {
    eyebrow: 'iGaming Solutions',
    titleTop: 'WE BUILD',
    titleAccent: 'iGAMING SOLUTIONS',
    strapline: 'Secure. Scalable. Engaging.',
    description: 'End-to-end iGaming platform development for casino, sportsbook, poker, and more. Built for performance, compliance, and player retention.',
    primaryCta: 'Start Your Project',
    secondaryCta: 'View Case Studies',
    stats: [
      { value: '100+', label: 'Gaming Projects', icon: 'projects' },
      { value: '99.9%', label: 'Uptime Focus', icon: 'uptime' },
      { value: '10M+', label: 'Happy Players', icon: 'players' },
      { value: '24/7', label: 'Support', icon: 'support' }
    ],
    reasons: [
      {
        title: 'Compliance Ready',
        body: 'Architecture prepared for KYC, AML, GDPR, responsible gaming, and market-specific regulatory workflows.',
        icon: 'compliance'
      },
      {
        title: 'Real-Time Wallets',
        body: 'Instant deposits, withdrawals, bonuses, and transactional flows designed with security and auditability in mind.',
        icon: 'walletLive'
      },
      {
        title: 'Multiplayer & Live Features',
        body: 'Real-time multiplayer, live-dealer integration, chat, presence, tournaments, and leaderboard systems.',
        icon: 'multiplayer'
      },
      {
        title: 'Scalable Backend',
        body: 'High-performance backend architecture built to scale, absorb traffic spikes, and support large player bases.',
        icon: 'backendScale'
      }
    ],
    services: [
      {
        title: 'Online Casino Platforms',
        body: 'Full-featured casino products with slots, table games, live casino, game aggregation, and operator tooling.',
        icon: 'casino'
      },
      {
        title: 'Sports Betting Platforms',
        body: 'Pre-match and in-play betting, odds management, bet slips, cash-out, risk controls, and settlement flows.',
        icon: 'sportsbook'
      },
      {
        title: 'Slot Game Development',
        body: 'Custom slots with math models, bonus features, RTP configuration, responsive UI, and cross-platform delivery.',
        icon: 'slots'
      },
      {
        title: 'Poker & Card Games',
        body: 'Poker, Teen Patti, Rummy, and custom card games with anti-cheat, rooms, tournaments, and live tables.',
        icon: 'poker'
      },
      {
        title: 'Payment & Wallet Systems',
        body: 'Secure payment gateways, multi-currency wallets, crypto-ready integrations, reconciliation, and fast settlements.',
        icon: 'payments'
      }
    ],
    caseStudies: [
      {
        title: 'LuckySpin Casino',
        tag: 'Online Casino',
        icon: 'slots',
        points: ['500+ slots and table games', 'Live casino integration', 'Multi-currency wallet', 'Retention-focused player journeys']
      },
      {
        title: 'BetArena Sportsbook',
        tag: 'Sports Betting',
        icon: 'sportsbook',
        points: ['Pre-match and in-play betting', 'Real-time odds engine', 'Cash-out and bet builder', 'Growth-ready active-user architecture']
      },
      {
        title: 'AcePoker Live',
        tag: 'Poker Platform',
        icon: 'poker',
        points: ['Real-time multiplayer tables', 'Tournament and ranking systems', 'Secure and fair-play controls', '24/7 in-app support module']
      }
    ]
  },


  mobileAppsPage: {
    eyebrow: 'Services',
    titleTop: 'WE BUILD',
    titleAccent: 'MOBILE APPS',
    strapline: 'Android, iOS & Cross-Platform Apps That Drive Real Impact.',
    description: 'We design and develop high-performance mobile apps that are fast, beautiful, secure, and built to scale your idea into a powerful product.',
    primaryCta: 'Start Your Project',
    secondaryCta: 'View Case Studies',
    stats: [
      { value: '100+', label: 'Apps Delivered', icon: 'apps' },
      { value: '4+', label: 'Years Experience', icon: 'experience' },
      { value: '98%', label: 'Client Satisfaction', icon: 'satisfaction' },
      { value: '24/7', label: 'Support', icon: 'support' }
    ],
    reasons: [
      {
        title: 'Android & iOS Expertise',
        body: 'Native apps built for the best performance, user experience, and platform standards.',
        icon: 'androidIos'
      },
      {
        title: 'Cross-Platform Delivery',
        body: 'Build once, run everywhere with Flutter and React Native for faster time-to-market and lower cost.',
        icon: 'crossPlatform'
      },
      {
        title: 'Beautiful UI/UX',
        body: 'Engaging, pixel-perfect designs that deliver intuitive and delightful user experiences.',
        icon: 'beautifulUi'
      },
      {
        title: 'Backend & API Integration',
        body: 'Robust architectures with secure APIs, databases, and third-party integrations that scale.',
        icon: 'backendApi'
      }
    ],
    services: [
      {
        title: 'Android App Development',
        body: 'High-performance apps for phones, tablets, and Android TV.',
        icon: 'android'
      },
      {
        title: 'iOS App Development',
        body: 'Premium native apps for iPhone, iPad, and the Apple ecosystem.',
        icon: 'ios'
      },
      {
        title: 'Flutter Development',
        body: 'Cross-platform apps with beautiful UI and native performance.',
        icon: 'flutter'
      },
      {
        title: 'React Native Development',
        body: 'Fast, scalable apps with reusable code and native modules.',
        icon: 'reactNative'
      },
      {
        title: 'UI/UX Design',
        body: 'User research, wireframes, and polished UI that drives engagement.',
        icon: 'uiUx'
      },
      {
        title: 'Maintenance & Support',
        body: 'Updates, feature improvements, and 24/7 maintenance support.',
        icon: 'support'
      }
    ],
    caseStudies: [
      {
        title: 'FitPulse Health App',
        tag: 'Health & Fitness',
        image: 'fitPulse',
        points: ['Activity tracking and analytics', 'Personalized fitness plans', 'Wearables integration']
      },
      {
        title: 'ShopNest Commerce App',
        tag: 'E-Commerce',
        image: 'shopNest',
        points: ['Product catalog and search', 'Secure payments and offers', 'Real-time order tracking']
      },
      {
        title: 'TaskFlow Pro',
        tag: 'Productivity',
        image: 'taskFlow',
        points: ['Task management and kanban', 'Team collaboration', 'Real-time notifications']
      }
    ]
  },

  projectsPage: {
    eyebrow: 'Complete portfolio',
    titleTop: 'PROJECT',
    titleAccent: 'DIRECTORY',
    description: 'The featured work above and the additional references below form one complete Games & Apps portfolio, with project categories, platforms, highlights, and live source links.',
    stats: [
      { value: '8', label: 'Selected References' },
      { value: '6', label: 'Game App References' },
      { value: '1', label: 'VR Reference' },
      { value: '1', label: 'Mobile App Listing' }
    ]
  },

  productsPage: {
    titleTop: 'OUR SOFTWARE',
    titleAccent: 'PRODUCTS',
    description: 'Powerful software solutions for businesses, developers, and creators.',
    categories: [
      { id: 'all', label: 'All Products', icon: '◇', count: 24 },
      { id: 'developer-tools', label: 'Developer Tools', icon: '◈', count: 7 },
      { id: 'game-development', label: 'Game Development', icon: '⌘', count: 5 },
      { id: 'business-productivity', label: 'Business & Productivity', icon: '▣', count: 6 },
      { id: 'design-creative', label: 'Design & Creative', icon: '✧', count: 3 },
      { id: 'utilities-security', label: 'Utilities & Security', icon: '▤', count: 3 }
    ],
    licenseTypes: ['All Licenses', 'Single User', 'Team / Multi-User', 'Enterprise'],
    products: [
      {
        id: 'codex-ide',
        name: 'CodeX IDE',
        categoryId: 'developer-tools',
        image: 'boxPurple',
        badge: 'BEST SELLER',
        badgeTone: 'pink',
        rating: '4.8',
        reviews: 128,
        price: 129,
        oldPrice: 199,
        discount: 35,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Smart & lightweight IDE for modern developers with powerful debugging and AI assistance.',
        description: 'Smart & lightweight IDE built for modern developers. Includes AI assistant, advanced debugging, and multi-language support.',
        features: [
          { icon: '⚙', label: 'License', value: 'Single User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Linux' },
          { icon: '↻', label: 'Version', value: 'v2.3.1' },
          { icon: '▣', label: 'File Size', value: '250 MB' },
          { icon: '◎', label: 'Languages', value: '50+ Supported' },
          { icon: '?', label: 'Support', value: '24/7 Premium Support' }
        ]
      },
      {
        id: 'devkit-pro',
        name: 'DevKit Pro',
        categoryId: 'developer-tools',
        image: 'boxBlue',
        badge: 'TOP RATED',
        badgeTone: 'cyan',
        rating: '4.7',
        reviews: 84,
        price: 149,
        oldPrice: 249,
        discount: 40,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Complete toolkit for developers with SDKs, tools, libraries, and productivity boosters.',
        description: 'Complete developer toolkit with SDKs, code utilities, project starters, and productivity boosters for production teams.',
        features: [
          { icon: '⚙', label: 'License', value: 'Team Ready' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Linux' },
          { icon: '↻', label: 'Version', value: 'v4.1.0' },
          { icon: '▣', label: 'File Size', value: '410 MB' },
          { icon: '◎', label: 'Languages', value: '35+ Supported' },
          { icon: '?', label: 'Support', value: 'Priority Support' }
        ]
      },
      {
        id: 'gamecraft-engine',
        name: 'GameCraft Engine',
        categoryId: 'game-development',
        image: 'boxBlue',
        badge: 'NEW ARRIVAL',
        badgeTone: 'gold',
        rating: '4.6',
        reviews: 78,
        price: 299,
        oldPrice: 399,
        discount: 25,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'High-performance game engine for 2D & 3D games. Build stunning games faster.',
        description: 'A game-development suite for prototyping, gameplay systems, 2D/3D scenes, and optimized production builds.',
        features: [
          { icon: '⚙', label: 'License', value: 'Commercial' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Linux' },
          { icon: '↻', label: 'Version', value: 'v1.8.5' },
          { icon: '▣', label: 'File Size', value: '1.2 GB' },
          { icon: '◎', label: 'Languages', value: 'C#, JS, Lua' },
          { icon: '?', label: 'Support', value: 'Studio Support' }
        ]
      },
      {
        id: 'uifusion-pro',
        name: 'UIFusion Pro',
        categoryId: 'design-creative',
        image: 'boxPurple',
        badge: '',
        badgeTone: 'pink',
        rating: '4.5',
        reviews: 56,
        price: 89,
        oldPrice: 149,
        discount: 40,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Design beautiful user interfaces with advanced components and design systems.',
        description: 'A UI kit and interface production toolkit for components, flows, style systems, and responsive design handoff.',
        features: [
          { icon: '⚙', label: 'License', value: 'Single User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS' },
          { icon: '↻', label: 'Version', value: 'v3.0.2' },
          { icon: '▣', label: 'File Size', value: '180 MB' },
          { icon: '◎', label: 'Templates', value: '120+ Included' },
          { icon: '?', label: 'Support', value: 'Email Support' }
        ]
      },
      {
        id: 'dbmanager-studio',
        name: 'DBManager Studio',
        categoryId: 'business-productivity',
        image: 'boxBlue',
        badge: '',
        badgeTone: 'cyan',
        rating: '4.6',
        reviews: 64,
        price: 99,
        oldPrice: 159,
        discount: 38,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Database management tool supporting MySQL, PostgreSQL, MongoDB & more.',
        description: 'Database management software for querying, monitoring, backups, schema workflows, and multi-database teams.',
        features: [
          { icon: '⚙', label: 'License', value: 'Single User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Linux' },
          { icon: '↻', label: 'Version', value: 'v5.2.0' },
          { icon: '▣', label: 'File Size', value: '320 MB' },
          { icon: '◎', label: 'Databases', value: '12+ Supported' },
          { icon: '?', label: 'Support', value: 'Premium Support' }
        ]
      },
      {
        id: 'securone-antivirus',
        name: 'SecurOne Antivirus',
        categoryId: 'utilities-security',
        image: 'boxGreen',
        badge: '',
        badgeTone: 'cyan',
        rating: '4.7',
        reviews: 112,
        price: 49,
        oldPrice: 79,
        discount: 38,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Advanced protection for your systems with real-time threat detection.',
        description: 'Security utility with live monitoring, threat detection, scanning workflows, and lightweight performance tools.',
        features: [
          { icon: '⚙', label: 'License', value: 'Single User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS' },
          { icon: '↻', label: 'Version', value: 'v8.4.2' },
          { icon: '▣', label: 'File Size', value: '160 MB' },
          { icon: '◎', label: 'Protection', value: 'Realtime Scan' },
          { icon: '?', label: 'Support', value: '24/7 Security Support' }
        ]
      },
      {
        id: 'taskflow-manager',
        name: 'TaskFlow Manager',
        categoryId: 'business-productivity',
        image: 'boxPurple',
        badge: '',
        badgeTone: 'pink',
        rating: '4.6',
        reviews: 81,
        price: 59,
        oldPrice: 99,
        discount: 40,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Project & task management software to organize teams and increase productivity.',
        description: 'Productivity system for sprint planning, task status, team workflows, reporting, and project visibility.',
        features: [
          { icon: '⚙', label: 'License', value: 'Team / Multi-User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Web' },
          { icon: '↻', label: 'Version', value: 'v2.9.7' },
          { icon: '▣', label: 'File Size', value: '140 MB' },
          { icon: '◎', label: 'Boards', value: 'Unlimited' },
          { icon: '?', label: 'Support', value: 'Business Support' }
        ]
      },
      {
        id: 'apihub-developer',
        name: 'APIHub Developer',
        categoryId: 'developer-tools',
        image: 'boxBlue',
        badge: '',
        badgeTone: 'cyan',
        rating: '4.6',
        reviews: 83,
        price: 79,
        oldPrice: 129,
        discount: 39,
        platforms: ['Windows', 'macOS', 'Linux'],
        shortDescription: 'Test, design & document APIs easily with powerful tools for developers.',
        description: 'Developer API workspace for testing endpoints, managing environments, generating docs, and debugging requests.',
        features: [
          { icon: '⚙', label: 'License', value: 'Single User' },
          { icon: '▦', label: 'Platform', value: 'Windows, macOS, Linux' },
          { icon: '↻', label: 'Version', value: 'v6.1.3' },
          { icon: '▣', label: 'File Size', value: '220 MB' },
          { icon: '◎', label: 'Requests', value: 'Unlimited' },
          { icon: '?', label: 'Support', value: 'Developer Support' }
        ]
      }
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
