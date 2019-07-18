

$(document).ready(function(){



    var tickets = [

        {
            title: "Last Chance Ticket",
            price: "5800",
            currency: "uah" ,
            action: "buy ticket",
            options: [
                {
                    main: '2 tracks of talks and tech corners',
                    additional: ''
                },
                {
                    main: 'Bicycle tour',
                    additional: ''
                },
                {
                    main: 'Pre-party',
                    additional: ' (Soft skill deelopment)'
                },
                {
                    main: 'Morning yoga',
                    additional: ''
                },
                {
                    main: 'Afterparty',
                    additional: ''
                },
            ],
        },
        {
            title: "One Day Ticket",
            price: "2700",
            currency: "uah" ,
            action: "buy ticket",
            options: [
                {
                    main: '2 tracks of talks and tech corners',
                    additional: 'Gives possibility to visit one conference day for your choice: 20th or 21st of July'
                },
                {
                    main: 'Bicycle tour',
                    additional: ''
                },
                {
                    main: 'Pre-party',
                    additional: ' (Soft skill development)'
                },
                {
                    main: 'Morning yoga',
                    additional: ''
                },
                {
                    main: 'Afterparty',
                    additional: ''
                },
            ],
        },
        {
            title: "Student ticket",
            price: "2500",
            currency: "uah" ,
            action: "buy ticket",
            options: [
                {
                    main: '2 tracks of talks and tech corners',
                    additional: ''
                },
                {
                    main: 'Bicycle tour',
                    additional: ''
                },
                {
                    main: 'Pre-party',
                    additional: ' (Soft skill deelopment)'
                },
                {
                    main: 'Morning yoga',
                    additional: ''
                },
                {
                    main: 'Afterparty',
                    additional: ''
                },
            ],
        },
        {
            title: "DIVERSITY SCHOLARSHIPS",
            price: "",
            currency: "" ,
            action: "get ticket",
            options: [
                {
                    main: '2 tracks of talks and tech corners',
                    additional: ''
                },
                {
                    main: 'Bicycle tour',
                    additional: ''
                },
                {
                    main: 'Pre-party',
                    additional: ' (Soft skill deelopment)'
                },
                {
                    main: 'Morning yoga',
                    additional: ''
                },
                {
                    main: 'Afterparty',
                    additional: ''
                },
            ],
        }
    ];






    $(document).on('click', '[data-modal-trigger="#ticket-modal"]', function() {
        console.log('start');
        var $ticketChosen = $(this);
        console.log($ticketChosen);
        loadTicketModal($ticketChosen);
    });


    function loadTicketModal($ticketChosen) {
        var $modalBody = $('#ticket-modal'),
            $modalTicketTitle = $modalBody.find('.modal-body__title'),
            $modalTicketPrice = $modalBody.find('.ticket__price'),
            $modalTicketCurrency = $modalBody.find('.ticket__currency'),
            $modalTicketAction = $modalBody.find('.ticket__action'),
            $modalOptionsContainer = $modalBody.find('.modal-body__options');

        var ticketIndex = parseInt($ticketChosen.attr('data-item-index'));


        var ticketData = tickets[ticketIndex];

        if (ticketData) {
            var   ticketTitle = ticketData.title,
                ticketPrice = ticketData.price,
                ticketCurrency = ticketData.currency,
                ticketAction = ticketData.action,
                options = ticketData.options,
                optionsContent = '';

            options.forEach(function (item, i, arr) {
                optionsContent +=
                '<div class="option">' +
                '<h4 class="option__main">'+
                item.main +
                '</h4>' +
                '<p class="option__additional">'+
                item.additional +
                '</p>' +
                '</div>';
            });


            $modalTicketTitle.text(ticketTitle);
            $modalTicketPrice.text(ticketPrice);
            $modalTicketCurrency.text(ticketCurrency);
            $modalTicketAction.text(ticketAction);

            $modalOptionsContainer.html(optionsContent);



            $('#ticket-modal').modal('show');
        }
    }


});
