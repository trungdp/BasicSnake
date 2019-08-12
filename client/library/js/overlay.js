const widthOverlayCombo = {
    widthNormal     : { topScore:'60%', contact:'40%', login:'60%', enterName:'40%' },
    width1200       : { topScore:'70%', contact:'50%', login:'70%', enterName:'50%' },
    width1024       : { topScore:'80%', contact:'60%', login:'80%', enterName:'60%' },
    width768        : { topScore:'90%', contact:'70%', login:'90%', enterName:'70%' },
    width480        : { topScore:'100%',contact:'80%', login:'100%',enterName:'80%' }
};

var widthPercent = widthOverlayCombo.widthNormal;

function resizeOverlay(){
    if ($("#top-score-overlay").width() > 0){
        document.getElementById("top-score-overlay").style.width = widthPercent.topScore;
    } else if ($("#contact-overlay").width() > 0){
        document.getElementById("contact-overlay").style.width = widthPercent.contact;
    } else if ($("#login-overlay").width() > 0){
        document.getElementById("login-overlay").style.width = widthPercent.login;
    } else if ($("#enter-name-overlay").width() > 0){
        document.getElementById("enter-name-overlay").style.width = widthPercent.enterName;
    }
}

function resizeGameBoard(width){
    var boardWidth = "660px", boardHeight = "480px";
    if (grid){
        if (width <= 550){
            grid = 20;
            boardWidth = 22 * grid;
            boardHeight = 16 * grid;
        } else if (width <= 768){
            widthPercent = widthOverlayCombo.width768;
        } else if (width <= 1024){
            widthPercent = widthOverlayCombo.width1024;
        } else if (width <= 1200){
            widthPercent = widthOverlayCombo.width1200;
        } else {
            widthPercent = widthOverlayCombo.widthNormal;
        }
    } 
    
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
    document.getElementById("overlay").style.width = "100%";
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
    if (width <= 550){
        widthPercent = widthOverlayCombo.width480;
    } else if (width <= 768){
        widthPercent = widthOverlayCombo.width768;
    } else if (width <= 1024){
        widthPercent = widthOverlayCombo.width1024;
    } else if (width <= 1200){
        widthPercent = widthOverlayCombo.width1200;
    } else {
        widthPercent = widthOverlayCombo.widthNormal;
    }
    resizeOverlay();
})