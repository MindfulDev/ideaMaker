var express = require("express");

var router = express.Router();
module.exports = router;

/* basic route */
router.get('/',  (q,r) => {
    r.render('index.pug', {pageTitle: 'ideaMaker'});
});
