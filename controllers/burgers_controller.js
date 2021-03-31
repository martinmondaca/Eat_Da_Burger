//import Express, burger.js
var express = require("express");

var router = express.Router();

//importing burger model
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + parseInt(req.params.id);
    burger.update({
        devoured: 1
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//create router and export router
module.exports = router;