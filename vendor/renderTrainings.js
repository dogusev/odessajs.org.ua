$(document).ready(function(){
  var trainings = [
    {
      image: "images/reporters/migutsky.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin and Founder of Metadevelopment.io",
      place: '',
      date: 'July 6',
      duration: '3 h',
      price: '',
      aboutSpeaker:
        "Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and a" +
        "Founder of Metadevelopment.io. He is originally from Belarus, lived in Odessa, Ukraine" +
        "and now resides in Berlin, Germany. Alexey has 8 years of professional experience" +
        "building user-facing web apps and services for companies like Coca-Cola, Wolters" +
        "Kluwer, HP, and Microsoft. He worked in startups, outsource and product companies," +
        "cofounded 3 startups of his own and mentored personally more than 30 professional" +
        "developers. In his spare time, Alexey is building a mentoring network for professional" +
        "software developers (mtdv.io) to help people build lifestyle and career of their dreams.",
      title: "Growing your career as software engineer",
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
      image: "images/reporters/ivan_jovanovich.png",
      name: "Ivan Jovanovic",
      position: "Senior Software Engineer" ,
      company: "nearForm",
      place: '',
      date: 'July 6',
      duration: '5-6 h',
      price: '',
      aboutSpeaker:
        'Ivan Jovanovic is the senior software engineer, team lead, speaker and mentor. His' +
        'focus is on building scalable JS applications and experimenting with new languages and' +
        'frameworks. He is into functional and reactive programming. Leading teams and' +
        'mentoring junior developers is his everyday duty. He loves to share knowledge and to' +
        'keep his tech blog. In his free time Ivan reads a lot and plays basketball.',
      title: "Testing JavaScript applications 101",
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
      image: "images/reporters/alex_renandez.jpeg",
      name: "Alex Fernandez",
      position: "" ,
      company: "",
      place: '',
      date: 'July 8',
      duration: '2-3 h',
      price: '',
      aboutSpeaker:
        'Alex Fernández is a developer with more than 20 years of experience in the software industry.' +
        ' Shameless tinkerer since forever, he likes building more than adapting and adapting more than configuring. During ' +
        'the course of his career he has gone from caring about seconds to worrying about milliseconds,' +
        ' and then to squeezing those last microseconds; which honestly feels like an improvement. ' +
        'My main hobby is talking to my 9 year old daughter, who is a really interesting little person!',
      title: "Building Efficient Software: Let's Improve Our Performance!",
      description:
        "<p>Software is usually built without specific constraints in mind. Then it is deployed to production, and in certain situations" +
        " it may fail to meet expectations, consume too many resources – or break completely. As a developer you are likely to meet performance " +
        "issues at some point. In this workshop we will see a few techniques that will be useful in these situations: finding bottlenecks," +
        " running load tests, profiling and writing benchmarks. We will work on practical examples using JavaScript and Node.js." +
        " Most of the techniques can be used in other environments too!</p>",
      topics:[
        '<ul>\n' +
        '  <li>15 min: Review some theory about efficient software.</li>\n' +
        '  <li>45 min: load testing. Practical session 1.</li>\n' +
        '  <li>45 min: profiling. Practical session 2</li>\n' +
        '  <li>45 min: micro-benchmarks. Practical session 3.</li>\n' +
        '</ul>'
      ],
      purpose:
        '<p>As your career progresses, there inevitably comes a dreaded day when a customer tells' +
        'you “Your software is slow!” At that point you need to be able to find hotspots and' +
        'optimize them.</p>',
      tools:
        '<p>A laptop with Node.js (v8 or later) installed. A few npm packages will be downloaded' +
        'and used.</p>',
      target:
        '<p>The workshop is useful for developers of websites with sizeable traffic and software' +
        'with specific performance constraints as well as for fans of optimization.</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/alexfernandez/',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/pinchito',
          fatype: 'twitter'
        },
        {
          link: 'http://pinchito.es/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/program-committee/gerard-sans.jpg",
      name: "Gerard Sans",
      position: "Google Developer Expert" ,
      company: "",
      place: '',
      date: 'July 6',
      duration: '6-7 h',
      price: '',
      aboutSpeaker:
        'Gerard is very excited about the future of the Web and JavaScript. Always happy Computer Science ' +
        'Engineer and humble Google Developer Expert. He loves to share his learnings by giving talks, trainings and writing about cool technologies.' +
        ' He loves running AngularZone and GraphQL London, mentoring students and giving back to the community.',
      title: "Fullstack GraphQL using React with Gerard Sans",
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
      image: "images/reporters/david_mullerchen.jpg",
      name: "David Müllerchen",
      position: "" ,
      company: "",
      place: '',
      date: 'July 6',
      duration: '6-7 h',
      price: '',
      aboutSpeaker:
        'David is an Angular consultant and trainer. He’s also a team member and trainer at' +
        'AngularJS.DE, the Angular platform in DACH. His passion is sharing knowledge,' +
        'speaking and teaching at meetups and conferences. David’s keeping his own blog' +
        '(webdave.de). During leisure time David jumps around with his 3 boys and his wife. He’s' +
        'also an organizer of the Hamburg AngularJS Meetup and a Google Developer Expert' +
        '(GDE) in Angular.',
      title: "Angular 101",
      description:
        "<p>Angular is a client-side JavaScript framework used world-wide to create web" +
        "applications. The framework gives clear structures and supports u. a. Modularization" +
        "and lazy loading. It is developed by a team at Google and is aimed at developers of" +
        "complex enterprise applications. Since the release of version 2, the framework is no" +
        "longer AngularJS but Angular. Curious? then come to my workshop and learn the basic" +
        "principles of Angular.</p>",
      topics:[
        '<ul>' +
          '<li>NgModules</li>' +
          '<li>Components</li>' +
          '<li>Routing</li>' +
          '<li>Submodules</li>' +
          '<li>Feature Modules</li>' +
          '<li>Services</li>' +
          '<li>Forms (Template driven / reactive)</li>' +
          '<li>Pipe</li>' +
          '<li>Directive</li>' +
        '</ul>'
      ],
      purpose: '<p>If you want to work with the latest web technologies, you must not miss this workshop.</p>',
      tools: '<p>All you need is your laptop and curiosity.</p>',
      target: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/web-dave',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/webdave_de',
          fatype: 'twitter'
        },
        {
          link: 'https://webdave.de/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/max_klymyshyn.jpg",
      name: "Max Klymyshyn",
      position: "" ,
      company: "",
      place: '',
      date: '',
      duration: '2 h',
      price: '',
      aboutSpeaker:
        'Full-stack software engineer for Clojure/ClojureScript/Python/JavaScript-based projects with 15+ years experience in technical' +
        ' team leadership and management of distributed teams. Max interested in distributed systems, data replication and consistency algorithms, ' +
        'information science, functional languages and modern mobile and front-end development. Delivered more than 50 talks within past 5 years ' +
        'about developments and trends in Python, JavaScript, Databases, Dev Processes, Testing Processes and Project Management.',
      title: "Build blockchain using CRDT and Merkle Trees",
      description: "",
      topics:[
        '<ul>\n' +
        '  <li>intro & basic tools installation</li>\n' +
        '  <li>blockchain basic implementation</li>\n' +
        '  <li>low-level transport</li>\n' +
        '  <li>high-level transport & CRDT payload definition</li>\n' +
        '  <li>adding distributed properties</li>\n' +
        '</ul>'
      ],
      purpose:
        '<p>People who developing modern client-side apps with JavaScript should know about distributed' +
        ' data structures like CRDT.</p>',
      tools: '<p>Laptop, internet, git, node.js installed on laptop</p>',
      target: '<p>Middle+ front-end developers</p>',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/klymyshyn',
          fatype: 'linkedin'
        },
        {
          link: 'https://twitter.com/maxmaxmaxmax',
          fatype: 'twitter'
        },
      ]
    },
    {
      image: "images/reporters/nik_graf.jpg",
      name: "Nik Graf",
      position: "" ,
      company: "",
      place: '',
      date: '',
      duration: '6-7 h',
      price: '',
      aboutSpeaker:
        "Nik is a software developer passionate about good UX, functional programming and dev" +
        "tools. Previously he worked for Serverless Inc., the company behind Serverless" +
        "Framework. He’s co-created several popular open source projects like DraftJS Plugins &amp;" +
        "Polished. In his spare time Nik enjoys cycling &amp; skiing.",
      title: "Build Serverless Node.js Applications on AWS",
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
    // {
    //   image: "images/reporters/nik_graf.jpg",
    //   name: "Nik Graf",
    //   position: "" ,
    //   company: "",
    //   aboutSpeaker: 'Nik is a software developer and passionate about good UX, functional programming and dev tools. ' +
    //   'He previously worked for Serverless Inc., the company behind Serverless Framework.' +
    //   ' He co-created several popular open source projects like DraftJS Plugins & Polished. In his spare-time he enjoys cycling & skiing.',
    //   duration: '<strong>5-6 hours</strong>',
    //   title: "Get Started with Reason & ReasonReact",
    //   description:
    //   "<p>Reason is a new functional, JavaScript-like language with a strong type-system and first level React bindings initiated by Jordan Walke, " +
    //   "the creator of React.</p>" +
    //   "<p>In this workshop you will first learn about the syntax and semantics of the programming language Reason. Further we learn about powerful " +
    //   "concepts like pattern matching and Variants. We are going to refactoring a React component written in JavaScript to Reason.</p>",
    //   topics:[
    //     '-'
    //   ],
    //   purpose: '<p>-</p>',
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
  ];

  $(document).on('click', '[data-modal-trigger="#training-modal"]', function() {
    var $trainingInfoBlock = $(this);
    loadSpeakerModal($trainingInfoBlock);
  });

  function loadSpeakerModal($trainingInfoBlock) {
    var $modalBody = $('#training-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid'),

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

      trainingIndex = parseInt($trainingInfoBlock.attr('data-item-index')),
      $prevButton = $modalBody.find('button.prev'),
      $nextButton = $modalBody.find('button.next');

    $prevButton.unbind('click').click(function(){
      var prevIndex = trainingIndex == 0 ? (trainings.length-1) : trainingIndex - 1;

      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);

    });

    $nextButton.unbind('click').click(function(){
      var nextIndex = trainingIndex == trainings.length-1 ? 0 : trainingIndex + 1;

      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+nextIndex+'"]'));
      },600);

    });

    var trainingData = trainings[trainingIndex];
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
        links = '',
        topicsContent = '';

      trainingAvatar && $modalSpeakerAvatar.attr('src', trainingAvatar);

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
      console.log(trainingTitle)
      trainingTitle && $modalTitleContainer.html(trainingTitle).toggle(true);

      trainingDescription && $modalDescriptionContainer.find('.modal-body__text').html(trainingDescription).end().toggle(true);

      trainingTopics.forEach(function (item, i, arr) {
        topicsContent += '<div class="modal-body__text">'+ item +'</div>';
      });
      topicsContent && $modalTopicsContainer.html(topicsContent).toggle(true);

      trainingPurpose && $modalPurposeContainer.find('.modal-body__text').html(trainingPurpose).end().toggle(true);
      trainingTools && $modalToolsContainer.find('.modal-body__text').html(trainingTools).end().toggle(true);
      trainingTarget && $modalTargetContainer.find('.modal-body__text').html(trainingTarget).end().toggle(true);
      trainingAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(trainingAboutText).end().toggle(true);

      $modalBody.modal('show');
    }
  }

});
