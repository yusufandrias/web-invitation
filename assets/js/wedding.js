var slickOptions = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
},
$slick = $('.hero-slider');

$('#open-invitaion').click(function(){
    $('.home-invitation').fadeOut(2400);
    $slick.slick('slickSetOption', {
        autoplay: true
    });
});

$slick.slick(slickOptions);



var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear() + 1;

var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

$('#cd').countdown({
    date: '12/12/2021 08:00:00', // TODO Date format: 07/27/2017 17:00:00
    offset: +7, // TODO Your Timezone Offset
    day: 'Day',
    days: 'Days',
    hideOnComplete: true
}, function (container) {
    alert('Done!');
});


var url_string = window.location.href;
var url = new URL(url_string);
var to = url.searchParams.get("to") ?? 'Anda';
document.getElementById('nama-tamu').innerText = to;