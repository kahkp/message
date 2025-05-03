var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

module.exports = function (app) {
  var home = app.controllers.home;
  app.get("/", home.index);
};

module.exports = {
  index: function (req, res) {
    res.send('Página inicial funcionando!');
  },
  user: {
    index: function (req, res) {
      res.send('Página de usuários funcionando!');
    }
  }
};
module.exports = function (app) {
  var home = app.controllers.home;
  app.get('/', home.index);
};

module.exports = function (app) {
  var home = app.controllers.home;
  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
};