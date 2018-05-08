$(document).ready(function(){
  var trainings = [
    {
      image: "images/workshops/migutskiy.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin and Founder of Metadevelopment.io",
      aboutSpeaker: 'Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and Founder of Metadevelopment.io.\n' +
      'He is originally from Belarus, lived in Odessa, Ukraine and now resides in Berlin, Germany. \n' +
      'Alexey has 8 years of professional experience building user-facing web apps and services for companies like Coca-Cola, Wolters Kluwer, HP, and Microsoft. ' +
      'He worked in startups, outsource and product companies, cofounded 3 startups of his own and mentored personally more than 30 professional developers. \n' +
      'In his spare time, he is building a mentoring network for professional software developers (mtdv.io) to help people build lifestyle and career of their dreams.\n',
      duration: '<strong>3 hours</strong>',
      title: "Growing Your Career as a Software Engineer",
      description: "<p>Get an essential set of skills to control your career! <br>\n" +
      "After the intense training, you will get basic skills to:</p>\n" +
      "<ul>  \n" +
      "  <li>Position yourself better on the market</li>\n" +
      "  <li>Get more money for what you are already doing</li>\n" +
      "  <li>Get \"unstuck\" in your career situation</li>\n" +
      "  <li>Find better, more interesting projects, which fit you best</li>\n" +
      "  <li>Find and prioritize opportunities for your personal and professional development</li>\n" +
      "  <li>Build a professional network and career capital</li>\n" +
      "  <li>Efficiently grow your career without sacrificing other life aspects</li>\n" +
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
      purpose: '-',
      tools: '-',
      target: '-',
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
      aboutSpeaker: 'Ivan Jovanovic is the senior software engineer, team lead, speaker, and mentor. His ' +
      'focus is on building scalable JS applications and experimenting with new languages and frameworks. He is into functional and reactive programming. ' +
      'Leading teams and mentoring junior developers is his everyday duty. He loves to share knowledge and to write on his tech blog. In his ' +
      'free time, he reads a lot and plays basketball ',
      duration: '<strong>5-6 hours</strong>',
      title: "Testing JavaScript applications 101",
      description: "<p>Testing JavaScript applications 101 workshop will show you how to use modern testing tools to test JS full stack applications. " +
      "It will cover frontend and backend side (React and NodeJS) and will explain what are the best practices for testing." +
      " We will go through tools like Jest, Mocha, Jasmine, Cypress etc. Since React is the most popular framework, frontend tests will be testing React apps.</p>",
      topics:[
        '<ul>\n' +
        '  <li>Introduction to testing in general - introduction, what are some best practices, what can we learn from other languages</li>\n' +
        '  <li>Tools for JS testing - what tools we have for JS and what are the most popular ones</li>\n' +
        '  <li>Writing your first test - let\'s write a simple unit test, write the code for it, execute it and make it green</li>\n' +
        '  <li>Examples of the apps that we will test - examples of the apps that I already prepared that we\'ll test</li>\n' +
        '  <li>Hands-on testing Node.js and React app - writing tests using Jest, Cypress, Mocha, Jasmine</li>\n' +
        '  <li>TDD approach - learning more about TDD, how to properly use it</li>\n' +
        '  <li>Q&A session - ask me anything</li>\n' +
        '</ul>\n' +
        '<p>\n' +
        '  After this workshop, attendees will be able to efficiently test their JS applications, from UI frontend side to backend side.\n' +
        '  They will understand what are the best practices and best tools for building testing environment.  \n' +
        '</p>'
      ],
      purpose: '<p>This workshop should teach you what are the best practices in testing JavaScript applications,' +
      ' how to set up your local environment, how to write unit and end to end tests. What is mocking and how to take advantage of it?' +
      ' How to test NodeJS applications? And how to test React/Redux applications, from functional to UI tests? We\'ll' +
      ' go through the basics of tests, see some examples, then move to modern tools and try all of them.\n' +
      '</p>',
      tools: '<p>A visitor should know JS and should have some experience of work with it (built at least 2-3 apps' +
      ' in the past using React or NodeJS). We\\\'ll try various JS tools, like Tap, Jest, Mocha, Jasmine, Sinon, ' +
      'Chai and Cypress. You only need a computer, anything with a monitor and keyboard will work</p>',
      target: '<p>This workshop is for everyone who wants to increase their knowledge in JavaScript application testing. It\'s perfect for beginners, but also ' +
      'for senior developers who want to see what are the latest best practices and how to test their code in the easiest and best way.</p>',
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
      position: "-" ,
      company: "-",
      aboutSpeaker: 'Alex Fernández is a developer with more than 20 years of experience in the software industry.' +
      ' Shameless tinkerer since forever, he likes building more than adapting and adapting more than configuring. During ' +
      'the course of his career he has gone from caring about seconds to worrying about milliseconds,' +
      ' and then to squeezing those last microseconds; which honestly feels like an improvement. ' +
      'My main hobby is talking to my 9 year old daughter, who is a really interesting little person!',
      duration: '<strong>2-3 hours</strong>',
      title: "Building Efficient Software: Let's Improve Our Performance!",
      description: "<p>Is your web site slow? Are your servers overloaded? Do you have trouble finding the hot spots and optimizing them away? " +
      "Then this workshop is for you! We will see the most important techniques that can help in this situation, and get to practice them with" +
      " a couple of real-world examples.</p>" +
      "<p>Software is usually built without specific constraints in mind. Then it is deployed to production, and in certain situations" +
      " it may fail to meet expectations, consume too many resources – or break completely. As a developer you are likely to meet performance " +
      "issues at some point. In this workshop we will see a few techniques that will be useful in these situations: finding bottlenecks," +
      " running load tests, profiling and writing benchmarks. We will work on practical examples using JavaScript and Node.js." +
      " Most of the techniques can be used in other environments too!\n</p>",
      topics:[
        '<ul>\n' +
        '  <li>15 min: Review some theory about efficient software.</li>\n' +
        '  <li>45 min: load testing. Practical session 1.</li>\n' +
        '  <li>45 min: profiling. Practical session 2</li>\n' +
        '  <li>45 min: micro-benchmarks. Practical session 3.</li>\n' +
        '</ul>'
      ],
      purpose: '<p>As your career progresses, there inevitably comes a dreaded day when a ' +
      'customer tells you “Your software is slow!” At that point you need to be able to find hotspots and optimize them.</p>',
      tools: '<p>The workshop is useful for developers of websites with sizeable ' +
      'traffic and software with specific performance constraints as well as for fans of optimization.\n</p>',
      target: '<p>A laptop with Node.js (v8 or later) installed. A few npm packages will be downloaded and used.</p>',
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
      company: "-",
      aboutSpeaker: 'Gerard is very excited about the future of the Web and JavaScript. Always happy Computer Science ' +
      'Engineer and humble Google Developer Expert. He loves to share his learnings by giving talks, trainings and writing about cool technologies.' +
      ' He loves running AngularZone and GraphQL London, mentoring students and giving back to the community.',
      duration: '<strong>6-7hours</strong>',
      title: "Fullstack GraphQL using React with Gerard Sans",
      description: "<p>In this full day training we will cover everything you need to successfully adopt GraphQL across your full stack from client to backend" +
      " including tooling and best practices learned from top company engineers (Twitter, TopTable and graphcool).</p>" +
      "<p>You will learn how to build and design a GraphQL Server starting by defining the GraphQL Schema using types and relations." +
      "Moving to the client side, we will describe the differences between Relay Modern and Apollo Clients. As we implement the different " +
      "features we will introduce GraphQL query syntax including queries, mutations, alias, fragments and directives. At this point we " +
      "will review how client and server communicate, what tooling is available to track usage and improve performance and how to add authorisation and authentication. " +
      "Finally we will focus on designing real-time features and sharing best practices to improve performance and leverage scalability.</p>",
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
      purpose: '-',
      tools: '<p>Bring your own laptop, fully charged, and a rested mind.</p>',
      target: '<p>Level: Intermediate Basic understanding of React and JavaScript.</p>'+
      '<p>You already know or a curious about GraphQL but are interested in learning best practices and less known areas.</p>',
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
      position: "-" ,
      company: "-",
      aboutSpeaker: 'Hi I\'m David Muellerchen, I\'m a Angular consultant and trainer. I\'m also a team member ' +
      'and trainer at AngularJS.DE, the Angular plattform in DACH. My passion: sharing knowledge. I love to speak ' +
      'and teach at meetups and conferences. Im also writing my own blog (webdave.de), review upcoming books and articles. ' +
      'During leisure time I jump arround with my 3 boys and my wife. ' +
      'I\'m also an organizer of the Hamburg AngularJS Meetup and a Google Developer Expert (GDE) in Angular.',
      duration: '<strong>6-7 hours</strong>',
      title: "Angular 101",
      description: "<p>Angular is a client-side JavaScript framework used world-wide to create web applications." +
      " The framework gives clear structures and supports u. a. Modularization and lazy loading. It is developed by " +
      "a team at Google and is aimed at developers of complex enterprise applications. Since the release of version 2, " +
      "the framework is no longer AngularJS but Angular.\n" +
      "Curious? then come to my workshop and learn the basic principles of Angular.\n</p>",
      topics:[
        '-'
      ],
      purpose: '<p>If you want to work with the latest web technologies, you must not miss this workshop.</p>',
      tools: '<p>All you need is your laptop and curiosity.</p>',
      target: '-',
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
  ];

  $(document).on('click', '[data-modal-trigger="#training-modal"]', function() {
    var $trainingInfoBlock = $(this);
    loadSpeakerModal($trainingInfoBlock);
  });

  function loadSpeakerModal($trainingInfoBlock) {
    var $modalBody = $('#training-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid'),
      $modalNameElement = $modalBody.find('.speaker__name'),
      $modalSpeakerPosition = $modalBody.find('.speaker__position'),
      $modalSpeakerCompany = $modalBody.find('.speaker__company'),
      $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
      $modalTitleContainer = $modalBody.find('.modal-body__workshop-title'),
      $modalDescriptionContainer = $modalBody.find('.modal-body__description .modal-body__text'),
      $modalDurationContainer = $modalBody.find('.modal-body__duration .modal-body__text'),
      $modalTopicsContainer = $modalBody.find('.modal-body__topics .modal-body__text'),
      $modalPurposeContainer = $modalBody.find('.modal-body__purpose .modal-body__text'),
      $modalToolsContainer = $modalBody.find('.modal-body__tools .modal-body__text'),
      $modalTargetContainer = $modalBody.find(' .modal-body__target .modal-body__text'),
      $modalSpeakerAboutText = $modalBody.find('.modal-body__text.speaker-text'),
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
        trainingAboutText = trainingData.aboutSpeaker,
        trainingSocials = trainingData.socials,
        trainingTitle = trainingData.title,
        trainingDescription = trainingData.description,
        trainingDuration = trainingData.duration,
        trainingTopics = trainingData.topics,
        trainingPurpose = trainingData.purpose,
        trainingTools = trainingData.tools,
        trainingTarget = trainingData.target,
        topicsContent = '';

      trainingAvatar && $modalSpeakerAvatar.attr('src', trainingAvatar);
      trainingName && $modalNameElement.text(trainingName);
      trainingPosition && $modalSpeakerPosition.text(trainingPosition);
      trainingCompany && $modalSpeakerCompany.text(trainingCompany);

      var links = '';

      trainingSocials.forEach(function(item, i, arr){
        links += ('<a class="speaker__link" href="' + item.link + '" target="_blank"><i class="fa fa-' + item.fatype + '" aria-hidden="true"></i></a>');
      });

      $modalSpeakerLinks.html( links );

      $modalTitleContainer.html(trainingTitle);

      $modalDescriptionContainer.html(trainingDescription);

      $modalDurationContainer.html(trainingDuration);

      trainingTopics.forEach(function (item, i, arr) {
        topicsContent += '<div class="modal-body__text">'+ item +'</div>';
      });
      $modalTopicsContainer.html(topicsContent);

      $modalPurposeContainer.html(trainingPurpose);
      $modalToolsContainer.html(trainingTools);
      $modalTargetContainer.html(trainingTarget);

      trainingAboutText && $modalSpeakerAboutText.text(trainingAboutText);

      $modalBody.modal('show');
    }
  }

});
