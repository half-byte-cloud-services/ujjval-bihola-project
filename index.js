let home = document.querySelector('#home');
let homeSec = document.querySelector('#home-sec');
let slider = document.querySelector('#slider');
let tradition = document.querySelector("#tradition");
let mission = document.querySelector('#mission');
let vision = document.querySelector('#vision');
let events = document.querySelector('#events');
let footer = 330;
let footerSec = document.querySelector('#footer-sec');

const mediaQuery = window.matchMedia('(max-width: 1160px)')

function scrollSpecific(id) {
    var homeH = home.offsetHeight;
    // console.log(homeH);
    var homeSecH = homeH + homeSec.offsetHeight;
    var sliderH = homeSecH + slider.offsetHeight - 80;
    var traditionH = sliderH + tradition.offsetHeight;
    // console.log(traditionH);
    var missionH = traditionH + mission.offsetHeight;
    // console.log(missionH);
    var visionH = missionH + vision.offsetHeight;
    // console.log(visionH);
    var eventsH = visionH + events.offsetHeight;
    // console.log(eventsH);
    // var footerH = eventsH + footer;
    // console.log(footerH);

    if (id == 'home') {
        window.scrollTo(0, (homeH - 90));
    } else if ( id == 'tradition') {
        window.scrollTo(0, sliderH);
    } else if ( id == 'mission') {
        window.scrollTo(0, traditionH);
    } else if ( id == 'vision'){
        window.scrollTo(0, missionH - 30);
    } else if ( id == 'events') {
        window.scrollTo(0, visionH);
    } else if ( id == 'footer') {
        window.scrollTo(0, eventsH);
    }
}

var flag = true;

function navbarTrigger() {
    document.getElementById("header-child").classList.toggle('box-shadow');
    if (flag) {
        document.getElementById("navbar").classList.add('navbar-anime-down');
        document.getElementById("navbar").classList.remove('navbar-anime-up');
        flag = false;
    } else {
        document.getElementById("checkbox4").click();
        document.getElementById("navbar").classList.add('navbar-anime-up');
        document.getElementById("navbar").classList.remove('navbar-anime-down');
        flag = true;
    }
}

window.addEventListener('scroll', headerPop);
function headerPop() {
    if (window.pageYOffset > 200) {
        document.getElementById("header").classList.remove("anime-up");
        document.getElementById("header").classList.add("anime-down");
    } else {
        document.getElementById("header").classList.remove("anime-down");
        document.getElementById("header").classList.add("anime-up");
    }
}

function popUpOpen(drive) {
    document.body.classList.add('overflow-class');
    document.getElementById(drive).classList.remove('dis-none');
    document.getElementById(drive).classList.add('fade-in');
    document.getElementById("header").classList.add("dis-none");
}

function popUpClose(drive) {
    document.body.classList.remove('overflow-class');
    document.getElementById(drive).classList.add('dis-none');
    document.getElementById(drive).classList.remove('fade-in');
    document.getElementById("header").classList.remove("dis-none");
}