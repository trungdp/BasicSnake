var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'Client')));
app.set("view engine", "ejs");
app.set("views", "./views");


//Tạo socket 
app.get("/", function(req, res) {
    res.render("index");
});

// app.get("/top-score", function(req, res) {
//     res.render("index");
// });
app.get('/top-score', function (req, res) {
    response = {
        data:[{name:"Trung",score:1234},
        {name:"Kha",score:1233},
        {name:"Trí",score:1232},
        {name:"Bảo",score:1231},
        {name:"Định",score:1230}]}
    res.end(JSON.stringify(response));
})

// app.get('/feedback', function (req, res) {
//     response = {
//         data:[{name:"Trung",score:1234},
//         {name:"Kha",score:1233},
//         {name:"Trí",score:1232},
//         {name:"Bảo",score:1231},
//         {name:"Định",score:1230}]}
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

app.post('/feedback',urlencodedParser, function (req, res) {
    // Prepare output in JSON format  
    response = {
        feedback: req.body.feedback,
    };
    res.end(JSON.stringify(response));
})

app.post('/user-score',urlencodedParser, function (req, res) {
    response = {
        data:[{name:req.body.name,score:req.body.score},
        {name:"Kha",score:1233},
        {name:"Trí",score:1232},
        {name:"Bảo",score:1231},
        {name:"Định",score:1230}]}
    console.log(response);
    res.end(JSON.stringify(response));
})

server.listen(process.env.PORT || 3000);