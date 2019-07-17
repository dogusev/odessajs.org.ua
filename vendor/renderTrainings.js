$(document).ready(function () {

    var workshops = [

        {
            image: "images/reporters/karthickeyan_narasimhan.png",
            name: "Karthickeyan Narasimhan",
            speakerPos: [
                {
                    position: "Senior Software Engineer",
                    company: "Freshworks Inc",
                },
                {
                    position: "Tech Speaker",
                    company: "Mozilla",
                },
            ],
            country: "India",
            city: "Chennai",
            rept: [
                {
                    title: "Building Cross Browser Extension - From Zero to Hero",
                    description: 'Browser Extensions/Add-ons helps us to personalize our browser as per our needs. We all have used a number of browser extensions in our life to improve our browsing experience either in chrome, firefox or opera. Instead of just being an End-User, Why not create one? and become a cross-browser extension developer. WebExtension API will help us (javascript developers) convert into a Browser Extension Developer by the end of this workshop. Using the power of Javascript along with the WebExtension API, We can now write extensions that can work in almost all browsers. No need to maintain separate codebase of extension for each browser. In this workshop, We will build 3 portable cross-browser extension together step by step, live in the session and provide you an excellent hands-on experience. During the process, You\'ll also learn: - The anatomy of WebExtensions API - Get introduced to cool APIs like Context Menu, tabs, Alarm, Notifications and many more. - Learn to build 3 exciting cross-browser extensions for your daily use. - Running & Debugging the extension - & finally, publish the extension to AMO (addons.mozilla.org) At the end of this workshop, The participants will gain good knowledge to build an extension on their own that can perform tasks as per their wish.',
                    lang: "[EN]"
                }
            ],
            description:
                "<p class='description-subtitle'>Description</p>" +
                "<p>Browser Extensions/Add-ons helps us to personalize our browser as per our needs. We all have used a number of browser extensions in our life to improve our browsing experience either in chrome, firefox or opera. Instead of just being an End-User, Why not create one? and become a cross-browser extension developer. </p>" +
                "<p class='description-subtitle'>By the end you will know</p>" +
                "<p>WebExtension API will help us (javascript developers) convert into a Browser Extension Developer by the end of this workshop. Using the power of Javascript along with the WebExtension API, We can now write extensions that can work in almost all browsers. No need to maintain separate codebase of extension for each browser</p>" +
                "<p class='description-subtitle'>Why you should come to this workshop</p>" +
                "<p>In this workshop, We will build 3 portable cross-browser extension together step by step, live in the session and provide you an excellent hands-on experience. During the process, You'll also learn:</p>" +
                "<ul>" +
                "<li>The anatomy of WebExtensions API</li>" +
                "<li>Get introduced to cool APIs like Context Menu, tabs, Alarm, Notifications and many more.</li>" +
                "<li>Learn to build 3 exciting cross-browser extensions for your daily use.</li>" +
                "<li>Running & Debugging the extension</li>" +
                "<li>& finally, publish the extension to AMO (addons.mozilla.org)</li>" +
                "</ul>" +
                "<p>At the end of this workshop participants will gain good knowledge to build an extension on their own that can perform tasks as per their wish.</p>",

            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/hellokarthic',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/hellokarthic',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/hellokarthic/',
                    fatype: 'linkedin'
                }
            ],

        },
        {
            image: "images/reporters/artem_frantsiian.png",
            name: "Artem Frantsiian",
            speakerPos: [
                {
                    position: "Chief Technology Officer",
                    company: "482.solutions",
                },
            ],
            description:
                "<p class='description-subtitle'>Description</p>" +
                "<p>Blockchain is a hip technology that is increasingly capturing the market. Companies such as Intel, IBM, Microsoft, Amazon are looking in this direction and developing it. Facebook, Telegram, Visa are taking the first steps in creating their solutions.</p>" +
                "<p class='description-subtitle'>By the end you will know</p>" +
                "<p>At this workshop people will get PRACTICAL skills to create their own cryptocurrency based on the Intel framework within the framework of the Hyperledger project from the Linux Foundation, which will give invaluable experience and help specialists remain in demand for a long time.</p>" +
                "<p class='description-subtitle'>What knowledge and skills do you want participants have?</p>" +
                "<ul>" +
                "<li>Basic theoretical skills about technology</li>" +
                "<li>Knowledge of the Sawtooth framework</li>" +
                "<li>Skills for building blockchain systems</li>" +
                "<li>Skills to build decentralized React applications</li>" +
                "<li>Skills of writing a library</li>" +
                "</ul>" +
                "<p class='description-subtitle'>What equipment is needed for the workshop?</p>" +
                "<p>- Computer, with MacOS or Ubuntu system and characteristics sufficient for stable simultaneous operation of the docker and several JS applications.</p>" +
                "<p class='description-subtitle'>Should the participants somehow prepare before the workshop?</p>" +
                "<ul>" +
                "<li>You need to install docker and docker-compose, have a basic understanding of how to use these tools</li>" +
                "<li>You must install NodeJS version 8 or higher</li>" +
                "<li>Check that you can install <a target='_blank' href='https://www.npmjs.com/package/sawtooth-sdk'>https://www.npmjs.com/package/sawtooth-sdk</a> </li>" +
                "</ul>" +
                "<p class='description-subtitle'>What tools do you use during the workshop?</p>" +
                "<ul>" +
                "<li>Docker (docker-compose)</li>" +
                "<li>Sawtooth</li>" +
                "<li>React</li>" +
                "<li>NodeJS</li>" +
                "<li>different JS libraries and tools</li>" +
                "</ul>" +
                "<p class='description-subtitle'>Target audience</p>" +
                "<ul>" +
                "<li>for developers, enthusiasts who are ready to quickly and accurately absorb information. This will give them the opportunity to gain maximum experience.</li>" +
                "<li>for developers who want to practice and look in other directions. This will allow them to decide what they want to do.</li>" +
                "</ul>" +
                "<p class='description-subtitle'>About the speaker:</p>" +
                "<p>- I have worked in many areas: web applications, blockchain technology, game industry, IoT. In these areas I have practical experience and understanding of business requirements.</p>" +
                "<p>- The main hobby at the moment is football.</p>",
            country: "Ukraine",
            city: "Odessa",
            rept: [
                {
                    title: "Make your OdessaJS coin",
                    description: 'Make your custom blockchain on Sawtooth framework and create blockexplorer for it. We will consider all parts of blockchain system: DLT and different consensus mechanisms, cryptography and blockchain as a technology, then build our own implementation of blockchain system via Sawtooth framework and JS and then create our blockexplorer on React.',
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/artem-frantsiian/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://github.com/ArtemFrantsiian',
                    fatype: 'github'
                }
            ],

        },
        {
            image: "images/reporters/babich.jpg",
            name: "Sergiy Babich",
            speakerPos: [
                {
                    position: "CEO",
                    company: "GlobalCSS",
                },
            ],
            country: "Ukraine",
            city: "Lviv",
            rept: [
                {
                    title: "Practicing on making Angular app more friendly in terms of data handling",
                    description: 'At this workshop we\'ll update "not-so-handy" and not-so-readable angular app to something more nice and predictable.',
                    lang: "[UA]"
                }
            ],
            description:
                "<p class='description-subtitle'>Description</p>" +
                "<p>How to use Observables in component properly? How to forget about headache from non-unsubscribed subscriptions? Why your store is so big and complicated? Why it is so difficult to use store in components and why you need to write so much code for only one action?</p>" +
                "<p>All of us faced such questions working with Angular any trying not to lose control over application state. But store keep getting bigger and less readable, actions number is increasing at enormous rates, and your components starting to live by themselves." +
                "<p>Sergiy Babich would not offer you a silver bullet for all these problems, but he can tell how to simplify most of these things and share few lifehacks, which helped him to stay sane when working with Angular projects.</p>" +
                "<p class='description-subtitle'>By the end you will know</p>" +
                "<p>At Sergiy's workshop we will analyze most common RxJS and NGRX usage mistakes, learn ways of fixing those mistakes, take a look at NGRX 8 and even will learn a few interesting secrets from Sergiy's personal experience!</p>" +
                "<p class='description-subtitle'>Why you should come to this workshop</p>" +
                "<p>Code editor of your choice, NodeJS and yarn package manager installed. All participants would get a link to sample repository, it should be downloaded and all dependencies installed before start.</p>" +
                "<p class='description-subtitle'>Agenda</p>" +
                "<ul>" +
                "<li>Sample project exploring;</li>" +
                "<li>Locating mistakes and bad solutions for application state handling;</li>" +
                "<li>Ways to unsubscribe from Subscription;</li>" +
                "<li>Using async pipe;</li>" +
                "<li>Reactive forms and Observables;</li>" +
                "<li>NGRX 8;</li>" +
                "<li>Lifehacks from Babich;</li>" +
                "</ul>" +
                "<p class='description-subtitle'>Target audience</p>" +
                "<p>This workshop will be useful for mature specialists and beginners as well. One should be familiar with Angular, RxJS and NGRX to be able to participate.12 is comfort size of audience, maximum is 20 with assistants</p>" +
                "<p class='description-subtitle'>About the speaker</p>" +
                "<p>Sergiy Babich - awesome frontend developer, founder and organizer of LvivCSS conference. His total experience in frontend is heading to its first ten year anniversary, and his total web experience would be celebrating its first fifteen. For the last two years he is working with Angular only, but, to be honest, he loves all frontend. Even HTML.</p>",
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/babichssofficial/',
                    fatype: 'facebook'
                }
            ],

        },
        {
            image: "images/reporters/aaron_bassett.jpg",
            name: "Aaron Bassett",
            speakerPos: [
                {
                    position: "Developer Advocate",
                    company: "Nexmo",
                },
            ],
            country: "Netherlands",
            city: "The Hague",
            rept: [
                {
                    title: "Reduce, Reuse, Recycle - Persisting WebSocket connections with SharedWorkers",
                    description: "When using WebSockets to communicate between your server and the client every new browser context–tab, window, iframe, and so on–is likely to create another WebSocket connection. All these open connections can quickly take a toll on your server resources, or if you’re using a PaaS which charges for each connection, it could quickly add up to a big bill.\n" +
                        "\n" +
                        "In this workshop, we’ll look at how you can use SharedWorkers to create a single persistent WebSocket which can be used by every browser context to communicate with your Django Channels WebSocket server",
                    lang: "[EN]"
                }
            ],
            description:
                '<p class="description-subtitle">Description</p>' +
                '<p>When using WebSockets to communicate between your server and the client every new browser context–tab, window, iframe, and so on–is likely to create another WebSocket connection. All these open connections can quickly take a toll on your server resources, or if you’re using a PaaS which charges for each connection, it could quickly add up to a big bill. </p>' +
                '<p class="description-subtitle">Why you should come to this workshop</p>' +
                '<pIn this workshop, we’ll look at how you can use SharedWorkers to create a single persistent WebSocket which can be used by every browser context to communicate with your Django Channels WebSocket server></p>',

            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/aaronbassett',
                    fatype: 'twitter'
                },
                {
                    link: 'http://instagram.com/aaronbassett',
                    fatype: 'instagram'
                },
                {
                    link: 'https://github.com/aaronbassett',
                    fatype: 'github'
                },
            ],
        },
        {
            image: "images/reporters/solomon.png",
            name: "Mike Solomon",
            speakerPos: [
                {
                    position: "CEO",
                    company: "Meeshkan",
                },
            ],
            country: "Finland",
            city: "Helsinki",
            rept: [
                {
                    title: "Testing JS code that consumes APIs",
                    description: 'There are lots of great frameworks for testing APIs we write in JavaScript, but few frameworks that allow us to test APIs we consume. This workshop will help developer write clean, readable and dependable tests for the APIs they consume, from third-party vendors like SalesForce, Stripe and Auth0 to internal microservices.',
                    lang: "[EN]"
                }
            ],
            description:
                '<p class="description-subtitle">By the end you will know</p>' +
                'By the end of the workshop, I would love for them to know how to write a good unit test and a good integration test and how to deploy these tests to a CI environment with ease.' +
                '<p class="description-subtitle">Why you should come to this workshop</p>' +
                '<p>People should come to my workshop if they would like to learn how to write better integration tests. If they have ever run into issues or bugs integrating with APIs or databases, this workshop is for them! It will save them time in their development process and help get rid of several annoying and stressful bugs through clean and light testing practices.</p>' +
                '<p class="description-subtitle">Skills & equipment required for the workshop</p>' +
                '<p>We will use VSCode and get all of the necessary packages from NPM. No external services are needed, but as we will be using several VSCode plugins, it will be useful for participants to have that editor ready.</p>' +
                '<p class="description-subtitle">Target audience</p>' +
                '<p>The ideal participant in this workshop is someone who is developing an app for a client or team with an opaque or fragile API. For example, if you are working on apps that integrate with banking or crypto APIs, this is a great way to future-proof them! The workshop is mostly geared towards junior developers, but senior developers will learn new things as well! And they may be able to help out some of the junior devs. No special prep needs to be done before the workshop.</p>' +
                '<p class="description-subtitle">Target audience</p>' +
                '<p>The ideal participant in this workshop is someone who is developing an app for a client or team with an opaque or fragile API. For example, if you are working on apps that integrate with banking or crypto APIs, this is a great way to future-proof them! The workshop is mostly geared towards junior developers, but senior developers will learn new things as well! And they may be able to help out some of the junior devs. No special prep needs to be done before the workshop.</p>' +
                '<p class="description-subtitle">About the speaker</p>' +
                '<p>I am a trainer, and my main area of expertise is Python and JavaScript programming. I have a PhD in Music and Math and have mostly worked as a digital music designer and music ensemble director before starting my own company. My favorite holiday these days is spending the weekend in the Finnish wilderness!</p>',
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/h4x0r4l1f3',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/michael-thomas-solomon/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://github.com/mikesol',
                    fatype: 'github'
                }
            ],
        },
        {
            image: "images/reporters/saif_jerbi.jpg",
            name: "Saif Jerbi",
            speakerPos: [
                {
                    position: "Frontend Tech Lead",
                    company: "Vermeg",
                }
            ],
            country: "Tunisia",
            city: "Tunis",
            rept: [
                {
                    title: "Pluggable Web application using Angular and NodeJS",
                    description: 'Let\'s learn together how we develop a pluggable angular app. We will develop a platform with a marketplace, from which the user can install some extension to the app. It will be mainly a dashboard, and the different widgets will be installed at runtime by the end user.',
                    lang: "[EN]"
                }
            ],
            description:
                "<p class='description-subtitle'>Description</p>" +
                "<p>Developers thinks that runtime modular architecture is very heavy to implement.My workshop will turn around a real use case of modular architecture. So we will see together how we can implement a runtime pluggable application in Angular and NodeJS, how we package modules (plugins) and how we can load them at runtime into our Angular application.</p>" +
                "<p class='description-subtitle'>Why you should come to this workshop</p>" +
                "<p>In the workshop, we will develop a platform with a marketplace, from which the user can install some extensions to the running app. It will be mainly a dashboard and different widgets that will be installed at runtime by the end user.</p>" +
                "<p class='description-subtitle'>Skills & equipment required for the workshop</p>" +
                "<ul>" +
                "<li>VS Code</li>" +
                "<li>NodeJS</li>" +
                "<li>Yarn</li>" +
                "<li>Angular CLI 6+</li>" +
                "<li>And internet access :)</li>" +
                "</ul>" +
                "<p class='description-subtitle'>Target audience</p>" +
                "<p>This workshop can be held by any developer who have basic knowledge in Angular and NodeJS. Everyone will be welcome to the workshop</p>",
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/jerbi.saif',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/JerbiSaif',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/saifjerbi/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://github.com/SaifJerbi',
                    fatype: 'github'
                },
                {
                    link: 'https://stackoverflow.com/users/1368125/saif-jerbi',
                    fatype: 'stack-overflow'
                },
                {
                    link: 'https://medium.com/@SaifJerbi',
                    fatype: 'link'
                }
            ],
        },
        {
            image: "images/reporters/kucherenko.png",
            name: "Andrey Kucherenko",
            speakerPos: [
                {
                    position: "Lead Software Engineer",
                    company: "EPAM Systems",
                },
            ],
            country: "Ukraine",
            city: "Kiev",
            rept: [
                {
                    title: "NestJS web framework",
                    description: 'We will get in touch popular node.js framework named Nest.JS. Will deep dive in functionality, aspects of usage of different components like DB, sockets, dependency injections. Will try to touch different community developed modules and components.',
                    lang: "[RU]"
                }
            ],
            description:
                "<p class='description-subtitle'>Description</p>" +
                "<p>During the workshop participants will touch different aspects of NestJS. We will start with philosophy, architecture overview, project bootstrapping, frameworks parts overview. As a practical part of the workshop we will try to create a new project, use frameworks parts, add third party modules, work with swagger, websockets, database.</p>" +
                "<p class='description-subtitle'>Why do people have to come to your workshop?</p>" +
                "<p>People can try in touch popular web framework named NestJS. The skills achieved during the workshop people can apply for build scalable and maintainable node.js applications.</p>" +
                "<p class='description-subtitle'>Target audience</p>" +
                "<p>Node.JS developers who looking for good tool for building BE/REST services.</p>" +
                "<p class='description-subtitle'>About the speaker</p>" +
                "<p>Andrey Kucherenko is an engineer, an architect, an author of open source project jscpd. Andrey has been working in IT for 15 years. He participated in the big amount of projects from different domain arias, he developed and conducted a lot of training for engineers. He was a speaker at international and local conferences. There are main arias of his interests: frontend, backend, architecture, mobile, methodologies of software development, code quality. Hobby: archery, bike, swimming </p>",

            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/andrey.kucherenko/',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/a_kucherenko',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/andrey-kucherenko-a180aa28/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://github.com/kucherenko',
                    fatype: 'github'
                }
            ],
        },
        {
            image: "images/reporters/dmytro_selin.png",
            name: "Dmytro Selin",
            speakerPos: [
                {
                    position: "Software Architect",
                    company: "SoftServe",
                },
            ],
            country: "Ukraine",
            city: "Dnipro",
            rept: [
                {
                    title: "WebAssembly - Everything in browser, from bitcoin miners to python interpreter",
                    description: 'The more browsers evolve, the more advanced is tech behind them. On of Next-Big-Thing it webassembly, which could drastically improve perfomance of in-browser apps and allow heavy-load apps like games, ML, blockchain miners to work with great perfomance. On workshop we\'ll try to see and implement what is possible right now to get ready to what will be possible in near future',
                    lang: "[RU]"
                }
            ],
            description:
                "<p class='description-subtitle'>Why you should come to this workshop</p>" +
                "<p>Developers should visit my workshop to find out what they can do in modern browsers that are about to become a full-fledged OS.</p>" +
                "<p class='description-subtitle'>Skills & equipment required for the workshop</p>" +
                "<p>Knowledge of what webassembly provides for running all sorts of applications that were previously not very suitable for the browser. Necessary equipment: laptops with an installed docker and code editor</p>" +
                "<p class='description-subtitle'>Target audience</p>" +
                "<p>Workshop would be useful for all web developers who want to look further than form layouts. It makes sense to install pre-docker and figure out how it works. Better to have some experience with javascript and command line.</p>" +
                "<p class='description-subtitle'>About the speaker:</p>" +
                "<p>I’ve been working in IT for 15 year. During this time, managed to change a lot of approaches, languages, stacks and technologies from assembler to blockchain. Now the main sphere is the web and everything connected with it. Hobbies: auto quests and mountain skiing.</p>",
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/dmytro.selin.bc',
                    fatype: 'facebook'
                },
                {
                    link: 'https://www.linkedin.com/in/dmitry-selin/',
                    fatype: 'linkedin'
                }
            ],
        },
        {
            image: "images/reporters/alex-bordun.jpg",
            name: "Oleksandr Bordun",
            speakerPos: [
                {
                    position: "Lead NodeJS",
                    company: "DEITY",
                },
            ],
            country: "Poland",
            city: "Krakov",
            rept: [
                {
                    title: "Adding PWA features to your web application on Node.js",
                    description: 'Learn how to build from scratch or add to the existing Node web-application PWA (Progressive Web Apps) features like Offline mode and Caching capabilities via ServiceWorkers. This will be a practical workshop where you will be able to build a tiny web-application using Node.js with PWA capabilities',
                    lang: "[RU]"
                }
            ],
            description:
                '<p class="description-subtitle">By the end you will know</p>' +
                '<ul>\n' +
                '  <li> How to build a simple web-application using Node.js that is able to "work" offline and show a user-friendly notification </li>\n' +
                '  <li> How to cache your web-app assets to be able to use them while working offline (like styles and JS files)</li>\n' +
                '  <li> How to befriend with Google Search Engine and Lighthouse</li>\n' +
                '</ul>' +
                '<p class="description-subtitle">Why you should come to this workshop</p>' +
                '<p>Modern web technologies are constantly evolving, so in order to be among the best - your application must be able to handle all possible scenarios, even when a visitor goes offline. Search engines love when your application cares about its visitors. </p>' +
                '<p class="description-subtitle">Skills & equipment required for the workshop</p>' +
                '<p>Since this is going to be a practical workshop, it\'s desired to have a laptop with you. You will be able to follow with the presenter through the code and try to build your own application. Node.js and npm must be installed on your laptop as we will be installing some external packages required for building such web-applications. </p>'+
                '<p class="description-subtitle">Target audience</p>' +
                '<p>This workshop will require a minimal JavaScript experience, some basic experience with working with node.js web-server applications and knowledge of how node/npm work.</p>' +
                '<p class="description-subtitle">About the speaker:</p>' +
                '<p>Lead NodeJS / ReactJS developer DEITY</p>' +
                '<p>Alex Bordun is passionate about his work, modern web technologies and tech events. Alex started off as a PHP developer but he soon transitioned to the JavaScript development because of its modern approach, eco-system and flexibility. He gets his kick out of solving complicated tasks. He likes to travel and used to play a lot of paintball…but lately he’s been working on a few small ‘pet’ projects in his spare time…so basically…he loves to code…24-7.</p>',
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/borales',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/Borales',
                    fatype: 'github'
                },
            ],
        },
        {
            image: "images/reporters/klymyshyn.png",
            name: "Maksym Klymyshyn",
            speakerPos: [
                {
                    position: "Software Architect",
                    company: "Takeoff Technologies",
                },
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "Communication reliability within Distributed Systems",
                    description: 'I\'m going to briefly go trough most popular Resiliency patterns, retrying strategies and communication tactics in context of Microservices.',
                    lang: "[RU]"
                }
            ],
            description:
                '<p class="description-subtitle">Description</p>' +
                '<p>I\'m going to briefly go trough most popular Resiliency patterns, retrying strategies and communication tactics in context of Microservices.</p>' +
                '<p class="description-subtitle">Target audience</p>' +
                '<p>Mid+ modern organizations moving towards Microservices (hence, into Distributed Systems world) to gain mid and long-term benefits such as contract-based development (or API-first development) which leads to multiple independent pipelines of development processes. Yet with such benefits tradeoffs of distributes systems comes in. The purpose of my workshop is to point a direction and give a broader understanding of the common problems within DS environment.</p>' +
                '<p class="description-subtitle">What kind of tools will you use for that? What equipment is needed for the workshop?</p>' +
                '<p>Nothing specific</p>' +
                '<p class="description-subtitle">Who needs this workshop?</p>' +
                '<p>Software Architects and mid+ developers who are interested in Distributed Systems or moving towards it.</p>' +
                '<p class="description-subtitle">About speaker</p>' +
                '<p>Maksym specialized in software architecture, distributed systems, technical team leadership, and management of distributed teams with 7+ years of experience with eGrocery and grocery retail automation.</p>',
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/max.klymyshyn',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/maxmaxmaxmax',
                    fatype: 'twitter'
                },
                {
                    link: 'http://linkedin.com/in/klymyshyn/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://github.com/joymax',
                    fatype: 'github'
                }
            ],
        },
        {
            image: "images/reporters/nick-lototskiy.jpg",
            name: "Nick Lototskiy",
            speakerPos: [
                {
                    position: "Software Architect",
                    company: "Takeoff Technologies",
                },
            ],
            country: "Ukraine",
            city: "Kharkiv",
            rept: [
                {
                    title: "Rx.js - what I do wrong?",
                    description: 'Workshop described about Rx,.js library. The first and thae main goal how to create observables in the right way without re-invent the wheel. The socond how to switch to observable mind? Why so dangerous nested observables  and how to change your mindset for change 5th to 6th library version. Also would be disscussed main mistakes working with observables.',
                    lang: "[RU]"
                }
            ],
            description:
                '<p class="description-subtitle">Description</p>' +
                '<p>Workshop described about Rx,.js library. The first and thae main goal how to create observables in the right way without re-invent the wheel. The socond how to switch to observable mind? Why so dangerous nested observables  and how to change your mindset for change 5th to 6th library version. Also would be disscussed main mistakes working with observables.</p>' +
                '<p>If you use observables you van avoid new mistakes. If you never use them you hear about the great mechanism for working with reactive data. </p>' +
                '<p class="description-subtitle">Target audience</p>' +
                '<p>JS developers, angular develoers, node.js developers(middle level)</p>' +
                '<p class="description-subtitle">What kind of tools will you use for that? What equipment is needed for the workshop?</p>' +
                '<a target="_blank" class="mb-3" href="https://www.youtube.com/watch?v=LpE4vuJnCcA">Nick Lototskiy - When should I start writing my unit tests ?</a>' +
                '<p class="description-subtitle">About speaker</p>' +
                '<p>Nick Lototskiy. DevOps lead at Namecheap.com. More than 15 years in IT. Nick conduct all steps from automation QA to Technical Expert. Author more than 10 courses about JS, Node.js, Angular, etc. </p>',
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://github.com/maltez',
                    fatype: 'github'
                }
            ],
        },
    ];


    var socialsItem = "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
    $.template("socialsTemplate", socialsItem);

    var fileItem = "<a class='speakers-slide__file' href='${link}' title='${title}' target='_blank'></a>";
    $.template("filesTemplate", fileItem);

    var reportTitles = '';

    var speakerItem = "<div class='row '> <div data-modal-trigger='#workshops-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
        " <div class='speakers-slide__img-wrapper'>" + "<img src='${image}' alt=''>" +
        "</div> <div class='speakers-slide__info-wrapper'> <div class='speakers-slide__info'>" +
        "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name' itemprop='name' >${name}</span></h3>" +
        "<p class='speakers-slider__info__place-of-work'>" +
        '{{each speakerPos }} ' +
        "<span class='speakers-slider__info-position' itemprop='jobTitle'>{{html $value.position}}@</span>" +
        "<span class='speakers-slider__info-company' itemprop='worksFor' itemscope itemtype='http://schema.org/Organization'><u itemprop='name'>{{html $value.company}}</u></span> </br>" +
        '{{/each}}' +
        "</p>" +
        "<p class='speakers-slider__info__place'><span class='speakers-slider__info-country' >${country}, </span>" +
        "<span class='speakers-slider__info-city' '>${city}</span></p>" +
        "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept }} {{html $value.title}} {{/each}} <span class='info-rept__lang'>{{each rept }} {{html $value.lang}} {{/each}}</span></br> </br></p>" +
        "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> <div class='speakers-slide__files'>{{html filesRendered}}</div></div> </div> </div></div>";
    $.template("speakerTemplate", speakerItem);



    function renderWorkshopsCarousel() {

        // start render all
        $.each(workshops, function (i, sp) {
            $.each($.tmpl("socialsTemplate", sp.socials), function (a, i) { sp.socialsRendered += i.outerHTML; });

            if (sp.files) {
                $.each($.tmpl("filesTemplate", sp.files), function (a, i) { sp.filesRendered += i.outerHTML; });
            }
        });

        var renderedWorkshops = [];
        $.each($.tmpl("speakerTemplate", workshops), function (a, i) {
            renderedWorkshops.push(i.outerHTML.replace('__ReplaceWithIndex', a));
        });

        var finalSliderHtml = '';
        var ifmobile = $(document).width() < 720;
        // var iftablet = $(document).width() < 960;

        for (var i = 0; i < renderedWorkshops.length; i++) {
            var activeClass = '';
            // var colClass = iftablet ? (ifmobile ? 'col-10' : 'col-md-6') : 'col-lg-4';
            var colClass = 'col-10 col-sm-6 col-lg-4';
            if (i === 0) {
                activeClass = 'active';
            }
            finalSliderHtml += '<div class="speakers-slide ' + colClass + '" itemprop="performer" itemscope itemtype="http://schema.org/Person">';
            finalSliderHtml += renderedWorkshops[i];

            // if(!ifmobile && renderedWorkshops[i+1]) {
            //   finalSliderHtml+=renderedWorkshops[i+1];
            //   i++;
            // }

            finalSliderHtml += '</div>'
        }



        $('#workshopsSlider').html(finalSliderHtml);
    }

    renderWorkshopsCarousel();

    $(document).on('click', '[data-modal-trigger="#workshops-modal"]', function () {
        var $speakerInfoBlock = $(this);
        loadSpeakerModal($speakerInfoBlock);
    });

    function loadSpeakerModal($speakerInfoBlock) {
        var $modalBody = $('#workshops-modal'),
            $modalSpeakerAvatar = $modalBody.find('.img-fluid'),
            $modalNameElement = $modalBody.find('.speaker__name'),
            $modalSpeakerPosition = $modalBody.find('.speaker__position'),
            $modalSpeakerCompany = $modalBody.find('.speaker__company'),
            $modalSpeakerCountry = $modalBody.find('.speaker__country'),
            $modalSpeakerCity = $modalBody.find('.speaker__city'),
            $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
            $modalreportsContainer = $modalBody.find('.modal-body__reports'),
            $modalSpeakerAboutText = $modalBody.find('.speaker-text').toggle(false);

        var speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

        var $prevButton = $modalBody.find('button.prev');
        var $nextButton = $modalBody.find('button.next');

        $prevButton.unbind('click').click(function () {
            var prevIndex = speakerIndex == 0 ? (speakers.length - 1) : speakerIndex - 1;

            $('#workshops-modal').modal('hide');
            setTimeout(function () {
                loadSpeakerModal($('[data-item-index="' + prevIndex + '"]'));
            }, 600);

        });

        $nextButton.unbind('click').click(function () {
            var nextIndex = speakerIndex == speakers.length - 1 ? 0 : speakerIndex + 1;

            $('#workshops-modal').modal('hide');
            setTimeout(function () {
                loadSpeakerModal($('[data-item-index="' + nextIndex + '"]'));
            }, 600);

        });

        var speakerData = workshops[speakerIndex];

        if (speakerData) {
            var speakerAvatar = speakerData.image,
                speakerName = speakerData.name,
                speakerPos = speakerData.speakerPos,
                speakerCompany = speakerData.company,
                speakerCountry = speakerData.country,
                speakerCity = speakerData.city,
                reports = speakerData.rept,
                description = speakerData.description,
                reportsContent = '',
                positionContent = '',
                speakerAboutText = speakerData.aboutSpeaker;

            reports.forEach(function (item, i, arr) {
                reportsContent += '<h2 class="modal-body__title">' + item.title + '<span class="title__lang">' + item.lang + '</span>' + '</h2>' + '<div class="modal-body__text"></div>';
            });

            speakerPos.forEach(function (item, i, arr) {
                positionContent += '<p class="speaker-position">' + item.position + '@' + '<span >' + item.company + '</span>' + '</p>';
            });

            speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
            speakerName && $modalNameElement.text(speakerName);
            // speakerPosition && $modalSpeakerPosition.text(speakerPosition.position, speakerPosition.company);
            speakerCompany && $modalSpeakerCompany.text(speakerCompany);
            speakerCountry && $modalSpeakerCountry.text(speakerCountry);
            speakerCity && $modalSpeakerCity.text(speakerCity);

            reportsContent && $modalreportsContainer.html(reportsContent);
            positionContent && $modalSpeakerPosition.html(positionContent);

            speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').html(speakerAboutText).end().toggle(true);
            description && $modalreportsContainer.find('.modal-body__text').html(description).end().toggle(true);
            $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


            $('#workshops-modal').modal('show');
        }
    }

});
