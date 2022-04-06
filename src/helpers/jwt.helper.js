var jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports.generateToken = async function(user) {
  const token = await jwt.sign({ user }, JWT_SECRET);
  return token;
};


module.exports.checkingToken = async function(token) {

  try{
    const result = await jwt.verify(token, JWT_SECRET);
    return result;
   }catch(e){
    const error = new Error();
    error.status = 401;
    error.message = "Token invalido";
    throw error;
  }
};

module.exports.destroyToken = async function(token){
    
  try{
    const user = await jwt.decode(token);
    console.log("user: ", user);
    await jwt.destroy(user.jti);
    return {status: 202};
  }catch(e){
    return {status: 400};
  }
  
  
}