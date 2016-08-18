var MongoClient = require("mongodb").MongoClient;
var mongoose = require('mongoose');
//var pws = require('../pws.json');

// var url = 'mongodb://' + pws.mongodbUser + ':'+ pws.mongodbPw +'@' + pws.mongodbUrl;
var url = 'mongodb://' + process.env.MONGODB_USER + ':'+ process.env.MONGODB_PASS +'@' + process.env.MONGODB_URL;
// var connect = MongoClient.connect(url);

/* change mongoose promise to a true promise implementation */
mongoose.Promise = global.Promise;
mongoose.connect(url);

var Idea = require('../models/ideaModel.js');

module.exports = {

    Idea,
    close :  function() {
        mongoose.disconnect();
        }
    };
