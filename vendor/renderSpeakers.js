$(document).ready(function () {

    var speakers = [
        {
            image: "img-min/2020/speakers/vladimir_novic.jpg",
            name: "Vladimir Novick",
            speakerPos: [
                {
                    position: "Software Architect & Consultant, Google Developer Expert",
                    company: "",
                },
            ],
            country: "",
            city: "",
            rept: [
                {
                    title: "Moving from JavaScript to ReasonML",
                    description: "Created by Jordan Walke at Facebook, ReasonML is a syntax extension and toolchain for OCaml (functional programming language) that lets you write simple, fast, and quality type-safe code leveraging JavaScript and OCaml ecosystems. The cool part is that Reason looks very close to JavaScript, but it has functional languages constructs such as pattern matching, variants and amazing type system. In this talk we understand what benefits ReasonML gives us compared to JavaScript/TypeScript/Flow, why it's used in critical financial web apps, in Facebook Messenger and how we can start using it in our existing JavaScript projects using both familiar JS ecosystem we are so used to. There is a saying 'In Reason if it compiles - it works' - we will see why this is actually true and not just a saying.",
                    lang: "[EN]"
                },
                {
                    title: "Architecting scalable serverless applications with GraphQL api",
                    description: "In this talk, we will see what are the benefits of building event-driven Realtime GraphQL backend and what problems it will solve. We will see how we can bootstrap our GraphQL backend fast with free and open-source Hasura engine and connect it to serverless functions for custom business logic, providing our web or mobile apps with infinitely scalable backend with modern GraphQL API.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://github.com/vnovick',
                    fatype: 'github'
                },
                {
                    link: 'https://twitter.com/VladimirNovick',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/vnovick',
                    fatype: 'linkedin'
                },
            ],
        },
        {
            image: "img-min/2020/speakers/jamie_maria_schouren.jpg",
            name: "Jamie Maria Schouren ",
            speakerPos: [
                {
                    position: "Chief Strategy Officer",
                    company: "DEITY BV",
                },
            ],
            country: "The Netherlands",
            city: "Eindhoven",
            rept: [
                {
                    title: "Software Architectures gone wild (Speech)",
                    description: "Buckle-up and get ready for a (half) rush hour through the world of Software Architectures! Everyone who works in software has heard of terms like ‘monoliths’, ‘headless’ , ‘microservices’ and even ’service oriented architectures’. We all know what they are, but how much do we really know about them? In this half an hour, we will show you the differences, the similarities, when to use them, when not to use them, the success stories and of course: the massive failures. Get ready for a comedic blast, architecture is going to be fast and fun! " +
                        "<h4> Plan and theses of your speech</h4>" +
                        "The talk will be about different software architectures and how they evolved over time.I will talk about: monolithic architectures, headless, microservices and service oriented architectures.On all architectures I will explain what it is, how to use it, and also how not to use it.I will tell the advantages and the disadvantages per architecture and show examples of live websites and live software using it.The talk will be energetic, fast and fun.There will be no boring bullet point list, or a lot of text.There will be a lot of images, jokes, and real life examples.At the end I will show how to get started yourself with some GraphQL and of course javascript!" +
                        "<h4> What is the value of your talk, on what do you want to inspire the listeners ?</h4>" +
                        "I want to bring knowledge to the audience and inspire them to try new architectures.For years all developers are using the same because they are used to it, and the new architectures were only for ‘big companies’.Now everyone can use the new technologies, and they can start it today.One of the things I also would like to show is that architectures are not boring, they can be fun! I will show real life examples of things going well, and things going bad.It will be very visual and fun." +
                        "<h4> What will your listeners take for themselves from your talk ?</h4>" +
                        "It will be a very honest and fun talk.Software architectures are always very boring, and not something(front - end / javascript) developers want to be bother with.However in this talk I will try to make it fun, but also show the real side.In documentation it only highlights the good sides, never the ‘real’ sides." +
                        "<h4> What will listeners take:</h4>" +
                        "Listeners will get more knowledge and will be able to make a real good decision for the architecture for their(next) project, which will help them in the later process.",
                    lang: "[EN]"
                },
                {
                    title: "What the Hack?! Unicorns on Steroids (TechCorner)",
                    description: "<h4>Summary:</h4>" +
                        "Ever wondered how companies such as Facebook, Netflix and AirBnB were able to grow as fast as they did? How they started, what method they used? Growth hacking started as a strategy for early - stage startups who need massive growth in a short time on a(very) small budget, with a team of engineers and marketeers.In this fun and energetic talk Jamie Maria will explain the basics of Growth Hacking, what it is, how it is done, how the Unicorns we know today were able to get BIG in no - time - and most importantly, how you can growth hack your company!" +
                        "<h4> Plan and theses of your speech </h4>" +
                        "The talk will be about what growth hacking is, and especially how companies like facebook, uber, airbnb and others got super big in a very short time without money.Did you know Netflix was a company sending actual dvd’s by post ? And that airbnb got big because they ‘hacked’ craigslist and where able to place hundreds of ads without paying for it ? This talk will also show how marketing and developers work together to make the product super successful, how you can make your company successful without waiting for a ’sales person’ to go out and sell it.It is all about hacking, data and making sure you are in the right spot and the right time.And you don’t need money for that!" +
                        "<h4> What is the value of your talk, on what do you want to inspire the listeners?</h4>" +
                        "The value is that many companies(and developers) are working very traditional: developers build a product, marketing makes a flyer, sales tries to sell it.This is a long process, takes a lot of time and is not fun at all.I want to show you can do it differently: if the developer is involved very early with the marketing working together, you can adapt quickly, support your early users and make a product super big with a lot of users within no - time.But one of the most important things; a growth hack team NEEDS a developer.I want to show the role of the developer here." +
                        "<h4> What will your listeners take for themselves from your talk ?</h4>" +
                        "On a tech conference most talks are about how to update x or how to build x in javascript.This talk is different.It shows a new way of working, a new role as a developer, and it will be done with a lot of real life examples and case studies." +
                        "<h4> What will listeners take:</h4>" +
                        "Listeners will take away that they as a developer are a huge part of the success of the company, and how they can make their company / idea really big with no budget and no expensive sales people.",

                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/jamie-maria-schouren-%E2%9C%85-80583145/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://twitter.com/JamieMariaS',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/deity-io/falcon',
                    fatype: 'github'
                },
            ],
        },
        {
            image: "img-min/2020/speakers/joel_lord.jpg",
            name: "Joel Lord",
            speakerPos: [
                {
                    position: "Developer Advocate",
                    company: "Red Hat OpenShift",
                },
            ],
            country: "Canada",
            city: "Toronto",
            rept: [
                {
                    title: "Kube Restaraunt",
                    description: "You’ve been to a restaurant before, right? Have you noticed how everything is structured? Everyone has a job and there is a chain of command. You can’t just walk into the kitchen and tell the cook how you want your steak done.  Kubernetes is actually very similar to this. You will deploy some pods that do specific things and set the rules of communications that dictate how they all talk to each other. By expanding on the idea of a restaurant, the speaker will slowly introduce some of the basic concepts behind modern DevOps in a fun and easy to understand way. The attendees will come out of this talk with a whole new perspective on what Kubernetes does and how to apply this in their software development practices.",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/joel-lord/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://twitter.com/joel__lord',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/joellord',
                    fatype: 'github'
                },
            ],
        },
        {
            image: "img-min/2020/speakers/yoni_goldberg.jpg",
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
                    title: "TESTING IN PRODUCTION - A PRACTICAL OVERVIEW WITH LIVE EXAMPLES",
                    description: "This is probably a mega-trend in testing which is covered in many 2020 conferences. It doesn't mean simply testing over production rather a set of techniques that makes the tests more realistic. Most talks on this matter are theoretic, mine aims to bring this fascinating trend down to earth and show live how Node.js code and test runners can discover severe issues that couldn't be discovered using traditional testing. Specifically, we're about to explore techniques like tap-compare, silent releases, traffic shadowing and more",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/yoni-goldberg-760898b/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://twitter.com/goldbergyoni',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/goldbergyoni',
                    fatype: 'github'
                },
                {
                    link: 'https://goldbergyoni.com/',
                    fatype: 'link'
                }
            ],
        },
        {
            image: "img-min/2020/speakers/aleksandr_korotaev.jpg",
            name: "Aleksandr Korotaev",
            speakerPos: [
                {
                    position: "Front-End developer",
                    company: "Tinkoff",
                },
            ],
            country: "Russia",
            city: "Saint-Petersburg",
            rept: [
                {
                    title: "GIF IS DEAD. WHO'S NEXT?",
                    description: "It is a talk about animated images formats that went after GIF.Which one will be better: mp4, webm, apng, sprites or vector- based ? Actually no right answer.I want to cover this topic from different sides: HTML app, WebGL game and how to automate preparing of animations for different platforms." +
                        "<h4> What will your listeners take for themselves from your talk?</h4>" +
                        "Much of knowledge I want to cover in this topic currently not presented in well - known docs or caniuse.com.I am not focused on 'good story about the future'.It's a mostly practical valued talk to solve this question here and now. I'll cover animations topic from different sides: how the developer can produce own script to convert frames from designers, how to deliver different formats for browsers and exactly much more disadvantages of working with videos" +
                        "<h4> What so special your talk has, that is absent in the documentation ?</h4>" +
                        "<ul>" +
                        "<li> different animation formats for web</li>" +
                        "<li> which format has a better balance between supporting, size and quality</li>" +
                        "<li> preparing of videos for different platforms using ffmpeg and automation of it</li>" +
                        "<li> problems of using of videos in WebGL applications</li>" +
                        "<li> how to make cross - platform transparent video</li>" +
                        "<ul>",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/lekzd/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://twitter.com/mamu_eval',
                    fatype: 'twitter'
                },
                {
                    link: 'https://github.com/lekzd',
                    fatype: 'github'
                }
            ],
        },
        {
            image: "img-min/2020/speakers/viktor_turskyi.jpg",
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
                    title: "Effective NodeJS Application Development ",
                    description: "",
                    lang: "[EN]"
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
                },
            ],
        },
        {
            image: "img-min/2020/speakers/timofey_lavrenyuk.jpeg",
            name: "Timofey Lavrenyuk",
            speakerPos: [
                {
                    position: "Software Engineer",
                    company: "Corcentric",
                },
            ],
            country: "Ukraine",
            city: "Kyiv",
            rept: [
                {
                    title: "About Dart",
                    description: "Dart is a coding language aimed to correct JavaScript flaws. Though it does its job perfectly, Dart didn't manage to become popular among developers." +
                        "In this talk we're going to discuss:" +
                        "<ul>" +
                        "<li> - what's so special about Dart to use it instead of JavaScript</li>" +
                        "<li> - historical data about the language</li>" +
                        "<li> - why you need to try Dart even if you're not going to code in it</li>" +
                        "<li> - how we use it developing a small project and will continue using this language</li>" +
                        "</ul>",
                    lang: "[RU]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                {
                    link: 'https://twitter.com/geek_timofey',
                    fatype: 'twitter'
                },
                {
                    link: 'https://www.linkedin.com/in/lavrenyuk-t-042b4263/',
                    fatype: 'linkedin'
                },
                {
                    link: 'https://medium.com/@timofeylavrenuk',
                    fatype: 'medium'
                },
            ],
        }


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
        "<span class='speakers-slider__info-position' itemprop='jobTitle'>{{html $value.position}}{{if speakerPos[0].position && speakerPos[0].company}}@{{/if}}</span>" +
        "<span class='speakers-slider__info-company' itemprop='worksFor' itemscope itemtype='http://schema.org/Organization'><u itemprop='name'>{{html $value.company}}</u></span> </br>" +
        '{{/each}}' +
        "</p>" +
        "<p class='speakers-slider__info__place'><span class='speakers-slider__info-country' >{{if country}}${country}, </span>" +
        "<span class='speakers-slider__info-city' '>${city}</span>{{/if}}</p>" +
        "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept }} {{html $value.title}}  <span class='info-rept__lang'>{{html $value.lang}} </br></span>{{/each}}</br> </br></p>" +
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
                speakerPos = speakerData.speakerPos,
                speakerCompany = speakerData.company,
                speakerCountry = speakerData.country,
                speakerCity = speakerData.city,
                reports = speakerData.rept,
                reportsContent = '',
                positionContent = '',
                speakerAboutText = speakerData.aboutSpeaker;

            reports.forEach(function (item, i, arr) {
                reportsContent += '<h2 class="modal-body__title">' + item.title + '<span class="title__lang">' + item.lang + '</span>' + '</h2>' + '<div class="modal-body__text">' + item.description + '</div>';
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

            speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(speakerAboutText).end().toggle(true);
            $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


            $('#speaker-modal').modal('show');
        }
    }

});