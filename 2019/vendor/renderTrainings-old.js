$(document).ready(function(){

  var oldTrainings = [
    // {
    //   image: "images/reporters/max_klymyshyn.jpg",
    //   label: "images/workshops/Networking_8A.jpg",
    //   name: "Max Klymyshyn",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 8,
    //   duration: '2 h',
    //   price: '<a href="https://goo.gl/forms/pBQHclytewwTNurm2" target="_blanck">Free</a>',
    //   buyLink: 'https://goo.gl/forms/pBQHclytewwTNurm2',
    //   free_class: 'free',
    //   aboutSpeaker:
    //   'Full-stack software engineer for Clojure/ClojureScript/Python/JavaScript-based projects with 15+ years experience in technical' +
    //   ' team leadership and management of distributed teams. Max interested in distributed systems, data replication and consistency algorithms, ' +
    //   'information science, functional languages and modern mobile and front-end development. Delivered more than 50 talks within past 5 years ' +
    //   'about developments and trends in Python, JavaScript, Databases, Dev Processes, Testing Processes and Project Management.',
    //   title: "Build blockchain using CRDT and Merkle Trees [Ru]",
    //   description: "",
    //   topics:[
    //     '<ul>\n' +
    //     '  <li>intro & basic tools installation</li>\n' +
    //     '  <li>blockchain basic implementation</li>\n' +
    //     '  <li>low-level transport</li>\n' +
    //     '  <li>high-level transport & CRDT payload definition</li>\n' +
    //     '  <li>adding distributed properties</li>\n' +
    //     '</ul>'
    //   ],
    //   purpose:
    //   '<p>People who developing modern client-side apps with JavaScript should know about distributed' +
    //   ' data structures like CRDT.</p>',
    //   tools: '<p>Laptop, internet, git, node.js installed on laptop</p>',
    //   target: '<p>Middle+ front-end developers</p>',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.linkedin.com/in/klymyshyn',
    //       fatype: 'linkedin'
    //     },
    //     {
    //       link: 'https://twitter.com/maxmaxmaxmax',
    //       fatype: 'twitter'
    //     },
    //   ]
    // },
    // {
    //   id: 1,
    //   image: "images/reporters/nik_graf.jpg",
    //   name: "Nik Graf",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 'July 6',
    //   duration: '5-6 h',
    //   price: '',
    //   aboutSpeaker:
    //   'Nik is a software developer and passionate about good UX, functional programming and dev tools. ' +
    //   'He previously worked for Serverless Inc., the company behind Serverless Framework.' +
    //   ' He co-created several popular open source projects like DraftJS Plugins & Polished. In his spare-time he enjoys cycling & skiing.',
    //   title: "Get Started with Reason & ReasonReact [En]",
    //   description:
    //   "<p>Reason is a new functional, JavaScript-like language with a strong type-system and first level React bindings initiated by Jordan Walke, " +
    //   "the creator of React.</p>" +
    //   "<p>In this workshop you will first learn about the syntax and semantics of the programming language Reason. Further we learn about powerful " +
    //   "concepts like pattern matching and Variants. We are going to refactoring a React component written in JavaScript to Reason.</p>",
    //   topics:[
    //     '-'
    //   ],
    //   purpose: '',
    //   tools: '<p>Attendees should be experienced in JavaScript and have basic understanding of React.</p>',
    //   target: '<p>Everyone interested in functional programming.</p>',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://twitter.com/nikgraf',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://github.com/nikgraf',
    //       fatype: 'github'
    //     },
    //   ]
    // },
    // {
    //   id: 2,
    //   image: "images/reporters/david_mullerchen.jpg",
    //   name: "David Müllerchen",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 'July 6',
    //   duration: '6-7 h',
    //   price: '',
    //   aboutSpeaker:
    //     'David is an Angular consultant and trainer. He’s also a team member and trainer at ' +
    //     'AngularJS.DE, the Angular platform in DACH. His passion is sharing knowledge, ' +
    //     'speaking and teaching at meetups and conferences. David’s keeping his own blog ' +
    //     '(webdave.de). During leisure time David jumps around with his 3 boys and his wife. He’s ' +
    //     'also an organizer of the Hamburg AngularJS Meetup and a Google Developer Expert ' +
    //     '(GDE) in Angular.',
    //   title: "Angular 101 [En]",
    //   description:
    //   "<p>Angular is a client-side JavaScript framework used world-wide to create web " +
    //   "applications. The framework gives clear structures and supports u. a. Modularization " +
    //   "and lazy loading. It is developed by a team at Google and is aimed at developers of " +
    //   "complex enterprise applications. Since the release of version 2, the framework is no " +
    //   "longer AngularJS but Angular. Curious? then come to my workshop and learn the basic " +
    //   "principles of Angular.</p>",
    //   topics:[
    //     '<ul>' +
    //     '<li>NgModules</li>' +
    //     '<li>Components</li>' +
    //     '<li>Routing</li>' +
    //     '<li>Submodules</li>' +
    //     '<li>Feature Modules</li>' +
    //     '<li>Services</li>' +
    //     '<li>Forms (Template driven / reactive)</li>' +
    //     '<li>Pipe</li>' +
    //     '<li>Directive</li>' +
    //     '</ul>'
    //   ],
    //   purpose: '<p>If you want to work with the latest web technologies, you must not miss this workshop.</p>',
    //   tools: '<p>All you need is your laptop and curiosity.</p>',
    //   target: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/web-dave',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/webdave_de',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://webdave.de/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
     // {
    //   id: 4,
    //   image: "images/reporters/alex_renandez.jpeg",
    //   name: "Alex Fernandez",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 'July 6',
    //   duration: '2-3 h',
    //   price: '',
    //   aboutSpeaker:
    //     'Alex Fernández is a developer with more than 20 years of experience in the software industry.' +
    //     ' Shameless tinkerer since forever, he likes building more than adapting and adapting more than configuring. During ' +
    //     'the course of his career he has gone from caring about seconds to worrying about milliseconds,' +
    //     ' and then to squeezing those last microseconds; which honestly feels like an improvement. ' +
    //     'My main hobby is talking to my 9 year old daughter, who is a really interesting little person!',
    //   title: "Building Efficient Software: Let's Improve Our Performance! [En]",
    //   description:
    //     "<p>Software is usually built without specific constraints in mind. Then it is deployed to production, and in certain situations" +
    //     " it may fail to meet expectations, consume too many resources – or break completely. As a developer you are likely to meet performance " +
    //     "issues at some point. In this workshop we will see a few techniques that will be useful in these situations: finding bottlenecks," +
    //     " running load tests, profiling and writing benchmarks. We will work on practical examples using JavaScript and Node.js." +
    //     " Most of the techniques can be used in other environments too!</p>",
    //   topics:[
    //     '<ul>\n' +
    //     '  <li>15 min: Review some theory about efficient software.</li>\n' +
    //     '  <li>45 min: load testing. Practical session 1.</li>\n' +
    //     '  <li>45 min: profiling. Practical session 2</li>\n' +
    //     '  <li>45 min: micro-benchmarks. Practical session 3.</li>\n' +
    //     '</ul>'
    //   ],
    //   purpose:
    //     '<p>As your career progresses, there inevitably comes a dreaded day when a customer tells' +
    //     'you “Your software is slow!” At that point you need to be able to find hotspots and' +
    //     'optimize them.</p>',
    //   tools:
    //     '<p>A laptop with Node.js (v8 or later) installed. A few npm packages will be downloaded' +
    //     'and used.</p>',
    //   target:
    //     '<p>The workshop is useful for developers of websites with sizeable traffic and software' +
    //     'with specific performance constraints as well as for fans of optimization.</p>',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/alexfernandez/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/pinchito',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'http://pinchito.es/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
     /*{
      id: 5,
      image: "images/reporters/natalia_tepluhina.jpg",
      name: "Natalia Tepluhina",
      position: "Frontend Developer" ,
      company: "Scalac (Gdansk, Poland)",
      place: '',
      date: 'JULY 6, JULY 8 (2 SESSIONS)',
      duration: '1.5 h',
      price: '',
      aboutSpeaker: '<p> Natalia Tepluhina is a Frontend Developer based in Kyiv, Ukraine. She works at Scalac, ' +
        '    where she builds single-page applications using different JavaScript frameworks (mostly ' +
        '  Angular &amp; VueJS). Natalia is a constant learner and loves to share knowledge with ' +
        '    other people. She is a regular participant of local VueJS meetups and is an occasional ' +
        '  speaker at Scalac internal frontend development presentations. In her spare time ' +
        '  Natalia enjoys playing videogames and doing some sports.</p>',
      title: "Build A Simple Pet Fetching Web App using VueJS [Ru]",
      description:
        "<p>During the workshop we will create a Vue application from scratch using the " +
        "  Codesandbox Vue template. Together we’ll apply Vuetify (Vue Material Design-based " +
        "  CSS framework) and Axios for API calls. The workshop will include Vue core concepts, " +
        "    component basics (props &amp; event emitters) and REST API calls with Axios. There will " +
        "  be some &#39;challenge chapters&#39; for the persons who finished workshop content faster than " +
        "  planned.</p>",
      topics:[],
      purpose: '<p>It&#39;s a free workshop for women willing to get familiar with VueJS. It&#39;s very basic and will ' +
        '  give attendees the knowledge of the core framework concepts.</p>',
      tools: 'You will use Codesandbox so no need in any kind of IDE, only your laptops.',
      target:'Any women who want to start learning VueJS.',
      buyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeedcTlwvHgz9rv5DbfC7rHbNrs-0s42n7J2p-X-WUJ8WZvqQ/viewform',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/N_Tepluhina',
          fatype: 'twitter'
        }
      ]
    },*/




    // {
    //   id: 9,
    //   image: "images/reporters/alex_renandez.jpeg",
    //   name: "Alex Fernandez",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 'July 8',
    //   duration: '2-3 h',
    //   price: '',
    //   aboutSpeaker:
    //     'Alex Fernández is a developer with more than 20 years of experience in the software industry.' +
    //     ' Shameless tinkerer since forever, he likes building more than adapting and adapting more than configuring. During ' +
    //     'the course of his career he has gone from caring about seconds to worrying about milliseconds,' +
    //     ' and then to squeezing those last microseconds; which honestly feels like an improvement. ' +
    //     'My main hobby is talking to my 9 year old daughter, who is a really interesting little person!',
    //   title: "Building Efficient Software: Let's Improve Our Performance! [En]",
    //   description:
    //   "<p>Software is usually built without specific constraints in mind. Then it is deployed to production, and in certain situations" +
    //   " it may fail to meet expectations, consume too many resources – or break completely. As a developer you are likely to meet performance " +
    //   "issues at some point. In this workshop we will see a few techniques that will be useful in these situations: finding bottlenecks," +
    //   " running load tests, profiling and writing benchmarks. We will work on practical examples using JavaScript and Node.js." +
    //   " Most of the techniques can be used in other environments too!</p>",
    //   topics:[
    //     '<ul>\n' +
    //     '  <li>15 min: Review some theory about efficient software.</li>\n' +
    //     '  <li>45 min: load testing. Practical session 1.</li>\n' +
    //     '  <li>45 min: profiling. Practical session 2</li>\n' +
    //     '  <li>45 min: micro-benchmarks. Practical session 3.</li>\n' +
    //     '</ul>'
    //   ],
    //   purpose:
    //   '<p>As your career progresses, there inevitably comes a dreaded day when a customer tells' +
    //   'you “Your software is slow!” At that point you need to be able to find hotspots and' +
    //   'optimize them.</p>',
    //   tools:
    //   '<p>A laptop with Node.js (v8 or later) installed. A few npm packages will be downloaded' +
    //   'and used.</p>',
    //   target:
    //   '<p>The workshop is useful for developers of websites with sizeable traffic and software' +
    //   'with specific performance constraints as well as for fans of optimization.</p>',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/alexfernandez/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/pinchito',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'http://pinchito.es/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    // {
    //   id: 7,
    //   image: "images/reporters/natalia_tepluhina.jpg",
    //   name: "Natalia Tepluhina",
    //   position: "Frontend Developer" ,
    //   company: "Scalac (Gdansk, Poland)",
    //   place: '',
    //   date: 'JULY 6, JULY 8 (2 SESSIONS)',
    //   duration: '1.5 h',
    //   price: '',
    //   aboutSpeaker: '<p> Natalia Tepluhina is a Frontend Developer based in Kyiv, Ukraine. She works at Scalac, ' +
    //   '    where she builds single-page applications using different JavaScript frameworks (mostly ' +
    //   '  Angular &amp; VueJS). Natalia is a constant learner and loves to share knowledge with ' +
    //   '    other people. She is a regular participant of local VueJS meetups and is an occasional ' +
    //   '  speaker at Scalac internal frontend development presentations. In her spare time ' +
    //   '  Natalia enjoys playing videogames and doing some sports.</p>',
    //   title: "Build A Simple Pet Fetching Web App using VueJS [Ru]",
    //   description:
    //   "<p>During the workshop we will create a Vue application from scratch using the " +
    //   "  Codesandbox Vue template. Together we’ll apply Vuetify (Vue Material Design-based " +
    //   "  CSS framework) and Axios for API calls. The workshop will include Vue core concepts, " +
    //   "    component basics (props &amp; event emitters) and REST API calls with Axios. There will " +
    //   "  be some &#39;challenge chapters&#39; for the persons who finished workshop content faster than " +
    //   "  planned.</p>",
    //   topics:[],
    //   purpose: '<p>It&#39;s a free workshop for women willing to get familiar with VueJS. It&#39;s very basic and will ' +
    //   '  give attendees the knowledge of the core framework concepts.</p>',
    //   tools: 'You will use Codesandbox so no need in any kind of IDE, only your laptops.',
    //   target:'Any women who want to start learning VueJS.',
    //   buyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeedcTlwvHgz9rv5DbfC7rHbNrs-0s42n7J2p-X-WUJ8WZvqQ/viewform',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://twitter.com/N_Tepluhina',
    //       fatype: 'twitter'
    //     }
    //   ]
    // },

    // {
    //   id: 10,
    //   image: "images/reporters/trishul_goel.png",
    //   name: "Trishul Goel",
    //   position: "Frontend Developer" ,
    //   company: "IOMEDIA & Mozilla Representative",
    //   place: '',
    //   date: 'July 8',
    //   duration: '3 h',
    //   price: '',
    //   aboutSpeaker: "<p>Trishul is a professional frontend developer; writes React code for living and volunteers" +
    //     "  for Mozilla to justify his existence. He is an expert in developing browser extensions." +
    //     "    You may know him for his Measure-it extension with 15K+ users.\n" +
    //     "    He also creates YouTube tutorial videos, to help developers understand and get started" +
    //     "  with various Webextension APIs.</p>",
    //   title: "Unleash power of browsers with extensions [En]",
    //   description: "<p>Browsers are our gateway to the Internet. Therefore, they should be the most" +
    //     "  personalized/customized/adaptive things. During this workshop we will get started with" +
    //     "    creating quick browser extension and then proceed with talking about several web-" +
    //     "  extensions API, mainly ‘tabs’ API and ‘webRequest’ APIs. Following that we’ll discover" +
    //     "  how to port this extension across Chrome/ Firefox/ Safari.</p>",
    //   topics: ['<ul>\n' +
    //     "<li>Explaining webRequest and tabs APIs in details</li>"+
    //     "<li>Collecting quick ideas for browser extensions</li>"+
    //     "<li>Getting started with creating an extension with some of the collected ideas</li>"+
    //     "<li>By the end of the workshop we will hopefully have a few add-ons published to the Firefox/ Chrome store.</li>"+
    //     "</ul>"],
    //   purpose: '<p>Have you ever had a thought like “why doesn’t my browser do ‘this’ for me”? ' +
    //   'Then what about making your browser do ‘that’? This workshop is all about how to make maximum use ' +
    //   'of your browser by creating extensions.</p>',
    //   tools: '',
    //   target: 'You do not require any tools or equipment other than your laptop. Before this workshop ' +
    //   'it’d be really nice if you gave a thought about what you want your browser to do ‘extra’.',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.facebook.com/tsl143',
    //       fatype: 'facebook'
    //     },
    //     {
    //       link: 'https://twitter.com/trishulgoel',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://www.linkedin.com/in/trishul/',
    //       fatype: 'linkedin-square'
    //     },
    //     {
    //       link: 'http://github.com/tsl143/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'http://trishulgoel.com/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    // {
    //   id: 14,
    //   image: "images/logo.png",
    //   name: "Sara Vieira & Katarzyna Jastrzębska-Łachacz",
    //   position: "" ,
    //   company: "",
    //   place: '',
    //   date: 'July 8',
    //   duration: '6-7 h',
    //   price: '',
    //   aboutSpeaker:
    //     "<p>Sara Vieira is a frontend developer at a consulting company, so she loves making things and teaching people all about the amazing Internet. Sara likes football and used to play as a goalkeeper for many years! Also, she knows how to play drums and jokes that 'that's a reason of her terrible earing'</p>"+
    //     "<p>Katarzyna Jastrzębska-Łachacz is a frontend developer with over 6 years of experience in various frameworks and libraries (Polymer, Ember, Backbone). She really likes to work with Node.js, React, Redux, GraphQL and Apollo. Katarzyna loves horse riding, Fincher movies and King books and draws inspiration from two closest people: her daughter and mom.</p>",
    //   title: "Ultimate styling workshop for react developers [En]",
    //   description:
    //     "During the workshop attendees will learn how to solve styling for their React Application. We will start with applying vanilla CSS to the app with BEM architecture. Then we’ll proceed with applying preprocessors like Sass to the app and will go through setup with Webpack. Together we’ll use CSSModules library instead of BEM and try to compare them both. Finally, the last module of the workshop will be ‘CSS-in-JS’. It’ll be supplemented with the styled-components example.",
    //   topics:[
    //     "<ul>"+
    //       "<li>Application of vanilla CSS to the app with BEM</li>"+
    //       "<li>Design of architecture for a small application</li>"+
    //       "<li>Application of preprocessors to the app</li>"+
    //       "<li>Creation of a theme with color and size variables using Sass</li>"+
    //       "<li>Creation of components which don’t share any styles using CSSModules</li>"+
    //     "</ul>"
    //   ],
    //   purpose: "Sara and Katarzyna will show you that CSS and styling react application can be painless. There are various options to build CSS architecture around an application. You will see possibilities of all these options and compare them in practice.",
    //   tools: "Computer with chosen IDE, node.js installed, internet. Basic React knowledge is required.",
    //   target: '',
    //   socialsRendered: '',
    //   socials: []
    // },
  ];

  var trainings = [
    {
      image: "images/reporters/ivan_jovanovich.png",
      label: "images/workshops/Networking_2.jpg",
      name: "Ivan Jovanovic",
      position: "Senior Software Engineer" ,
      company: "nearForm",
      place: '',
      date: 6,
      duration: '5-6 h',
      price: '4400 UAH',
      aboutSpeaker:
        'Ivan Jovanovic is the senior software engineer, team lead, speaker and mentor. His' +
        'focus is on building scalable JS applications and experimenting with new languages and' +
        'frameworks. He is into functional and reactive programming. Leading teams and' +
        'mentoring junior developers is his everyday duty. He loves to share knowledge and to' +
        'keep his tech blog. In his free time Ivan reads a lot and plays basketball.',
      title: "Testing JavaScript applications 101 [En]",
      description:
      "<p>Testing JavaScript applications 101 workshop will show you how to use modern testing" +
      "tools to test JS full-stack applications. It will cover frontend and backend side (React" +
      "and NodeJS) and explain what the best practices for testing are. We will go through" +
      "tools like Jest, Mocha, Jasmine, Cypress etc. Since React is the most popular" +
      "framework, frontend tests will be testing React apps.</p>",
      topics:[
        '<ul>' +
        '  <li>Introduction to testing in general</li>' +
        '  <li>Tools for JS testing</li>' +
        '  <li>Writing your first test</li>' +
        '  <li>Examples of the apps that we will test</li>' +
        '  <li>Hands-on testing Node.js and React app</li>' +
        '  <li>TDD approach</li>' +
        '  <li>Q&amp;A session</li>' +
        '</ul>'
      ],
      purpose:
      '<p>After this workshop you will be able to test efficiently your JS applications, from UI' +
      'frontend side to backend side. You will understand what the best practices and best' +
      'tools for building testing environment are. You&#39;ll go through the basics of tests, see' +
      'some examples, then move to modern JS tools like Tap, Jest, Mocha, Jasmine, Sinon,' +
      'Chai and Cypress and try all of them.</p>',
      tools:
      '<p>An attendee should know JS and have some experience of work with it (built at least 2-3' +
      'apps in the past using React or NodeJS). You only need a computer, anything with a' +
      'monitor and keyboard will work.</p>',
      target:
      '<p>This workshop is for everyone who wants to increase their knowledge in JavaScript' +
      'application testing. It&#39;s perfect for beginners, but also for senior developers who want to' +
      'see what the latest best practices are and how to test their code in the easiest and the' +
      'best way.</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/ivanjov',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/ivanjov96',
          fatype: 'twitter'
        },
        {
          link: 'https://ivanjov.com',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/program-committee/gerard-sans.jpg",
      label: "images/workshops/Networking_4.jpg",
      name: "Gerard Sans",
      position: "Google Developer Expert" ,
      company: "",
      place: '',
      date: 6,
      duration: '6-7 h',
      price: '4800 UAH',
      aboutSpeaker:
        'Gerard is very excited about the future of the Web and JavaScript. Always happy Computer Science ' +
        'Engineer and humble Google Developer Expert. He loves to share his learnings by giving talks, trainings and writing about cool technologies.' +
        ' He loves running AngularZone and GraphQL London, mentoring students and giving back to the community.',
      title: "Fullstack GraphQL using React with Gerard Sans [En]",
      description:
        "<p>In this full day training we will cover everything you need to successfully adopt GraphQL" +
        "across your full-stack from client to backend including tooling and best practices" +
        "learned from top company engineers (Twitter, TopTable and graphcool). You will learn" +
        "how to build and design a GraphQL Server, find out the differences between Relay" +
        "Modern and Apollo Clients and introduce GraphQL query syntax including queries," +
        "mutations, alias, fragments and directives. We’ll review how client and server" +
        "communicate, what tooling is available to track usage and improve performance, how to" +
        "add authorization and authentication and many more.</p>",
      topics:[
        '<ul>\n' +
        '  <li>GraphQL Introduction</li>\n' +
        '  <li>Building a GraphQL Server</li>\n' +
        '  <li>Designing a GraphQL Schema</li>\n' +
        '  <li>Differences between Relay Modern and Apollo Client</li>\n' +
        '  <li>Building a GraphQL Client using queries and mutations</li>\n' +
        '  <li>Common practices: error handling, polling and pagination</li>\n' +
        '  <li>Adding authentication and authorisation</li>\n' +
        '  <li>Adding real-time with subscriptions</li>\n' +
        '</ul>\n'
      ],
      purpose: '',
      tools:
        '<p>Level: Intermediate Basic understanding of React and JavaScript.' +
        'Bring your own laptop, fully charged, and a rested mind.</p>',
      target:
        '<p>You already know or are curious about GraphQL. You are also interested in learning best' +
        'practices and less known areas.</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'http://github.com/gsans',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/4508433/gerard-sans',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://twitter.com/gerardsans',
          fatype: 'twitter'
        },
        {
          link: ' https://medium.com/@gerard.sans',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/logo.png",
      label: "images/workshops/Networking_3b.jpg",
      name: "Timur Shemsedinov, Aleksey Orlenko & Alex Golikov",
      position: "Architect/Lecturer, Senior software engineer & Senior software engineer" ,
      company: "Metarhia, MIA, KPI & vi",
      place: '',
      date: 6,
      duration: '6 h',
      price: '400 UAH',
      aboutSpeaker: '',
      title: "Software Engendering Fundamentals for JavaScript Developers [Ru]",
      description:
        "<p>Selected topics from the software engineering lectures with JavaScript and Node.js examples. " +
        "Includes fundamental concepts and design patterns of functional, reactive, imperative, declarative," +
        " asynchronous, prototype, object-oriented, and metaprogramming, data structures and algorithms, useful" +
        " software abstractions and code examples, best parts and demo projects with modern technologies usage." +
        " Lectures includes over 500 code examples collected after years of practice in different languages ​​and " +
        "platforms, combined and implemented using the newest features and syntax of JavaScript. The course includes " +
        "75 lectures by Timur Shemsedinov from the Faculty of Computer Science and Computer Science of the " +
        "Kiev Polytechnic Institute.</p>",
      topics:[
        '<ul>'+
          '<li>Basic concepts: contexts and closures, mixins, wrappers, decorators, memoization, chaining, Factory and ' +
              'Pool, Symbol, Proxy, Map and Set, EventEmitter, Iterator, Typed Arrays, indices and caching</li>' +
          '<li>Data Structures: Stack, Queue, Decks, Lists: singly, doubly and circular linked list implemented ' +
            'on classes, prototypes, arrays and closures, other linked structures, ArrayList, Buffer, binary trees ' +
            'and N-linked trees, balancing and searching, graphs</li>' +
          '<li>Asynchronous programming: callbacks, parallel and sequential collections iteration, control flow, ' +
            'event flow and data flow approaches, generators, Promise, events, asynchronous function composition, Data and Key' +
            ' collectors, Async adapters and utilities</li>' +
          '<li>Functional programming: higher order functions, composition, curry, partial application, functors, function ' +
            'objects, monads, functional inheritance, functional code style comparison and optimizations</li>' +
          '<li>Structure and architecture: modules, layers, isolation and binding, web services, inter process communication,' +
            ' bus, broker, pipeline, Inversion of Control and Dependency Injection, metamprogramming and dynamic binding</li>' +
          '<li>Technologies: websockets, scaling, clustering and balancing, sticky, continuous integration, live code reload ' +
            'and updating application on the fly, testing, deployment, garbage collection, memory leaks, object-relational mapping</li>'+
        '</ul>'
      ],
      purpose:
        '<p>To get overview of all aspects and techniques in software engendering because it usually lays behind frameworks and practical skills, but generalization and complex view allows to find better and elegant solutions in most cases and makes code structural, reusable and compatible</p>',
      tools: '',
      target:
        '<p>I believe developer of any level will find something interesting in proposed topics</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/tshemsedinov',
          fatype: 'github'
        },
        {
          link: 'https://www.linkedin.com/in/shemsedinov/',
          fatype: 'linkedin'
        },
        {
          link: 'https://habr.com/users/marcusaurelius/posts/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/migutsky.jpg",
      label: "images/workshops/Networking_1.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin and Founder of Metadevelopment.io",
      place: '',
      date: 6,
      duration: '3 h',
      price: '1200 UAH',
      aboutSpeaker:
        "Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and a" +
        "Founder of Metadevelopment.io. He is originally from Belarus, lived in Odessa, Ukraine" +
        "and now resides in Berlin, Germany. Alexey has 8 years of professional experience" +
        "building user-facing web apps and services for companies like Coca-Cola, Wolters" +
        "Kluwer, HP, and Microsoft. He worked in startups, outsource and product companies," +
        "cofounded 3 startups of his own and mentored personally more than 30 professional" +
        "developers. In his spare time, Alexey is building a mentoring network for professional" +
        "software developers (mtdv.io) to help people build lifestyle and career of their dreams.",
      title: "Growing your career as software engineer [Ru]",
      description:
      "<p>Get an essential set of skills to control your career!<br>" +
      "After the intense training, you will get basic skills to:</p>" +
      "<ul>" +
      "  <li>Position yourself better on the market</li>" +
      "  <li>Get more money for what you are already doing</li>" +
      "  <li>Get \"unstuck\" in your career situation</li>" +
      "  <li>Find better, more interesting projects, which fit you best</li>" +
      "  <li>Find and prioritize opportunities for your personal and professional development</li>" +
      "  <li>Build a professional network and career capital</li>" +
      "  <li>Efficiently grow your career without sacrificing other life aspects</li>" +
      "</ul>",
      topics:[
        '<ul>\n' +
        '  <li><strong>Creating Value</strong>\n' +
        '    <ul>\n' +
        '     <li>How to figure out what Value does a software developer creates and why he/she gets money</li>\n' +
        '     <li>What\'s the difference between programmer/developer/engineer and junior/proficient/senior specialist</li>\n' +
        '     <li>Why you should treat your career as a business</li>\n' +
        '     <li>How does your income relate to the Value you create</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Market Intelligence</strong>\n' +
        '    <ul>\n' +
        '      <li>What should you know about your market?</li>\n' +
        '      <li>How to research employment opportunities</li>\n' +
        '      <li>Role of Networking and Social Capital</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Positioning & Resume Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Your Personal Pitch and why it is important</li>\n' +
        '      <li>How to structure a great Resume</li>\n' +
        '      <li>Most common mistakes people make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Interviewing Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Structured Interviews for cultural fit</li>\n' +
        '      <li>Interview as a selling opportunity</li>\n' +
        '      <li>Why it\'s important to ask questions</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Salary Negotiations</strong>\n' +
        '    <ul>\n' +
        '      <li>Basics of salary negotiation</li>\n' +
        '      <li>The power of the information</li>\n' +
        '      <li>Mistakes you should never make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>'
      ],
      purpose: '',
      tools: '',
      target: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://facebook.com/alex.migutsky',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/mr-mig',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/mr_mig_by',
          fatype: 'twitter'
        },
        {
          link: 'https://mtdv.io',
          fatype: 'link'
        },
      ]
    },

    // July 8

    {
      image: "images/reporters/nik_graf.jpg",
      label: "images/workshops/Networking_6.jpg",
      name: "Nik Graf",
      position: "" ,
      company: "",
      place: '',
      date: 8,
      duration: '6-7 h',
      price: '3400 UAH',
      aboutSpeaker:
        "Nik is a software developer passionate about good UX, functional programming and dev" +
        "tools. Previously he worked for Serverless Inc., the company behind Serverless" +
        "Framework. He’s co-created several popular open source projects like DraftJS Plugins &amp;" +
        "Polished. In his spare time Nik enjoys cycling &amp; skiing.",
      title: "Build Serverless Node.js Applications on AWS [En]",
      description:
        "<p>The core of serverless architectures is auto-scaling systems and a pay-per- execution" +
        "pricing. This allows developers to reduce significantly operational cost and complexity" +
        "by outsourcing infrastructure management to cloud providers and third-party services." +
        "Teams can focus on customers and improve their applications instead of managing" +
        "servers. During this workshop you will learn how to build and deploy scaleable," +
        "production ready and low maintenance applications using Node.js. We are going to" +
        "explore and leverage AWS services like Lambda, API Gateway, DynamoDB, Kinesis, S3.</p>",
      topics:[
        '<ul>' +
        '<li>what is AWS Lambda</li>' +
        '<li>how to deploy ‘lambda’ function for the first time</li>' +
        '<li>how to deploy ‘http’ function for the first time</li>' +
        '<li>how to make connection between app and DynamoDB</li>' +
        '<li>how to implement file upload in DynamoDB</li>' +
        '</ul>'
      ],
      purpose: '',
      tools:
      '<p>For this workshop you need a laptop with at least Node 8 installed and should have an' +
      'AWS (Amazon Web Services) account with the permission to deploy. You should have' +
      'some basic knowledge about JavaScript as well. Backend experience is not required.</p>',
      target:
      '<p>Everyone interested in deploying their own low maintenance, auto-scaling, pay-per-' +
      'execution backend. This is useful for both: backend and frontend developers.</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/nikgraf',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/nikgraf',
          fatype: 'github'
        },
      ]
    },
    {
      image: "images/logo.png",
      name: "Timur Shemsedinov, Aleksey Orlenko & Alex Golikov",
      label: "images/workshops/Networking_3b.jpg",
      position: "" ,
      company: "",
      place: '',
      date: 8,
      duration: '6 h',
      price: '400 UAH',
      aboutSpeaker: '',
      title: "Software Engendering Fundamentals for JavaScript Developers [Ru]",
      description:
      "<p>Selected topics from the software engineering lectures with JavaScript and Node.js examples. " +
      "Includes fundamental concepts and design patterns of functional, reactive, imperative, declarative," +
      " asynchronous, prototype, object-oriented, and metaprogramming, data structures and algorithms, useful" +
      " software abstractions and code examples, best parts and demo projects with modern technologies usage." +
      " Lectures includes over 500 code examples collected after years of practice in different languages ​​and " +
      "platforms, combined and implemented using the newest features and syntax of JavaScript. The course includes " +
      "75 lectures by Timur Shemsedinov from the Faculty of Computer Science and Computer Science of the " +
      "Kiev Polytechnic Institute.</p>",
      topics:[
        '<ul>'+
        '<li>Basic concepts: contexts and closures, mixins, wrappers, decorators, memoization, chaining, Factory and ' +
        'Pool, Symbol, Proxy, Map and Set, EventEmitter, Iterator, Typed Arrays, indices and caching</li>' +
        '<li>Data Structures: Stack, Queue, Decks, Lists: singly, doubly and circular linked list implemented ' +
        'on classes, prototypes, arrays and closures, other linked structures, ArrayList, Buffer, binary trees ' +
        'and N-linked trees, balancing and searching, graphs</li>' +
        '<li>Asynchronous programming: callbacks, parallel and sequential collections iteration, control flow, ' +
        'event flow and data flow approaches, generators, Promise, events, asynchronous function composition, Data and Key' +
        ' collectors, Async adapters and utilities</li>' +
        '<li>Functional programming: higher order functions, composition, curry, partial application, functors, function ' +
        'objects, monads, functional inheritance, functional code style comparison and optimizations</li>' +
        '<li>Structure and architecture: modules, layers, isolation and binding, web services, inter process communication,' +
        ' bus, broker, pipeline, Inversion of Control and Dependency Injection, metamprogramming and dynamic binding</li>' +
        '<li>Technologies: websockets, scaling, clustering and balancing, sticky, continuous integration, live code reload ' +
        'and updating application on the fly, testing, deployment, garbage collection, memory leaks, object-relational mapping</li>'+
        '</ul>'
      ],
      purpose:
        '<p>To get overview of all aspects and techniques in software engendering because it usually lays behind frameworks and practical skills, but generalization and complex view allows to find better and elegant solutions in most cases and makes code structural, reusable and compatible</p>',
      tools: '',
      target:
        '<p>I believe developer of any level will find something interesting in proposed topics</p>',
      socialsRendered: '',
      socials: [ ]
    },
    {
      image: "images/logo.png",
      label: "images/workshops/Networking_13.jpg",
      name: "Gleb Dobzhanskiy & Valentine Mezentsev",
      position: "VP of Engeeniirig & NodeJS developer" ,
      company: "Master of Code Global",
      place: '',
      date: 8,
      duration: '2-3 h',
      price: 'Free',
      free_class: 'free',
      aboutSpeaker:
        "<p>Gleb Dobzhanskiy: -I like programming for the fact that I can create things " +
        "that work without my help. New technologies for me are like a quest, at first you " +
        "sit and try to understand them, you dig deeper and deeper and then everything works" +
        " - it's like magic. My last interesting task was working with NLU algorithms. And " +
        "I am a real Apple ambasador))) I wish all the participants cool conferences, memories" +
        " and networking.</p>"+
        "<p>Valentine Mezentsev: -I'm a part of bots development department. We are working " +
        "with Facebook Messenger Bots a lot, but I also have experience with Amazon Alexa and " +
        "Google Home. My hobbies is working with voice assistant platform(Amazon Alexa), " +
        "learn something new, gym and watching football. \n</p>",
      title: "Bot Battle: Google Home vs Alexa. [Ru]",
      description:
        "<p>The battle will be based on a tic-tac-toe game through the interaction of 2 bots " +
        "(Amazon Alexa Skill and Actions on Google), which will be connected to the smart " +
        "Amazon Echo and Google Home speakers.</p>" +
        "<p>During workshop we will not write the algorithm of playing tic-tac-toe, we will " +
        "connect open source libraries that can play tic-tac-toe.</p>" +

        "<p>During workshop we will show and tell the participants how to make a skill for " +
        "Amazon Alexa and Actions on Google, step by step.</p>" +

        "<p>For this we will use:  <br>" +
        "for Amazon Alexa - AWS Lambda, Alexa Skill Kit SDK, NLP - Amazon Lex. <br>" +
        "for Actions on Google - Google Cloud Functions, Actions on Google Client Library," +
        " NLP - Dialogflow.</p>" +

        "<p>As a result, we can start a game in which one of the assistants will start " +
        "the game and say the first move, and the second will accept the voice command " +
        "and make a decision about its actions. And so until one of them wins. During " +
        "the game it would be cool to connect the TV on which the visualization of moves" +
        " will be made and the real battle will be seen.</p>" +

        "<p>Our mentors will be divided into 2 teams and will create a skill for Alexa " +
        "and for Google and talk about the main points of creating bots. After both teams " +
        "tell and show all points - the battle will start!</p>",
      topics:[],
      purpose:
        "Bots and Voice Assistants become more and more popular. It’s good to " +
        "know and understand how they work and created. Serverless is a cheap and " +
        "easy way to try Cloud Computing. We will use NodeJS and Amazon Lambda, " +
        "Google Cloud Function. Ask CLI’s and Google Cloud SDK for a deployment process. " +
        "Also we will use Amazon Echo and Google Home for a demonstration. Partisipant" +
        " needed laptops, AWS&Google account.\t",
      tools: "",
      target:
        'Anyone who interested in Voice Assistants, NLP’s, Serverless Technologies(Amazon' +
        ' Lambda, Google Cloud Functions). This workshop will be useful for developers who' +
        ' want to create Actions on Google or Amazon Alexa Skill. ',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/dobzhanskiy',
          fatype: 'facebook'
        },
        {
          link: 'https://www.facebook.com/profile.php?id=100001637934934',
          fatype: 'facebook'
        },
      ]
    },

        {
      image: "images/reporters/migutsky.jpg",
      label: "images/workshops/Networking_1a.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin and Founder of Metadevelopment.io",
      place: '',
      date: 8,
      duration: '3 h',
      price: '1200 UAH',
      aboutSpeaker:
        "Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and a" +
        "Founder of Metadevelopment.io. He is originally from Belarus, lived in Odessa, Ukraine" +
        "and now resides in Berlin, Germany. Alexey has 8 years of professional experience" +
        "building user-facing web apps and services for companies like Coca-Cola, Wolters" +
        "Kluwer, HP, and Microsoft. He worked in startups, outsource and product companies," +
        "cofounded 3 startups of his own and mentored personally more than 30 professional" +
        "developers. In his spare time, Alexey is building a mentoring network for professional" +
        "software developers (mtdv.io) to help people build lifestyle and career of their dreams.",
      title: "Growing your career as software engineer [Ru]",
      description:
      "<p>Get an essential set of skills to control your career!<br>" +
      "After the intense training, you will get basic skills to:</p>" +
      "<ul>" +
      "  <li>Position yourself better on the market</li>" +
      "  <li>Get more money for what you are already doing</li>" +
      "  <li>Get \"unstuck\" in your career situation</li>" +
      "  <li>Find better, more interesting projects, which fit you best</li>" +
      "  <li>Find and prioritize opportunities for your personal and professional development</li>" +
      "  <li>Build a professional network and career capital</li>" +
      "  <li>Efficiently grow your career without sacrificing other life aspects</li>" +
      "</ul>",
      topics:[
        '<ul>\n' +
        '  <li><strong>Creating Value</strong>\n' +
        '    <ul>\n' +
        '     <li>How to figure out what Value does a software developer creates and why he/she gets money</li>\n' +
        '     <li>What\'s the difference between programmer/developer/engineer and junior/proficient/senior specialist</li>\n' +
        '     <li>Why you should treat your career as a business</li>\n' +
        '     <li>How does your income relate to the Value you create</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Market Intelligence</strong>\n' +
        '    <ul>\n' +
        '      <li>What should you know about your market?</li>\n' +
        '      <li>How to research employment opportunities</li>\n' +
        '      <li>Role of Networking and Social Capital</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Positioning & Resume Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Your Personal Pitch and why it is important</li>\n' +
        '      <li>How to structure a great Resume</li>\n' +
        '      <li>Most common mistakes people make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Interviewing Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Structured Interviews for cultural fit</li>\n' +
        '      <li>Interview as a selling opportunity</li>\n' +
        '      <li>Why it\'s important to ask questions</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Salary Negotiations</strong>\n' +
        '    <ul>\n' +
        '      <li>Basics of salary negotiation</li>\n' +
        '      <li>The power of the information</li>\n' +
        '      <li>Mistakes you should never make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>'
      ],
      purpose: '',
      tools: '',
      target: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://facebook.com/alex.migutsky',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/mr-mig',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/mr_mig_by',
          fatype: 'twitter'
        },
        {
          link: 'https://mtdv.io',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/program-committee/gerard-sans.jpg",
      label: "images/workshops/Networking_14.jpg",
      name: "Gerard Sans",
      position: "Google Developer Expert" ,
      company: "",
      place: '',
      date: 8,
      duration: '3 h',
      price: 'Free',
      free_class: 'free',
      aboutSpeaker:
      'Gerard is very excited about the future of the Web and JavaScript. Always happy Computer Science ' +
      'Engineer and humble Google Developer Expert. He loves to share his learnings by giving talks, trainings and writing about cool technologies.' +
      ' He loves running AngularZone and GraphQL London, mentoring students and giving back to the community.',
      title: "Global Diversity CFP Day Odessa[en]",
      description:
        "<p>On Sunday, July 8th, 2018, we will be running a workshop to encourage and advise speakers and speakers to-be " +
        "to put together your next (or first) talk proposal and share your own perspectives on any subject " +
        "of interest to people in tech.</p>",
      topics:[
        '<p>The workshop will have experienced speakers on hand to:</p>'+
        '<ul>'+
          '<li>give you a warm, inclusive welcome in a safe space (check out our Code of Conduct which all participants must adhere to)</li>'+
          '<li>mentor you with your proposal</li>'+
          '<li>provide speaking advice and share their enthusiasm to get you to the stage!</li>'+
        '</ul>'
      ],
      purpose:
        'These workshops have no specific language, framework or process as a ' +
        'focus. Even if your talk isn’t even related to tech we want to hear from you too! In short, ' +
        'if there is something that you want to shout to the world we\'re here to help you get there' +
        ' regardless of the boundaries of technology or communities.',
      tools: '',
      target: '',
      socialsRendered: '',
      socials: [
        {
          link: 'http://github.com/gsans',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/4508433/gerard-sans',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://twitter.com/gerardsans',
          fatype: 'twitter'
        },
        {
          link: ' https://medium.com/@gerard.sans',
          fatype: 'link'
        },
      ]
    },

  ];


  var trainingBlock =
    '<div class="trainings-slide col-10 col-sm-6 col-lg-4">'+
            '<div class="row h-100">' +
   '           <div data-modal-trigger="#training-modal" data-item-index="__ReplaceWithIndex" class="trainings-slide__item">'+

   '             <div class="trainings-slide__img-wrapper">'+
