var express = require("express");
var ideaDb = require("../data/ideaDb");

var router = express.Router();
module.exports = router;

var opt = {
    model : 'idea',
    fields : getFields(ideaDb.Idea)
};

/* basic route */
router.get('', (q,r) => {
    r.redirect(r.req.baseUrl + '/list');
});
router.route('/list')
    .get( (q,r,next) => {
        r.locals.paged = q.query.paged || 1;
        r.locals.posts_per_page = q.query.posts_per_page || 50;
        ideaDb.Idea.find()
            .skip( (r.locals.paged-1) * r.locals.posts_per_page )
            .limit( r.locals.posts_per_page )
            .exec()
            .then( function(posts) {
                r.locals.posts = posts;
                r.locals.opt = opt;
                r.render('idea/list.pug');})
            .catch(next);
    });

router.route('/add')
    .get( (q,r,next) => {
        r.locals.opt = opt;
        r.render('idea/add.pug');
    })
    .post( (q,r,next) => {

        var post = {};
        opt.fields.forEach( (key) => {
            if (r.req.body[key]) {
                post[key] = r.req.body[key];
            }
        });
        new ideaDb.Idea(post).save()
            .then( () => {
                r.redirect('list');
            })
            .catch(next);
    });

router.route('/delete/:id')
    .get( (q,r,next) => {

        var post_id = q.params.id;
        ideaDb.Idea.findByIdAndRemove(post_id)
            .exec()
            .then( () => {
                r.redirect('../list');
            })
            .catch(next);
    });

router.route('/edit/:id')
    .get( (q,r,next) => {

        var post_id = q.params.id;
        ideaDb.Idea.findById(post_id)
            .exec()
            .then( function(post) {
                r.locals.post = post;
                r.locals.opt = opt;
                r.render('idea/edit.pug');})
            .catch(next);
    })
    .post( (q,r,next) => {
        var post = {};
        opt.fields.forEach( (key) => {
            if (r.req.body[key]) {
                post[key] = r.req.body[key];
            }
        });
        ideaDb.Idea.update({_id: post._id }, {$set: post})
            .then( () => {
                r.redirect('../list');
            })
            .catch(next);

    });

function getFields(model) {
    var fields = [];
    for (var key in model.schema.paths) {
        if(model.schema.paths.hasOwnProperty(key) && key != '__v') {
            fields.push(key)
        }
    }
    return fields;

}