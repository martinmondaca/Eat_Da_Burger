//code to connect node to mysql
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rex6rh3dpio1c4xr",
    password: "dyhojnfsls1h50ab",
    database: "zw2hvyplk8yzaoxc"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

//export connection