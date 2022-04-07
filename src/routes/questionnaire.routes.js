const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function({ QuestionnaireController }) {
  const router = Router();
  router.get("", [ParseIntMiddleware, AuthMiddleware], QuestionnaireController.getAll);
  router.get("/:questionnaireId",[AuthMiddleware], QuestionnaireController.get);
  router.post("/create",[AuthMiddleware], QuestionnaireController.create);
  router.delete("/:questionnaireId", [AuthMiddleware], QuestionnaireController.delete);
  
  

  return router;
};
