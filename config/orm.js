//require connection.js
const { connect } = require("./connection.js");
var connection = require("./connection.js")
// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            res.render("main", { burgers: data })
        })
    },

    insertOne: function () { },

    updateOne: function () { },
}


// * Export the ORM object in `module.exports`.
module.exports = orm;