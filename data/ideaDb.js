var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var pws = require('../pws.json');

var url = 'mongodb://' + pws.mongodbUser + ':'+ pws.mongodbPw +'@ds153745.mlab.com:53745/thebrain';
var connect = MongoClient.connect(url);

module.exports = {
    connect,
    close :  function(cb) {
        connect.then(db => {
            db.close();
            cb();
        })
    }
};