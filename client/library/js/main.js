
//Ở đây ta tạo ra bộ khung chứa game
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


const defaultLength = 4;
var gameTimer = 0;
var bigAppleTimer = 0;
var grid = 30;
var level = 1;
var nameImage = './library/images/yellow.png';
var snakeImage ;
var scale = 3;
var bigAppleImage = loadImages(['./library/images/big-apple.png'])[0]; 
var partImage = {
    headUp:     {x:3 * 64,y:0 * 64},
    headDown:   {x:4 * 64,y:1 * 64},
    headRight:  {x:4 * 64,y:0 * 64},
    headLeft:   {x:3 * 64,y:1 * 64},
    tailUp:     {x:3 * 64,y:2 * 64},
    tailDown:   {x:4 * 64,y:3 * 64},
    tailRight:  {x:4 * 64,y:2 * 64},
    tailLeft:   {x:3 * 64,y:3 * 64},
    apple:      {x:0 * 64,y:3 * 64},
    horiBody:   {x:1 * 64,y:0 * 64},
    vetiBody:   {x:2 * 64,y:1 * 64},
    topLeft:    {x:2 * 64,y:2 * 64},
    topRight:   {x:0 * 64,y:1 * 64},
    botLeft:    {x:2 * 64,y:0 * 64},
    botRight:   {x:0 * 64,y:0 * 64}
}
// khởi tạo đối tượng rắn là 1 ô vuông

var snake = {
    x: 5 * grid,
    y: 5 * grid,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: defaultLength
};

var count = 0;
var apple = {
    x: 8 * grid,
    y: 8 * grid,
    width: grid,
    height: grid
};

var bigApple = {
    x: -1000,
    y: -1000,
    width: grid * 2,
    height: grid * 2
};

var ar = new Array(37, 38, 39, 40);

function speedFromLevel() {
    switch (level) {
        case 2:     return 120;
        case 3:     return 105;
        case 4:     return 90;
        case 5:     return 75;
        case 6:     return 60;
        case 7:     return 50;
        default:    return 135;
    }
}

function allEqual(a,b,c){
    return a == b && b == c
}

function bigAppleScoreFromLevel() {
    return 10 * level;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inscreateScore(addingScore) {
    const newScore = Number($("#user-score").text()) + addingScore;
    $("#user-score").text(newScore.toString());
}

function resetScore() {
    $("#user-score").text(0);
}

function rowColNumber() {
    return {
        row: parseInt($('#game').height() / grid),
        col: parseInt($('#game').width() / grid)
    }
}

function newApple() {
    apple.x = getRandomInt(0, rowColNumber().col) * grid;
    apple.y = getRandomInt(0, rowColNumber().row) * grid;
}

function newBigApple() {
    bigApple.x = getRandomInt(0, rowColNumber().col - 1) * grid;
    bigApple.y = getRandomInt(0, rowColNumber().row - 1) * grid;
}

function hideBigApple() {
    bigApple.x = -1000;
    bigApple.y = -1000;
}

function resetSnake() {
    snake = {
        x: 5 * grid,
        y: 5 * grid,
        dx: grid,
        dy: 0,
        cells: [],
        maxCells: defaultLength
    };
    newApple();
    snakeImage = loadImages([nameImage])[0];

    var resetTimer = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.x += snake.dx;
        snake.y += snake.dy;

        snake.cells.unshift({
            x: snake.x,
            y: snake.y
        });

        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }
        drawBackground();
        drawSnake();

        if ((snake.cells.length == snake.maxCells)) {
            clearInterval(resetTimer);
        }
    }, 0)
}

function countDown() {
    snake.cells.forEach(function (cell, index) {
        for (var i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                resetSnake();
                resetScore();
                break;
            }
        }
    });
    var time = 3;
    $('#noti-text').text('Ready');
    $('#start-button').addClass('disabled');
    $('.game-control').addClass('disabled');
    $('#start-button').text((time).toString());
    
    gameTimer = setInterval(() => {
        time -= 1;
        if (time == 0) {
            $('#start-button').text();
            $('.start-game').hide();
            $('#game').removeClass('canvas-blur');
            clearInterval(gameTimer);
            startGame();
        } else {
            $('#start-button').text((time).toString())
        }
    }, 850);
};

function snakeDeath() {
    clearInterval(gameTimer);
    clearInterval(bigAppleTimer);
    gameOver();
}

