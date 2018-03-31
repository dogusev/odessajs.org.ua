$(document).ready(function(){

  var filters = [
    'React', 'NativeScript', 'Angular', 'Node.js', 'ExpressJS', 'MongoDB', 'PgSQL', 'JavaScript',
    'WebAssembly', 'Kubernetes', 'Azure', 'Go', 'Redux/Flow', 'Docker'
  ];

  var speakers = [
    {
      image: "http://henningmu.com/assets/img/avatar.jpg",
      name: "Henning Muszynski",
      position: "Software Engineer" ,
      company: "Doist",
      location: "The ABC of Coded Style Guides",
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
      location: "Unleash your web skills on native!",
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
      image: "images/reporters/asimhussain.png",
      name: "Asim Hussain",
      position: "Cloud Developer Advocate" ,
      company: "Microsoft",
      location: "Serverless & SPAs, a match made in Spevan",
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
      image: "https://ivanjov.com/content/images/2017/11/latest-zoomed.jpg",
      name: "Ivan Jovanovic",
      position: "Senior Software Engineer" ,
      company: "nearForm",
      location: "Serverless - the way microservices should be",
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
      image: "images/reporters/roman_sachenko.jpg",
      name: "Roman Sachenko",
      position: "Software Engineer" ,
      company: "DA-14",
      location: "NodeJS Microservices + CQRS + Event Sourcing - Why do I do this?",
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
      image: "images/reporters/oskackov.jpg",
      name: "Oleksandr Skachkov",
      position: "Lead FrontEnd Developer" ,
      company: "Itera",
      location: "WebAssembly vs JavaScript: What is faster?",
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/ivanjov',
          fatype: 'github'
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
      location: "Observability of Cloud Native Applications",
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/oleg-chorny-57124352',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/14102522_1816871395214147_1099645124302123929_n.jpg?_nc_cat=0&oh=0b04d445ce4c3b3f58bb9a2128909f50&oe=5B71B421",
      name: "Leonid Baida",
      position: "Lead Front-End Developer" ,
      company: "SPD-Ukraine",
      location: "If you don't like how your static typing smells, maybe you do it wrong",
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
  var socialsItem = "<a href='${link}'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
  $.template( "socialsTemplate", socialsItem );


  var speakerItem = " <div class='speakers-slide__item row'> <div class='speakers-slide__img-wrapper  col-sm-12 col-lg-4'>" +
   "<img src='${image}' alt=''>" +
    "</div> <div class='speakers-slide__info-wrapper  col-sm-12 col-lg-8'> <div class='speakers-slide__info'>"+
    "<h3 class='speakers-slide__info-title'><span>${name}</span></h3>"+
  "<p class='speakers-slider__info-position'>${position} @ ${company}</p>"+
  "<p class='speakers-slider__info-company font-weight-bold'>${location}</p>"+
  "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> </div> </div> </div>";
  $.template( "speakerTemplate", speakerItem );




function renderSpeakersCarousel() {

  // start render all
  $.each(speakers, function(i, sp) {
    $.each($.tmpl("socialsTemplate", sp.socials ), function(a, i){ sp.socialsRendered += i.outerHTML; });
  });

  var renderedSpeakers = [];
  $.each($.tmpl("speakerTemplate", speakers ), function(a, i){ renderedSpeakers.push(i.outerHTML); });

  var finalSliderHtml = '';

  if($(document).width() < 1024) {

    for (var i=0; i< renderedSpeakers.length; i++) {
      var activeClass = '';
      if (i===0) {
        activeClass = 'active';
      }
      finalSliderHtml+= '<div class="carousel-item '+activeClass+'"><div class="speakers-slide col-12">';
      finalSliderHtml+=renderedSpeakers[i];

      finalSliderHtml+='</div></div>'
    }

  } else {

    for (var i=0; i< renderedSpeakers.length; i++) {
      var activeClass = '';
      if (i===0) {
        activeClass = 'active';
      }
      finalSliderHtml+= '<div class="carousel-item '+activeClass+'"><div class="speakers-slide col-6">';
      finalSliderHtml+=renderedSpeakers[i];

      if (renderedSpeakers[i+1]) {
        finalSliderHtml+=renderedSpeakers[i+1];
        i++;
      }
      finalSliderHtml+='</div></div>'
    }

  }

  $('#speakersSlider').html(finalSliderHtml);
}

  renderSpeakersCarousel();

});
