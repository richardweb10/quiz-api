const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function({ QuestionnaireController }) {
  const router = Router();
  router.get("", [ParseIntMiddleware, AuthMiddleware], QuestionnaireController.getAll);
  router.get("/:questionnaireId",[AuthMiddleware], QuestionnaireController.getById);
  router.post("/create",[AuthMiddleware], QuestionnaireController.create);
  router.delete("/:questionnaireId", [AuthMiddleware], QuestionnaireController.delete);
  router.patch("/:questionnaireId", [AuthMiddleware], QuestionnaireController.updateQuestionnaire);
  
  

  return router;
};
