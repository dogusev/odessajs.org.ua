$(document).ready(function() {
  var speakers = [
    {
      image: "img-min/2020/speakers/vladimir_novic.jpg",
      name: "Vladimir Novick",
      speakerPos: [
        {
          position: "Software Architect & Consultant, Google Developer Expert",
          company: ""
        }
      ],
      country: "",
      city: "",
      rept: [
        {
          title: "Moving from JavaScript to ReasonML",
          description:
            "Created by Jordan Walke at Facebook, ReasonML is a syntax extension and toolchain for OCaml (functional programming language) that lets you write simple, fast, and quality type-safe code leveraging JavaScript and OCaml ecosystems. The cool part is that Reason looks very close to JavaScript, but it has functional languages constructs such as pattern matching, variants and amazing type system. In this talk we understand what benefits ReasonML gives us compared to JavaScript/TypeScript/Flow, why it's used in critical financial web apps, in Facebook Messenger and how we can start using it in our existing JavaScript projects using both familiar JS ecosystem we are so used to. There is a saying 'In Reason if it compiles - it works' - we will see why this is actually true and not just a saying.",
          lang: "[EN]"
        },
        {
          title:
            "Architecting scalable serverless applications with GraphQL api",
          description:
            "In this talk, we will see what are the benefits of building event-driven Realtime GraphQL backend and what problems it will solve. We will see how we can bootstrap our GraphQL backend fast with free and open-source Hasura engine and connect it to serverless functions for custom business logic, providing our web or mobile apps with infinitely scalable backend with modern GraphQL API.",
          lang: "[EN]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://github.com/vnovick",
          fatype: "github"
        },
        {
          link: "https://twitter.com/VladimirNovick",
          fatype: "twitter"
        },
        {
          link: "https://www.linkedin.com/in/vnovick",
          fatype: "linkedin"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/jamie_maria_schouren.jpg",
      name: "Jamie Maria Schouren ",
      speakerPos: [
        {
          position: "Co-founder",
          company: "DEITY BV"
        }
      ],
      country: "The Netherlands",
      city: "Eindhoven",
      rept: [
        {
          title: "Software Architectures gone wild (Speech)",
          description:
            "<h4>SOFTWARE ARCHITECTURES GONE WILD</h4>" +
            "Buckle-up and get ready for a (half) rush hour through the world of Software Architectures! Everyone who works in software has heard of terms like ‘monoliths’, ‘headless’ , ‘microservices’ and even ’service oriented architectures’. We all know what they are, but how much do we really know about them? In this half an hour, we will show you the differences, the similarities, when to use them, when not to use them, the success stories and of course: the massive failures. Get ready for a comedic blast, architecture is going to be fast and fun! ",
          lang: "[EN]"
        },
        {
          title: "What the Hack?! Unicorns on Steroids (TechCorner)",
          description:
            "Ever wondered how companies such as Facebook, Netflix and AirBnB were able to grow as fast as they did? How they started, what method they used? Growth hacking started as a strategy for early-stage startups who need massive growth in a short time on a (very) small budget, with a team of engineers and marketeers. In this fun and energetic talk Jamie Maria will explain the basics of Growth Hacking, what it is, how it is done, how the Unicorns we know today were able to get BIG in no-time - and most importantly, how you can growth hack your company!",

          lang: "[EN]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link:
            "https://www.linkedin.com/in/jamie-maria-schouren-%E2%9C%85-80583145/",
          fatype: "linkedin"
        },
        {
          link: "https://twitter.com/JamieMariaS",
          fatype: "twitter"
        },
        {
          link: "https://github.com/deity-io/falcon",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/joel_lord.jpg",
      name: "Joel Lord",
      speakerPos: [
        {
          position: "Developer Advocate",
          company: "Red Hat OpenShift"
        }
      ],
      country: "Canada",
      city: "Toronto",
      rept: [
        {
          title: "Kube Restaraunt",
          description:
            "You’ve been to a restaurant before, right? Have you noticed how everything is structured? Everyone has a job and there is a chain of command. You can’t just walk into the kitchen and tell the cook how you want your steak done.  Kubernetes is actually very similar to this. You will deploy some pods that do specific things and set the rules of communications that dictate how they all talk to each other. By expanding on the idea of a restaurant, the speaker will slowly introduce some of the basic concepts behind modern DevOps in a fun and easy to understand way. The attendees will come out of this talk with a whole new perspective on what Kubernetes does and how to apply this in their software development practices.",
          lang: "[EN]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/joel-lord/",
          fatype: "linkedin"
        },
        {
          link: "https://twitter.com/joel__lord",
          fatype: "twitter"
        },
        {
          link: "https://github.com/joellord",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/yoni_goldberg.jpg",
      name: "Yoni Goldberg",
      speakerPos: [
        {
          position: "Architect Consultant",
          company: "Yoni Goldberg"
        }
      ],
      country: "Israel",
      city: "Haifa",
      rept: [
        {
          title:
            "Testing in production - a practical overview with live examples",
          description:
            "This is probably a mega-trend in testing which is covered in many 2020 conferences. It doesn't mean simply testing over production rather a set of techniques that makes the tests more realistic. Most talks on this matter are theoretic, mine aims to bring this fascinating trend down to earth and show live how Node.js code and test runners can discover severe issues that couldn't be discovered using traditional testing. Specifically, we're about to explore techniques like tap-compare, silent releases, traffic shadowing and more",
          lang: "[EN]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/yoni-goldberg-760898b/",
          fatype: "linkedin"
        },
        {
          link: "https://twitter.com/goldbergyoni",
          fatype: "twitter"
        },
        {
          link: "https://github.com/goldbergyoni",
          fatype: "github"
        },
        {
          link: "https://goldbergyoni.com/",
          fatype: "link"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/aleksandr_korotaev.jpg",
      name: "Aleksandr Korotaev",
      speakerPos: [
        {
          position: "Front-End developer",
          company: "Tinkoff"
        }
      ],
      country: "Russia",
      city: "Saint-Petersburg",
      rept: [
        {
          title: "Gif is dead. Who's next?",
          description:
            "<h4>Gif is dead. Who's next?</h4>" +
            "It is a talk about animated images formats that went after GIF. Which one will be better: mp4, webm, apng, sprites or vector-based? Actually no right answer. I want to cover this topic from different sides: HTML app, WebGL game and how to automate preparing of animations for different platforms.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/lekzd/",
          fatype: "linkedin"
        },
        {
          link: "https://twitter.com/mamu_eval",
          fatype: "twitter"
        },
        {
          link: "https://github.com/lekzd",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/viktor_turskyi.jpg",
      name: "Viktor Turskyi",
      speakerPos: [
        {
          position: "CEO and Solution architect",
          company: "WebbyLab"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title: "Effective NodeJS Application Development ",
          description: "",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://twitter.com/koorchik",
          fatype: "twitter"
        },
        {
          link: "https://github.com/koorchik",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/timofey_lavrenyuk.jpeg",
      name: "Timofey Lavrenyuk",
      speakerPos: [
        {
          position: "Software Engineer",
          company: "Provectus"
        }
      ],
      country: "Ukraine",
      city: "Odessa",
      rept: [
        {
          title: "About Dart",
          description:
            "Dart is a coding language aimed to correct JavaScript flaws. Though it does its job perfectly, Dart didn't manage to become popular among developers." +
            "In this talk we're going to discuss:" +
            "<ul>" +
            "<li>  what's so special about Dart to use it instead of JavaScript</li>" +
            "<li>  historical data about the language</li>" +
            "<li>  why you need to try Dart even if you're not going to code in it</li>" +
            "<li>  how we use it developing a small project and will continue using this language</li>" +
            "</ul>",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://twitter.com/geek_timofey",
          fatype: "twitter"
        },
        {
          link: "https://www.linkedin.com/in/lavrenyuk-t-042b4263/",
          fatype: "linkedin"
        },
        {
          link: "https://medium.com/@timofeylavrenuk",
          fatype: "medium"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/carol_soares.jpg",
      name: "Caroline Soares",
      speakerPos: [
        {
          position: "React Mentor",
          company: "Bioritmo "
        }
      ],
      country: "Brazil",
      city: "São Paulo",
      rept: [
        {
          title: "Accessibility with JS",
          description:
            "<h4>Short overview</h4>" +
            "We live in a world of about 1 billion people with some kind of disability. More than three billion do not have internet access or have poor access. How are we developing applications to make the web of the future more accessible and inclusive through our code? Let's understand how JavaScript can help change this scenario." +
            "<h4>Bio</h4>" +
            "Frontend Engineer and React instructor based in Sao Paulo/Brazil. I'm studying modern software engineer at a public university. Also, I have a strong presence in events and tech community here giving tech talks, organizing meetups and contributing to open source projects. Recently, I've been creating tech and career content focused on diversity and people who are new in the area. ",
          lang: "[EN]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://twitter.com/carolcode",
          fatype: "twitter"
        },
        {
          link: "https://www.linkedin.com/in/carolcode/",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/carolcodes",
          fatype: "github"
        },
        {
          link: "https://divaloper.com.br/",
          fatype: "link"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/dmitriy_gusev.jpg",
      name: "Dmitriy Gusev",
      speakerPos: [
        {
          position: "Team Lead",
          company: "Oracle"
        }
      ],
      country: "Ukraine",
      city: "Odessa",
      rept: [
        {
          title: "JS was invented in Odessa",
          description:
            "JavaScript is wild and dangerous. I’ve been using it for years and time to time faced with the same issues." +
            "Also being an interviewer I talked to lots of people. And most of them able to answer the questions correctly, but can not explain why it works so." +
            "In my talk, I prepared examples of ‘what is wrong with JS’ and explained why it works so based on ECMA specifications." +
            "I've been working on startup Q-Page - landing page builder" +
            "Many years ago, I started as .Net developer, before the day I met JS =)" +
            "JS - one love.  What are 3 things I enjoy  except coding is" +
            "spending time with my wife and 3 y.o. son" +
            "and traveling around",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/dmitriy-gusev/",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/dogusev",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/maxym_klymyshyn.jpg",
      name: "Maxym Klymyshyn",
      speakerPos: [
        {
          position: "Engineering Lead",
          company: "Takeoff Technologies"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title: "Crafting Software Architecture decisions",
          description:
            "Software Architecture is an overloaded term nowadays. Let's dig deep into its meaning: how to define software architecture, what's right, what's wrong. What's considered as software architecture, and what's not. What's not technical debt? What needs to be addressed to make better decisions as a technical leader." +
            "<ul>" +
            "<li>How to evaluate potential software architecture</li>" +
            "<li>Identification & Elimination of Technical Debt</li>" +
            "<li>Constant learning based on feedback</li>" +
            "<li>Software Architecture is an overloaded term nowadays. Let's dig deep into its meaning: how to define software architecture, how to define tech debt, what's the definition of right and wrong, what needs should be addressed to make better decisions as a technical leader.</li>" +
            "</ul>" +
            "<h4>Audience:</h4>" +
            "Software Architects, Tech Leads, Product Managers" +
            "<h4>Bio:</h4>" +
            "technical leadership, software architecture, organization design, people management, product management Maksym specialized in software architecture, distributed systems, technical team leadership, and management of distributed teams with 7+ years of experience with eGrocery and grocery retail automation.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "http://linkedin.com/in/klymyshyn",
          fatype: "linkedin"
        },
        {
          link: "http://github.com/joymax",
          fatype: "github"
        },
        {
          link: "http://twitter.com/maxmaxmaxmax",
          fatype: "twitter"
        },
        {
          link: "takeoff.com",
          fatype: "link"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/andrii_shumada.jpg",
      name: "Andrii Shumada",
      speakerPos: [
        {
          position: "TeamLead",
          company: "WalkMe and Ciklum"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title: "No excuses for not writing tests!",
          description:
            "Hey you! Why do you not writing tests? Maybe you don’t know why do you need to write them? Maybe you have doubts about who should write tests? Or your manager doesn’t give you time to write tests? Or you just don’t know how to write tests or choose the right technologies, or how to choose between UI, integration or unit test for your case? Come to my talk, and we will figure out that together! ",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/andriishumada/",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/eagleeye",
          fatype: "github"
        },
        {
          link: "https://twitter.com/eagleeye_s",
          fatype: "twitter"
        },
        {
          link: "https://eagleeye.github.io/",
          fatype: "link"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/roman_yakobchuk.jpg",
      name: "Roman Yakobchuk",
      speakerPos: [
        {
          position: "Site Enginering Manager",
          company: "Wix"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title:
            "Developer career roadmap: a journey from intern to… whatever makes you happy",
          description:
            "I’ve been working with juniors for a while. It’s hard to count workshops, lectures, training, and consulting sessions, but over 1000 students finished my React courses, 29 people started their career with our Wix Kickstart program. And the most frequent question I’ve got is the one that any professional should be asking: what else should I learn? How can I reach a new level?" +
            "In this lecture, I’ll share with you my very opinionated knowledge map on developing yourself." +
            "We will talk about the following topics:" +
            "<ul>" +
            "<li>What is essential, how to continually revisit what you think you now.</li>" +
            "<li>How to set new goals, what are the hard and soft skills, how to acquire them.</li>" +
            "<li>How to check are you going your way or just doing something because it seems right.</li>" +
            "</ul>" +
            "The awful question by HR: ‘Where do you see yourself in 5 years’ can suddenly make sense. Do you want to become a Team Lead or R&D manager, maybe you’ll be more effective as a Tech Lead, Architect, or Consultant. Perhaps it’s some narrow expertise, or even you’re real passion is Design or Product Management. Let’s find out.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "(https://www.linkedin.com/in/ya-roman",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/romabelka",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/vitalii_petrenko.jpg",
      name: "Vitalii Petrenko",
      speakerPos: [
        {
          position: " JS Master",
          company: "Evolvice"
        }
      ],
      country: "Ukraine",
      city: "Kharkiv",
      rept: [
        {
          title: "Ember.js in 2020? Why not!?",
          description:
            "<h4>Short overview</h4>" +
            "Why Ember good in modern 'VirtualDOM-world'. What's new in Ember. What about performance?. Ember vs Angular vs React vs Vue." +
            "<h4>Plan of the speach</h4>" +
            "<ul>" +
            "<li>What is Ember</li>" +
            "<li>Why it's good</li>" +
            "<li>Learning curve</li>" +
            "<li>Compare to Angular</li>" +
            "<li>Performance</li>" +
            "<li>Ember vs React vs Vue</li>" +
            "<li>Bad parts</li>" +
            "<li>Do not fear it!</li>" +
            "<li>Conclusion</li>" +
            "</ul>",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://twitter.com/zenway_js",
          fatype: "twitter"
        },
        {
          link: "hhttps://github.com/zenway-js",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/anton_cherednikov.jpg",
      name: "Anton Cherednikov",
      speakerPos: [
        {
          position: "Technical Lead",
          company: "code.store"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title:
            "How to build efficient backend based on microservice architecture",
          description:
            "This speech about micro-services, approaches, and practices in their construction. How to effectively build communication between micro-services and what approaches are commonly used for this. We will talk a little about distributed transactions. Will touch the topic of infrastructure, monitoring, and scaling components.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/anton-cherednikov/",
          fatype: "linkedin"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/ilya_zprutski.jpg",
      name: "Ilya Zaprutsi",
      speakerPos: [
        {
          position: "Team Lead",
          company: "iTechArt"
        }
      ],
      country: "Belarus",
      city: "Minsk",
      rept: [
        {
          title: "How to improve your app using browser apis",
          description:
            "Over the past years, browsers have rapidly increased the number of useful apis that help to improve our applications both in terms of performance and in terms of user experience. But in recent times, I have increasingly noticed that developers have not heard of many of them. So we’ll talk about these features and how literally a few lines of code can improve your application. And I hope that after my speech you will have a desire to integrate new APIs into your projects.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/ilya-zaprutski-253ab887/",
          fatype: "linkedin"
        },
        {
          link: "https://twitter.com/IlyaZaprutski",
          fatype: "twitter"
        },
        {
          link: "https://github.com/IlyaZaprutski",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/roman_savitskyi.jpg",
      name: "Roman Savitskyi",
      speakerPos: [
        {
          position: "Tech lead",
          company: "Infopulse"
        }
      ],
      country: "Ukraine",
      city: "Zhytomyr",
      rept: [
        {
          title: "Web performance metrics",
          description:
            "Вебпродуктивність. Що ще тут розповісти? Всі ми знаємо, що це важливо, як не отримувати таких проблем і до чого це призводить. Але якщо необхідно вирішити проблему серед тонни ресурсів важко обрати потрібний. Моя доповідь не тільки про рішення проблеми, а про находження інструментів та метрик для рішення проблеми. Чому саме ці метрики варто використовувати і як з цим жити. Метрики, практики, проблеми, рішення. Які різні поняття, а насправді це цепочки, які нам разом необхідно виставити в логічний ряд. Запрошую Вас побрейнштормити разом!",
          lang: "[UA]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.facebook.com/roman.savitskiy.104",
          fatype: "facebook"
        },
        {
          link: "https://www.linkedin.com/in/roman-savitskiy-98b49158/",
          fatype: "linkedin"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/nick_lototskiy.jpg",
      name: "Nick Lototskiy",
      speakerPos: [
        {
          position: "DevOps Evangelist",
          company: "Namecheap Inc."
        }
      ],
      country: "Ukraine",
      city: "Kharkiv",
      rept: [
        {
          title: "Prepare your NodeJS application for Kubernetes.",
          description:
            "How we can prepare our NodeJS application for Kubernetes? What is must have our application for going to Kubernetes? How this affect to application structure? Why containerization is so important? How you can troubleshoot application? How to configure health-checks and logging? How store secretes? We will touch all these topics in presentation. </br> As devops evangelist I feel pain when developers give me non-prepared application. Very often we need to rewright some parts of application and even stop releases. I hope my presentation helps to other people to avoid some mistakes. ",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.facebook.com/nick.lototskiy",
          fatype: "facebook"
        },
        {
          link: "https://www.linkedin.com/in/nick-lototskiy-68881b2b/",
          fatype: "linkedin"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/aleksandr_zinchuk.jpg",
      name: "Alexander Zinchuk",
      speakerPos: [
        {
          position: "Executive Engineer",
          company: "Anyway Labs"
        }
      ],
      country: "Spain",
      city: "Malaga",
      rept: [
        {
          title: "(Almost) winning the Telegram Web App contest",
          description:
            "This is a story about taking part in the largest JavaScript competition that took us half a year and forced to re-invent React, emphasizing speed, bundle size and attention to detail. </br> Developer competitions may be really thrilling as they force you to get out of a comfort zone to take some really low-level approaches. As we were unable to use any libraries, we needed to build up a reliable combination of our own implementations of common patterns. Among other things, I will share some useful tricks shedding light on different aspects of modern browsers and apps performance.",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.facebook.com/alexander.zinchuk",
          fatype: "facebook"
        },
        {
          link: "https://twitter.com/ajaxy_ru",
          fatype: "twitter"
        },
        {
          link: "https://es.linkedin.com/in/ajaxy/en",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/Ajaxy",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/mykhailo_sobko.jpg",
      name: "Mikhail Sobko",
      speakerPos: [
        {
          position: "Web Development Manager",
          company: "Astound Commerce"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title: "Fear & Loathing of Team Leadership",
          description:
            'Last 3 years I\'ve been working closely with the career development of really great engineers around the globe.I noticed an interesting thing in common. Despite the level of technical expertise and strong relevant experience, potential promotion to the Team Lead position causes fear, panic, and desire to lock yourself in a bedroom in order to procrastinate watching the last season of Silicon Valley "I\'m not good enough to be the Team Lead!" "I will lose my technical skills!" "How can I be a boss for my friends?!" <br>Impostor syndrome, Fear of the golden cage, is TL the next step of career development or one-way ticket? <br>Giving my speech I will try to answer the most thorny questions and provide the audience with guidance on how to act if you want to be a good Team Leader. <br>' +
            "<ul>" +
            "<li>Is there any life after Senior position?</li>" +
            "<li>How to be a good TL?</li>" +
            "<li>In what direction should I build my career TL or SA?</li>" +
            "</ul>" +
            "I've been asked these questions so a lot of times during regular one on one meetings with my teammates." +
            "I believe that this topic will provide the audience with answers to the most common questions and help to eliminate a lot of fears and stereotypes about the Team Lead position." +
            "p.s. I promise that there will be a lot of fun ;)",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://www.linkedin.com/in/mikhailsobko/",
          fatype: "linkedin"
        },
        {
          link: "https://github.com/Mykhail",
          fatype: "github"
        }
      ]
    },
    {
      image: "img-min/2020/speakers/denis_zavgorodny.jpg",
      name: "Denis Zavgorodny",
      speakerPos: [
        {
          position: "Frontend engineer",
          company: "Yola"
        }
      ],
      country: "Ukraine",
      city: "Kyiv",
      rept: [
        {
          title: "What about Biometric and U2F Token Web Authentication?",
          description:
            "Is a password web authentification convenient? We will talk about web authentification evolution, figure out how to authenticate a user in the browser and will learn about U2F authentification. Do you familiar with WebAuthn? Asymmetric cryptography and RSA key have become available on the frontend side. We will try to figure out what it is and how it works. We will learn about how we can use it." +
            "Also, we will journey to the backend side and will figure out how to work with keys and what does biometry has to do with it." +
            "There are a million ways to lose your credentials on the Web. But there are not so many ways how to identify the user in the browser. We are threatened by phishing, keylogging and a bunch of ways how to possess our credentials. So, WebAuthn is a specification for the purpose of strongly authenticating users without overheads (almost).",
          lang: "[RU]"
        }
      ],
      aboutSpeaker: "",
      socialsRendered: "",
      socials: [
        {
          link: "https://twitter.com/DenisZavgorodny",
          fatype: "twitter"
        },
        {
          link: "https://www.linkedin.com/in/denis-zavgorodny-6449726b/",
          fatype: "linkedin"
        }
      ]
    }
  ];

  var socialsItem =
    "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
  $.template("socialsTemplate", socialsItem);

  var fileItem =
    "<a class='speakers-slide__file' href='${link}' title='${title}' target='_blank'></a>";
  $.template("filesTemplate", fileItem);

  var reportTitles = "";

  var speakerItem =
    "<div class='row '> <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
    " <div class='speakers-slide__img-wrapper'>" +
    "<img src='${image}' alt=''>" +
    "</div> <div class='speakers-slide__info-wrapper'> <div class='speakers-slide__info'>" +
    "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name' itemprop='name' >${name}</span></h3>" +
    "<p class='speakers-slider__info__place-of-work'>" +
    "{{each speakerPos }} " +
    "<span class='speakers-slider__info-position' itemprop='jobTitle'>{{html $value.position}}{{if speakerPos[0].position && speakerPos[0].company}}@{{/if}}</span>" +
    "<span class='speakers-slider__info-company' itemprop='worksFor' itemscope itemtype='http://schema.org/Organization'><u itemprop='name'>{{html $value.company}}</u></span> </br>" +
    "{{/each}}" +
    "</p>" +
    "<p class='speakers-slider__info__place'><span class='speakers-slider__info-country' >{{if country}}${country}, </span>" +
    "<span class='speakers-slider__info-city' '>${city}</span>{{/if}}</p>" +
    "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept }} {{html $value.title}}  <span class='info-rept__lang'>{{html $value.lang}} </br></span>{{/each}}</br> </br></p>" +
    "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> <div class='speakers-slide__files'>{{html filesRendered}}</div></div> </div> </div></div>";
  $.template("speakerTemplate", speakerItem);

  function renderSpeakersCarousel() {
    // start render all
    $.each(speakers, function(i, sp) {
      $.each($.tmpl("socialsTemplate", sp.socials), function(a, i) {
        sp.socialsRendered += i.outerHTML;
      });

      if (sp.files) {
        $.each($.tmpl("filesTemplate", sp.files), function(a, i) {
          sp.filesRendered += i.outerHTML;
        });
      }
    });

    var renderedSpeakers = [];
    $.each($.tmpl("speakerTemplate", speakers), function(a, i) {
      renderedSpeakers.push(i.outerHTML.replace("__ReplaceWithIndex", a));
    });

    var finalSliderHtml = "";
    var ifmobile = $(document).width() < 720;
    // var iftablet = $(document).width() < 960;

    for (var i = 0; i < renderedSpeakers.length; i++) {
      var activeClass = "";
      // var colClass = iftablet ? (ifmobile ? 'col-10' : 'col-md-6') : 'col-lg-4';
      var colClass = "col-10 col-sm-6 col-lg-4";
      if (i === 0) {
        activeClass = "active";
      }
      finalSliderHtml +=
        '<div class="speakers-slide ' +
        colClass +
        '" itemprop="performer" itemscope itemtype="http://schema.org/Person">';
      finalSliderHtml += renderedSpeakers[i];

      // if(!ifmobile && renderedSpeakers[i+1]) {
      //   finalSliderHtml+=renderedSpeakers[i+1];
      //   i++;
      // }

      finalSliderHtml += "</div>";
    }

    $("#speakersSlider").html(finalSliderHtml);
  }

  renderSpeakersCarousel();

  $(document).on("click", '[data-modal-trigger="#speaker-modal"]', function() {
    var $speakerInfoBlock = $(this);
    loadSpeakerModal($speakerInfoBlock);
  });

  function loadSpeakerModal($speakerInfoBlock) {
    var $modalBody = $("#speaker-modal"),
      $modalSpeakerAvatar = $modalBody.find(".img-fluid"),
      $modalNameElement = $modalBody.find(".speaker__name"),
      $modalSpeakerPosition = $modalBody.find(".speaker__position"),
      $modalSpeakerCompany = $modalBody.find(".speaker__company"),
      $modalSpeakerCountry = $modalBody.find(".speaker__country"),
      $modalSpeakerCity = $modalBody.find(".speaker__city"),
      $modalSpeakerLinks = $modalBody.find(".speaker__link-list"),
      $modalreportsContainer = $modalBody.find(".modal-body__reports"),
      $modalSpeakerAboutText = $modalBody.find(".speaker-text").toggle(false);

    var speakerIndex = parseInt($speakerInfoBlock.attr("data-item-index"));

    var $prevButton = $modalBody.find("button.prev");
    var $nextButton = $modalBody.find("button.next");

    $prevButton.unbind("click").click(function() {
      var prevIndex =
        speakerIndex == 0 ? speakers.length - 1 : speakerIndex - 1;

      $("#speaker-modal").modal("hide");
      setTimeout(function() {
        loadSpeakerModal($('[data-item-index="' + prevIndex + '"]'));
      }, 600);
    });

    $nextButton.unbind("click").click(function() {
      var nextIndex =
        speakerIndex == speakers.length - 1 ? 0 : speakerIndex + 1;

      $("#speaker-modal").modal("hide");
      setTimeout(function() {
        loadSpeakerModal($('[data-item-index="' + nextIndex + '"]'));
      }, 600);
    });

    var speakerData = speakers[speakerIndex];

    if (speakerData) {
      var speakerAvatar = speakerData.image,
        speakerName = speakerData.name,
        speakerPos = speakerData.speakerPos,
        speakerCompany = speakerData.company,
        speakerCountry = speakerData.country,
        speakerCity = speakerData.city,
        reports = speakerData.rept,
        reportsContent = "",
        positionContent = "",
        speakerAboutText = speakerData.aboutSpeaker;

      reports.forEach(function(item, i, arr) {
        reportsContent +=
          '<h2 class="modal-body__title">' +
          item.title +
          '<span class="title__lang">' +
          item.lang +
          "</span>" +
          "</h2>" +
          '<div class="modal-body__text">' +
          item.description +
          "</div>";
      });

      speakerPos.forEach(function(item, i, arr) {
        positionContent +=
          '<p class="speaker-position">' +
          item.position +
          "@" +
          "<span >" +
          item.company +
          "</span>" +
          "</p>";
      });

      speakerAvatar && $modalSpeakerAvatar.attr("src", speakerAvatar);
      speakerName && $modalNameElement.text(speakerName);
      // speakerPosition && $modalSpeakerPosition.text(speakerPosition.position, speakerPosition.company);
      speakerCompany && $modalSpeakerCompany.text(speakerCompany);
      speakerCountry && $modalSpeakerCountry.text(speakerCountry);
      speakerCity && $modalSpeakerCity.text(speakerCity);

      reportsContent && $modalreportsContainer.html(reportsContent);
      positionContent && $modalSpeakerPosition.html(positionContent);

      speakerAboutText &&
        $modalSpeakerAboutText
          .find(".modal-body__text")
          .text(speakerAboutText)
          .end()
          .toggle(true);
      $modalSpeakerLinks.html(
        $speakerInfoBlock.find(".speakers-slide__info-links").html()
      );

      $("#speaker-modal").modal("show");
    }
  }
});
