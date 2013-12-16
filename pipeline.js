var github = "https://raw.github.com/sgtcarneiro/stingray-pipeline/master/";
var first = $('.steps .jenkins:nth(0) .header');
var build = first.find('.build').text().substr(7);
var stingray = {
    "ribeiroje": {
        name: "Eduardo Ribeiro"
    },
    "carneiror": {
        name: "Rui Carneiro"
    },
    "cunhac": {
        name: "Cristiano Cunha"
    },
    "fernandesm": {
        name: "Marta Fernandes"
    },
    "piresj": {
        name: "João Pires"
    },
    "rosam": {
        name: "Miguel Rosa"
    }
};
var sound = new Audio('http://cd.textfiles.com/10000soundssongs/WAV/BUZZER.WAV');
var police = new Audio('http://www.linux-video.net/Samples/Wav/policesiren.wav');

var puns = [
    'To %s Clean/Install is so over rated!',
    '%s, o quebra bilhas!',
    '%s, é favor de adicionar €0.50 ao pote!',
    'In Soviet Russia the pipeline breaks you!'
];

/*
$('.jenkins .succ .name').each(function () {
    var name = $(this).text(),
        header = $(this).parents('.header');

    //ROSA
    if (name.match(/rosam/g)) {
        header.css({ background: "pink url('http://images1.wikia.nocookie.net/__cb20110301222835/uncyclopedia/images/1/14/Roses.._they_sparkle.gif') repeat 20px -32px" });
        $(this).css({ color: 'Violet', textShadow: '1px 1px 1px white' });
    }

    //CARNEIRO
    if (name.match(/carneiror/g)) {
        header.css({ background: "white url('http://25.media.tumblr.com/3784c0fabc739cdcc1dbb18e1a5fc66f/tumblr_mil7o3TrPG1rshzllo5_250.gif') repeat 10px -20px" });
        $(this).css({ color: 'white' });
    }

});
*/

// Add the funny stuff the first time this build gets on the pipe
/*if (Number(window.location.hash) != Number(build)) {
    if (first.hasClass('fail')) {
        police.play();
    }
}

// Add this build to the hash
if (first.hasClass('succ') || first.hasClass('fail')) {
    window.location.hash = build;
}*/


// THE BUILD HAS FAILED! BLAME THE BITCHES!
if (first.hasClass('fail')) {
    var name = first.find('.name').text(),
        blame = "",
        photo = "unknown";

    $(Object.keys(stingray)).each(function () {
        var key = this.toString();
        if (name.match(key)) {
            blame = stingray[key]['name'];
            photo = key;
        }
    });

    if (blame == "") {
        blame = "John Doe";
    }

    var rand = Math.floor(Math.random()*puns.length);
    var pun = puns[rand];
    var warning = $('<div class="cenas"><h1>Wanted</h1><img src="' + github + '/picsay/' + photo + '.jpg" /><p>' + pun.replace('%s', blame) + '</p></div>');
    warning.css({
        position: 'absolute',
        top: '241px',
        right: 0,
        bottom: 0,
        width: '49%',
        background: 'rgba(255, 51, 0, 0.6)',
        padding: '20px',
        textAlign: 'center'
    });
    warning.find('h1, p').css({
        fontSize: '34px',
        textAlign: 'center',
        float: 'none',
        fontWeight: 'bold',
        color: 'white'

    });
    warning.find('h1').css({
        fontSize: '70px',
        fontFamily: 'serif',
        textShadow: '1px -2px 0 #000000'
    });
    warning.find('img').css({
        maxWidth: '410px'
    });
    warning.find('p').css({
        lineHeight: '70px',
        textShadow: '1px 2px 0 #000000'
    });
    $('.cenas').remove();
    $('body').append(warning);
}

// Snow time!!!
$.getScript('https://raw.github.com/loktar00/JQuery-Snowfall/master/snowfall.js', function () {
    snowFall.snow(document.getElementsByTagName("body"), {round : true, minSize: 5, maxSize: 12});
    snowFall.snow(document.getElementsByTagName("body"), {round : true, minSize: 2, maxSize: 8});
});

// Christmas!!
$('<style type="text/css">.succ-holder .testbox .date { background: url("http://yamahahometheatre.org/wp-content/uploads/2013/12/gif-christmas-lightstop-10-biggest-outdoor-christmas-lights-house-decorations-digsdigs-u3gxrukq.gif"); background-size: 100% 100%; }</style>').appendTo($('head'));

// Fire!!
$('<style type="text/css">.fail-holder .testbox .date { background: url("' + github + '/gifs/fire.gif") no-repeat -35px -5px; background-size: 162%; border: 4px solid red; height: 120px; text-shadow: 1px 1px 0 black; }</style>').appendTo($('head'));