function startGame() {
    gameTimer = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.x += snake.dx;
        snake.y += snake.dy;

        // khi snake đụng tường sẽ chạy lại từ edge đối diện
        if (snake.x < 0) {
            snake.x = canvas.width - grid;
        } else if (snake.x >= canvas.width) {
            snake.x = 0;
        }

        if (snake.y < 0) {
            snake.y = canvas.height - grid;
        } else if (snake.y >= canvas.height) {
            snake.y = 0;
        }

        // Phương thức unshift sẽ thêm một hoặc nhiều phần tử vào đầu mảng
        snake.cells.unshift({
            x: snake.x,
            y: snake.y
        });
        // thêm 1 ô vuông phía trc thì phải remove 1 cái phía sau để snake move dc.
        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }
        drawBackground();
        drawApple();
        drawSnake();
    }, speedFromLevel())
}

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
    level = parseInt(document.getElementById('level-select').value);
}

function countDownBigAppleScore() {
    var val = 100;
    var speed = speedFromLevel();
    $('.option-game').css('visibility', 'visible');
    bigAppleTimer = setInterval(function () {
        val = val - 2;
        $('[type="range"]').val(val);
        $('[type="range"]').css('filter', 'hue-rotate(-' + val + 'deg)');
        $('#big-apple-score').text(parseInt(val * bigAppleScoreFromLevel() / 100));
        if (val <= 0) {
            clearInterval(bigAppleTimer);
            hideBigApple();
            $('.option-game').css('visibility', 'hidden');
        }
    }, speed);
};