'                  <img src="${label}" alt="${name}">'+
 '                 <div class="trainings-slide__price ${free_class}">{{html price }}</div>'+
'                </div>'+

'              </div>'+
'            </div>' +
          '</div>';

  $.template("trainingBlockTemplate", trainingBlock);

  var july6_trainings = '',
      july8_trainings = '';

  $.each(trainings, function (i, sp) {
    var item = $.tmpl("trainingBlockTemplate", sp)[0].outerHTML;

    if(sp.date == 6) {
      july6_trainings += item.replace('__ReplaceWithIndex', i);
    } else {
      july8_trainings += item.replace('__ReplaceWithIndex', i);
    }
  });

  $('#jul6_workshops').append(july6_trainings);
  $('#jul8_workshops').append(july8_trainings);


  $(document).on('click', '[data-modal-trigger="#training-modal"]', function() {
    var $trainingInfoBlock = $(this);
    loadSpeakerModal($trainingInfoBlock);
  });

  function loadSpeakerModal($trainingInfoBlock) {
    var $modalBody = $('#training-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid').toggle(false),

      $modalNameElement = $modalBody.find('.speaker__name').toggle(false),
      $modalSpeakerPosition = $modalBody.find('.speaker__position').toggle(false),
      $modalSpeakerCompany = $modalBody.find('.speaker__company').toggle(false),

      $modalPlaceContainer = $modalBody.find('.training__place').toggle(false),
      $modalDateContainer = $modalBody.find('.training__date').toggle(false),
      $modalDurationContainer = $modalBody.find('.training__duration').toggle(false),
      $modalPriceContainer = $modalBody.find('.training__price').toggle(false),

      $modalSpeakerLinks = $modalBody.find('.speaker__link-list').toggle(false),

      $modalTitleContainer = $modalBody.find('.modal-body__workshop-title').toggle(false),
      $modalDescriptionContainer = $modalBody.find('.modal-body__description').toggle(false),
      $modalTopicsContainer = $modalBody.find('.modal-body__topics').toggle(false),

      $modalPurposeContainer = $modalBody.find('.modal-body__purpose').toggle(false),
      $modalToolsContainer = $modalBody.find('.modal-body__tools').toggle(false),
      $modalTargetContainer = $modalBody.find('.modal-body__target').toggle(false),
      $modalSpeakerAboutText = $modalBody.find('.modal-body__about-speaker').toggle(false),
      $modalBuyBtn = $('#workshop-buy'),

      trainingIndex = parseInt($trainingInfoBlock.attr('data-item-index')),
      $prevButton = $modalBody.find('button.prev'),
      $nextButton = $modalBody.find('button.next');

    var trainingData = null,
      BreakException = {},
      prevIndex = null,
      nextIndex = null;

    try {
      trainings.forEach(function(item, i, arr) {
        if(i === trainingIndex) {

          trainingData = item;

          prevIndex = i === 0 ? arr.length-1 : i-1;
          nextIndex = i === arr.length-1 ? 0 : i+1;

          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }


    $prevButton.unbind('click').click(function(){
      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);
    });

    $nextButton.unbind('click').click(function(){
      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+nextIndex+'"]'));
      },600);
    });

    if (trainingData) {
      var trainingAvatar = trainingData.image,
        trainingName = trainingData.name,
        trainingPosition = trainingData.position,
        trainingCompany = trainingData.company,

        trainingPlace = trainingData.place,
        trainingDate = trainingData.date,
        trainingPrice = trainingData.price,
        trainingDuration = trainingData.duration,

        trainingSocials = trainingData.socials,

        trainingTitle = trainingData.title,
        trainingDescription = trainingData.description,
        trainingTopics = trainingData.topics,
        trainingPurpose = trainingData.purpose,
        trainingTools = trainingData.tools,
        trainingTarget = trainingData.target,
        trainingAboutText = trainingData.aboutSpeaker,
        $modalBuyBtnText = trainingData.buyLink || $modalBuyBtn.attr('data-link'),
        links = '',
        topicsContent = '';

      trainingAvatar && $modalSpeakerAvatar.attr('src', trainingAvatar).toggle(true);

      trainingName && $modalNameElement.text(trainingName).toggle(true);
      trainingPosition && $modalSpeakerPosition.text(trainingPosition).toggle(true);
      trainingCompany && $modalSpeakerCompany.text('at ' + trainingCompany).toggle(true);

      trainingPlace && $modalPlaceContainer.find('span').html(trainingPlace).end().toggle(true);
      trainingDate && $modalDateContainer.find('span').html(trainingDate).end().toggle(true);
      trainingDuration && $modalDurationContainer.find('span').html(trainingDuration).end().toggle(true);
      trainingPrice && $modalPriceContainer.find('span').html(trainingPrice).end().toggle(true);


      trainingSocials.forEach(function(item, i, arr){
        links += ('<a class="speaker__link" href="' + item.link + '" target="_blank"><i class="fa fa-' + item.fatype + '" aria-hidden="true"></i></a>');
      });

      links && $modalSpeakerLinks.html( links ).toggle(true);

      trainingTitle && $modalTitleContainer.html(trainingTitle).toggle(true);

      trainingDescription && $modalDescriptionContainer.find('.modal-body__text').html(trainingDescription).end().toggle(true);

      trainingTopics.forEach(function (item, i, arr) {
        topicsContent += '<div class="modal-body__text">'+ item +'</div>';
      });
      topicsContent && $modalTopicsContainer.find('.modal-body__text').html(topicsContent).end().toggle(true);

      trainingPurpose && $modalPurposeContainer.find('.modal-body__text').html(trainingPurpose).end().toggle(true);
      trainingTools && $modalToolsContainer.find('.modal-body__text').html(trainingTools).end().toggle(true);
      trainingTarget && $modalTargetContainer.find('.modal-body__text').html(trainingTarget).end().toggle(true);
      trainingAboutText && $modalSpeakerAboutText.find('.modal-body__text').html(trainingAboutText).end().toggle(true);

      $modalBuyBtn.attr('href', $modalBuyBtnText);

      $modalBody.modal('show');
    }
  }

});
