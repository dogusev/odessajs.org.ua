$(document).ready(function () {
    $(window).resize(function () {
        $('#speakersSlider').not('.slick-initialized').slick('resize');
    });

    $(window).on('orientationchange', function () {
        $('#speakersSlider').not('.slick-initialized').slick('resize');
    });
    $(window).resize(function () {
        $('#workshopsSlider').not('.slick-initialized').slick('resize');
    });

    $(window).on('orientationchange', function () {
        $('#workshopsSlider').not('.slick-initialized').slick('resize');
    });

    $('.slider-wrapper').slick({
        arrows: true,
        dots: true,
    });


    $('#speakersSlider').slick({
        mobileFirst: true,
        arrows: true,
        infinite: true,
        speed: 300,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: "unslick"
            },
            // {
            //     breakpoint: 1280,
            //     settings: {
            //         slidesToShow: 4,
            //         slidesToScroll: 2,
            //         infinite: true,
            //     }
            // },
        ]
    });
    $('#workshopsSlider').slick({
        mobileFirst: true,
        arrows: true,
        infinite: true,
        speed: 300,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: "unslick"
            },
        ]
    });


});