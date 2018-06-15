// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxgrhYdpPp8tY53oWf53evLPrOkREFQV0",
  authDomain: "odessajs-2017.firebaseapp.com",
  databaseURL: "https://odessajs-2017.firebaseio.com",
  projectId: "odessajs-2017",
  storageBucket: "odessajs-2017.appspot.com",
  messagingSenderId: "72618231509"
};
firebase.initializeApp(config);

function subscribeEmail(email, name) {
  var id = Date.now();
  return firebase.database().ref('emails/' + id).set({email: email, name: name});
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {

  $('#programCommitteeCarousel').carousel({
    interval: 0
  });

  /*
  * Bootstrap carousel swipe feature
  * */

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  /*
  * Bootstrap carousel swipe feature
  * */

  var slidesPerView = $(document).width() < 768 ? 0 : $(document).width() < 1024 ? 1 : 3;

  $('.program-committee .carousel .carousel-item').each(function(){
    var next = $(this);


    for (var i=0;i<slidesPerView;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

    $('#speakers-carousel').carousel({
        interval: 0
    });

    $('.speakers .carousel .carousel-item').each(function(){
      var slidesPerView =$(document).width() < 1024 ? 0 : 1;

      var next = $(this);
      for (var i=0;i<slidesPerView;i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });


  $('.reports__list-item-theme').click(function () {
    $(this).next().toggle();
  });

  $('.subscribe_form').submit(function(e) {
    e.preventDefault();
    var that = $(this);
    that.find('i').css('display', 'block');
    that.find('span').css('display', 'none');
    var email = that.find('.subscribe-email-input').val();
    var name = that.find('.subscribe-name-input').val();
    if (validateEmail(email)) {
      subscribeEmail(email, name).then(function() {
        that.find('i').css('display', 'none');
        that.find('span').css('display', 'block');
        that.find('.subscribe-input').val('');
        alert('Благодарим за подписку.');
      });
    } else {
      alert('Невалидный e-mail!');
      that.find('i').css('display', 'none');
      that.find('span').css('display', 'block');
    }
  });

  $('[data-modal-trigger="#ask-form"]').click(function() {
    var $speakerBlock = $(this);
    loadAskQuestionModal($speakerBlock);

    $('#ask-form').modal('show');
  });

});

function loadAskQuestionModal($speakerBlock) {
  var $modalBody = $('#ask-form');
  var $modalHiddenInput = $modalBody.find('#ask-to');
  var $modalNameElement = $modalBody.find('.speaker_ask_name');
  var speakerName = $speakerBlock.closest('.chairman-info').find('.chairman__name').text() || 'us';
  $modalHiddenInput.val(speakerName);
  $modalNameElement.text(speakerName);

}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 55)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);


//  Image Lazy loading

  initLazyLoad();

  $(window).on('scroll', function () {
    initLazyLoad()
  });

  function initLazyLoad() {
    var windowTopPosition = $(window)[0].pageYOffset,
        windowBottomPosition = $(window)[0].pageYOffset + $(window)[0].innerHeight,
        $items = $('img[data-src]'),
        showOffsets = $(window)[0].innerHeight / 2;

    if( window.matchMedia("(max-width: 768px)").matches ){
      showOffsets =  $(window)[0].innerHeight * 1.5;
    }

    $items.each(function(i, item){
      if (
          ( windowTopPosition - ( $(item).offset().top + $(item).height ) <= showOffsets ) ||
          (windowBottomPosition + showOffsets >= $(item).offset().top )
      ) {
        setSource(item)
      }
    });

    function setSource (img) {
      img.setAttribute('src', img.getAttribute('data-src'));

      img.onload = function() {
        img.removeAttribute('data-src');
      };
    }
  }
//  Image Lazy loading

})(jQuery); // End of use strict


// bondar changes tsarts here
function initMap() {
  var center = new google.maps.LatLng(46.432882, 30.761098);
  var mapOptions = {
    center: center,
    zoom: 16,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f0f0f0"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: center
  });
  marker.setMap(map);
}
