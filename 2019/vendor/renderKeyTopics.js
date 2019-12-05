$(document).ready(function() {
    var keyTopocs = [
        'React design patterns',
        'Application architecture design',
        'CSS parsing',
        'Houdini / Next gen CSS',
        'JS transpilers',
        'Algorithms',
        ' Estimation',
        'Advanced React Native',
        'Algorithms',
        'Application architecture design',
        'Crypto mining',
        'Web Extentions',
        'RxJS + React / Angular',
        'Automation / Probot',
        'React VR',
        'ngrx',
        'serverless + microfontends',
        'WebComponents',
        ' WebAssembly',
        'Flow typing'
    ];

    keyTopocs.forEach(function (entry) {
        $('.topics-list').append(
            "<li class='topics-list__item'>" + entry +"</li>"
        )
    });
});