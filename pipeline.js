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

// Add this build to the hash
if (Number(build) != 0) {
    window.location.hash = build;
}


// THE BUILD HAS FAILED! BLAME THE BITCHES!
if (first.hasClass('fail')) {
    var name = first.find('.name').text();

    $(Object.keys(stingray)).each(function () {
        var key = this.toString();
        if (name.match(key)) {
            var rand = Math.floor(Math.random()*puns.length);
            var pun = puns[rand];
            var warning = $('<div class="cenas"><h1>Wanted</h1><img src="' + github + '/picsay/' + key + '.jpg" /><p>' + pun.replace('%s', stingray[key]['name']) + '</p></div>');
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

            //sound.play();
        }
    });
}

// Snow time!!!
$.getScript('https://raw.github.com/loktar00/JQuery-Snowfall/master/snowfall.js', function () {
    snowFall.snow(document.getElementsByTagName("body"), {round : true, minSize: 5, maxSize: 12});
    snowFall.snow(document.getElementsByTagName("body"), {round : true, minSize: 2, maxSize: 8});
});

// Christmas!!
$('<style type="text/css">.succ-holder .testbox .date { background: url("http://yamahahometheatre.org/wp-content/uploads/2013/12/gif-christmas-lightstop-10-biggest-outdoor-christmas-lights-house-decorations-digsdigs-u3gxrukq.gif"); background-size: 100% 100%; }</style>').appendTo($('head'));

// Fire!!
$('<style type="text/css">.fail-holder .testbox .date { background: url(data:image/gif;base64,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) no-repeat center 48px; }</style>').appendTo($('head'));