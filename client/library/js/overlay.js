var widthPercent = {
    topScore:   '60%',
    contact:    '40%',
    login:      '60%',
    enterName:  '40%'
}

function openTopScoreNav() {
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("top-score-overlay").style.width = widthPercent.topScore;
}

function closeTopScoreNav() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("top-score-overlay").style.width = "0%";
}

function openContactNav() {
    document.getElementById("overlay").style.width = "80%";
    document.getElementById("contact-overlay").style.width = widthPercent.contact;
}

function closeContactNav() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("contact-overlay").style.width = "0%";
}

function openLoginNav() {
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("login-overlay").style.width = widthPercent.login;
}

function closeLoginNav() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("login-overlay").style.width = "0%";
}

function openEnterNameNav() {
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("enter-name-overlay").style.width = widthPercent.enterName;
}

function closeEnterNameNav() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("enter-name-overlay").style.width = "0%";
}

$(window).resize(()=>{
    var width = $(window).width();
    if (width < 768){
        widthPercent = {
            topScore:   '100%',
            contact:    '100%',
            login:      '100%',
            enterName:  '100%'
        }
    } else {
        widthPercent = {
            topScore:   '60%',
            contact:    '40%',
            login:      '60%',
            enterName:  '40%'
        }
    }
})