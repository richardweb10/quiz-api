const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = async function(req, res, next) {
  const token = req.headers["authorization"];
  //console.log("token-authorization: ", token)
  //console.log("jwtr: ", jwtr)
  if (!token) {
    const error = new Error();
    error.message = "Token must be sent";
    error.status = 400;
    throw error;
  }
  
  await jwt.verify(token, JWT_SECRET, function(err, decodedToken) {
    if (err) {
      const error = new Error();
      error.message = "Invalid token";
      error.status = 401;
      throw error;
    }
    console.log("decodedToken: ", decodedToken);

    req.user = decodedToken.user;
    next();
  });
};
