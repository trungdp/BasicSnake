var sql = require("mssql");

// config for your database
var config = {
    "user": process.env.DB_USER || 'sa',
    "password": process.env.DB_PASS || 'Trungtrs1998@',
    "server": process.env.DB_HOST || 'localhost',
    "database": process.env.DB_NAME || 'dluchat',
    "port":process.env.PORT || 1401,
    "dialect": "mssql",
    "dialectOptions": {
        "instanceName": "sqlserver1"
    }
};

module.exports = sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }
});