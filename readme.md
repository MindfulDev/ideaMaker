# IdeaMaker
This is a nodejs project to manipulate ideas.

## Goals
 * use NodeJS and Mongodb 
 * Easily capture ideas using multiple inputs
   * email
   * slack interface (slackbot)
   * texting (SMS)
   
## Other possible goals.  Not finalized.
  * Automatic retrieval of possible similar ideas from web (kickstarter, projecthq, etc)
  * A way to score ideas using search data
  * Categorize ideas
  * Manual starring of ideas to produce a list of favorites
  
## todo
  * change from nodejs mongdb driver to mongoose
  * look at mongoose to create an idea schema

## Recent Changes
  * added basic Web CRUD interface
  * Made add, edit and list screens use model schema in Web CRUD interface.
  * added ability to use search term as in api/ideas/?s=test
  * Changed to Mongoose driver
  * 0.1.0
  * added Mongodb connection - currently using nodejs native driver
  * created beginning api router get request on \api\ideas produces json list
  * added a graceful close of mongodb
  