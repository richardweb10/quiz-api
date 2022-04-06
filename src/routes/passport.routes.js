const { Router } = require("express");
const PassportController = require("../controllers/passport.controller");
//var passport = require('passport');
const { 
  AuthMiddleware } = require("../middlewares");

module.exports = function() {
  const router = Router();
  router.post('/signin', PassportController.localLogin);
  router.post('/logout', [AuthMiddleware], PassportController.logout);


  return router;
};