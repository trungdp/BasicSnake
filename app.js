var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
var database = require('./database/database');
var User = require('./database/userModel');
var Feedback = require('./database/feedbackModel');

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'client')));
app.set("view engine", "ejs");
app.set("views", "./views");


//Tạo socket 
app.get("/", function(req, res) {
    res.render("index");
});

app.get('/get-top-score', function (req, res) {
    User.find({}).sort({ 'score':-1}).then(docs=>{
        response = {data:[]};
        docs.slice(0,8).forEach((item,index)=>{
            response.data.push({name:item.name,score:item.score});
        });
        res.end(JSON.stringify(response));
    });
})

app.post('/post-user-score',urlencodedParser, function (req, res) {
    function getTopScore(){
        User.find({}).sort({ 'score':-1}).then(docs=>{
            response = {data:[]};
            docs.slice(0,8).forEach((item,index)=>{
                response.data.push({name:item.name,score:item.score});
            });
            res.end(JSON.stringify(response));
        });
    };
    User.find({name:req.body.name}).then(docs=>{
        if(docs.length == 0){
            User.find({}).then(allDocs=>{
                if (allDocs.length < 100){
                    let newUser = new User({name:req.body.name,score:req.body.score});
                    newUser.save().then(()=>{
                        getTopScore();
                    });
                }
            })
        } else if (req.body.score >= docs[0].score){
            docs[0].updateOne({ score: req.body.score }).then(()=>{
                getTopScore();
            });
        }
    });
})

app.post('/post-feedback',urlencodedParser, function (req, res) {
    response = {
        content: req.body.content,
    };
    Feedback.find({name:req.body.name}).then(docs=>{
        if(docs.length < 3){
            Feedback.find({}).then(allDocs=>{
                if (allDocs.length < 100){
                    let newFeedback = new Feedback({name: req.body.name,content: req.body.content});
                    newFeedback.save().then(()=>{
                        res.end(JSON.stringify(response));
                    });
                }
            })
        } else {
            res.end(JSON.stringify(response));
        }
    });
})

server.listen(process.env.PORT || 3000);