$(document).ready(function () {

  var talks6july = [
    {time: '16:30', author: '', title: 'Registration and welcome drinks'},
    {time: '17:00', author: 'Sara Vieira', title: 'The Dream of Styleguide Driven Development'},
    {time: '17:30', author: '', title: 'Break'},
    {time: '17:45'},
    {time: '18:15', author: '', title: 'Break'},
    {time: '18:30', author: 'Alex Troush', title: 'The existential crisis in a blockchain era'},
    {time: '19:00', author: '', title: 'Pizza break'},
    {time: '19:30', author: 'Aleksandra Shynkevich & Nikita Dubko', title: 'Get prepared for your performance. Speaker\'s guidelines from an organizer [Speech]'},
    {time: '20:00', author: '', title: 'Break'},
    {time: '20:10'},
    {time: '20:30', author: '', title: 'Q&A Session'},
  ];

  var talks7july = [
    {
      time: '08:00-09:00',
      talks: [
        {author: '', title: 'Yoga'}
      ]
    },
    {
      time: '08:30 - 09:30',
      talks: [
        {author: '', title: 'Registration'}
      ]
    },
    {
      time: '09:30- 10:10',
      talks: [
        {author: '[en] Gerard Sans', title: 'Advanced State Management using ngrx v5'},
        {author: 'Yuriy Sherstyuk', title: 'Algorithms  in Front End: from V8 to VDOM'},
        {author: 'Artem Zakharchenko ', title: 'What I have to do at OdessaJS Conference'},
      ]
    },
    {
      time: '10:10-10:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:30 - 11:10',
      talks: [
        {author: '[en] Ivan Jovanovic', title: 'Serverless - the way microservices should be.'},
        {author: 'Sergiy Babich', title: 'WebComponents why and how'},
        {author: 'Ksenia Redunova ', title: 'Estimates: is there a silver bullet?'}
      ]
    },
    {
      time: '11:10 - 11:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:30 - 12:15',
      talks: [
        {author: '[en] Nik Graf', title: 'ReasonML'},
        {author: 'Roman Rodomansky and Andrew Yasinishyn', title: 'The New Media and What It Takes to Create a News Website in 2018'},
        {author: 'Andrey Kucherenko ', title: 'Copy paste detector for 150+ languages on JavaScript'}
      ]
    },
    {
      time: '12:15 - 12:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:30 - 13:10',
      talks: [
        {author: '[en] Rowdy Rabouw ', title: 'Unleash your web skills on native'},
        {author: 'Oleg Chorny ', title: 'Cloud Native Observability'},
        {author: 'Andrew Mykhaliuk', title: 'Excuse me, I have to assemble Frontend'}
      ]
    },
    {
      time: '13:10 - 14:30',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '14:30-15:10',
      talks: [
        {author: 'Trishul Goel', title: 'Cross browser extensions - lets make one'},
        {author: 'Илья Иванов', title: 'Advanced React-Native'},
        {author: 'Alex Migutsky ', title: 'Architecture evolution of Microsoft To-Do web app'}
      ]
    },
    {
      time: '15:10 - 15:40',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '15:40-16:20',
      talks: [
        {author: 'Patrick Kettner ', title: ' JavaScript without javascript'},
        {author: 'Roman Sachenko', title: 'NodeJS + CQRS + Event Sourcing: pros and cons'},
        {author: '', title: ''}
      ]
    },
    {
      time: '16:30 - 16:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:50- 17:30',
      talks: [
        {author: '[en] David Kopal', title: 'Unleash the power of the higher-order components'},
        {author: '[ru] Arkadiy Pilguk ', title: 'Real-world application of computer vision and machine learning in modern web applications'},
        {author: 'Roman Rodomansky and Andrew Yasinishyn', title: 'Processes automation within the company'}
      ]
    },
    {
      time: '17:30-18:00',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '18:00-18:40',
      talks: [
        {author: 'Henning Muszynski', title: 'The ABC of Coded Style Guides'},
        {author: '[ua] Леонід Байда', title: 'If you don\'t like how your static typing smells, maybe you do it wrong'},
        { author: 'Mike MacCana', title: 'Deploying your JS app in 2018 [en]'}
      ]
    },
    {
      time: '18:40 - 20:00',
      talks: [
        {author: '', title: 'Afterparty with drinks and snacks'}
      ]
    }
  ];

  var talks8july = [
    {
      time: '08:30-09:30',
      talks: [
        {author: '', title: 'Yoga'}
      ]
    },
    {
      time: '09:30- 10:10',
      talks: [
        {author: 'Viktor Turskyi', title: 'Virtual reality with ReactVR'},
        {author: 'Mihail Zachepilo', title: 'WebAssembly powered Machine Learning'},
        {author: 'Eyal Eizenberg', title: 'The Psychology of building your first open source'},
        {author: '', title: ''},
      ]
    },
    {
      time: '10:10-10:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:30 - 11:10',
      talks: [
        {author: '[en] Ivan Jovanovic', title: 'Introduction to Micro Frontends'},
        {author: 'Ivan Goncharov', title: 'W.T.F. is GraphQL?'},
          {author: 'Yuriy Sherstyuk', title: 'Full-time remote only'},
        {author: '', title: ''},
      ]
    },
    {
      time: '11:10 - 11:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:30 - 12:15',
      talks: [
        {author: '[en] Patrick Kettner', title: 'Creating magic with houdini'},
        {author: 'Rustam Aliyev+Ivan Martynov', title: 'From monolith web app to micro-frontends – How we extended microservices architecture to frontend'},
        {author: 'Aleksandr Shushunov', title: 'Let\'s kill lifecycle'},
        {author: '', title: ''},
      ]
    },
    {
      time: '12:15 - 12:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:30 - 13:10',
      talks: [
        {author: '[en] Asim Hussain ', title: 'How to scale an SPA to 1M views for $1?'},
        {author: 'Valentyn Barmashyn ', title: 'RxJS in React, RxJS in Angular and why we all should be friends'},
        {author: 'Savitsky Roman ', title: 'Chrome Dev Tools. New & Tips'},
        {author: '', title: ''},
      ]
    },
    {
      time: '13:10 - 14:30',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '14:30-15:10',
      talks: [
        {author: 'Katarzyna Jastrzębska', title: 'Reuse your code in React like it\'s 2018'},
        {author: 'Nikita Dubko', title: 'Houdini - css which is JavaScript'},
        { author: 'Haroen Viaene', title: 'You’re probably making an api client'},
      ]
    },
    {
      time: '15:10 - 15:40',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '15:40-16:20',
      talks: [
        {author: 'Radoslav Stankov ', title: 'React Refactoring Patterns'},
        {author: 'Oleksandr Skachkov', title: 'WebAssembly vs JavaScript: What is faster?'},
        {author: 'Denys Dovhan ', title: 'Automating GitHub workflow with probot'},
        {author: '', title: ''},
      ]
    },
    {
      time: '16:30 - 16:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:50- 17:30',
      talks: [
        {author: '[en] Denis Radin ', title: 'Mining crypto in browser_ GPU, WebAssembly and all the good things to try'},
        {author: '[ru] Arkadiy Pilguk ', title: 'Real-world application of computer vision and machine learning in modern web applications'},
        {author: '[ru] Valerii Sorokobatko', title: 'Passing strings using (in)finite-state-machine and prepack'},
        {author: '', title: ''},
      ]
    },
    {
      time: '17:30-18:00',
      talks: [
        {author: '', title: 'Long break'}
      ]
    },
    {
      time: '18:00-18:40',
      talks: [
        {author: '[ru] Artem Zakharchenko', title: 'What happens when you don\'t write the code. What advises would I like to take 10 years ago'},
        {author: 'Eyal Eizenberg', title: 'redux-cornell'},
        {author: '', title: ''},
        {author: '', title: ''},
      ]
    },
    {
      time: '18:40 - 19:00',
      talks: [
        {author: '', title: 'Q&A Session'}
      ]
    },
    {
      time: '20:00',
      talks: [
        {author: '', title: 'Speakers Dinner'}
      ]
    }
  ];

  var infoBlock =
    '           <div class="schedule__info">' +
    '              <div class="schedule__info-time">${time}</div>' +
    '              <div class="schedule__info-text">' +
    '                <span class="schedule__info-text-icon form"></span>' +
    '                ${title}' +
    '              </div>' +
    '            </div>';

  $.template("InfoBlockTemplate", infoBlock);


  var reportBlock_1 =
    '<div class="schedule__report">' +
    '        <div class="schedule__report-time">${time}</div>' +
    '        <div class="schedule__report-hall">' +
    '             ${title}' +
    '          <div class="schedule__reporter">${author}</div>' +
    '        </div>' +
    '      </div>';

  $.template("reportBlockTemplate_1", reportBlock_1);

  var reportTimeBlock =
    '         <div class="schedule__report-time">${time}</div>';
  $.template("reportTimeBlockTemplate", reportTimeBlock);

  var infoTimeBlock =
    '         <div class="schedule__info-time">${time}</div>';
  $.template("infoTimeBlockTemplate", infoTimeBlock);

  var infoBlock_2 =
    '              <div class="schedule__info-text">' +
    '                <span class="schedule__info-text-icon form"></span>' +
    '                ${title}' +
    '              </div>';
  $.template("InfoBlockTemplate_2", infoBlock_2);

  var hallBlock =
    '        <div class="schedule__report-hall">' +
    '          ${title}' +
    '          <div class="schedule__reporter">${author}</div>' +
    '         </div>';
  $.template("hallBlockTemplate", hallBlock);


  renderTalksTable();

  function renderTalksTable() {

    var july6_schedule = '';

    $.each(talks6july, function (i, sp) {
      if (sp.author) {
        july6_schedule += $.tmpl("reportBlockTemplate_1", sp)[0].outerHTML;
      } else {
        july6_schedule += $.tmpl("InfoBlockTemplate", sp)[0].outerHTML;
      }
    });

    $('#july6_schedule').append(july6_schedule);

    // _____________________________________________

    var july7_schedule = '';
    renderSchedulesWithHalls({
      data: talks7july,
      render: july7_schedule,
      selector: '#july7_schedule'
    });

    // _____________________________________________

    var july8_schedule = '';

    renderSchedulesWithHalls({
      data: talks8july,
      render: july8_schedule,
      selector: '#july8_schedule'
    });

  }

  function renderSchedulesWithHalls(opt) {
    $.each(opt.data, function (i, sp) {

      var scheduleRow = '<div class="schedule__report">',
        scheduleCells = '',
        timeBlock = $.tmpl("reportTimeBlockTemplate", sp)[0].outerHTML;

      $.each(sp.talks, function (i, obj) {
        if( obj.author || (!obj.author && !obj.title) ) {
          scheduleCells += $.tmpl("hallBlockTemplate", obj)[0].outerHTML;
        } else {
          if(i < 1){
            scheduleRow = '<div class="schedule__info">';
            scheduleCells += $.tmpl("InfoBlockTemplate_2", obj)[0].outerHTML;
            timeBlock = $.tmpl("infoTimeBlockTemplate", sp)[0].outerHTML;
          }
        }
      });

      scheduleRow += timeBlock + scheduleCells + '</div>';

      opt.render += scheduleRow;
    });

    $(opt.selector).append(opt.render);
  }


});
