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
      rept: "The ABC of Coded Style Guides",
      reptDescription: "Teams today are facing similar problems: How do we encourage the reuse of existing components? How do we raise awareness for them? How do we keep them stable while keeping maintenance efforts low? How do we ensure a coherent branding without exploiting our designers? If you are worried by these questions fear no longer. I aim to show you a way out of this self-made jungle into a brighter world of coded style guides. We will explore together how we can tear down walls between design and development and how everyone can benefit from introducing living component directories into their project.",
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
      rept: "Unleash your web skills on native!",
      reptDescription: "Did you know you can use your knowledge of HTML, CSS and JavaScript to build truly native apps for iOS and Android with NativeScript? I’ll explain what NativeScript is, how it compares to other frameworks and demo how easy and fun it is to get started and how to make use of native capabilities. Do you want to build your own personal assistant like Siri? I'll show you how!",
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
      rept: "Serverless & SPAs, a match made in Spevan",
      reptDescription: "There is a wrong way and a right way to deploy, scale and architect an SPA. If you do it the wrong way you DON'T get the advantages of an SPA, you might as well have built a server-side Express app. If you do it the right way, you can take advantage of optimisations that give you epic scalability, with super low latencies at a fraction of the cost. In this talk, I'll teach you the right way to host your SPA (hint: don't use node). I'll unlock the doors to the hidden free caching layer on the internet. I'll prove why serverless & SPAs complement each other so perfectly and I'll show you how easy it is to build the rest of your application using a serverless stack.",
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
      rept: "Serverless - the way microservices should be",
      reptDescription: "Serverless, the buzzword that we’re hearing probably every day. What’s that exactly? Serverless is the way microservices should be. It will save you money, time, and you will be able to easily build, test and deploy your applications. Serverless is here to stay, let’s learn how to use it!",
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
      rept: "NodeJS Microservices + CQRS + Event Sourcing - Why do I do this?",
      reptDescription: "Why do I do this? I kept asking myself this question while working on the next project and building microservices-based architecture with CQRS and Event Sourcing. What does this system do and why is it so complicated? I'll tell you about mistakes, which I’ve made, issues, which I've faced with, and solutions, which shouldn’t be applied. I’ll share my own experience and tell about those things, I wish I’d known before I started working on the project.",
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
      rept: "WebAssembly vs JavaScript: What is faster?",
      reptDescription: "As WebAssmebly is increasing its popularity and more, and more languages start to support WebAssmebly as the build target, development team start asking question when do we need to use WebAssmebly and where it is better to rely on javascript.As open source contributor to WebKit JavaScript Engine, I would like overview differences between WebAssmebly and JavaScript, that engineers should to known when choose between WebAssembly and JavaScript, and overview in which cases is WebAssembly is faster and vice verse ",
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
      rept: "Observability of Cloud Native Applications",
      reptDescription: "Let's discuss how Observability enables you to write software that can be managed by software.",
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/oleg-chorny-57124352',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "images/reporters/leonid_baida.jpg",
      name: "Leonid Baida",
      position: "Lead Front-End Developer" ,
      company: "SPD-Ukraine",
      rept: "If you don't like how your static typing smells, maybe you do it wrong",
      reptDescription: "Статична типізація і досі лишається широкою темою для дискусій та полем для баталій. Світ JS розробки розділився на її прибічників та противників. Слід пам'ятати, що написанням типізованого коду керують інші принципи і підходи, ніж того вимагає vanilla JS. Інша філософія, якщо хочете. Дизайн типізованого JS часто суттєво різниться від нетипізованого, що і стає поширеною проблемою в освоєнні статичної типізації та її ефективного використання. Крок за кроком, черпаючи натхнення із мов програмування зі строгою типізацією, давайте розберемося, яким має бути типізований код на JS. Щоб його написання принесло користь, а не біль та розчарування. (За основу буде взято типізацію Flow, проте більшість з наведених принципів будуть актуальними також і для TypeScript)",
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
  var socialsItem = "<a class='speaker__link' href='${link}'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
  $.template( "socialsTemplate", socialsItem );


  var speakerItem = " <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item row'> <div class='speakers-slide__img-wrapper col-sm-12 col-md-5 col-lg-4'>" +
   "<img src='${image}' alt=''>" +
    "</div> <div class='speakers-slide__info-wrapper  col-sm-12 col-md-7 col-lg-8'> <div class='speakers-slide__info'>"+
    "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name'>${name}</span></h3>"+
  "<p class='speakers-slider__info__place-of-work'><span class='speakers-slider__info-position'>${position} @</span> <span class='speakers-slider__info-company'>${company}</span></p>"+
  "<p class='speakers-slider__info-rept font-weight-bold'>${rept}</p>"+
  "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> </div> </div> </div>";
  $.template( "speakerTemplate", speakerItem );



function renderSpeakersCarousel() {

  // start render all
  $.each(speakers, function(i, sp) {
    $.each($.tmpl("socialsTemplate", sp.socials ), function(a, i){ sp.socialsRendered += i.outerHTML; });
  });

  var renderedSpeakers = [];
  $.each($.tmpl("speakerTemplate", speakers ), function(a, i){
    renderedSpeakers.push(i.outerHTML.replace('__ReplaceWithIndex', a));
  });

  var finalSliderHtml = '';
  var ifmobile = $(document).width() < 1024;

    for (var i=0; i< renderedSpeakers.length; i++) {
      var activeClass = '';
      var colClass = ifmobile ? 'col-12' : 'col-lg-6';
      if (i===0) {
        activeClass = 'active';
      }
      finalSliderHtml+= '<div class="carousel-item '+activeClass+'"><div class="speakers-slide '+colClass+'">';
      finalSliderHtml+=renderedSpeakers[i];

      if(!ifmobile && renderedSpeakers[i+1]) {
        finalSliderHtml+=renderedSpeakers[i+1];
        i++;
      }

      finalSliderHtml+='</div></div>'
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
      $modalSpeakerTitle = $modalBody.find('.modal-body__title'),
      $modalSpeakerText = $modalBody.find('.modal-body__text');

    var speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

    var $prevButton = $modalBody.find('button.prev');
    var $nextButton = $modalBody.find('button.next');

    $prevButton.unbind('click').click(function(){
      var prevIndex = speakerIndex == 0 ? (speakers.length-1) : speakerIndex - 1;
      console.log(prevIndex);
      $('#speaker-modal').modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);

    });

    $nextButton.unbind('click').click(function(){
      var nextIndex = speakerIndex == speakers.length-1 ? 0 : speakerIndex + 1;
      console.log(nextIndex);
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
        speakerTitle = speakerData.rept,
        speakerText = speakerData.reptDescription;

      speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
      speakerName && $modalNameElement.text(speakerName);
      speakerPosition && $modalSpeakerPosition.text(speakerPosition);
      speakerCompany && $modalSpeakerCompany.text(speakerCompany);
      speakerTitle && $modalSpeakerTitle.text(speakerTitle);
      speakerText && $modalSpeakerText.text(speakerText);
      $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


      $('#speaker-modal').modal('show');
    }



  }


});
