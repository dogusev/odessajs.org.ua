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
            city: "",
            rept: [
                {
                    title: "Testing JS code that consumes APIs",
                    description: 'There are lots of great frameworks for testing APIs we write in JavaScript, but few frameworks that allow us to test APIs we consume. This workshop will help developer write clean, readable and dependable tests for the APIs they consume, from third-party vendors like SalesForce, Stripe and Auth0 to internal microservices.',
                    lang: "[EN]"
                }
            ],
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
                    title: "Pluggable Web application using Angular and NodeJS [Workshop]",
                    description: 'Let\'s learn together how we develop a pluggable angular app. We will develop a platform with a marketplace, from which the user can install some extension to the app. It will be mainly a dashboard, and the different widgets will be installed at runtime by the end user.',
                    lang: "[EN]"
                }
            ],
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
                    fatype: 'stackoverflow'
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
                    title: "NestJS web framework workshop",
                    description: 'We will get in touch popular node.js framework named Nest.JS. Will deep dive in functionality, aspects of usage of different components like DB, sockets, dependency injections. Will try to touch different community developed modules and components.',
                    lang: "[RU]"
                }
            ],
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
                reportsContent = '',
                positionContent = '',
                speakerAboutText = speakerData.aboutSpeaker;

            reports.forEach(function (item, i, arr) {
                reportsContent += '<h2 class="modal-body__title">' + item.title + '<span class="title__lang">' + item.lang + '</span>' + '</h2>' + '<div class="modal-body__text">' + item.description + '</div>';
            });

            speakerPos.forEach(function (item, i, arr) {
                positionContent += '<p class="speaker-position">' + item.position + '<span >' + item.company + '</span>' + '</p>';
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


            $('#workshops-modal').modal('show');
        }
    }

});
