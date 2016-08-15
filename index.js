var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/* configure express to use bodyparser to get data by POST */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Add bootstrap resource to outer web */
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));

/* set view engine */
app.set('view engine', 'pug');

/* add route modules here */
app.use("/api", require("./routes/api"));       // API CRUD using JSON I/O
app.use("/idea", require("./routes/idea"));     // web CRUD
app.use("/", require("./routes/main"));


/* start your engine */
app.listen(3000, () => {
    console.log('Listening on 3000');
});
/*
//Took this out because node process had to be killed manually frequently
//TODO look at creating a graceful close
process.on('SIGINT', function() {
    console.log("SIGINT");
    require('./data/ideaDb').close( () => {
        process.exit(0);
    });

});*/
