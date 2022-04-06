const express = require('express');
const passport = require('passport');
const {initPassport} = require('./../helpers')
const PassportRoutes = require('./../routes/passport.routes')
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express();
    const routerAuth = express.Router();
    _express.use(passport.initialize());
    initPassport(passport);
    routerAuth.use(express.json())
      .use(helmet())
      .use(compression())
      .use(cors())
    routerAuth.use("/auth", PassportRoutes(passport));
    _express.use(routerAuth);
    _express.use(router);  
    _express.disable('x-powered-by');  
   
  }

  start() {
    return new Promise((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(' API running on port ' + _config.PORT);

        resolve();
      });
    });
  }
}

module.exports = Server;
