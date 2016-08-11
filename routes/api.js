var express = require("express");
var ideaDb = require("../data/ideaDb");

var router = express.Router();
module.exports = router;

router.route("/ideas")

    .get(function (req, res, next) {
    
        ideaDb.connect
            .then(db => db.collection("ideas").find().toArray())
            .then(rooms => res.json(rooms))
            .catch(next);

    })
    .post(function (req, res, next){
        
        next();
        
    });
