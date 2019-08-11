// var MongoClient = require('mongodb').MongoClient;
// const Define = require('../src/define');
// var dbName = 'DLChat'
// var url = Define.url;


// var mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://trungtrs:Trungtrs1998@@cluster0-hc27e.azure.mongodb.net/test?retryWrites=true&w=majority/basicsnake");

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log("Connection Successful!");
// });



let mongoose = require('mongoose');

const server = 'mongodb+srv://trungtrs:Trungtrs1998@cluster0-hc27e.azure.mongodb.net/test?retryWrites=true&w=majority'; // REPLACE WITH YOUR DB SERVER
const database = 'basicsnake';

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()
