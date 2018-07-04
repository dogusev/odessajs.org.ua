$(document).ready(function () {

  var talks6july = [
    {time: '16:00 - 16:30', author: '', title: 'Registration and welcome drinks'},
    {time: '16:30 - 17:00', author: 'Eyal Eizenberg **', title: 'The Psychology of building your first open source. [en]'},
    {time: '17:00 - 17:30', author: '', title: 'TBD'},
    {time: '17:30 - 18:00', author: 'Aleksandr Khokhlov ***', title: 'Do not chase the hype train. Just steal ideas.'},
    {time: '18:00 - 18:30', author: 'Haroen Viaene *', title: 'You’re probably making an API client. [en]'},
    {time: '18:30 - 19:00', author: 'Aleksandra Shinkevich and Nikita Dubko *', title: 'Get prepared for your performance. Speaker\'s guidelines from an organizer. [ru]'},
    {time: '19:00 - 19:30', author: 'Mike MacCana **', title: 'Deploying your JS app in 2018 ? [en]'},
    {time: '19:30 - 17:30', author: '', title: 'TBD'},
    {time: '20:00 - 20:30', author: 'Denis Radin ***', title: 'Let`s write your first pixel shader. [ru]'},
    {time: '20:30', author: '', title: 'Q&A Session'}
  ];

  var talks7july = [
    {
      time: '07:45 - 09:00',
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
      time: '09:30 - 10:00',
      talks: [
        {place: 'Hall A', author: 'Gerard Sans ***', title: 'Advanced State Management using ngrx v5. [en]'},
        {place: 'Hall B', author: 'Artem Zakharchenko *', title: 'What I have to do at OdessaJS Conference. [TechCorner] [ru]'},
        {place: '', author: '', title: ''}

      ]
    },
    {
      time: '10:00 - 10:10',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:10 - 10:40',
      talks: [
        {place: 'Hall A', author: 'Roman Rodomansky and Andrew Yasinishyn ***', title: 'The New Media and What It Takes to Create a News Website in 2018. [ua]'},
        {place: 'Hall B', author: 'Andrey Kucherenko ***', title: 'Copy paste detector for 150+ languages on JavaScript. [ru]'},
        {place: 'Hall C', author: 'Gerard Sans', title: ''}
      ]
    },
    {
      time: '10:40 - 10:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:50 - 11:20',
      talks: [
        {place: 'Hall A', author: 'Ivan Jovanovic ***', title: 'Serverless - the way microservices should be. [en]'},
        {place: 'Hall B', author: 'Sergiy Babich', title: 'Mutilation and suffering: How I decided to create a project using only Web Components without any framework. [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '11:20 - 11:35',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:35 - 12:05',
      talks: [
        {place: 'Hall A', author: 'Yuriy Sherstyuk **', title: 'Algorithms  in Front End: from V8 to VDOM. [ru]'},
        {place: 'Hall B', author: 'Ksenia Redunova **', title: 'Estimates: is there a silver bullet? [TechCorner] [ru]'},
        {place: 'Hall C', author: 'Ivan Jovanovic', title: ''}
      ]
    },
    {
      time: '12:05 - 12:15',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:15 - 12:45',
      talks: [
        {place: 'Hall A', author: 'Nik Graf **', title: 'ReasonML. [en]'},
        {place: 'Hall B', author: 'Alex Migutsky *', title: 'Architecture evolution of Microsoft To-Do web app. [TechCorner + slides] [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '12:45 - 12:55',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:55 - 13:35',
      talks: [
        {place: 'Hall A', author: 'Rowdy Rabouw **', title: 'Unleash your web skills on native. [en]'},
        {place: 'Hall B', author: 'Valentine Mezentsev, Gleb Dobzhanskyi, Vitalii Hurin *', title: 'Bot Building: channels, platforms, NLU. [TechCorner] [Ru]'},
        {author: 'Nik Graf', title: ''}
        ]
    },
    {
      time: '13:35 - 14:35',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '14:35 - 15:05',
      talks: [
        {place: 'Hall A', author: 'Trishul Goel *', title: 'Cross browser extensions - lets make one. [en]'},
        {place: 'Hall B', author: 'Andrew Mykhaliuk **', title: 'Excuse me, I have to assemble Frontend.'},
        {author: 'Nik Graf', title: ''}
        ]
    },
    {
      time: '15:05-15:15',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '15:15-15:50',
      talks: [
        {place: 'Hall A', author: 'Nikita Dubko ***', title: 'Houdini - css which is JavaScript. [ru]'},
        {place: 'Hall B', author: 'Philip Shurpik **', title: 'OK Google. What\'s next?. [Tech Corner] [ru]'},
        {author: 'Trishul Goel', title: ''}
        ]
    },
    {
      time: '15:50-16:05',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:05-16:35',
      talks: [
        {place: 'Hall A', author: 'Patrick Kettner **', title: 'JavaScript without javascript. [en]'},
        {place: 'Hall B', author: 'Roman Sachenko ***', title: 'NodeJS + CQRS + Event Sourcing: pros and cons. [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '16:35-16:45',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:45-17:25',
      talks: [
        {place: 'Hall A', author: 'David Kopal **', title: 'Unleash the power of the higher-order components. [en]'},
        {place: 'Hall B', author: 'Arkadiy Pilguk ***', title: 'Real-world application of computer vision and machine. [ru]'},
        {author: 'Patrick Kettner', title: ''}
      ]
    },
    {
      time: '17:25-17:35',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '17:35-18:05',
      talks: [
        {place: 'Hall A', author: 'Ilya Ivanov **', title: 'Advanced React-Native. [ru]'},
        {place: 'Hall B', author: 'Oleg Chorny ***', title: 'Cloud Native Observability. [ru]'},
        {author: 'David Kopal', title: ''}
        ]
    },
    {
      time: '18:05-18:15',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '18:15-18:45',
      talks: [
        {place: 'Hall A', author: 'Henning Muszynski **', title: 'The ABC of Coded Style Guides. [en]'},
        {place: 'Hall B', author: 'Denys Dovhan **', title: 'Automating GitHub workflow with probot. [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '20:00',
      talks: [
        {author: '', title: 'Afterparty with drinks and snacks.'}
      ]
    }
  ];

  var talks8july = [
    {
      time: '08:30 - 09:30',
      talks: [
        {author: '', title: 'Yoga'}
      ]
    },
    {
      time: '09:30 - 10:00',
      talks: [
        {place: 'Hall A', author: 'Rustam Aliyev and Ivan Martynov **', title: 'From monolith web app to micro-frontends – How we extended microservices architecture to frontend. [en/ru]'},
        {place: 'Hall B', author: 'Mihail Zachepilo ***', title: 'WebAssembly powered Machine Learning. [ru]'},
      ],
      workshops: [
        {place: 'Hall C - workshop', author: 'Nik Graf **', title: '<b>Workshop <br> 09:00 - 17:00</b> Build Serverless Node.js Application on AWS. [en]'},
        {place: 'Hall D - workshop', author: 'Timur Shemsedinov, Aleksey Orlenko, Alex Golikov *', title: '<b>Workshop <br> 09:00-16:00</b> Software Engendering Fundamentals for JavaScript Developers. [ru]'},
        {place: 'Hall E - workshop', author: 'Max Klymyshyn ***', title: '<b>Workshop <br> 09:00 - 11:00 </b> Build blockchain using CRDT and Merkle Trees. [ru]'},
        {place: 'Hall F - workshop', author: 'Valentine Mezentsev, Gleb Dobzhanskyi **', title: '<b>Workshop <br> 10:00 - 13:00</b> Bot Battle: Google Home vs Alexa. [ru]'}
      ]
    },
    {
      time: '10:00 - 10:10',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:10 - 10:40',
      talks: [
        {place: 'Hall A', author: 'Viktor Turskyi **', title: 'How to create a VR application with React. [en]'},
        {place: 'Hall B', author: 'Denis Artyuhovich **', title: 'Evolution of Web Performance. [ru]'},
      ],
      workshops: [
        {place: 'Hall E - workshop', author: 'Alex Migutsky', title: '<b>Workshop <br> 11:00 - 14:00</b> Growing your career as software engineer. [ru]'},
        {place: 'Hall F - workshop', author: 'Trishul Goel *', title: '<b>Workshop <br> 13:00 - 16:00</b> Build your own browser extension. [en]'}
      ]
    },
    {
      time: '10:40 - 10:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:50 - 11:20',
      talks: [
        {place: 'Hall A', author: 'Ivan Jovanovic ***', title: 'Introduction to Micro Frontends. [en]'},
        {place: 'Hall B', author: 'Ivan Goncharov **', title: 'W.T.F. is GraphQL? [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '11:20 - 11:35',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:35 - 12:05',
      talks: [
        {place: 'Hall A', author: 'Eyal Eizenberg **', title: 'Redux-cornell. [en]'},
        {place: 'Hall B', author: 'Savitskyi Roman *', title: 'Chrome Dev Tools. New & Tips. [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '12:05 - 12:15',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:15 - 12:45',
      talks: [
        {place: 'Hall A', author: 'Patrick Kettner *', title: 'Creating magic with houdini. [en]'},
        {place: 'Hall B', author: 'Roman Rodomansky ***', title: 'Processes automation within the company. [Tech Corner] [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '12:45 - 12:55',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:55 - 13:25',
      talks: [
        {place: 'Hall A', author: 'Asim Hussain ***', title: 'How to scale an SPA to 1M views for $1? [en]'},
        {place: 'Hall B', author: 'Aleksandr Shushunov **', title: 'Let\'s kill lifecycle. [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '13:25 - 14:25',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '14:25 - 14:55',
      talks: [
        {place: 'Hall A', author: 'Aleksandra Shinkevich', title: 'Development standards: a step-by-step guide to implement it without pain'},
        {place: 'Hall B', author: 'Alex Troush ***', title: 'The existential crisis in a blockchain era. [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '14:55 - 15:05',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '15:05 - 15:35',
      talks: [
        {place: 'Hall A', author: 'Valerii Sorokobatko ***', title: 'Passing strings using (in)finite-state-machine and prepack. [ru]'},
        {place: 'Hall B', author: 'Aleksandra Shinkevich *', title: 'Development atandarts: a step-by-step guide to implement it without pain. [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '15:35 - 15:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '15:50 - 16:20',
      talks: [
        {place: 'Hall A', author: 'Radoslav Stankov **', title: 'React Refactoring Patterns. [en]'},
        {place: 'Hall B', author: 'Oleksandr Skachkov ***', title: 'WebAssembly vs JavaScript: What is faster? [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '16:20 - 16:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:30 - 17:00',
      talks: [
        {place: 'Hall A', author: 'Denis Radin ***', title: 'Mining crypto in browser_ GPU, WebAssembly and all the good things to try. [ru]'},
        {place: 'Hall B', author: 'Valentyn Barmashyn **', title: 'RxJS in React, RxJS in Angular and why we all should be friends. [ru]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '17:00 - 17:10',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '17:10 - 17:40',
      talks: [
        {place: 'Hall A', author: 'Artem Zakharchenko *', title: 'What happens when you don\'t write the code. What advises would I like to take 10 years ago. [ru]'},
        {place: 'Hall B', author: 'Leonid Baida **', title: 'Flow typing: your path from experiments to final implementation in an enterprise project. [ua]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '18:40 - 20:00',
      talks: [
        {author: '', title: 'Speakers Dinner'}
      ]
    }
  ];

  var workshop6july = [
    {time: '09:00 - 16:00', talks: [ { author: 'Ivan Jovanovic ***', title: 'Testing javascript applications.' },]},
    {time: '09:00 - 17:00', talks: [ { author: 'Gerard Sans **', title: 'Fullstack graphQl using react with Gerard Sans. [en]' },]},
    {time: '09:00 - 17:00', talks: [ { author: 'Nik Graf **', title: 'Get Started with Reason & ReasonReact. [en]' },]},
    {time: '09:00 - 16:00', talks: [ { author: 'Timur Shemsedinov, Aleksey Orlenko, Alex Golikov ', title: 'Software Engendering Fundamentals for JavaScript Developer.' },]},
    {time: '09:00 - 12:00', talks: [ { author: 'Alex Migutsky *', title: 'Growing your career as software engineer. [ru]' },]},
    // {time: '15:00 - 15:00', talks: [ { author: '', title: '' },]}

    // {time: '09:00 - 17:00', talks: [ { author: 'David Mullerchen ', title: 'Angular 101. [en]' },]},
    // {time: '12:00 - 15:00', talks: [ { author: 'Valentine Mezentsev, Gleb Dobzhanskyi ', title: 'Bot Battle: Google Home vs Alexa. [Ru]' },]}
  ];



  // var workshop8july = [
  //   {time: '09:00 - 11:00', talks: [ { author: 'Natalia Tepluhina', title: 'Build A Simple Pet Fetching Web App using VueJS. [ru]' },]},
  //   {time: '11:00 - 14:00', talks: [ { author: 'Alex Migutsky', title: 'Growing your career as software engineer. [ru]' },]},
  //   {time: '14:00 - 16:00', talks: [ { author: 'Max Klymyshyn ***', title: 'Build blockchain using CRDT and Merkle Trees.' },]},
  //   {time: '10:00 - 12:00', talks: [ { author: 'Sara and Katarzyna', title: 'Ultimate style workshop for React.' },]},
  //   {time: '12:00 - 15:00', talks: [ { author: 'Trishul Goel', title: 'Build your own browser extension.' },]},
  //   {time: '09:00 - 17:00', talks: [ { author: 'Nik Graf', title: 'Build Serverless Node.js Application on AWS. [en]' },]},
  //   {time: '09:00 - 16:00', talks: [ { author: 'Timur Shemsedinov, Aleksey Orlenko, Alex Golikov ', title: 'Software Engendering Fundamentals for JavaScript Developers.' },]}
  // ];


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

        '    <div class="schedule__report-hall-cont">' +

      '        <div class="schedule__report-hall">' +
      '             ${title}' +
      '          <div class="schedule__reporter">${author}</div>' +
      '        </div>' +
    '        </div>' +
    '</div>';

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
    '          {{html title }}' +
    '          <div class="schedule__reporter">${author}</div>' +
    '          <div class="schedule__place">${place}</div>' +
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
    renderSchedulesWithHallsOld({
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



    // _____________________________________________

    var july6_workshops = '';

    renderSchedulesWithHalls({
      data: workshop6july,
      render: july6_workshops,
      selector: '#july6_workshops',
      splitLines: true
    });



    // _____________________________________________


    // var july8_workshops = '';

    // renderSchedulesWithHalls({
    //   data: workshop8july,
    //   render: july8_workshops,
    //   selector: '#july8_workshops',
    //   splitLines: true
    // });

    /* accordion init */
    $('.beefup').beefup();
  }

  function renderSchedulesWithHalls(opt) {
    $.each(opt.data, function (i, sp) {
      var divider = '';
      if (opt.splitLines) {
        divider = ' splitted';
      }

      var scheduleRow = '<div class="schedule__report '+divider+'">',
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

      if(sp.workshops) {
        scheduleCells += '<div class="w-100">';

        $.each(sp.workshops, function (i, obj) {
          scheduleCells += $.tmpl("hallBlockTemplate", obj)[0].outerHTML;
        });

        scheduleCells += '</div>';
      }



      scheduleRow += timeBlock + scheduleCells + '</div>';

      opt.render += scheduleRow;
    });

    $(opt.selector).append(opt.render);
  }


  function renderSchedulesWithHallsOld(opt) {
    $.each(opt.data, function (i, sp) {
      var divider = '';
      if (opt.splitLines) {
        divider = ' splitted';
      }

      var scheduleRow = '<div class="schedule__report '+divider+'">',
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
