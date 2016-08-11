var express = require('express');
var app = express();

/* Add bootstrap resource to outer web */
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));

/* set view engine */
app.set('view engine', 'pug');

/* add route modules here */

/* basic route */
app.get('/', (q,r) => {
    r.render('index.pug', {pageTitle: 'ideaMaker'});
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});
