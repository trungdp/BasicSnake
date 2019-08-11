let mongoose = require('mongoose');

const server = 'mongodb+srv://trungtrs:Trungtrs1998@cluster0-hc27e.azure.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'basicsnake';
const UserModel = require('./userModel');

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
