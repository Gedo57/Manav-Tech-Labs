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

  homeEditorial: {
    about: {
      eyebrow: 'About Manav Tech Labs',
      title: 'A Technology Partner Built for Delivery',
      lead: 'Strategy, design, engineering and continuous improvement in one connected workflow.',
      paragraphs: [
        'Manav Tech Labs is a technology consulting and software development services provider specializing in mobile applications, multiplayer games, web platforms, AI-powered solutions and digital transformation.',
        'We work with startups, SMEs and enterprises to turn product requirements into scalable digital experiences, from early planning and interface design through engineering, deployment and post-launch improvement.'
      ],
      metrics: [
        { value: '100+', label: 'Businesses Supported' },
        { value: '5', label: 'Selected Products' },
        { value: 'iOS + Android', label: 'Platform Coverage' },
        { value: 'Global', label: 'Delivery Reach' }
      ]
    },
    capabilities: {
      eyebrow: 'What We Build',
      title: 'Connected Capabilities for Digital Products',
      lead: 'Focused product teams combine experience design, application engineering and operational systems around each delivery goal.',
      items: [
        {
          id: 'game-systems',
          kicker: 'Game Technology',
          title: 'Game & Multiplayer Systems',
          body: 'Rule-driven gameplay, real-time rooms, matchmaking, turn validation, progression, rewards and live-operation foundations for engaging game experiences.',
          points: ['Real-time and turn-based play', 'Rooms, bots and matchmaking', 'Economy and progression systems'],
          icon: 'gamepad',
          tone: 'purple'
        },
        {
          id: 'digital-products',
          kicker: 'Product Engineering',
          title: 'Mobile & Web Products',
          body: 'Android, iOS and responsive web products built around clear user journeys, dependable APIs and scalable technical architecture.',
          points: ['Mobile applications', 'Web platforms and SaaS', 'Dashboards, portals and APIs'],
          icon: 'phone',
          tone: 'blue'
        },
        {
          id: 'automation-systems',
          kicker: 'Business Intelligence',
          title: 'AI & Business Automation',
          body: 'Practical AI assistants, OCR, workflow automation, CRM and ERP integrations that reduce repetitive work and improve operational visibility.',
          points: ['AI assistants and GPT integration', 'OCR and workflow automation', 'CRM, ERP and analytics'],
          icon: 'backend',
          tone: 'cyan'
        }
      ]
    },
    selectedWork: {
      eyebrow: 'Selected Work',
      title: 'Products Delivered Across Games and Mobile',
      lead: 'A focused selection of public products and multiplayer systems described in the Manav Tech Labs company profile.',
      projects: [
        {
          id: 'trinkoo',
          title: 'Trinkoo',
          category: 'Social Entertainment App',
          client: 'Trinkoo Technologies',
          summary: 'A unified mobile experience combining games, live streaming, chat, check-ins and reward systems.',
          outcomes: ['4.8K+ tracked Android downloads', '10+ multiplayer games in one platform', '4 engagement systems delivered'],
          image: 'trinkoo',
          href: '/portfolio#project-directory',
          tone: 'purple'
        },
        {
          id: 'pavan',
          title: 'Pavan',
          category: 'Mobility & Ride Booking',
          client: 'Parvatiya Vahan Samarthan Samiti',
          summary: 'A cross-platform mobility product supporting structured booking, scheduling, location and payment flows.',
          outcomes: ['Published on Android and iOS', '1K+ Google Play downloads', '4 ride categories and 3 payment methods'],
          image: 'pavan',
          href: '/portfolio#project-directory',
          tone: 'gold'
        },
        {
          id: 'liars-dice',
          title: "Liar's Dice",
          category: 'Multiplayer Bluffing Game',
          client: 'Confidential Gaming Client',
          summary: 'A responsive multiplayer dice experience with validated turns, real-time rooms and bot-supported gameplay.',
          outcomes: ['Supports 2-4 players', '4 validated core turn actions', 'Desktop, landscape and portrait layouts'],
          image: 'liarsDice',
          href: '/portfolio#project-directory',
          tone: 'blue'
        }
      ]
    },
    delivery: {
      eyebrow: 'Why Clients Work With Us',
      title: 'Clear Delivery from Scope to Support',
      lead: 'Each engagement is structured around accountable milestones, practical technical decisions and long-term product value.',
      items: [
        {
          id: 'end-to-end',
          kicker: '01',
          title: 'End-to-End Delivery',
          body: 'Discovery, UX, engineering, QA, deployment and post-launch support are connected in one delivery workflow.',
          tone: 'blue'
        },
        {
          id: 'communication',
          kicker: '02',
          title: 'Transparent Communication',
          body: 'Clear scope, regular progress updates, visible risks and accountable handoff keep decisions aligned.',
          tone: 'cyan'
        },
        {
          id: 'agile',
          kicker: '03',
          title: 'Agile Execution',
          body: 'Milestone-based delivery provides working progress, practical reviews and focused iteration throughout the project.',
          tone: 'purple'
        },
        {
          id: 'support',
          kicker: '04',
          title: 'Continuous Improvement',
          body: 'Deployment support, maintenance and product optimization help teams improve the experience after launch.',
          tone: 'gold'
        }
      ]
    },
    cta: {
      eyebrow: 'Start a Conversation',
      title: 'Have a Product Idea?',
      body: 'Let us turn your requirements into a reliable mobile application, multiplayer game, web platform or automation system.',
      button: 'Start Your Project'
    }
  },

  aboutEditorial: {
    introduction: {
      eyebrow: 'Who We Are',
      title: 'Technology, Product Thinking and Reliable Delivery',
      lead: 'A connected team for mobile applications, multiplayer games, web platforms and business automation.',
      paragraphs: [
        'Manav Tech Labs is a technology consulting and software development services provider working with startups, SMEs and enterprises across global markets.',
        'We connect product strategy, interface design, engineering, testing and post-launch improvement so clients can move from requirements to dependable digital products through one delivery workflow.'
      ],
      vision: {
        kicker: 'Vision',
        title: 'A Globally Trusted Technology Partner',
        body: 'To become a globally trusted technology partner for innovative software, gaming and AI solutions.',
        tone: 'cyan'
      },
      mission: {
        kicker: 'Mission',
        title: 'Build with Quality and Transparency',
        body: 'To build scalable, high-quality digital products through innovation, transparency and long-term partnerships while delivering exceptional customer experiences.',
        tone: 'purple'
      }
    },
    highlights: {
      eyebrow: 'Business Highlights',
      title: 'Built for Ambitious Digital Products',
      lead: 'Practical delivery principles keep product decisions, technical execution and client expectations aligned.',
      items: [
        { id: 'end-to-end', kicker: '01', title: 'End-to-End Delivery', body: 'Discovery, UX, engineering, QA, deployment and post-launch support in one connected workflow.', tone: 'blue' },
        { id: 'dedicated-team', kicker: '02', title: 'Dedicated Team', body: 'Cross-functional roles are aligned to the product scope, milestones and technical requirements.', tone: 'purple' },
        { id: 'agile', kicker: '03', title: 'Agile Execution', body: 'Milestone-based delivery provides visible progress, focused reviews and practical iteration.', tone: 'cyan' },
        { id: 'cost-effective', kicker: '04', title: 'Cost-Effective Delivery', body: 'Lean planning and reusable systems are selected around business value and long-term maintainability.', tone: 'gold' },
        { id: 'global', kicker: '05', title: 'Global Support', body: 'Remote-first collaboration supports clients and product teams working across different markets.', tone: 'blue' },
        { id: 'transparent', kicker: '06', title: 'Transparent Communication', body: 'Clear scope, regular updates, risk visibility and accountable handoff guide every engagement.', tone: 'purple' }
      ]
    },
    team: {
      eyebrow: 'Leadership & Delivery Team',
      title: 'The People Behind Product Delivery',
      lead: 'A focused team covering strategy, full-stack engineering, CRM automation and game systems.',
      members: [
        { id: 'shubham', initials: 'SK', name: 'Shubham Kumar', role: 'Founder & CEO', focus: 'Business growth · Client partnerships · Product direction', body: 'Leads company strategy, client alignment, product prioritization and delivery governance across mobile, web, gaming and automation engagements.' },
        { id: 'ankit', initials: 'AA', name: 'Ankit Awasthi', role: 'Full-Stack Developer', focus: 'Web · Frontend · APIs', body: 'Builds responsive interfaces, backend services, APIs and integrations for scalable web and product platforms.' },
        { id: 'rahul', initials: 'RC', name: 'Rahul Chauhan', role: 'Full-Stack Developer', focus: 'Backend · Real-time systems', body: 'Develops authentication, data, rooms, admin tools and real-time multiplayer services.' },
        { id: 'mithra', initials: 'M', name: 'Mithra', role: 'Zoho Developer', focus: 'CRM · Workflow automation', body: 'Delivers Zoho CRM solutions, operational workflows, integrations and business data management.' },
        { id: 'ahmed', initials: 'AM', name: 'Ahmed Mostafa', role: 'Game Developer', focus: 'Gameplay · Multiplayer · Economy', body: 'Develops gameplay logic, multiplayer systems, progression, game economies and responsive game interfaces.' }
      ]
    },
    collaboration: {
      eyebrow: 'Client Collaboration',
      title: 'Clear, Protected and Accountable',
      lead: 'Project information, milestones and technical responsibilities are handled through a transparent delivery structure.',
      points: [
        'NDA-aware collaboration and protected project information',
        'Milestone visibility with regular product reviews',
        'Quality assurance at each development stage',
        'Deployment-ready handoff and support options'
      ],
      industries: ['Gaming', 'Fantasy Sports', 'Mobility', 'Social Entertainment', 'Healthcare', 'Education', 'E-Commerce', 'Logistics', 'Travel & Tourism', 'Fintech', 'SaaS', 'Enterprise'],
      cta: {
        eyebrow: 'Work With Manav Tech Labs',
        title: 'Build Your Next Digital Product',
        body: 'Discuss your product requirements, delivery goals and preferred engagement model with our team.',
        button: 'Start Your Project'
      }
    }
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

  servicesEditorial: {
    productDevelopment: {
      eyebrow: 'Product Development',
      title: 'From Product Idea to Live Experience',
      lead: 'Product strategy, interface design and engineering are connected around a clear user journey and production goal.',
      paragraphs: [
        'We build Android, iOS and responsive web products for startups, SMEs and enterprises. Each engagement can cover requirements, UX flows, frontend, backend, APIs, testing, deployment and continuous improvement.',
        'The same delivery model supports customer applications, SaaS platforms, portals, dashboards and internal business systems.'
      ],
      capabilities: ['Mobile Applications', 'Web Applications', 'SaaS Platforms', 'Portals & Dashboards', 'UI/UX Design', 'Cloud-Ready Delivery']
    },
    gameDevelopment: {
      eyebrow: 'Game Development',
      title: 'Rule-Driven Systems for Multiplayer Experiences',
      lead: 'We develop the gameplay and platform systems that keep players connected, informed and engaged.',
      body: 'Capabilities cover 2D and 3D games, turn-based engines, real-time multiplayer, rooms, matchmaking, tournaments, progression and operational tools. Rules and state transitions are validated to keep the experience clear across desktop and mobile layouts.',
      items: [
        { id: 'real-time', kicker: '01', title: 'Real-Time Multiplayer', body: 'Room state, event synchronization, reconnect handling and server-authoritative flows.', tone: 'purple' },
        { id: 'matchmaking', kicker: '02', title: 'Rooms & Matchmaking', body: 'Public, private and skill-based room discovery with bot-supported fallback.', tone: 'blue' },
        { id: 'turn-systems', kicker: '03', title: 'Turn-Based Systems', body: 'Timers, action validation, state transitions and consistent player feedback.', tone: 'cyan' },
        { id: 'economy', kicker: '04', title: 'Economy & Progression', body: 'Coins, rewards, configurable rules, progression and leaderboard structures.', tone: 'gold' }
      ]
    },
    automation: {
      eyebrow: 'AI & Business Systems',
      title: 'Automation That Reduces Manual Work',
      lead: 'Practical AI and operational systems improve support, data capture and everyday business workflows.',
      items: [
        { id: 'assistants', kicker: 'AI', title: 'AI Assistants', body: 'Conversational assistants for websites, applications, onboarding and product support.', points: ['Chatbots and guided support', 'GPT integration', 'Knowledge retrieval'], tone: 'cyan' },
        { id: 'automation', kicker: 'Workflow', title: 'Automation & OCR', body: 'Trigger-based workflows and document extraction that accelerate routine processing.', points: ['OCR data capture', 'Connected workflows', 'Ticket classification'], tone: 'purple' },
        { id: 'enterprise', kicker: 'Operations', title: 'CRM, ERP & Analytics', body: 'Custom operational systems for sales, inventory, finance, HR, support and decision visibility.', points: ['Zoho and CRM workflows', 'ERP modules', 'Analytics dashboards'], tone: 'gold' }
      ]
    },
    technology: {
      eyebrow: 'Technology Stack',
      title: 'Modern Tools Across Product Layers',
      lead: 'The stack is selected around platform requirements, delivery speed, scalability and long-term maintainability.',
      groups: [
        { id: 'mobile', label: 'Mobile', items: ['Flutter', 'React Native', 'Kotlin', 'Swift'] },
        { id: 'frontend', label: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
        { id: 'backend', label: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Express.js'] },
        { id: 'data', label: 'Data', items: ['MySQL', 'MongoDB', 'Firebase'] },
        { id: 'cloud', label: 'Cloud', items: ['AWS', 'Google Cloud', 'Firebase'] },
        { id: 'gaming', label: 'Gaming', items: ['Unity', 'Unreal Engine', 'Photon', 'PlayFab'] }
      ]
    },
    engagement: {
      eyebrow: 'Engagement Options',
      title: 'A Delivery Model That Fits the Scope',
      lead: 'Engagement structure can be matched to a defined project, an ongoing product roadmap or an existing development team.',
      options: [
        { id: 'fixed', kicker: 'Defined Scope', title: 'Fixed-Cost Project', body: 'Milestone-based delivery for a clearly defined product scope, timeline and acceptance criteria.', tone: 'blue' },
        { id: 'dedicated', kicker: 'Flexible Capacity', title: 'Dedicated Developers', body: 'Focused engineering capacity for product backlogs, integrations, improvements and ongoing delivery.', tone: 'purple' },
        { id: 'team', kicker: 'Long-Term Delivery', title: 'Product Team & Retainer', body: 'Cross-functional support for MVP development, continuous releases and long-term product improvement.', tone: 'cyan' }
      ],
      cta: {
        eyebrow: 'Discuss Your Requirements',
        title: 'Choose the Right Path for Your Product',
        body: 'Share your platform, scope and delivery goals so the team can recommend a practical technical approach.',
        button: 'Talk to Our Team'
      }
    }
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


  portfolioEditorial: {
    approach: {
      eyebrow: 'How We Build',
      title: 'Product Thinking Behind the Visuals',
      lead: 'The interface is only one layer. Each delivery combines user journeys, product rules, technical architecture and a production-ready handoff.',
      paragraphs: [
        'Manav Tech Labs works across mobile applications, multiplayer games and digital platforms. The delivery focus is to turn a business requirement into clear flows, reliable systems and an experience that can be maintained after launch.',
        'Selected work is reviewed through the challenge being solved, the system delivered and the measurable product coverage—not through visuals alone.'
      ],
      items: [
        {
          id: 'product-clarity',
          kicker: 'Product Layer',
          title: 'Clear User Journeys',
          body: 'Flows, actions and feedback are organized around the user goal so the experience remains understandable across devices.',
          tone: 'cyan'
        },
        {
          id: 'system-design',
          kicker: 'Engineering Layer',
          title: 'Reliable Product Systems',
          body: 'Backend services, APIs, real-time state, validation and data flows are designed around the product requirements.',
          tone: 'purple'
        },
        {
          id: 'delivery-handoff',
          kicker: 'Delivery Layer',
          title: 'Production-Focused Handoff',
          body: 'Testing, responsive validation, deployment support and documentation keep the product ready for continued improvement.',
          tone: 'gold'
        }
      ]
    },
    caseStudies: {
      eyebrow: 'Selected Case Notes',
      title: 'Five Products, Five Delivery Challenges',
      lead: 'Short case-study summaries based on the selected work documented in the Manav Tech Labs company profile.',
      items: [
        {
          id: 'trinkoo',
          category: 'Social Entertainment App',
          title: 'Trinkoo',
          challenge: 'Bring games, live streaming, chat and rewards into one clear mobile journey.',
          solution: 'A unified product experience combining discovery, community tools, engagement loops and rewards.',
          outcomes: ['4.8K+ tracked Android downloads by July 2026', '10+ multiplayer games in one platform', '4 engagement systems: streaming, chat, check-ins and rewards'],
          technology: 'Mobile app, APIs, chat, streaming and rewards',
          tone: 'purple'
        },
        {
          id: 'pavan',
          category: 'Mobility Application',
          title: 'Pavan',
          challenge: 'Support multiple ride types while keeping booking, scheduling and trip coordination simple.',
          solution: 'Structured booking, live location, driver coordination and payment flows across mobile platforms.',
          outcomes: ['Published on Android and iOS', '1K+ Google Play downloads by July 2026', '4 ride categories and 3 payment methods'],
          technology: 'Mobile apps, location services, APIs and payments',
          tone: 'gold'
        },
        {
          id: 'liars-dice',
          category: 'Multiplayer Bluffing Game',
          title: "Liar's Dice",
          challenge: 'Synchronize hidden dice, progressive bids and room state across human players and bots.',
          solution: 'Real-time rooms, validated turn actions, bot-supported play and responsive portrait and landscape UI.',
          outcomes: ['2–4 players with 5 dice per player', '4 validated core turn actions', 'Desktop, landscape and portrait coverage'],
          technology: 'Responsive web, Node.js, real-time state and game systems',
          tone: 'cyan'
        },
        {
          id: 'ship-captain-crew',
          category: 'Pirate Dice Strategy',
          title: 'Ship Captain Crew',
          challenge: 'Translate a structured dice sequence into clear turns, scoring and multiplayer feedback.',
          solution: 'A rule-driven game engine with timed rolls, rooms, bot fill and responsive pirate-themed UI.',
          outcomes: ['2–4 players using the 5-dice rule set', '3 rolls per turn and 4 scoring elements', 'Desktop, landscape and portrait coverage'],
          technology: 'Responsive web, Node.js, multiplayer state and game systems',
          tone: 'blue'
        },
        {
          id: 'malaysian-mahjong',
          category: 'Three-Player Tile Game',
          title: '3P Malaysian Mahjong',
          challenge: 'Implement regional tile rules, claim priority, wildcard logic and scoring without losing clarity.',
          solution: 'A dedicated rule engine for draw and discard, Pong, Chow, Kong, Fei handling, seats and fan scoring.',
          outcomes: ['84-tile Malaysian 3-player rule set', '4 Fei wildcards and a 5-Fan minimum win', 'Synchronized Pong, Chow and Kong claims'],
          technology: 'Responsive web, real-time backend, tile rules and scoring',
          tone: 'purple'
        }
      ],
      note: 'Public store metrics were checked in July 2026 and may change. Commercial game performance remains client-confidential unless formally approved.'
    },
    delivery: {
      eyebrow: 'What We Deliver',
      title: 'Connected Product Delivery',
      lead: 'The exact scope is adapted to the engagement, but delivery can cover the complete path from interface design to release support.',
      items: [
        { id: 'ux', kicker: 'Experience', title: 'Product UI & UX', body: 'User flows, wireframes, responsive interfaces and product feedback states.', tone: 'cyan' },
        { id: 'frontend', kicker: 'Client Layer', title: 'Frontend Development', body: 'Responsive mobile and web interfaces aligned to the approved product flows.', tone: 'blue' },
        { id: 'backend', kicker: 'System Layer', title: 'Backend & APIs', body: 'Authentication, data, integrations, rooms, dashboards and operational services.', tone: 'purple' },
        { id: 'game-systems', kicker: 'Gameplay', title: 'Game Systems', body: 'Rules, timers, matchmaking, economies, progression and multiplayer state.', tone: 'gold' },
        { id: 'quality', kicker: 'Release', title: 'QA & Deployment', body: 'Device validation, regression coverage, deployment support and handoff.', tone: 'cyan' },
        { id: 'support', kicker: 'Continuity', title: 'Support & Improvement', body: 'Updates, optimization and continued product improvements after launch.', tone: 'purple' }
      ],
      cta: {
        eyebrow: 'Build Something Similar',
        title: 'Discuss the Product, Not Just the Screen',
        body: 'Share the platform, required systems and delivery goals so the team can define a practical scope.',
        button: 'Discuss Your Project'
      }
    }
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
      { id: 'all', label: 'All Products', icon: '◇', count: 8 },
      { id: 'developer-tools', label: 'Developer Tools', icon: '◈', count: 3 },
      { id: 'game-development', label: 'Game Development', icon: '⌘', count: 1 },
      { id: 'business-productivity', label: 'Business & Productivity', icon: '▣', count: 2 },
      { id: 'design-creative', label: 'Design & Creative', icon: '✧', count: 1 },
      { id: 'utilities-security', label: 'Utilities & Security', icon: '▤', count: 1 }
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


  productsEditorial: {
    introduction: {
      eyebrow: 'Products & Business Systems',
      title: 'Digital Products Built Around Practical Workflows',
      lead: 'Product technology should support a clear user journey, reliable operations and measurable business value.',
      paragraphs: [
        'Manav Tech Labs develops custom software, SaaS platforms, CRM and ERP systems, AI-enabled tools and connected digital products for startups, SMEs and enterprises.',
        'Each product can combine interface design, application engineering, backend services, data, cloud deployment and continuous improvement in one delivery workflow.'
      ],
      items: [
        { id: 'experience', kicker: 'Product', title: 'Clear User Experience', body: 'Flows, responsive interfaces and product rules are designed around the people using the system.', tone: 'cyan' },
        { id: 'systems', kicker: 'Engineering', title: 'Connected Systems', body: 'Frontend, backend, APIs, data and integrations are aligned around the product scope.', tone: 'purple' },
        { id: 'operations', kicker: 'Business', title: 'Operational Value', body: 'Automation, analytics and admin tools reduce manual work and improve day-to-day visibility.', tone: 'gold' }
      ]
    },
    scope: {
      eyebrow: 'Scope & Customization',
      title: 'Configured Around the Product Requirement',
      lead: 'The delivery scope is selected around target users, platforms, integrations and the operational environment.',
      items: [
        { id: 'custom-scope', kicker: '01', title: 'Custom Scope', body: 'Requirements, modules and milestones are defined around the approved product goal.', points: ['Mobile, web or cross-platform', 'Customer and admin journeys', 'Configurable business rules'], tone: 'blue' },
        { id: 'integrations', kicker: '02', title: 'Integrations', body: 'Products can connect to business data, messaging, maps, payments and third-party services.', points: ['APIs and data exchange', 'Authentication and notifications', 'Operational integrations'], tone: 'purple' },
        { id: 'scalability', kicker: '03', title: 'Scalable Delivery', body: 'Architecture, deployment and monitoring are planned for maintainability and future growth.', points: ['Cloud-ready services', 'Deployment pipelines', 'Support and optimization'], tone: 'cyan' }
      ]
    },
    delivery: {
      eyebrow: 'Implementation & Support',
      title: 'From Discovery to Continuous Improvement',
      lead: 'A connected delivery workflow keeps planning, engineering, release and post-launch support aligned.',
      items: [
        { id: 'discovery', number: '01', title: 'Discovery & Planning', body: 'Goals, users, technical requirements and delivery milestones are defined before development begins.' },
        { id: 'design', number: '02', title: 'Design & Development', body: 'User flows, responsive interfaces, frontend, backend and integrations are built against the approved scope.' },
        { id: 'quality', number: '03', title: 'Testing & Deployment', body: 'Functional QA, device validation, regression testing and deployment readiness are reviewed before handoff.' },
        { id: 'support', number: '04', title: 'Support & Optimization', body: 'Maintenance, product updates and planned improvements can continue after the production release.' }
      ]
    },
    cta: {
      eyebrow: 'Custom Product Development',
      title: 'Need a Product Built Around Your Workflow?',
      body: 'Share the users, platforms and business requirements. We will define the practical scope, milestones and delivery model.',
      button: 'Discuss Your Product'
    }
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


  processEditorial: {
    visibility: {
      eyebrow: 'Delivery Visibility',
      title: 'A Process Built Around Clear Milestones',
      lead: 'Product, design and engineering stay aligned through visible outputs, regular reviews and accountable handoff.',
      paragraphs: [
        'The workflow begins with goals and scope, then moves through planning, design, development, testing, deployment and support. Each stage produces a clear output that can be reviewed before the next milestone begins.',
        'This keeps decisions practical, exposes risks early and gives the client a consistent view of progress throughout delivery.'
      ],
      items: [
        { id: 'milestones', kicker: 'Progress', title: 'Visible Milestones', body: 'Defined deliverables make progress easier to review and approve.', tone: 'cyan' },
        { id: 'reviews', kicker: 'Alignment', title: 'Regular Product Reviews', body: 'Working flows and builds are reviewed throughout the engagement.', tone: 'purple' },
        { id: 'risks', kicker: 'Control', title: 'Early Risk Visibility', body: 'Technical, scope and delivery risks are surfaced before they become blockers.', tone: 'gold' }
      ]
    },
    stages: {
      eyebrow: 'Stage Deliverables',
      title: 'What You Receive Through the Workflow',
      lead: 'Seven connected stages move the product from an initial requirement to a supported release.',
      items: [
        { id: 'discovery', number: '01', title: 'Discovery', summary: 'Goals, users and scope', deliverable: 'Product requirements and initial scope' },
        { id: 'planning', number: '02', title: 'Planning', summary: 'Requirements and roadmap', deliverable: 'Milestones, priorities and delivery plan' },
        { id: 'design', number: '03', title: 'Design', summary: 'Flows, UI and prototype', deliverable: 'Approved user flows and interface direction' },
        { id: 'development', number: '04', title: 'Development', summary: 'Frontend, backend and systems', deliverable: 'Working product builds and integrations' },
        { id: 'testing', number: '05', title: 'Testing', summary: 'QA, devices and regression', deliverable: 'Validated builds and issue resolution' },
        { id: 'deployment', number: '06', title: 'Deployment', summary: 'Release, monitoring and handoff', deliverable: 'Production release and deployment support' },
        { id: 'support', number: '07', title: 'Support', summary: 'Updates and optimization', deliverable: 'Maintenance and improvement options' }
      ]
    },
    quality: {
      eyebrow: 'Quality Before Handoff',
      title: 'Validation Across Product Layers',
      lead: 'Testing covers the experience, the technical flow and the release path—not only individual screens.',
      items: [
        { id: 'functional', kicker: 'Product Flow', title: 'Functional QA', body: 'Core actions, user journeys and acceptance requirements are checked against the approved scope.', tone: 'cyan' },
        { id: 'responsive', kicker: 'Device Coverage', title: 'Responsive Validation', body: 'Interfaces are reviewed across desktop, landscape and portrait where required by the product.', tone: 'blue' },
        { id: 'regression', kicker: 'Stability', title: 'Regression Coverage', body: 'Updates are checked against existing flows to reduce reintroduced issues.', tone: 'purple' },
        { id: 'release', kicker: 'Production', title: 'Release Readiness', body: 'Deployment configuration, monitoring and handoff requirements are reviewed before release.', tone: 'gold' }
      ]
    },
    support: {
      eyebrow: 'After Launch',
      title: 'Support Is Part of the Product Lifecycle',
      lead: 'The release is a milestone, not the end of the product. Ongoing work can be structured around stability, optimization and planned improvements.',
      items: [
        { id: 'updates', title: 'Product Updates', body: 'Planned feature changes and iterative improvements.' },
        { id: 'optimization', title: 'Optimization', body: 'Performance, responsiveness and workflow refinements.' },
        { id: 'maintenance', title: 'Maintenance', body: 'Issue resolution, compatibility updates and operational support.' },
        { id: 'continuous', title: 'Continuous Improvement', body: 'Roadmap-based enhancements informed by product priorities.' }
      ],
      cta: {
        eyebrow: 'Plan the Delivery',
        title: 'Start With a Clear Scope and Milestone Path',
        body: 'Share the product goal, current stage and target platforms to define the next practical step.',
        button: 'Start a Project'
      }
    }
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
        lines: ['contact@manavtechlabs.com']
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
      projectTypes: ['Mobile App Development', 'Web Platform', 'Game Development', 'Gaming Technology', 'AI & Automation', 'UI/UX Design', 'CRM / ERP Development', 'Cloud & DevOps', 'Other'],
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


  contactEditorial: {
    brief: {
      eyebrow: 'Project Brief',
      title: 'Tell Us What You Are Building',
      lead: 'A concise brief helps the team understand the product goal, current stage and most important delivery constraints.',
      paragraphs: [
        'You do not need a complete specification before contacting us. A product idea, an existing build or a defined backlog can all be used as the starting point for discovery.',
        'The most useful information is the target user, required platforms, core features, current product stage and the result you want the next milestone to achieve.'
      ],
      points: [
        { title: 'Product Goal', body: 'Describe the user problem, business objective or gameplay experience.' },
        { title: 'Platforms & Features', body: 'List the required platforms, integrations and highest-priority features.' },
        { title: 'Current Stage', body: 'Clarify whether the work starts from an idea, design, prototype or existing product.' },
        { title: 'Delivery Priorities', body: 'Share target timing, dependencies and any important technical constraints.' }
      ]
    },
    nextSteps: {
      eyebrow: 'What Happens Next',
      title: 'A Clear Path From Inquiry to Scope',
      lead: 'The first steps focus on understanding the requirement and defining a practical delivery structure.',
      items: [
        { id: 'review', number: '01', title: 'Requirement Review', body: 'We review the product goal, platforms, features and current stage.' },
        { id: 'discovery', number: '02', title: 'Discovery Discussion', body: 'The team clarifies users, workflows, technical needs and delivery risks.' },
        { id: 'scope', number: '03', title: 'Scope & Milestones', body: 'You receive a proposed scope, milestone path and suitable engagement option.' }
      ]
    },
    engagement: {
      eyebrow: 'Ways to Work With Us',
      title: 'Engagement Models for Different Delivery Needs',
      lead: 'The structure can match a defined project, an existing team or an ongoing product roadmap.',
      items: [
        { id: 'fixed', kicker: 'Defined Scope', title: 'Fixed-Cost Project', body: 'Milestone-based delivery for a clearly defined scope, timeline and acceptance criteria.', tone: 'blue' },
        { id: 'dedicated', kicker: 'Focused Capacity', title: 'Dedicated Developers', body: 'Dedicated engineering capacity for backlogs, integrations, improvements and ongoing releases.', tone: 'purple' },
        { id: 'retainer', kicker: 'Long-Term Support', title: 'Team Augmentation & Retainers', body: 'Flexible support for continuous product development, maintenance and roadmap execution.', tone: 'cyan' }
      ]
    },
    confidentiality: {
      eyebrow: 'Confidentiality & Trust',
      title: 'Project Information Is Handled Responsibly',
      lead: 'Clear communication, protected information and accountable product execution are built into the delivery approach.',
      panelTitle: 'NDA-Aware Collaboration',
      body: 'Project requirements, source code, client data and commercial information are handled according to the agreed engagement terms. Public case-study details and client references are used only with appropriate approval.',
      points: [
        'Confidential project details can be reviewed under NDA',
        'Scope, milestones and responsibilities remain visible',
        'Client information is used only for the agreed delivery work',
        'Handoff and support terms are defined with the engagement'
      ]
    },
    cta: {
      eyebrow: 'Start the Conversation',
      title: 'Share the Product Goal and Next Milestone',
      body: 'Use the project form above to send the core requirement. The team can then review the most practical next step.',
      button: 'Go to Project Form'
    }
  },

  footer: {
    description: 'A technology development partner for multiplayer games, mobile applications, web platforms, AI automation and scalable digital products.',
    groups: [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Our Process', href: '/process' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Contact', href: '/contact' }
        ]
      },
      {
        title: 'Capabilities',
        links: [
          { label: 'Services', href: '/services' },
          { label: 'Mobile Apps', href: '/mobile-apps' },
          { label: 'iGaming Solutions', href: '/igaming' },
          { label: 'Software Products', href: '/products' }
        ]
      },
      {
        title: 'Selected Work',
        links: [
          { label: 'Trinkoo', href: '/portfolio#case-study-trinkoo' },
          { label: 'Pavan', href: '/portfolio#case-study-pavan' },
          { label: "Liar's Dice", href: '/portfolio#case-study-liars-dice' },
          { label: '3P Malaysian Mahjong', href: '/portfolio#case-study-malaysian-mahjong' }
        ]
      }
    ],
    trust: [
      { value: '100+', label: 'Businesses Supported' },
      { value: '5', label: 'Selected Products' },
      { value: 'iOS + Android', label: 'Platform Coverage' },
      { value: 'Global', label: 'Delivery Reach' }
    ],
    disclaimer: 'Manav Tech Labs provides technology development services. Clients are responsible for compliance with applicable laws, regulations, licensing requirements and platform policies in their target jurisdictions.'
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
