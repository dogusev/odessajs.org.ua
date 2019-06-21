$(document).ready(function () {

  var talks6july = [
    // {time: '', author: 'Mike Solomon', title: 'Testing JS code that consumes APIs'},
    // {time: '', author: 'Andrey Kucherenko', title: 'Headlined as mocking the internet real-time'},
    // {time: '', author: 'Nick Lototskiy', title: ''},
    // {time: '', author: 'Alex Bordun', title: ''},
  ];

  var talks7july = [
    {
      time: '07:00-08:00',
      talks: [
        {author: '', title: 'Morning Yoga'}
      ]
    },
    {
      time: '08:00-09:30',
      talks: [
        {author: '', title: 'Registration'}
      ]
    },
    {
      time: '09:30-10:10',
      talks: [
        {place: '', author: 'Viktor Turskyi (all)', title: '6 ways to hack your JavaScript application [RU]'},
        {place: '', author: 'Simona Cotin (mid)', title: 'Build Scalable APIs using GraphQL and Serverless [EN]'},
        {place: '', author: '', title: ''}

      ]
    },
    {
      time: '10:10-10:20',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:20-11:00',
      talks: [
        {place: '', author: 'Niels Leenheer (all)', title: 'Fun with Bluetooth [EN]'},
        {place: '', author: 'Alexander Zinchuk (mid-sr)', title: 'Specification-Driven Development of REST APIs [RU]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '11:00-11:20',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:20-12:00',
      talks: [
        {place: '', author: 'Sergiy Babich (jun-mid) ', title: 'How to start enjoy your Angular Rx and NGRX [UA]'},
        {place: '', author: 'Martin Hochel (mid-sr)', title: 'Ultimate React Component Patterns with TypeScript [EN]'},
        {place: '12.00-14.00 [workshop]', author: 'Mike Solomon', title: 'Testing JS code that consumes APIs'}
      ]
    },
    {
      time: '12:00-12:10',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:10-12:50',
      talks: [
        {place: 'Hall A', author: '', title: ''},
        {place: 'Hall B', author: 'Maurizio Mangione (all)', title: 'Progressive Web Apps [EN]'},
        {place: '14:00-16:00 [workshop]', author: 'Artem Frantsiian', title: 'Make your OdessaJS coin'}
      ]
    },
    {
      time: '12:50-15:00',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '15:00-15:40',
      talks: [
        {place: '', author: '', title: ''},
        {place: '', author: 'Lev Vidrak (all)', title: 'Introduction to React Native] [RU]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '15:40-15:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '15:50-16:30',
      talks: [
        {place: '', author: 'Liran Tal (all)', title: 'When your wetware has too many threads - Tips from an ADHDer on how to improve your focus [EN]'},
        {place: '', author: 'Anton Pets (mid)', title: 'How FP made Grammarly codebase error-prone and predictable [RU]'},
        {place: '16.00-18.00 [workshop]',author: 'Aaron Basset ', title: 'Reduce, Reuse, Recycle - Persisting WebSocket connections with SharedWorkers'}
        ]
    },
    {
      time: '16:30-16:40',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:40-17:20',
      talks: [
        {place: '', author: 'Alfredo Lopez (mid)', title: 'Think Fast, First: Empowering a Performance Culture [EN]'},
        {place: '', author: 'Sponsors', title: ''},
        {author: '', title: ''}
        ]
    },
    {
      time: '17:20 - 17:40',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '17:40 - 18:20',
      talks: [
        {place: '', author: 'Jamie Maria Schouren (all)', title: 'The search for App-iness : Progressive Web Apps [EN]'},
        {place: '', author: 'Eldar Dzhafarov (mid-sr)', title: 'The Code [RU]'},
        {author: '', title: ''}
        ]
    },
    {
      time: '18:20-18:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '18:30-19:00',
      talks: [
        {author: '', title: 'Sponsors\' Prizes Raffle'}
      ]
    },
    {
      time: '19:00-22:00',
      talks: [
        {author: '', title: 'Afterparty '}
      ]
    }
  ];

  var talks8july = [
    // {
    //   time: '08:30 - 09:30',
    //   talks: [
    //     {author: '', title: 'Yoga'}
    //   ]
    // },
    {
      time: '9:30-10:10',
      talks: [      
        {place: '', author: 'Joel Lord (all)', title: 'I Don\'t Care About Security (And Neither Should You) [EN]'},
        {place: '', author: 'Roman Sachenko (mid)', title: ''},
      ],
      workshops: [
        {place: '9.00 - 11.00 [workshop]', author: 'Dmytro Selin', title: 'WebAssembly - Everything in browser, from bitcoin miners to python interpreter'},
        // {place: '', author: '', title: ''},
      ]
    },
    {
      time: '10:10-10:20',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '10:20-11:00',
      talks: [
        {place: '', author: 'Max Klymyshyn (sr) ', title: 'Handling partial failures in a distributed environment with Saga [RU]'},
        {place: '', author: 'Yoni Goldberg (mid)', title: '5 advanced & shiny testing techniques [EN]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '11:00-11:20',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '11:20-12:00',
      talks: [
        {place: '', author: 'Oleksandra Kalinina', title: 'Mental debugging tips & tricks [RU]'},
        {place: '', author: 'Saif Jerbi (sr) ', title: 'Pluggable Web application using Angular and NodeJS [EN]'},
        {place: '11.00-14.00 [workshop]', author: 'Karthic Keyan', title: 'Building Cross Browser Extension - From Zero to Hero'}
      ]
    },
    {
      time: '12:00-12:10',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '12:10 - 12:50',
      talks: [
        {place: '', author: 'Aaron Basset', title: 'When your wetware has too many threads - Tips from an ADHDer on how to improve your focus [EN]'},
        {place: '', author: '', title: ''},
        {place: '14:00 - 16:00 [workshop]', author: 'Saif Jerbi', title: 'Pluggable Web application using Angular and NodeJS'}
      ]
    },
    {
      time: '12:50-15:00',
      talks: [
        {author: '', title: 'Lunch'}
      ]
    },
    {
      time: '15:00-15:40',
      talks: [
        {place: '', author: 'Christian Gill (jun-mid)', title: 'Functional programming for the people [EN]'},
        {place: '', author: 'Ilya Zaprutsky', title: 'The Art of Node.js or how to do something cool using public data [RU]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '15:40-15:50',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '15:50-16:30',
      talks: [
        {place: '', author: 'Khrystyna Landvytovych (jun-mid)', title: 'Animation in the Air [UA]'},
        {place: '', author: 'Diego González-Zúñiga', title: 'Immersive Web [EN]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '16:30-16:40',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '16:40-17:20',
      talks: [
        {place: '', author: 'Maciej Treder (mid)', title: 'Angular Universal - a medicine for the Angular + SEO/CDN issues'},
        {place: '', author: 'Irina Ziakhor (all)', title: 'Product Engineering mindset: are you ready for the product revolution? [RU]'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '17:20-17:40',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '17:40-18:20',
      talks: [
        {place: '', author: 'Valerii Sorokobatko (mid)', title: ''},
        {place: '', author: 'Farzad Yousefzadeh (jun-mid)', title: 'Develop UIs without any UIs (UI is just a state consumer)'},
        {place: '', author: '', title: ''}
      ]
    },
    {
      time: '18:20-18:30',
      talks: [
        {author: '', title: 'Break'}
      ]
    },
    {
      time: '18:30-19:00',
      talks: [
        {author: '', title: 'Sponsors\' Prizes Raffle'}
      ]
    }
  ];


  var workshop6july = [
    {time: '', talks: [ { author: 'Mike Solomon', title: 'Testing JS code that consumes APIs' },]},
    {time: '', talks: [ { author: 'Andrey Kucherenko', title: 'Headlined as mocking the internet real-time' },]},
    {time: '', talks: [ { author: 'Nick Lototskiy', title: '' },]},
    {time: '', talks: [ { author: 'Alex Bordun', title: '' },]},
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
        '          <div class="schedule__place">${place}</div>' +
        '          {{html title }}' +
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
