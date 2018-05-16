$(document).ready(function(){

  var filters = [
    'React', 'NativeScript', 'Angular', 'Node.js', 'ExpressJS', 'MongoDB', 'PgSQL', 'JavaScript',
    'WebAssembly', 'Kubernetes', 'Azure', 'Go', 'Redux/Flow', 'Docker'
  ];

  var speakers = [
    {
      image: "images/reporters/asimhussain.png",
      name: "Asim Hussain",
      position: "Cloud Developer Advocate" ,
      company: "Microsoft",
      rept: [
        {
          title: "Serverless & SPAs, a match made in Spevan",
          description: "There is a wrong way and a right way to deploy, scale and architect an SPA. If you do it the wrong way you DON'T get the advantages of an SPA, you might as well have built a server-side Express app. If you do it the right way, you can take advantage of optimisations that give you epic scalability, with super low latencies at a fraction of the cost. In this talk, I'll teach you the right way to host your SPA (hint: don't use node). I'll unlock the doors to the hidden free caching layer on the internet. I'll prove why serverless & SPAs complement each other so perfectly and I'll show you how easy it is to build the rest of your application using a serverless stack."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/jawache',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/jawache',
          fatype: 'twitter'
        },
        {
          link: 'https://codecraft.tv',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/ivan_jovanovich.png",
      name: "Ivan Jovanovic",
      position: "Senior Software Engineer" ,
      company: "nearForm",
      rept: [
        {
          title: "Serverless - the way microservices should be",
          description: "Serverless, the buzzword that we’re hearing probably every day. What’s that exactly? Serverless is the way microservices should be. It will save you money, time, and you will be able to easily build, test and deploy your applications. Serverless is here to stay, let’s learn how to use it!"
        }
      ],
      aboutSpeaker: '',
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
          link: 'https://ivanjov.com/',
          fatype: 'link'
        }
      ]
    },
    {
      image: "https://pbs.twimg.com/profile_images/875823348118417408/WSMpFKgm_400x400.jpg",
      name: "Aleksandra Shinkevich",
      position: "Full-stack NodeJS Developer" ,
      company: "LOVATA",
      rept: [
        {
          title: "Как подготовить выступление. Пошаговое руководство спикеру от организатора",
          description: "",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/aleksandra.shinkevich',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/neesoglasnaja',
          fatype: 'github'
        },
        {
          link: 'http://ash-web.by',
          fatype: 'link'
        }
      ]
    },
    {
      image: "images/reporters/trishul_goel.png",
      name: "Trishul Goel",
      position: "Tech Speaker" ,
      company: "Mozilla",
      rept: [
        {
          title: "Cross browser extensions - lets make one",
          description: "Browsers are built on very simple principle - “one fit that suits all”. We use number of browser extensions to make most of our browser. How about being on other side of table; lets create one. From Javascript developer to a cross browser extension developer in 30 mins.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/tsl143',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/trishulgoel',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/trishul/',
          fatype: 'linkedin-square'
        },
        {
          link: 'http://github.com/tsl143/',
          fatype: 'github'
        },
        {
          link: 'http://trishulgoel.com/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/gerard.jpg",
      name: "Gerard Sans",
      position: "Google Developer Expert" ,
      company: "Freelance",
      rept: [
        {
          title: "Advanced State Management using ngrx v6",
          description: "State Management is key to build modern Web Apps",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/gerardsans',
          fatype: 'twitter'
        },
        {
          link: 'http://github.com/gsans',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/4508433/gerard-sans',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://medium.com/@gerard.sans',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/natalia_tepluhina.jpg",
      name: "Natalia Tepluhina",
      position: "Frontend Developer" ,
      company: "Scalac (Gdansk, Poland)",
      rept: [
        {
          title: "Workshop: Simple pet fetching web app using VueJS",
          description: "Mini-workshop to teach Vue.js in a cool and fun way to 'foxy people who identify as women'. ",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/N_Tepluhina',
          fatype: 'twitter'
        }
      ]
    },
    {
      image: "images/reporters/henning_muszynski.png",
      name: "Henning Muszynski",
      position: "Software Engineer" ,
      company: "Doist",
      rept: [
        {
          title: "The ABC of Coded Style Guides",
          description: "Teams today are facing similar problems: How do we encourage the reuse of existing components? How do we raise awareness for them? How do we keep them stable while keeping maintenance efforts low? How do we ensure a coherent branding without exploiting our designers? If you are worried by these questions fear no longer. I aim to show you a way out of this self-made jungle into a brighter world of coded style guides. We will explore together how we can tear down walls between design and development and how everyone can benefit from introducing living component directories into their project."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/henningmu',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/henningmus',
          fatype: 'twitter'
        },
        {
          link: 'http://henningmu.com/',
          fatype: 'link'
        }
      ]
    },
    {
      image: "https://double-r.nl/rowdyrabouw.jpg",
      name: "Rowdy Rabouw",
      position: "web development" ,
      company: "double-R",
      rept: [
        {
          title: "Unleash your web skills on native!",
          description: "Did you know you can use your knowledge of HTML, CSS and JavaScript to build truly native apps for iOS and Android with NativeScript? I’ll explain what NativeScript is, how it compares to other frameworks and demo how easy and fun it is to get started and how to make use of native capabilities. Do you want to build your own personal assistant like Siri? I'll show you how!"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/rowdyrabouw',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/rowdyrabouw',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/rowdyrabouw/',
          fatype: 'linkedin-square'
        }
      ]

    },
    {
      image: "images/reporters/patrick_kettner.jpeg",
      name: "Patrick Kettner",
      position: "Program Manager",
      company: "Microsoft Edge",
      rept: [
        {
          title: "Creating magic with Houdini",
          description: "Since the dawn of (internet) time, web developers have been at the mercy of browsers when it comes to features. But what if the black magic they use to create new HTML and CSS properties were given to you? Thats exactly what the Houdini working group is working to provide web developers today! In a futuristic, code heavy session I will show how in the not too distant future, you will be able to create your own custom browser features using low lever APIs never before available to developers.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/patrickkettner',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/patrickkettner',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://instagram.com/patrickkettner',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/patrickkettner',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/960588/patrick',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://patrickkettner.com',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/roman_sachenko.jpg",
      name: "Roman Sachenko",
      position: "Software Engineer" ,
      company: "DA-14",
      rept: [
        {
          title: "NodeJS Microservices + CQRS + Event Sourcing - Why do I do this?",
          description: "Why do I do this? I kept asking myself this question while working on the next project and building microservices-based architecture with CQRS and Event Sourcing. What does this system do and why is it so complicated? I'll tell you about mistakes, which I’ve made, issues, which I've faced with, and solutions, which shouldn’t be applied. I’ll share my own experience and tell about those things, I wish I’d known before I started working on the project."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/roman-sachenko',
          fatype: 'github'
        },
        /*{
          link: 'https://www.linkedin.com/in/rsachenko/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.facebook.com/rsachenko',
          fatype: 'facebook'
        },*/
        {
          link: 'https://twitter.com/RSachenko',
          fatype: 'twitter'
        },
        {
          link: 'https://stackoverflow.com/users/5132363/roman-sachenko',
          fatype: 'stack-overflow'
        }/*,
        {
          link: 'https://www.instagram.com/rsachenko/',
          fatype: 'instagram'
        },*/
      ]
    },
    {
      image: "images/reporters/oskackov.png",
      name: "Oleksandr Skachkov",
      position: "Lead FrontEnd Developer" ,
      company: "Itera",
      rept: [
        {
          title: "WebAssembly vs JavaScript: What is faster?",
          description: "As WebAssmebly is increasing its popularity and more, and more languages start to support WebAssmebly as the build target, development team start asking question when do we need to use WebAssmebly and where it is better to rely on javascript.As open source contributor to WebKit JavaScript Engine, I would like overview differences between WebAssmebly and JavaScript, that engineers should to known when choose between WebAssembly and JavaScript, and overview in which cases is WebAssembly is faster and vice verse"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/alSkachkov\n',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/alexskachkov/',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "https://scontent.fdnk1-1.fna.fbcdn.net/v/t1.0-9/27867981_1761648527232195_4674196445569727871_n.jpg?_nc_cat=0&oh=c46e67848f25c4467264711ee09a1dae&oe=5B4167D6",
      name: "Oleg Chorny",
      position: "Site Reliability Engineering Manager" ,
      company: "Ciklum",
      rept: [
        {
          title: "Observability of Cloud Native Applications",
          description: "Let's discuss how Observability enables you to write software that can be managed by software."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/oleg-chorny-57124352',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "images/reporters/leonid_baida.jpg",
      name: "Leonid Baida",
      position: "Lead Front-End Developer" ,
      company: "SPD-Ukraine",
      rept: [
        {
          title: "If you don't like how your static typing smells, maybe you do it wrong",
          description: "Статична типізація і досі лишається широкою темою для дискусій та полем для баталій. Світ JS розробки розділився на її прибічників та противників. Слід пам'ятати, що написанням типізованого коду керують інші принципи і підходи, ніж того вимагає vanilla JS. Інша філософія, якщо хочете. Дизайн типізованого JS часто суттєво різниться від нетипізованого, що і стає поширеною проблемою в освоєнні статичної типізації та її ефективного використання. Крок за кроком, черпаючи натхнення із мов програмування зі строгою типізацією, давайте розберемося, яким має бути типізований код на JS. Щоб його написання принесло користь, а не біль та розчарування. (За основу буде взято типізацію Flow, проте більшість з наведених принципів будуть актуальними також і для TypeScript)"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/leonid-bayda-46587438/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.facebook.com/leonid.baida',
          fatype: 'facebook'
        },
        {
          link: 'https://www.instagram.com/leonidbaida/',
          fatype: 'instagram'
        }
      ]
    },
    {
      image: "images/reporters/mihail_zachepilo.png",
      name: "Mihail Zachepilo",
      position: "Front End Developer" ,
      company: "Pentatonica",
      rept: [
        {
          title: "WebAssembly powered Machine Learning",
          description: "Stop talking about WebAssembly specification, let's solve a problems using it! How to WebAssembly work and how we can use it to enhance Machine Learning in browser experience."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://t.me/worldthirteen',
          fatype: 'paper-plane'
        },
      ]
    },
    {
      image: "images/program-committee/ksenia-redunova.jpg",
      name: "Ksenia Redunova",
      position: "Team Lead" ,
      company: "Lohika",
      rept: [
        {
          title: "Estimates: is there a silver bullet?",
          description: "",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/redunova',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/redunovaksenia/',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "images/reporters/roman_rodomansky.png",
      name: "Roman Rodomansky",
      position: "CTO & Co-Founder" ,
      company: "Ralabs",
      rept: [
        {
          title: "(TBD) Building media resource",
          description: "(TBD) What will you do if biggest media will ask you about new website? Seems like trivial, right? Ugh, why WordPress is not a right fit here? We'll tell you a story with problems and solutions that we raised during all phases from project first steps.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://fb.com/roman.rodomansky',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/rodomansky/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/pomapomapomapoma/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/itspoma',
          fatype: 'github'
        },
        {
          link: 'https://ralabs.org/news/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/andrew_yasinishyn.png",
      name: "Andrew Yasinishyn",
      position: "CEO & Co-Founder" ,
      company: "Ralabs",
      rept: [
        {
          title: "(TBD) Building media resource",
          description: "",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://fb.com/andrey.yasinishyn',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/andrew-yasynyshyn-0a205b69/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/yasinishyn/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/yasinishyn',
          fatype: 'github'
        }
      ]
    },
    // {
    //   image: "images/reporters/andrey_grachev.png",
    //   name: "Andrew Grachov",
    //   position: "CTO" ,
    //   company: "Crello",
    //   rept: [
    //     {
    //       title: "Universal VUE apps made easy",
    //       description: "Универсальные приложения с nuxtjs, или когда нужно просто и быстро",
    //     }
    //   ],
    //   aboutSpeaker: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.facebook.com/drontxl',
    //       fatype: 'facebook'
    //     },
    //     {
    //       link: 'https://www.linkedin.com/in/andrew-grachov/',
    //       fatype: 'linkedin-square'
    //     }
    //   ]
    // },
    {
      image: "images/reporters/denis_radin.png",
      name: "Denis Radin",
      position: "JavaScript / WebGL engineer" ,
      company: "Evolution Gaming",
      rept: [
        {
          title: "Pixel shaders based UI components in Web apps + mini workshop \"let`s write your first pixel shader\"",
          description: "5 years ago shaders became the technology behind all amazing VFX we see in computer games. Now they are ready to rock the Web. In this talk we ll dive into shaders history and theory then move to a real world usage for Web UI development with a little workshop writing your first ever pixel shader.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/denis.radin.549',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/PixelsCommander',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/denisradin/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/PixelsCommander',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/sergiy_babich.png",
      name: "Sergiy Babich",
      position: "Lead Software Developer" ,
      company: "N-iX",
      rept: [
        {
          title: "Mutilation and suffering: How I decided to create a project using only Web Components without any framework",
          description: "One pet project. One idea. One specification. That's what lead me to create app using only native web components and no framework or library. I want to share you my practical knowledge how it is even possible to create such app in such circumstances and why it is important to even do this.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/babich.ss',
          fatype: 'facebook'
        }
      ]
    },
    {
      image: "images/reporters/yuriy_sherstyuk.png",
      name: "Yuriy Sherstyuk",
      position: "Sr Front End Developer" ,
      company: "Microsoft, Autodoc",
      rept: [
        {
          title: "Algorithms in Front End: from V8 to VDOM",
          description: "Significance and importance of algorithms can not be overestimated. Even harder to learn how to apply it in the modern Front End, given how many optimizations are done for us by the engines and frameworks. The purpose of this report is to help you understand how this works at a lower level, for example V8, React and not only. Also, what we can do to make more use of the algorithm work, and spend less time and resources.",

        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'mailto:yurshery@gmail.com',
          fatype: 'envelope'
        }
      ]
    },
    {
      image: "images/reporters/radoslav_stankov.png",
      name: "Radoslav Stankov",
      position: "Developer" ,
      company: "Product Hunt",
      rept: [
        {
          title: "React Patterns at Product Hunt",
          description: "Couple React patterns I have noticed Product Hunt uses.",
        }
      ],

      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/radoslavdstankov',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/rstankov',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/radoslavstankov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/rstankov/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/rstankov/',
          fatype: 'github'
        },
        {
          link: 'http://blog.rstankov.com/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/david_kopal.png",
      name: "David Kopal",
      position: "JavaScript developer" ,
      company: "Blueberry",
      rept: [
        {
          title: "Unleash the power of the higher-order components",
          description: "Maintainable component structure is a crucial prerequisite for a stable React application. You can achieve this by writing your code in a functional way using the higher-order components (HoCs). I want to show you how to define smart HoCs and use them to enhance your presentational components. You'll also learn how to compose several HoCs to get more complex logic. Sticking to this pattern, you'll end up with reusable components that are readable and easy to test since each component is responsible only for a single task.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/coding_lawyer',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/david-kopal-54219199/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/codinglawyer',
          fatype: 'github'
        },
        {
          link: 'https://codinglawyer.net/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/arkadiy_pilguk.png",
      name: "Arkadiy Pilguk",
      position: "Software Engineer" ,
      company: "Pentatonica",
      rept: [
        {
          title: "WebGL powered Computer Vision",
          description: "How to Computer Vision inside a browser"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/arkadiypilguk',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/apilguk',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/ivan_goncharov.png",
      name: "Ivan Goncharov",
      position: "API consultant" ,
      company: "APIs.guru",
      rept: [
        {
          title: "W.T.F. is GraphQL?",
          description: "Recently, there is a lot of hype around GraphQL and you are probably wondering if it is a good fit for your project. In my talk, I want to demystify GraphQL by explaining what problems does it solve and how it works internally. I will show how to write requests and send them to the server and how they are executed under the hood. I will also talk about problems of GraphQL and how ready it is for production"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/ivan.goncharov.3591',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/E1Goncharov',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/igoncharov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/IvanGoncharov',
          fatype: 'github'
        },
        {
          link: 'https://medium.com/@IvanGoncharov',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/nikita_dubko.png",
      name: "Nikita Dubko",
      position: "Software Engineer" ,
      company: "iTechArt",
      rept: [
        {
          title: "Houdini — CSS, который JavaScript",
          description: "CSS Houdini — набор спецификаций, которые изменят веб-разработку в ближайшие годы. С их приходом простому верстальщику придется выучить JavaScript, но зато вместо ожидания появления реализации условных \"супер-мега-гридов\" в браузерах можно будет подключить полифил для CSS. И начать это делать можно уже сейчас! Или нет?"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/Dark.MeFoDy',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/dark_mefody',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/MeFoDy',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/valentyn_barmashyn.png",
      name: "Valentyn Barmashyn",
      position: "Full Stack Software Engineer, Team Lead" ,
      company: "eTeam",
      rept: [
        {
          title: "Rx in React, Rx in Angular and why we all should be friends",
          description: "React and Angular stacks became so similar In 2017-18 as they've never been before. Conceptual distinctions between them are blurring out. There only remained difference in their implementation. Let's talk about the modern work with data and events, role of flows (particularly Rx), functional programming and many more from  two points of view: practical and philosophical. We'll also dwell on the work with a code. Thus no-one will have any doubts about the fact that all of us are doing quite the same while a particular stack matters less and less."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/valentynbarmashyn',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/valentyn-barmashyn-1a323aa9/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/Va1',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/alexander_shushunov.jpg",
      name: "Alexander Shushunov",
      position: "Senior Developer" ,
      company: "EPAM",
      rept: [
        {
          title: "Let's kill lifecycle",
          description: "Do you hate lifecycle? componentWillReceiveProps make you bored? Let's make make React pure again! I will show, how lifecycle brings complexity (and errors) to your code. And how we can avoid it. Or make it more safety."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/ashushunov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/AlexanderShushunov',
          fatype: 'github'
        },
        {
          link: 'https://www.youtube.com/channel/UCujRYXmvPilNTgDw-uZQJ0Q?view_as=subscriber',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/artem_zakharchenko.jpg",
      name: "Artem Zakharchenko",
      position: "TeamLead" ,
      company: "Namecheap",
      rept: [
        {
          title: "What happens when you don't write the code. What advises would I like to take 10 years ago",
          description: "Это доклад о том как меняется восприятие индустрии с возрастном и приходящим опытом"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/Javascriptdeveloper',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/blackrabbit99?lang=en',
          fatype: 'twitter'
        }
      ]
    },
    {
      image: "images/reporters/andrey_kucherenko.png",
      name: "Andrey Kucherenko",
      position: "Lead Software Engineer" ,
      company: "EPAM System",
      rept: [
        {
          title: "Code copy/paste detection on JavaScript",
          description: "During the talk I will describe how to solve task of copy/paste detection with javascript. I will start with task, areas of apply of the task, tools and algorithms for solving copy.paste detection task."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/andrey.kucherenko',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/a_kucherenko',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/kucherenko/',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/dovhan_denys.jpg",
      name: "Denys Dovhan",
      position: "Software Consultant" ,
      company: "Bizico",
      rept: [
        {
          title: "Automating GitHub workflow with probot",
          description: "Most of developers are passionated in Open Source, some of them have their own OS projects, some of them have commercial projects hosted on GitHub. Automating projects workflow can simplify daily work and make typical tasks automated.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/denysdovhan',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/denysdovhan',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/denysdovhan/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/denysdovhan/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/denysdovhan',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/5508862/denysdovhan',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://denysdovhan.com/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/valerii_sorokobatko.jpg",
      name: "Valerii Sorokobatko",
      position: "Software Architect" ,
      company: "Plarium",
      rept: [
        {
          title: "Parsing Strings using (in)Finite-State-Machine and Prepack",
          description: "I became interested in parsers when I started to use CSS in JS libraries. I am in love with performance and if something works slow - I always try to find the ways to improve it. One of the  CSS in JS problem - parsing CSS strings in runtime.\n" +
          "\n" +
          "Especially if solution should support syntax validation, interpolation for dynamic CSS rules and be super fast and small.\n" +
          "\n" +
          "Of course we can use postCSS or similar lib to parse CSS to AST, validate it, process it and build final CSS but this approach is not the best for runtime environment (browser).\n" +
          "\n" +
          "Last year I spent a lot of time for research an development the way to build parser for such cases (and not only for CSS). At OdessaJS I would like to speak about:\n" +
          "\n" +
          "- Basic Parser theory\n" +
          "- How to build parser using Finite-state machine\n" +
          "- How to develop parser with super readable code (even juniors could easily contribute it and add new syntax rules without additional knowledges)\n" +
          "- My fist successful experience using Prepack by Facebook - pre-evaluate parser and compress it to 800 bytes.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/tuchk4',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/tuchk4',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/tuchk4',
          fatype: 'github'
        },
        {
          link: 'https://medium.com/@tuchk4',
          fatype: 'link'
        },
      ]
    },
  ];


  /* <a href="https://github.com/roman-sachenko">
      <i class="fa fa-github" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/in/rsachenko/">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.facebook.com/rsachenko">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="https://twitter.com/RSachenko">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
    <a href="https://stackoverflow.com/users/5132363/roman-sachenko">
      <i class="fa fa-stack-overflow" aria-hidden="true"></i>
    </a>
    <a href="https://www.instagram.com/rsachenko/">
      <i class="fa fa-instagram" aria-hidden="true"></i>
    </a>
    <a href="https://medium.com/@rsachenko">
      <i class="fa fa-medium" aria-hidden="true"></i>
    </a>*/
  var socialsItem = "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
  $.template( "socialsTemplate", socialsItem );

  var reportTitles = '';

  var speakerItem = "<div class='row h-100'> <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
    " <div class='speakers-slide__img-wrapper'>" + "<img src='${image}' alt=''>" +
    "</div> <div class='speakers-slide__info-wrapper'> <div class='speakers-slide__info'>"+
    "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name'>${name}</span></h3>"+
    "<p class='speakers-slider__info__place-of-work'><span class='speakers-slider__info-position'>${position} @</span>" +
    " <span class='speakers-slider__info-company'>${company}</span></p>"+
    "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept}} ${$value.title}</br>{{/each}}</p>"+
    "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> </div> </div> </div></div>";
  $.template( "speakerTemplate", speakerItem );



  function renderSpeakersCarousel() {

    // start render all
    $.each(speakers, function(i, sp) {
      $.each($.tmpl("socialsTemplate", sp.socials ), function(a, i){ sp.socialsRendered += i.outerHTML; });
    });

    var renderedSpeakers = [];
    $.each($.tmpl("speakerTemplate", speakers ), function(a, i){
      renderedSpeakers.push(i.outerHTML.replace('__ReplaceWithIndex', a));
    });

    var finalSliderHtml = '';
    var ifmobile = $(document).width() < 720;
    // var iftablet = $(document).width() < 960;

    for (var i=0; i< renderedSpeakers.length; i++) {
      var activeClass = '';
      // var colClass = iftablet ? (ifmobile ? 'col-10' : 'col-md-6') : 'col-lg-4';
      var colClass ='col-10 col-sm-6 col-lg-4';
      if (i===0) {
        activeClass = 'active';
      }
      finalSliderHtml+= '<div class="speakers-slide '+colClass+'">';
      finalSliderHtml+=renderedSpeakers[i];

      // if(!ifmobile && renderedSpeakers[i+1]) {
      //   finalSliderHtml+=renderedSpeakers[i+1];
      //   i++;
      // }

      finalSliderHtml+='</div>'
    }



    $('#speakersSlider').html(finalSliderHtml);
  }

  renderSpeakersCarousel();

  $(document).on('click', '[data-modal-trigger="#speaker-modal"]', function() {
    var $speakerInfoBlock = $(this);
    loadSpeakerModal($speakerInfoBlock);
  });

  function loadSpeakerModal($speakerInfoBlock) {
    var $modalBody = $('#speaker-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid'),
      $modalNameElement = $modalBody.find('.speaker__name'),
      $modalSpeakerPosition = $modalBody.find('.speaker__position'),
      $modalSpeakerCompany = $modalBody.find('.speaker__company'),
      $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
      $modalreportsContainer = $modalBody.find('.modal-body__reports'),
      $modalSpeakerAboutText = $modalBody.find('.speaker-text').toggle(false);

    var speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

    var $prevButton = $modalBody.find('button.prev');
    var $nextButton = $modalBody.find('button.next');

    $prevButton.unbind('click').click(function(){
      var prevIndex = speakerIndex == 0 ? (speakers.length-1) : speakerIndex - 1;
      console.log(prevIndex);
      $('#speaker-modal').modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);

    });

    $nextButton.unbind('click').click(function(){
      var nextIndex = speakerIndex == speakers.length-1 ? 0 : speakerIndex + 1;
      console.log(nextIndex);
      $('#speaker-modal').modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+nextIndex+'"]'));
      },600);

    });

    var speakerData = speakers[speakerIndex];

    if (speakerData) {
      var speakerAvatar = speakerData.image,
        speakerName = speakerData.name,
        speakerPosition = speakerData.position,
        speakerCompany = speakerData.company,
        reports = speakerData.rept,
        reportsContent = '',
        speakerAboutText = speakerData.aboutSpeaker;

      reports.forEach(function (item, i, arr) {
        reportsContent += '<h2 class="modal-body__title">'+ item.title +'</h2>' + '<p class="modal-body__text">'+ item.description +'</p>';
      });

      speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
      speakerName && $modalNameElement.text(speakerName);
      speakerPosition && $modalSpeakerPosition.text(speakerPosition);
      speakerCompany && $modalSpeakerCompany.text(speakerCompany);

      reportsContent && $modalreportsContainer.html(reportsContent);

      speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(speakerAboutText).end().toggle(true);
      $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


      $('#speaker-modal').modal('show');
    }
  }

});
