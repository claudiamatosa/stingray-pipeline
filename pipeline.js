var first = $('.steps .jenkins:nth(0) .header');
var stingray = {
    "ribeiroje": {
        name: "Eduardo Ribeiro",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385728744.jpg?w=AAAGmTf1aBNr3vsbOxRqQw1KUwQQ8HA9h3dSvo2XZpbBGQ"
    },
    "carneiror": {
        name: "Rui Carneiro",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385741901.jpg?w=AADrRfJVyZy4uFNE68J9wv2LJcmCRBjDmaF93S30edw6Ug"
    },
    "cunhac": {
        name: "Cristiano Cunha",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385724639.jpg?w=AABQLFt-oGQw6pKaB-8a3r25aHTkAiVolf_kXtrVE1AMtw"
    },
    "fernandesm": {
        name: "Marta Fernandes",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385715670.jpg?w=AABx9JSlgfSPG__jER8fOKdEf4wJvCVZvChUTrY9s6hrDw"
    },
    "piresj": {
        name: "João Pires",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385716483.jpg?w=AACkhg9Ebz1IKHDu3igMgjqTVDvXN8T9UHr478hkgvPSCw"
    },
    "rosam": {
        name: "Miguel Rosa",
        image: "https://dl-web.dropbox.com/get/PicSay/picsay-1385658145.jpg?w=AAB_h7Mj4Q-cybZcAd13C_46_NOFvBjApbzr6S4O1zhYcA"
    }
};
var sound = new Audio('http://cd.textfiles.com/10000soundssongs/WAV/BUZZER.WAV');

var puns = [
    'To %s Clean/Install is so over rated!',
    '%s, o quebra bilhas!',
    '%s, é favor de adicionar €0.50 ao pote!',
    'In Soviet Russia the pipeline breaks you!'
];

if (first.hasClass('fail')) {
    var name = first.find('.name').text();

    $(Object.keys(stingray)).each(function () {
        var key = this.toString();
        if (name.match(key)) {
            var rand = Math.floor(Math.random()*puns.length);
            var pun = puns[rand];
            var warning = $('<div class="cenas"><h1>Wanted</h1><img src="' + stingray[key]['image'] + '" /><p>' + pun.replace('%s', stingray[key]['name']) + '</p></div>');
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
                maxWidth: '310px'
            });
            warning.find('p').css({
                lineHeight: '70px',
                textShadow: '1px 2px 0 #000000'
            });
            $('.cenas').remove();
            $('body').append(warning);

            setInterval(function () { sound.play(); }, 1000*60); //1min
        }
    });
}