var express = require("express");
var ideaDb = require("../data/ideaDb");

var router = express.Router();
module.exports = router;

router.route("/ideas")

    .get(function (req, res, next) {
    
        var search = req.query.s;
        
        if (!search) {
             ideaDb.Idea.find().exec()
                .then(ideas => res.json(ideas))
                .catch(next);
            } else {
                var searchRegEx = new RegExp(search);
                ideaDb.Idea.find({detail: searchRegEx}).or([{title: searchRegEx}]).exec()
                    .then(ideas => res.json(ideas))
                    .catch(next);
            }
    });

