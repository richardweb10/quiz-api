const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
const passportRoutes = require("./passport.routes")

//const swaggerUI = require("swagger-ui-express");
//const { SWAGGER_PATH } = require("../config");
//const swaggerDocument = require(SWAGGER_PATH);

module.exports = function ({
  UserRoutes,
  AuthRoutes
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(helmet())
    .use(cors())
    .use(compression());
    
  
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/register", AuthRoutes);
  apiRoutes.use("/auth", passportRoutes);


  router.use("/v1/api", apiRoutes);

  //router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);



  return router;
};
