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

  var slidesPerView = $(document).width() < 768 ? 0 : $(document).width() < 1024 ? 1 : 1;

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

  $('[data-modal-trigger="#diversity-more"]').click(function(e) {
    $( $(e.currentTarget).attr('data-modal-trigger') ).modal('show');
  });

  $('[data-modal-trigger="#ticket-popup"]').click(function(e) {
    $( $(e.currentTarget).attr('data-modal-trigger') ).modal('show');
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

  // var lazyLoadTimeout = null;
  initLazyLoad();


  // $(window).bind('scroll', lazyLoadHandler);

  // function lazyLoadHandler() {
  //   clearTimeout(lazyLoadTimeout);

  //   lazyLoadTimeout = setTimeout(function () {
  //     initLazyLoad();
  //   }, 100);
  // }

  function initLazyLoad() {
    // var windowTopPosition = $(window)[0].pageYOffset,
    //     windowBottomPosition = $(window)[0].pageYOffset + $(window)[0].innerHeight,
        var $items = $('img[data-src]');
    //     showOffsets = $(window)[0].innerHeight;
    // if(!$items.length) {
    //   $(window).unbind('scroll', lazyLoadHandler);
    // }

    // if( window.matchMedia("(max-width: 768px)").matches ){
    //   showOffsets =  $(window)[0].innerHeight * 4;
    // }

    $items.each(function(i, item){


      // if (
      //     ( windowTopPosition - ( $(item).offset().top + $(item).height ) <= showOffsets ) ||
      //     (windowBottomPosition + showOffsets >= $(item).offset().top )
      // ) {
        setSource(item)
      // }
    });

    function setSource (img) {
      img.setAttribute('src', img.getAttribute('data-src'));

      img.onload = function() {
        img.removeAttribute('data-src');
      };
    }
  }
//  Image Lazy loading

//  tags cloud
   var words = [
    {text: "React design patterns", weight: 8},
    {text: "Application architecture design", weight: 6},
    {text: "CSS parsing", weight: 8},
    {text: "Houdini / Next gen CSS", weight: 7},
    {text: "JS transpilers", weight: 8},
    {text: "Estimation", weight: 9},
    {text: "Advanced React Native", weight: 7},
    {text: "Algorithms", weight: 7},
    {text: "Application architecture design", weight: 6},
    {text: "Crypto mining", weight: 7},
    {text: "Web Extentions", weight: 8},
    {text: "RxJS + React / Angular", weight: 10},
    {text: "Automation / Probot", weight: 8},
    {text: "React VR", weight: 7},
    {text: "ngrx", weight: 10},
    {text: "serverless + microfontends", weight: 9},
    {text: "WebComponents", weight: 7},
    {text: "WebAssembly", weight: 5},
    {text: "Flow typing", weight: 7},
    /* ... */
  ];

  var jqOptions = {
    autoResize: true,
    removeOverflowing: true
  };

  renderCloud();

  $(window).on('resize', function() {
    renderCloud();
  });

  function renderCloud() {
    var renderWords = words;
    if( window.matchMedia("(max-width: 768px)").matches ) {
      renderWords = words.map(function (item) {
        item.weight = 1;
        return item
      });
    }

    $('#keywords')
      .children().remove().end()
      .jQCloud(renderWords, jqOptions);
  }
//  tags cloud

})(jQuery); // End of use strict


// bondar changes tsarts here
function initMap() {
  var center = new google.maps.LatLng(46.481535, 30.755325);
  var mapOptions = {
    center: center,
    zoom: 14,
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


  var infoWindowBlock =
    '<div class="infoWindow-content">' +
      '<h3>${title}</h3>' +
      '<div class="flex justify-content-between mb-1">\n' +
        '<div class="">' +
          '<a href="${link}" target="_blank">\n' +
          '  <img src="${img}" alt="logo">\n' +
          '</a>' +
        '</div>\n' +
        '<div class="pl-2">' +
          '<ul>' +
            '{{html content}}' +
          '</ul>' +
        '</div>\n' +
      '</div>' +
    '</div>';

  $.template("infoWindowBlockTemplate", infoWindowBlock);

  function renderInfoWindowHTML(content) {
    return $.tmpl("infoWindowBlockTemplate", content)[0].outerHTML
  }

  var places = [
    // {
    //   lat: 46.481920,
    //   lng: 30.747213,
    //   infoWindow: renderInfoWindowHTML ({
    //     title: 'Full immersion workshops',
    //     content:
    //     '<ul>' +
    //     '<li>july 6</li>' +
    //     '<li>Impact Hub</li>' +
    //     '</ul>',
    //     img: 'images/map_logos/hub.png',
    //     link: ''
    //   })
    // },
    // {lat: 46.464886, lng: 30.762811,
    //   infoWindow: renderInfoWindowHTML ({
    //     title: 'Relaxing afterparty',
    //     content:
    //     '<ul>' +
    //     '<li>july 7</li>' +
    //     '<li>Otrada beach</li>' +
    //     '</ul>',
    //     img: 'images/map_logos/beer.png',
    //     link: 'javascript: void(0)'
    //   })
    // },
    // {lat: 46.454979, lng: 30.768147,
    //   infoWindow: renderInfoWindowHTML({
    //     title: 'Making new friends. Pre-party',
    //     content:
    //     '<ul>' +
    //     '<li>july 6</li>' +
    //     '<li>True Man</li>' +
    //     '</ul>',
    //     img: 'images/map_logos/trueman.jpg',
    //     link: 'https://www.facebook.com/truemanodessa/'
    //   })
    // },
    // {lat: 46.454117, lng: 30.766310,
    //   infoWindow: renderInfoWindowHTML ({
    //     title: 'Seashore bike tour',
    //     content:
    //     '<ul>' +
    //     '<li>july 6</li>' +
    //     '<li>Langeron beach</li>' +
    //     '<li>Start of the Health track</li>' +
    //     '</ul>',
    //     img: 'images/map_logos/bike.png',
    //     link: 'javascript: void(0)'
    //   })
    // },
    {lat: 46.481535, lng: 30.755325,
      // infoWindow: renderInfoWindowHTML ({
      //   title: 'Intense main program',
      //   content:
      //   '<ul>' +
      //   '<li>OK-Odessa</li>' +
      //   '<li>july 7-8</li>' +
      //   '</ul>',
      //   img: 'images/map_logos/logo.png',
      //   link: 'http://odessajs.org/#schedule'
      // })
    },
  ];

  var markers = [],
    bounds = new google.maps.LatLngBounds(),
    infowindow = new google.maps.InfoWindow();

  drop();

  function drop() {
    clearMarkers();
    for (var i = 0; i < places.length; i++) {
      addMarkerWithTimeout(places[i], i * 200);
    }
    //крайние точки
    bounds.extend({lat: 46.4326, lng: 30.764051});
    bounds.extend({lat: 46.48226, lng: 30.764051});
    map.fitBounds(bounds);
  }

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      var pin = new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      });

      markers.push(pin);
      bounds.extend(pin.getPosition());

      google.maps.event.addListener(pin, 'click', (function (pin, i) {
        return function () {
          infowindow.setContent(position.infoWindow);
          infowindow.open(map, pin);
        }
      })(pin, i));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }


  for (var i = 0; i < location.length; i++) {

    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(location[i][1], location[i][2]),
    //   map: map,
    //   title: location[i][0]
    // });


  }


}
