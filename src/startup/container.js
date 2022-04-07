const {
    createContainer,
    asClass,
    asValue,
    asFunction,
    listModules,
  } = require("awilix");
  //  config
  const config = require("../config");
  const app = require(".");
  // services
  const {
    UserService,
    AuthService,
    QuestionnaireService
  } = require("../services");
  // controllers
  const {
    UserController,
    AuthController,
    QuestionnaireController
  } = require("../controllers");
  // routes
  const {
    UserRoutes,
    AuthRoutes,
    QuestionnaireRoutes
  } = require("../routes/index.routes");
  const Routes = require("../routes");
  //models
  const { User, Option, Question, Questionnaire } = require("../models");
  
  // repositories
  const {
    UserRepository,
    OptionRepository,
    QuestionRepository,
    QuestionnaireRepository
  } = require("../repositories");
  // passport
  //const Passport = require('passport');
  
  const container = createContainer();
  container
    .register({
      app: asClass(app).singleton(),
      router: asFunction(Routes).singleton(),
      config: asValue(config)
    })
    .register({
      UserService: asClass(UserService).singleton(),
      AuthService: asClass(AuthService).singleton(),
      QuestionnaireService: asClass(QuestionnaireService).singleton(),
    })
    .register({
      UserController: asClass(UserController.bind(UserController)).singleton(),
      AuthController: asClass(AuthController.bind(AuthController)).singleton(),
      QuestionnaireController: asClass(QuestionnaireController.bind(QuestionnaireController)).singleton(),
    })
    .register({
      UserRoutes: asFunction(UserRoutes).singleton(),
      AuthRoutes: asFunction(AuthRoutes).singleton(),
      QuestionnaireRoutes: asFunction(QuestionnaireRoutes).singleton(),
    })
    .register({
      User: asValue(User),
      Option: asValue(Option),
      Question: asValue(Question),
      Questionnaire: asValue(Questionnaire),
    })
    .register({
      UserRepository: asClass(UserRepository).singleton(),
      OptionRepository: asClass(OptionRepository).singleton(),
      QuestionRepository: asClass(QuestionRepository).singleton(),
      QuestionnaireRepository: asClass(QuestionnaireRepository).singleton(),
    });
  
  
  module.exports = container;
  