//bắt sự kiện bàn phím ấn xuống
document.addEventListener('keydown', function (e) {
    if (e.which === 37 && snake.dx === 0 && snake.dy != 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.which === 38 && snake.dy === 0 && snake.dx != 0) {
        snake.dy = -grid;
        snake.dx = 0;
    } else if (e.which === 39 && snake.dx === 0 && snake.dy != 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.which === 40 && snake.dy === 0 && snake.dx != 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});


function loadImages(imagefiles) { // LoadImage
    loadcount = 0;
    loadtotal = imagefiles.length;
    preloaded = false; // Load the images
    var loadedimages = [];
    for (var i=0; i<imagefiles.length; i++) { // Create the image object
        var image = new Image();
        
        image.onload = function () {
            loadcount++;
            if (loadcount == loadtotal) { // Done loading
                preloaded = true;
            }
        };
        image.src = imagefiles[i];
        loadedimages[i] = image;
    }
    
    // Return an array of images
    return loadedimages;
}

function drawBackground(){
    var scale = 2;
    var size = scale * grid;
    for (var c = 0; c < rowColNumber().col / scale ; c++){
        for (var r = 0; r < rowColNumber().row / scale ; r++){
            context.fillStyle = (c+r) % 2 == 0 ? "#d3eec0" : "#94dad7";
            context.fillRect(c * size, r * size, size, size);
        }
    }
}

function drawApple(){
    context.drawImage(snakeImage, partImage.apple.x, partImage.apple.y, 64, 64, apple.x, apple.y, grid, grid);
    if (bigApple.x > 0 && bigApple.y > 0){
        scale = scale == 3 ? 0 : 3;
        context.drawImage(bigAppleImage, 0, 0, 128, 128, 
            bigApple.x + scale, bigApple.y + scale, bigApple.width - 2 * scale , bigApple.height  - 2 * scale);
    } 
}

function drawSnake() {
    snake.cells.forEach(function (cell, index) {
        cell.center = {
            x: cell.x + grid / 2,
            y: cell.y + grid / 2
        }
        var x = cell.center.x; var y = cell.center.y;
        
        var prevSegment = snake.cells[index-1], nextSegment = snake.cells[index+1];
        var segmentType = partImage.apple;
        
        if (index == 0 && nextSegment) { // Head; Determine the correct image
            var nextSegmentX = nextSegment.center.x; 
            var nextSegmentY = nextSegment.center.y;

            if        (y < nextSegmentY) { // Up
                segmentType = nextSegmentY - y == grid ? partImage.headUp : partImage.headDown
            } else if (x > nextSegmentX) { // Right
                segmentType = x - nextSegmentX == grid ? partImage.headRight : partImage.headLeft
            } else if (y > nextSegmentY) { // Down
                segmentType = y - nextSegmentY == grid ? partImage.headDown : partImage.headUp
            } else if (x < nextSegmentX) { // Left
                segmentType = nextSegmentX - x == grid ? partImage.headLeft : partImage.headRight
            }
        } else if (index == snake.cells.length - 1 && prevSegment) {
            var prevSegmentX = prevSegment.center.x; // Previous segment
            var prevSegmentY = prevSegment.center.y;

            if        (prevSegmentY < y) { // Up
                segmentType = y - prevSegmentY == grid ? partImage.tailUp : partImage.tailDown
            } else if (prevSegmentX > x) { // Right
                segmentType = prevSegmentX - x == grid ? partImage.tailRight : partImage.tailLeft
            } else if (prevSegmentY > y) { // Down
                segmentType = prevSegmentY - y == grid ? partImage.tailDown : partImage.tailUp
            } else if (prevSegmentX < x) { // Left
                segmentType = x - prevSegmentX == grid ? partImage.tailLeft : partImage.tailRight
            }
        } else if (prevSegment && nextSegment){ // Body; Determine the correct image
            var prevSegmentX = prevSegment.center.x; // Previous segment
            var prevSegmentY = prevSegment.center.y;
            var nextSegmentX = nextSegment.center.x; // Next segment
            var nextSegmentY = nextSegment.center.y;

            if (prevSegmentX < x && nextSegmentX > x || nextSegmentX < x && prevSegmentX > x ) { // Horizontal Left-Right
                segmentType = partImage.horiBody;
            } else if (prevSegmentY < y && nextSegmentY > y || nextSegmentY < y && prevSegmentY > y) { // Vertical Top-Bottom
                segmentType = partImage.vetiBody;
            } else if ((prevSegmentX < x && nextSegmentY > y && allEqual(x - prevSegmentX, nextSegmentY - y, grid)) ||
                        (nextSegmentX < x && prevSegmentY > y && allEqual(x - nextSegmentX, prevSegmentY - y, grid))) { // Angle Left-Down
                segmentType = partImage.botLeft;
            } else if ((prevSegmentX < x && nextSegmentY > y || nextSegmentX < x && prevSegmentY > y ) && (Math.abs(prevSegmentY - y)  > grid || Math.abs(nextSegmentY - y)  > grid)) {
                segmentType = partImage.topLeft;
            }  else if ((prevSegmentX < x && nextSegmentY > y || nextSegmentX < x && prevSegmentY > y ) && (Math.abs(x - nextSegmentX) > grid || Math.abs(x - prevSegmentX) > grid)) {
                segmentType = partImage.botRight; 
            } else if ((prevSegmentY < y && nextSegmentX < x || nextSegmentY < y && prevSegmentX < x) && 
                        (allEqual(y - prevSegmentY, x - nextSegmentX, grid) || allEqual(y - nextSegmentY, x - prevSegmentX, grid)))  { // Angle Top-Left
                segmentType = partImage.topLeft;
            } else if ((prevSegmentY < y && nextSegmentX < x || nextSegmentY < y && prevSegmentX < x) && (Math.abs(y - nextSegmentY) > grid || Math.abs(y - prevSegmentY) > grid)){
                segmentType = partImage.botLeft 
            } else if ((prevSegmentY < y && nextSegmentX < x || nextSegmentY < y && prevSegmentX < x) && (Math.abs(x - nextSegmentX) > grid || Math.abs(x - prevSegmentX > grid))){
                segmentType = partImage.topRight 
            } else if ((prevSegmentX > x && nextSegmentY < y || nextSegmentX > x && prevSegmentY < y) && 
                        (allEqual(prevSegmentX - x, y - nextSegmentY, grid) || allEqual(nextSegmentX - x, y - prevSegmentY, grid))) { // Angle Top-Right
                segmentType = partImage.topRight 
            } else if ((prevSegmentX > x && nextSegmentY < y || nextSegmentX > x && prevSegmentY < y) && (Math.abs(prevSegmentX - x) > grid || Math.abs(nextSegmentX - x) > grid)){
                segmentType = partImage.topLeft
            } else if ((prevSegmentX > x && nextSegmentY < y || nextSegmentX > x && prevSegmentY < y) && (Math.abs(y - prevSegmentY) > grid || Math.abs(y - nextSegmentY) > grid)){
                segmentType = partImage.botRight; 
            } else if ((prevSegmentY > y && nextSegmentX > x || nextSegmentY > y && prevSegmentX > x) && 
                        (allEqual(prevSegmentY - y, nextSegmentX - x, grid) || allEqual(nextSegmentY - y, prevSegmentX - x, grid))) { // Angle Bot-Right
                segmentType = partImage.botRight;
            } else if ((prevSegmentY > y && nextSegmentX > x || nextSegmentY > y && prevSegmentX > x) && (Math.abs(prevSegmentX - x) > grid || Math.abs(nextSegmentX - x) > grid)){
                segmentType = partImage.botLeft 
            } else if ((prevSegmentY > y && nextSegmentX > x || nextSegmentY > y && prevSegmentX > x) && (Math.abs(nextSegmentY - y) > grid || Math.abs(prevSegmentY - y) > grid)){
                segmentType = partImage.topRight 
            } else if (prevSegmentX > nextSegmentX && nextSegmentX > x || x > prevSegmentX && prevSegmentX > nextSegmentX ||
                        nextSegmentX > prevSegmentX && prevSegmentX > x || x > nextSegmentX && nextSegmentX > prevSegmentX ) {
                segmentType = partImage.horiBody;
            } else if (prevSegmentY > nextSegmentY && nextSegmentY > y || y > prevSegmentY && prevSegmentY > nextSegmentY ||
                        nextSegmentY > prevSegmentY && prevSegmentY > y || y > nextSegmentY && nextSegmentY > prevSegmentY ) {
                segmentType = partImage.vetiBody;
            } 
        } 
        
        context.drawImage(snakeImage, segmentType.x, segmentType.y, 64, 64, cell.x, cell.y, grid , grid );

        //Eat Apple
        if (apple.x <= cell.center.x && cell.center.x <= apple.x + apple.width &&
            apple.y <= cell.center.y && cell.center.y <= apple.y + apple.height) {
            snake.maxCells++;
            newApple();
            inscreateScore(level);

            if (((snake.maxCells - defaultLength) != 0) && ((snake.maxCells - defaultLength) % 5 == 0)) {
                newBigApple();
                countDownBigAppleScore();
            }
        }

        //Eat Big Apple
        if (bigApple.x <= cell.center.x && cell.center.x <= bigApple.x + bigApple.width &&
            bigApple.y <= cell.center.y && cell.center.y <= bigApple.y + bigApple.height) {
            hideBigApple();
            clearInterval(bigAppleTimer);
            $('.option-game').css('visibility', 'hidden');
            $('#big-apple-countdown').value = 100;
            inscreateScore(parseInt($('#big-apple-score').text()));
        }

        if (index == 0) {
            for (var i = index + 1; i < snake.cells.length; i++) { // va chạm 
                if (cell.center.x === snake.cells[i].center.x && cell.center.y === snake.cells[i].center.y) {
                    snakeDeath();
                    break;
                }
            }
        }
    });
}

$( "#enter-name" ).submit(function( event ) {
    if ($("#input-name" ).val()) {
        closeEnterNameNav();
        var name = $("#input-name" ).val().split(' ')[0];
        $("#top-navigation").prepend('<li><a href="#" onclick="openEnterNameNav()" id="user-name">' + name + '</a></li>');
        $("#input-name" ).val("");
        return;
    }
    $("#input-name-noti").text( "Please Enter Your Name" ).show().fadeOut( 3000 );
    event.preventDefault();
});

function startDidTouch(){
    if (document.getElementById('user-name')){
        countDown();
    } else {
        openEnterNameNav();
    }
}

function fillTopScore(data ) {
    JSON.parse(data)['data'].forEach((item, index)=>{
        var rank = index + 1;
        switch (rank) {
            case 1:
                rank = '<img class="medal" src="./library/images/gold-medal.svg" alt=""></img>';
                $("#first-place-name").text(item.name);
                $("#best-score").text(item.score);
                break;
            case 2:
                rank = '<img class="medal" src="./library/images/silver-medal.svg" alt=""></img>';
                $("#second-place-name").text(item.name);
                break;
            case 3:
                rank = '<img class="medal" src="./library/images/brone-medal.svg" alt=""></img>';
                $("#third-place-name").text(item.name);
                break;
            default: break;
        }
        $("#table-body").append('<tr> ' + 
                                '<td>' + rank + '</td>' +
                                '<td>' + item.name + '</td>' + 
                                '<td>' + item.score + '</td>' +
                                '</tr>")');
    })
}

function postScore(data, status) {
    fillTopScore(data);
}

function gameOver(){
    $('.start-game').show();
    $('#start-button').text('New Game');
    $('#noti-text').text('Game Over');
    $('#game').addClass('canvas-blur');
    $('.option-game').css('visibility', 'hidden');

    $('#start-button').removeClass('disabled');
    $('.game-control').removeClass('disabled');
    $.post('https://trssnake.herokuapp.com/user-score', { name: $('#user-name').text(), score: parseInt($("#user-score").text()) }, postScore);
}

$(document).ready(
    function(){
        document.addEventListener("click", closeAllSelect);

        resetSnake()
        $('#game').addClass('canvas-blur');

        $.get('https://trssnake.herokuapp.com/top-score', fillTopScore);
    }
)