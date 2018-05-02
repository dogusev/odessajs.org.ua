$(document).ready(function(){
  var trainings = [
    {
      image: "images/workshops/migutskiy.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin and Founder of Metadevelopment.io",
      aboutSpeaker: 'Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and Founder of Metadevelopment.io.\n' +
                    'He is originally from Belarus, lived in Odessa, Ukraine and now resides in Berlin, Germany. \n' +
                    'Alexey has 8 years of professional experience building user-facing web apps and services for companies like Coca-Cola, Wolters Kluwer, HP, and Microsoft. ' +
                    'He worked in startups, outsource and product companies, cofounded 3 startups of his own and mentored personally more than 30 professional developers. \n' +
                    'In his spare time, he is building a mentoring network for professional software developers (mtdv.io) to help people build lifestyle and career of their dreams.\n',
      duration: '<strong>3 hours</strong>',
      title: "Growing Your Career as a Software Engineer",
      description: "<p>Get an essential set of skills to control your career! <br>\n" +
        "After the intense training, you will get basic skills to:</p>\n" +
        "<ul>  \n" +
        "  <li>Position yourself better on the market</li>\n" +
        "  <li>Get more money for what you are already doing</li>\n" +
        "  <li>Get \"unstuck\" in your career situation</li>\n" +
        "  <li>Find better, more interesting projects, which fit you best</li>\n" +
        "  <li>Find and prioritize opportunities for your personal and professional development</li>\n" +
        "  <li>Build a professional network and career capital</li>\n" +
        "  <li>Efficiently grow your career without sacrificing other life aspects</li>\n" +
        "</ul>",
      topics:[
        '<ul>\n' +
        '  <li><strong>Creating Value</strong>\n' +
        '    <ul>\n' +
        '     <li>How to figure out what Value does a software developer creates and why he/she gets money</li>\n' +
        '     <li>What\'s the difference between programmer/developer/engineer and junior/proficient/senior specialist</li>\n' +
        '     <li>Why you should treat your career as a business</li>\n' +
        '     <li>How does your income relate to the Value you create</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Market Intelligence</strong>\n' +
        '    <ul>\n' +
        '      <li>What should you know about your market?</li>\n' +
        '      <li>How to research employment opportunities</li>\n' +
        '      <li>Role of Networking and Social Capital</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Positioning & Resume Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Your Personal Pitch and why it is important</li>\n' +
        '      <li>How to structure a great Resume</li>\n' +
        '      <li>Most common mistakes people make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Interviewing Hacks</strong>\n' +
        '    <ul>\n' +
        '      <li>Structured Interviews for cultural fit</li>\n' +
        '      <li>Interview as a selling opportunity</li>\n' +
        '      <li>Why it\'s important to ask questions</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li><strong>Salary Negotiations</strong>\n' +
        '    <ul>\n' +
        '      <li>Basics of salary negotiation</li>\n' +
        '      <li>The power of the information</li>\n' +
        '      <li>Mistakes you should never make</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>'
      ],
      socialsRendered: '',
      socials: [
        {
          link: 'https://facebook.com/alex.migutsky',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/mr-mig',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/mr_mig_by',
          fatype: 'twitter'
        },
        {
          link: 'https://mtdv.io',
          fatype: 'link'
        },
      ]
    },
  ];

  $(document).on('click', '[data-modal-trigger="#training-modal"]', function() {
    var $trainingInfoBlock = $(this);
    loadSpeakerModal($trainingInfoBlock);
  });

  function loadSpeakerModal($trainingInfoBlock) {
    var $modalBody = $('#training-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid'),
      $modalNameElement = $modalBody.find('.speaker__name'),
      $modalSpeakerPosition = $modalBody.find('.speaker__position'),
      $modalSpeakerCompany = $modalBody.find('.speaker__company'),
      $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
      $modalTitleContainer = $modalBody.find('.modal-body__workshop-title'),
      $modalDescriptionContainer = $modalBody.find('.modal-body__description .modal-body__text'),
      $modalDurationContainer = $modalBody.find('.modal-body__duration .modal-body__text'),
      $modalTopicsContainer = $modalBody.find('.modal-body__topics .modal-body__text'),
      $modalSpeakerAboutText = $modalBody.find('.modal-body__text.speaker-text'),
      trainingIndex = parseInt($trainingInfoBlock.attr('data-item-index')),
      $prevButton = $modalBody.find('button.prev'),
      $nextButton = $modalBody.find('button.next');

    $prevButton.unbind('click').click(function(){
      var prevIndex = trainingIndex == 0 ? (trainings.length-1) : trainingIndex - 1;

      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);

    });

    $nextButton.unbind('click').click(function(){
      var nextIndex = trainingIndex == trainings.length-1 ? 0 : trainingIndex + 1;

      $modalBody.modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+nextIndex+'"]'));
      },600);

    });

    var trainingData = trainings[trainingIndex];
    if (trainingData) {
      var trainingAvatar = trainingData.image,
        trainingName = trainingData.name,
        trainingPosition = trainingData.position,
        trainingCompany = trainingData.company,
        trainingAboutText = trainingData.aboutSpeaker,
        trainingSocials = trainingData.socials,
        trainingTitle = trainingData.title,
        trainingDescription = trainingData.description,
        trainingDuration = trainingData.duration,
        trainingTopics = trainingData.topics,
        topicsContent = '';

      trainingAvatar && $modalSpeakerAvatar.attr('src', trainingAvatar);
      trainingName && $modalNameElement.text(trainingName);
      trainingPosition && $modalSpeakerPosition.text(trainingPosition);
      trainingCompany && $modalSpeakerCompany.text(trainingCompany);

      var links = '';

      trainingSocials.forEach(function(item, i, arr){
        links += ('<a class="speaker__link" href="' + item.link + '" target="_blank"><i class="fa fa-' + item.fatype + '" aria-hidden="true"></i></a>');
      });

      $modalSpeakerLinks.html( links );

      $modalTitleContainer.html(trainingTitle);

      $modalDescriptionContainer.append(trainingDescription);

      $modalDurationContainer.append(trainingDuration);

      trainingTopics.forEach(function (item, i, arr) {
        topicsContent += '<div class="modal-body__text">'+ item +'</div>';
      });
      $modalTopicsContainer.append(topicsContent);

      trainingAboutText && $modalSpeakerAboutText.text(trainingAboutText);

      $modalBody.modal('show');
    }
  }

});
