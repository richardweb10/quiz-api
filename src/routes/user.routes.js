const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function({ UserController }) {
  const router = Router();
  router.get("", [ParseIntMiddleware, AuthMiddleware], UserController.getAll);
  router.get("/:userId",[AuthMiddleware], UserController.get);
  router.delete("/:userId", [AuthMiddleware], UserController.delete);
  
  

  return router;
};
