$(document).ready(function () {

    var speakers = [
        {
            image: "images/reporters/liran-tal.png",
            name: "Liran Tal",
            position: "Developer Advocate",
            company: "Snyk.io",
            speakerPos: [
                {
                    position: "Developer Advocate",
                    company: "Snyk.io",
                },
            ],
            country: "Israel",
            city: "Tel Aviv",
            rept: [
                {
                    title: "StrangerDanger: Finding Security Vulnerabilities Before They Find You!",
                    description: "Open source modules on the NPM ecosystem are undoubtedly awesome. However, they also represent an undeniable and massive risk. You’re introducing someone else’s code into your system, often with little or no scrutiny. The wrong package can introduce severe vulnerabilities into your application, exposing your application and your user's data. This talk will use a sample application, Goof, which uses various vulnerable dependencies, which we will exploit as an attacker would. For each issue, we'll explain why it happened, show its impact, and – most importantly – see how to avoid or fix it.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://github.com/lirantal',
                    fatype: 'github'
                },
                {
                    link: 'https://twitter.com/liran_tal',
                    fatype: 'twitter'
                },
                {
                    link: 'https://medium.com/@liran.tal',
                    fatype: 'link'
                },
            ],
        },
        {
            image: "images/reporters/joel-lord.jpeg",
            name: "Joel Lord",
            speakerPos: [
                {
                    position: "Technical Evangelist",
                    company: "Auth0"
                },
            ],
            country: "Canada",
            city: "Toronto",
            rept: [
                {
                    title: " I Don't Care About Security (And Neither Should You)",
                    description: "In this talk, the attendees will learn about OAuth, JWTs and OpenID Connect.  By understanding how to use those flows, it will help developers make application more secure and save significant development time.  By using simple examples, the speaker tries to make this talk both informative and entertaining. <br>" +
                        " - OAuth<br>" +
                        " - What is OAuth<br>" +
                        " - The access code grant<br>" +
                        " - The implicit grant<br>" +
                        " - JWTs<br>" +
                        " - What is a token<br>" +
                        " - Anatomy of a JWT<br>" +
                        " - What is a refresh token<br>" +
                        " - Simple OAuth server code samples and demo<br>" +
                        " - Open ID Connect<br>" +
                        " - General flow<br>" +
                        " - OIDC demo<br>",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://github.com/joellord',
                    fatype: 'github'
                },
                {
                    link: 'https://twitter.com/joel__lord',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/joel-lord/',
                    fatype: 'linkedin'
                },
            ],
        },
        {
            image: "images/reporters/simona-cotin.png",
            name: "Simona Cotin",
            speakerPos: [
                {
                    position: "Senior Cloud Developer Advocate",
                    company: "Microsoft",
                },
            ],             
            country: "UK",
            city: "London",
            rept: [
                {
                    title: "Build Scalable APIs using GraphQL and Serverless",
                    description: "Current trends in software and backend architecture have been evolving towards a more loosely coupled more granular design. I am sure most of you have heard of microservice based architectures. The latest development on that front in the past couple of years has been the advent of serverless which allows you to run applications in very cost effective ephemeral services. This is why it is important to have a proper gateway for your API that is able to route all your requests to the designated endpoint.\n" +
                        "GraphQL stands out in that respect as being a mature open sourced standard started at Facebook. We will first have a look at how we set up our own GraphQL server locally, then we will explore the Query language and schema definitions it provides which allows you essentially query your mesh of services from a single point of entry. The beauty of that is it will notify you early if any of your endpoints is misbehaving or the schemas are out of date by erring out. Another advantage of this is that it allows for your API documentation to be a real time process and it will give you what one may call an API playground where you can query and explore your API.\n" +
                        "After we explore our serverless API we will have a look at the more advanced features and standards around mutators and resolvers and then we will close by going all in, full serverless and deploy our graphql server to a function in the cloud.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/simona_cotin',
                    fatype: 'twitter'
                }
            ],
        },
        {
            image: "images/reporters/eldar-dzhafarov.jpg",
            name: "Eldar Dzhafarov",
            speakerPos: [
                {
                    position: "CTO",
                    company: "Cross Platform Solutions GmbH",
                },
            ],            
            country: "Germany",
            city: "Berlin",
            rept: [
                {
                    title: "The Code",
                    description: "There are lot's of holy wars for the best language/framework or technology. I want to talk about the code - how our cognitive abilities shape our technologies and why there won't be a winner in the holy wars.",
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/edjafarov',
                    fatype: 'twitter'
                },
                {
                    link: 'http://eldar.djafarov.com/',
                    fatype: 'link'
                },
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
                    title: "When your wetware has too many threads - Tips from an ADHDer on how to improve your focus",
                    description: "Somewhere between 5% and 12% of adults have ADHD. Even if you do not have the disorder yourself you probably work, live or know someone who does. But the world is not designed for people with ADHD, so to be successful I’ve had to develop techniques to keep my concentration and procrastination in check.",
                    lang: "[EN]"
                }
            ],
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
            image: "images/reporters/diekussmall.jpg",
            name: "Diego González-Zúñiga",
            speakerPos: [
                {
                    position: "Senior Developer Advocate",
                    company: "Samsung",
                },
            ],
            country: "UK",
            city: "London",
            rept: [
                {
                    title: "Immersive Web",
                    description: "The talk gravitates around the concept of Immersive Technologies, viewing at the possibilities that they bring. It is focused on the intersection with other current Web Technologies and meant to be a source of ideas on how to incorporate WebXR and 3D models in our day to day workflow, in preparation upcoming Virtual and Augmented use cases.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/diekus',
                    fatype: 'twitter'
                }
            ],
        },

        {
            image: "images/reporters/irina-ziakhor.jpeg",
            name: "Irina Ziakhor",
            speakerPos: [
                {
                    position: "Functional Lead & Front End Engineer",
                    company: "Very Good Security",
                },
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "Product Engineering mindset: are you ready for the product revolution?",
                    description: 'Inspirational speech about product engineering mindset. Rapidly developing world challenges us every day. Are you ready for changes? I would like to share my own (and company) experience, best practices and why it’s important for engineers be proactive and solve problems, not only write code. Why that’s a key skill to work and grow in the best product companies and build new innovative products. Grow product community in Ukraine. Make a connection between product you build, code and your customers.',
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/IrinaZiakhor',
                    fatype: 'twitter'
                },
                {
                    link: 'https://medium.com/@irinaziakhor',
                    fatype: 'medium'
                },
                {
                    link: 'https://www.linkedin.com/in/irinaziakhor/detail/contact-info/',
                    fatype: 'linkedin'
                },
            ],

        },
        {
            image: "images/reporters/alexander-zinchuk.jpg",
            name: "Alexander Zinchuk",
            speakerPos: [
                {
                    position: "Executive Engineer",
                    company: "Anyway Labs",
                },
            ],
            country: "Spain",
            city: "Malaga",
            rept: [
                {
                    title: "Specification-Driven Development of REST APIs",
                    description: "A good API specification isn’t just about writing API documentation well. I want to share examples of how one can:<br>" +
                        "\n" +
                        "- Make unit tests simpler and more reliable;<br>" +
                        "- Set up user input preprocessing and validation;<br>" +
                        "- Automate serialization and ensure response consistency, and evenж<br>" +
                        "- Enjoy the benefits of static typing;<br>" +
                        "\n" +
                        "This approach is a compilation of different discrete ideas, all based on the smart use of an API specification. ",
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://github.com/Ajaxy',
                    fatype: 'github'
                },
                {
                    link: 'https://zinchuk.com',
                    fatype: 'link'
                }
            ],
        },
        {
            image: "images/reporters/viktor-turskyi.jpg",
            name: "Viktor Turskyi",
            speakerPos: [
                {
                    position: "CEO and Solution architect",
                    company: "WebbyLab",
                },
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "6 ways to hack your JavaScript application",
                    description: "This will be 6 live hacking demos. We will not do theory, but will see in practice how small and not always obvious errors lead to significant vulnerabilities in your JavaScript application.",
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/koorchik',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/koorchik',
                    fatype: 'github'
                }
            ],
        },

        {
            image: "images/reporters/christina-landvytovych.jpg",
            name: "Khrystyna Landvytovych",
            speakerPos: [
                {
                    position: "Frontend developer",
                    company: "UvoTeam",
                },
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "Animation in the Air",
                    description: 'If we hear about animation in webDev our first thought that it done by CSS. But I\'m sorry, you know, but that\'s not exactly true. It can be also created by JS!' +
                        'From the very beginning, you can pick up everything and speak the same language as everyone else.' +

                        'I will show you how to create modern and attractive animations(using GreenSock) that will look SUPER!' +

                        'Your customers will be impressed.Or your employer.But you too will impress yourself.This ensures that you get the level of ""skill"" that you are looking for.You can improve your skills, follow the latest trends and find out what is in trend.',
                    lang: "[UA]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/croftyland',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/Croftyland',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/christina-landvytovych-a86243132/',
                    fatype: 'linkedin'
                },
            ],

        },

        {
            image: "images/reporters/farzad-zadeh.jfif",
            name: "Farzad Yousef Zadeh",
            speakerPos: [
                {
                    position: "Senior Software Engineer",
                    company: "Futurice",
                },
            ],
            country: "Finland",
            city: "Helsinki",
            rept: [
                {
                    title: "Developing UIs without a UIs",
                    description: "Often when we need to develop a user interface (client application in any platform), we're dependent on designs and often we find ourselves modeling our applications based on these designs. But in reality, we might not need any design to develop user interfaces. In this talk, I'll show how using statecharts and headless components can solve the modeling and logic sharing problems.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/farzad_yz',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/farskid',
                    fatype: 'github'
                },
                {
                    link: 'https://farzadyz.com',
                    fatype: 'instagram'
                },
            ],
        },
        {
            image: "images/reporters/maurizio-mangione.jpg",
            name: "Maurizio Mangione",
            speakerPos: [
                {
                    position: "Developer Advocate",
                    company: "DAZN",
                },
            ], 
            country: "The Netherlads",
            city: "Amsterdam",
            rept: [
                {
                    title: "Progressive Web Apps",
                    description: "Get the best out of your Progressive Web App with Workbox JS. Workbox is a modular library made by Google that makes Progressive Web Apps development easier. During this talk, you will learn how to build PWA following the best practices and how to handle multiple caches with a few lines of code.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/granze',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/granze',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/granze/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://medium.com/@granze',
                    fatype: 'medium'
                },
            ],
        },

        {
            image: "images/reporters/jamie_maria.jpeg",
            name: "Jamie Maria Schouren",
            speakerPos: [
                {
                    position: "Co-founder",
                    company: "Deity BV",
                },
            ],  
            country: "The Netherlands",
            city: "Eindhoven",
            rept: [
                {
                    title: "The search for App-iness : Progressive Web Apps",
                    description: 'The search for App-iness : Progressive Web Apps Progressive Web Apps combine the best of the web and the best of apps.They load quickly, even on flaky networks, have an icon on the home screen, can re- engage with users by sending push notifications, and load as top- level, full screen experiences.In this talk Jamie Maria Schouren explains the what, why, and how of Progressive Web Apps, her own quest in search for "app-iness" and with code examples and real life use cases, shows why PWA’s are the future of the web!',
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/JamieMariaS',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/deity-io/falcon',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/jamie-maria-schouren-%E2%9C%85-80583145/',
                    fatype: 'linkedin'
                },
            ],

        },

        {
            image: "images/reporters/lev-vidrak.png",
            name: "Lev Vidrak",
            speakerPos: [
                {
                    position: "Leading the Guild-Masters Team",
                    company: "Wix",
                },
            ], 
            country: "Israel",
            city: "Tel-Aviv",
            rept: [
                {
                    title: "Introduction to React Native",
                    description: "React Native is Facebooks’s cross-platform framework, allowing developers to compose apps using JavaScript in a declarative way.<br></br>" +

                        "At Wix.com we are building our mobile app with React Native from the first commit almost three years ago. Scaling a production-grade application, brought us to understand the real cost-benefit of React Native.<br></br>" +

                        "In this talk, we'll start by reviewing React Native's main concepts and understand it's architecture. Continue by covering its great benefits, the challenges we overcome, and those we are still facing.",
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/LevVidrak',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/buttershub',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/levvidrak',
                    fatype: 'linkedin'
                },
            ],
        },
        {
            image: "images/reporters/christian-gill.jpeg",
            name: "Christian Gill",
            speakerPos: [
                {
                    position: "Senior Software Engineer, Team Lead",
                    company: "HousingAnywhere",
                },
            ], 
            country: "Netherlands",
            city: "Rotterdam",
            rept: [
                {
                    title: "Functional programming for the people",
                    description: "There is a lot of mystery around functional programming. Even though libraries like React and Redux brought some of its concepts to JavaScript developers, there is still a lot more to be discovered and many benefits that we can gain from it.<br></br>" +

                        "We'll go through some of the principles and fundamentals of functional programing and how we can leverage them to write composable and declarative JavaScript code.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/gillchristian',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/gillchristian',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/gillchristian/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://dev.to/gillchristian',
                    fatype: 'link'
                },
            ],
        },
        // {
        //     image: "images/reporters/noemi-rozpara_cut.jpg",
        //     name: "Noemi Rozpara",
        //     position: "React Native Developer",
        //     company: "Callstack.io",
        //     country: "Poland",
        //     city: "Wrocław",
        //     rept: [
        //         {
        //             title: "React Nativ, your UX superhero",
        //             description: 'I have one thesis for you: every programmer is also a UX guy. Do you agree? I hope I can convince you! I’ll talk about the following problems and solutions:' +
        //                 '<ul>' +
        //                 '<li>Why UX and good interface are not synonyms?</li>' +
        //                 '<li>Why proper mobile development is so important for your business?</li>' +
        //                 '<li>Why React Native is one of the best solutions?</li>' +
        //                 '<li>How to create beautiful and efficient app at the same time?</li>' +
        //                 '</ul>' +
        //                 'I will show you the ways to improve your app performance.The presentation will contain live coding with React Navigation and React Native Reanimated usage examples. ',
        //             lang: "[EN]"
        //         }
        //     ],
        //     aboutSpeaker: '',
        //     socialsRendered: '',
        //     socials: [
        //         {
        //             link: 'https://twitter.com/noemi_rozpara',
        //             fatype: 'twitter'
        //         },
        //         {
        //             link: 'https://github.com/NoemiRozpara',
        //             fatype: 'github'
        //         },
        //         {
        //             link: 'https://www.linkedin.com/in/noemi-rozpara-044575159/',
        //             fatype: 'linkedin'
        //         },
        //         {
        //             link: 'https://www.facebook.com/noemirozpara',
        //             fatype: 'facebook'
        //         },
        //     ],
        // },
        // {
        //     image: "images/reporters/nicolo-carpignoli.png",
        //     name: "Nicolò Carpignoli",
        //     position: "Web Software Engineer",
        //     company: "Chialab",
        //     country: "Italy",
        //     city: "Bologna",
        //     rept: [
        //         {
        //             title: "Cross Browser Augmented Reality on the Web in ten lines of HTML",
        //             description: 'It shows the potential of Open Source software. It is a great way to start with Augmented Reality, so basically everyone can build a cross browser AR app only knowing basics of HTML and Javascript.',
        //             lang: "[EN]"
        //         }
        //     ],
        //     aboutSpeaker: '',
        //     socialsRendered: '',
        //     socials: [
        //         {
        //             link: 'https://twitter.com/nicolocarp',
        //             fatype: 'twitter'
        //         },
        //         {
        //             link: 'https://github.com/nicolocarpignoli',
        //             fatype: 'github'
        //         },
        //         {
        //             link: 'https://www.linkedin.com/in/nicol%C3%B2-carpignoli/',
        //             fatype: 'linkedin'
        //         },
        //     ],
        //
        // },
        {
            image: "images/reporters/martin_hochel_cut.png",
            name: "Martin Hochel",
            speakerPos: [
                {
                    position: "UI Tech Lead",
                    company: "TwistoCZ",
                },
            ],            
            country: "Czech Republic",
            city: "Prague",
            rept: [
                {
                    title: "Ultimate React Component Patterns with TypeScript",
                    description: 'React and TypeScript, the ultimate duo for writing web apps with top notch developer experience. But where to start? What are the gotchas? In this live coding session we will cover all React Component patterns techniques backed by excellent DX and type safety with TypeScript ⚛⚛⚛.',
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/martin_hotell',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/Hotell',
                    fatype: 'github'
                },
                {
                    link: 'https://linkedin.com/in/hochelmartin',
                    fatype: 'linkedin'
                },
            ],

        },
        {
            image: "images/reporters/alfredo_lopez.jpeg",
            name: "Alfredo Lopez",
            speakerPos: [
                {
                    position: "Director of Engineering",
                    company: "Hearst",
                },
            ],            
            country: "USA",
            city: "New York",
            rept: [
                {
                    title: "Think Fast, First: Empowering a Performance Culture",
                    description: 'Making room for performance is difficult. It can mean different things to different people and is assumed to happen only after a project is done, but then other priorities take over.' +
                        'This is the story of establishing a performance culture by empowering non- technical team members to understand, own and act on their performance impact by following a path and checklist for each project.' +
                        'We’ll cover the different paths to improve Web Performance with some tips and tricks along the way.',
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/lfredolo',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/lfre',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/lfredo',
                    fatype: 'linkedin'
                },
            ],

        },

        {
            image: "images/reporters/alexandra-kalinina_cut.jpg",
            name: "Alexandra Kalinina",
            speakerPos: [
                {
                    position: " Fullstack JS developer",
                    company: "Valor Software",
                },
            ],             
            country: "Ukraine",
            city: "Kharkiv",
            rept: [
                {
                    title: "Mental debugging tips & tricks",
                    description: 'Sharing very usefull tips&tricks for debugging codebase: ' +
                        '<ol>' +
                        '<li>IDE configurations</li>' +
                        '<li>searching a weak unit (candies for the right answer)</li>' +
                        '<li>structural replacement (and restrictions)</li>' +
                        '</ol>',
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/korery',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/korel-san',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/alexandra-kalinina-73201548/',
                    fatype: 'linkedin'
                },
            ],

        },

        {
            image: "images/reporters/yoni-goldberg.png",
            name: "Yoni Goldberg",
            speakerPos: [
                {
                    position: "Architect Consultant",
                    company: "Yoni Goldberg",
                },
            ],             
            country: "Israel",
            city: "Haifa",
            rept: [
                {
                    title: "5 advanced & shiny testing techniques",
                    description: 'Let\'s discuss when the traditional testing tools fall short and how modern and emerging techniques can sometimes do better: In the past 10 years, the dev world had gone through dramatic changes but the testing models were left intact leaving us wondering how to test things like web components, Microservice, and Serverless.This session demonstrates the new wave of testing tools(e.g.property - based testing, consumer- driven contract, snapshot, etc) and how they can better fit modern applications.This session aims to inspire with modern testing ideas, but it also packs practical and down - to - earth code demos',
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/goldbergyoni',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/i0natan/nodebestpractices',
                    fatype: 'github'
                },
                {
                    link: 'https://www.linkedin.com/in/yoni-goldberg-760898b/',
                    fatype: 'linkedin'
                },
            ],

        },

        {
            image: "images/reporters/niels_leenheer.jpg",
            name: "Niels Leenheer",
            speakerPos: [
                {
                    position: "CTO",
                    company: "Salonhub",
                },
            ],             
            country: "The Netherlands",
            city: "Groningen",
            rept: [
                {
                    title: "Fun with Bluetooth",
                    description: 'Time for JavaScript to get physical. With WebBluetooth the browser can actually take control of all kinds of physical devices in the real world like lightbulbs, robots and even drones. And nowadays you can even run JavaScript straight on microcontrollers and even little Bluetooth beacons. This talk will teach you the basics that you need to get started.',
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/html5test',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/NielsLeenheer',
                    fatype: 'github'
                },
                {
                    link: 'https://nielsleenheer.com',
                    fatype: 'link'
                },
            ],

        },

        {
            image: "images/reporters/ilya_zaprutski.png",
            name: "Ilya Zaprutski",
            speakerPos: [
                {
                    position: "Team Lead",
                    company: "iTechArt",
                },
            ],            
            country: "Belarus",
            city: "Minsk",
            rept: [
                {
                    title: "The Art of Node.js or how to do something cool using public data",
                    description: 'Today, economists believe that the most valuable resource is not oil, but data. The Internet, in turn, is the place where we can find any information, the main thing is to know where and what to look for. During the report, I will tell how, having an original idea and a limited budget, make an application that will be really useful, and on which you can make money.',
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/ilya.zaprutski',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/IlyaZaprutski',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/ilya-zaprutski-253ab887/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://www.instagram.com/ilya.zaprutski/',
                    fatype: 'instagram'
                },
                {
                    link: 'https://github.com/IlyaZaprutski',
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
                    title: "How to start enjoy your Angular Rx and NGRX",
                    description: 'Some personal experienced tricks and tips for how to ease your data handling routines in Angular, how to not get lost in your subscriptions and how to make your ngrx looks less horrible.',
                    lang: "[UA]"
                }
            ],
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
            image: "images/reporters/artem_frantsiian.png",
            name: "Artem Frantsiian",
            speakerPos: [
                {
                    position: "Chief Technology Officer",
                    company: "482.solutions",
                },
            ],
            country: "Ukraine",
            city: "Odessa",
            rept: [
                {
                    title: "Make your OdessaJS coin",
                    description: 'Make your custom blockchain on Sawtooth framework and create blockexplorer for it. We will consider all parts of blockchain system: DLT and different consensus mechanisms, cryptography and blockchain as a technology, then build our own implementation of blockchain system via Sawtooth framework and JS and then create our blockexplorer on React.',
                    lang: "[Workshop, RU]"
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
                    lang: "[Workshop, EN]"
                }
            ],
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
            image: "images/reporters/anton_pets.png",
            name: "Anton Pets",
            speakerPos: [
                {
                    position: "Front-end Software Engineer",
                    company: "Grammarly",
                }
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "How FP made Grammarly codebase error-prone and predictable",
                    description: 'Developing frontend applications is not simple because crafting UI systems with a complex mutable state spread across the network is inherently difficult. This problem is still very new and thus does not have clear answers.At Grammarly, we have found the methodology that lets us tackle this complexity while keeping our codebase error-prone and predictable. Our approach combines the pragmatic usage of functional programming with static typing. I will start this talk from a gentle introduction to the world of Functional Programming. Then, I will walk you through the real examples of an FP usage in the codebase of Grammarly web editor. I will show you how functional programming can solve typical frontend problems in an effective and elegant way.',
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.facebook.com/oopets',
                    fatype: 'facebook'
                },
                {
                    link: 'https://twitter.com/oopets',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/anton-pets-58b67028/',
                    fatype: 'linkedin'
                }
            ],

        },

    ];


    var socialsItem = "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
    $.template("socialsTemplate", socialsItem);

    var fileItem = "<a class='speakers-slide__file' href='${link}' title='${title}' target='_blank'></a>";
    $.template("filesTemplate", fileItem);

    var reportTitles = '';

    var speakerItem = "<div class='row '> <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
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



    function renderSpeakersCarousel() {

        // start render all
        $.each(speakers, function (i, sp) {
            $.each($.tmpl("socialsTemplate", sp.socials), function (a, i) { sp.socialsRendered += i.outerHTML; });

            if (sp.files) {
                $.each($.tmpl("filesTemplate", sp.files), function (a, i) { sp.filesRendered += i.outerHTML; });
            }
        });

        var renderedSpeakers = [];
        $.each($.tmpl("speakerTemplate", speakers), function (a, i) {
            renderedSpeakers.push(i.outerHTML.replace('__ReplaceWithIndex', a));
        });

        var finalSliderHtml = '';
        var ifmobile = $(document).width() < 720;
        // var iftablet = $(document).width() < 960;

        for (var i = 0; i < renderedSpeakers.length; i++) {
            var activeClass = '';
            // var colClass = iftablet ? (ifmobile ? 'col-10' : 'col-md-6') : 'col-lg-4';
            var colClass = 'col-10 col-sm-6 col-lg-4';
            if (i === 0) {
                activeClass = 'active';
            }
            finalSliderHtml += '<div class="speakers-slide ' + colClass + '" itemprop="performer" itemscope itemtype="http://schema.org/Person">';
            finalSliderHtml += renderedSpeakers[i];

            // if(!ifmobile && renderedSpeakers[i+1]) {
            //   finalSliderHtml+=renderedSpeakers[i+1];
            //   i++;
            // }

            finalSliderHtml += '</div>'
        }



        $('#speakersSlider').html(finalSliderHtml);
    }

    renderSpeakersCarousel();

    $(document).on('click', '[data-modal-trigger="#speaker-modal"]', function () {
        var $speakerInfoBlock = $(this);
        loadSpeakerModal($speakerInfoBlock);
    });

    function loadSpeakerModal($speakerInfoBlock) {
        var $modalBody = $('#speaker-modal'),
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

            $('#speaker-modal').modal('hide');
            setTimeout(function () {
                loadSpeakerModal($('[data-item-index="' + prevIndex + '"]'));
            }, 600);

        });

        $nextButton.unbind('click').click(function () {
            var nextIndex = speakerIndex == speakers.length - 1 ? 0 : speakerIndex + 1;

            $('#speaker-modal').modal('hide');
            setTimeout(function () {
                loadSpeakerModal($('[data-item-index="' + nextIndex + '"]'));
            }, 600);

        });

        var speakerData = speakers[speakerIndex];

        if (speakerData) {
            var speakerAvatar = speakerData.image,
                speakerName = speakerData.name,
                speakerPosition = speakerData.position,
                speakerCompany = speakerData.company,
                speakerCountry = speakerData.country,
                speakerCity = speakerData.city,
                reports = speakerData.rept,
                reportsContent = '',
                speakerAboutText = speakerData.aboutSpeaker;

            reports.forEach(function (item, i, arr) {
                reportsContent += '<h2 class="modal-body__title">' + item.title + '<span class="title__lang">' + item.lang + '</span>' + '</h2>' + '<div class="modal-body__text">' + item.description + '</div>';
            });

            speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
            speakerName && $modalNameElement.text(speakerName);
            speakerPosition && $modalSpeakerPosition.text(speakerPosition);
            speakerCompany && $modalSpeakerCompany.text(speakerCompany);
            speakerCountry && $modalSpeakerCountry.text(speakerCountry);
            speakerCity && $modalSpeakerCity.text(speakerCity);

            reportsContent && $modalreportsContainer.html(reportsContent);

            speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(speakerAboutText).end().toggle(true);
            $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


            $('#speaker-modal').modal('show');
        }
    }

});
