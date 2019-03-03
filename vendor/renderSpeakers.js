$(document).ready(function(){

    var speakers = [
        {
            image: "images/reporters/liran-tal.png",
            name: "Liran Tal",
            position: "Developer Advocate" ,
            company: "Snyk.io",
            rept: [
                {
                    title: "StrangerDanger: Finding Security Vulnerabilities Before They Find You!",
                    description: "Open source modules on the NPM ecosystem are undoubtedly awesome. However, they also represent an undeniable and massive risk. You’re introducing someone else’s code into your system, often with little or no scrutiny. The wrong package can introduce severe vulnerabilities into your application, exposing your application and your user's data. This talk will use a sample application, Goof, which uses various vulnerable dependencies, which we will exploit as an attacker would. For each issue, we'll explain why it happened, show its impact, and – most importantly – see how to avoid or fix it."
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
            image: "images/reporters/joel-lord.jpg",
            name: "Joel Lord",
            position: "Developer Evangelist" ,
            company: "Auth0",
            rept: [
                {
                    title: "",
                    description: ""
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
            position: "Senior Cloud Developer Advocate" ,
            company: "Microsoft",
            rept: [
                {
                    title: "Build Scalable APIs using GraphQL and Serverless",
                    description: "Current trends in software and backend architecture have been evolving towards a more loosely coupled more granular design. I am sure most of you have heard of microservice based architectures. The latest development on that front in the past couple of years has been the advent of serverless which allows you to run applications in very cost effective ephemeral services. This is why it is important to have a proper gateway for your API that is able to route all your requests to the designated endpoint.\n" +
                        "GraphQL stands out in that respect as being a mature open sourced standard started at Facebook. We will first have a look at how we set up our own GraphQL server locally, then we will explore the Query language and schema definitions it provides which allows you essentially query your mesh of services from a single point of entry. The beauty of that is it will notify you early if any of your endpoints is misbehaving or the schemas are out of date by erring out. Another advantage of this is that it allows for your API documentation to be a real time process and it will give you what one may call an API playground where you can query and explore your API.\n" +
                        "After we explore our serverless API we will have a look at the more advanced features and standards around mutators and resolvers and then we will close by going all in, full serverless and deploy our graphql server to a function in the cloud."
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
            position: "CTO" ,
            company: "Cross Platform Solutions GmbH",
            rept: [
                {
                    title: "The Code",
                    description: "There are lot's of holy wars for the best language/framework or technology. I want to talk about the code - how our cognitive abilities shape our technologies and why there won't be a winner in the holy wars."
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
            image: "images/reporters/diekussmall.jpg",
            name: "Diego González-Zúñiga",
            position: "Senior Developer Advocate" ,
            company: "Samsung",
            rept: [
                {
                    title: "Immersive Web",
                    description: "The talk gravitates around the concept of Immersive Technologies, viewing at the possibilities that they bring. It is focused on the intersection with other current Web Technologies and meant to be a source of ideas on how to incorporate WebXR and 3D models in our day to day workflow, in preparation upcoming Virtual and Augmented use cases."
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
    ];


    var socialsItem = "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
    $.template( "socialsTemplate", socialsItem );

    var fileItem = "<a class='speakers-slide__file' href='${link}' title='${title}' target='_blank'></a>";
    $.template( "filesTemplate", fileItem );

    var reportTitles = '';

    var speakerItem = "<div class='row '> <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
        " <div class='speakers-slide__img-wrapper'>" + "<img src='${image}' alt=''>" +
        "</div> <div class='speakers-slide__info-wrapper'> <div class='speakers-slide__info'>"+
        "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name' itemprop='name' >${name}</span></h3>"+
        "<p class='speakers-slider__info__place-of-work'><span class='speakers-slider__info-position' itemprop='jobTitle'>${position} @</span>" +
        "<span class='speakers-slider__info-company' itemprop='worksFor' itemscope itemtype='http://schema.org/Organization'><u itemprop='name'>${company}</u></span></p>"+
        "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept }} {{html $value.title}} </br> </br>{{/each}}</p>"+
        "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> <div class='speakers-slide__files'>{{html filesRendered}}</div></div> </div> </div></div>";
    $.template( "speakerTemplate", speakerItem );



    function renderSpeakersCarousel() {

        // start render all
        $.each(speakers, function(i, sp) {
            $.each($.tmpl("socialsTemplate", sp.socials ), function(a, i){ sp.socialsRendered += i.outerHTML; });

            if(sp.files){
                $.each($.tmpl("filesTemplate", sp.files ), function(a, i){ sp.filesRendered += i.outerHTML; });
            }
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
            finalSliderHtml+= '<div class="speakers-slide '+colClass+'" itemprop="performer" itemscope itemtype="http://schema.org/Person">';
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

            $('#speaker-modal').modal('hide');
            setTimeout(function(){
                loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
            },600);

        });

        $nextButton.unbind('click').click(function(){
            var nextIndex = speakerIndex == speakers.length-1 ? 0 : speakerIndex + 1;

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
                reportsContent += '<h2 class="modal-body__title">'+ item.title +'</h2>' + '<div class="modal-body__text">'+ item.description +'</div>';
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
