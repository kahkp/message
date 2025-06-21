const KEY = 'ntalk.sid'
  , SECRET = 'ntalk';

var express = require ('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , expressSession = require('express-session')
  , methodOverride = require('method-override')
  , cookie = cookieParser(SECRET)
  , app = express();

var express = require('express')
, app = express()
, load = require('express-load')
, error = require('./middleware/error');



// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookie);
app.use(expressSession({
  secret: SECRET,
  name: KEY,
  resave: true,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(error.notFound);
app.use(error.serverError);



load('models')
  .then('controllers')
  .then('routes')
  .into(app);

  app.use(function(req, res, next) {
res.status(404);
res.render('not-found');
});
app.use(function(error, req, res, next) {
res.status(500);
res.render('server-error', error);
});

app.listen(3000, function () {
  console.log("Ntalk no ar.");
});

//pagina 74