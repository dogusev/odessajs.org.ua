$(document).ready(function () {

    var speakers = [
        {
            image: "img-min/2020/speakers/VLADIMIR NOVIK.jpg",
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
                    description: "",
                    lang: "[EN]"
                },
                {
                    title: "Architecting scalable serverless applications with GraphQL api",
                    description: "",
                    lang: "[EN]"
                }
            ],
            aboutSpeaker: '',
            socialsRendered: '',
            socials: [
                // {
                //     link: 'https://github.com/lirantal',
                //     fatype: 'github'
                // },
                // {
                //     link: 'https://twitter.com/liran_tal',
                //     fatype: 'twitter'
                // },
                // {
                //     link: 'https://medium.com/@liran.tal',
                //     fatype: 'link'
                // },
            ],
        },
        {
            image: "img-min/2020/speakers/JAMIE MARIA SCHOUREN.jpg",
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
                    description: "",
                    lang: "[EN]"
                },
                {
                    title: "What the Hack?! Unicorns on Steroids (TechCorner)",
                    description: "",
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
