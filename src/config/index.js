//const environment = process.env.NODE_ENV || 'local';
//console.log("environment: ", environment);
//require("dotenv").config({ path: `./.enviroment/.${environment}.env`});

const config ={
    "MONGO_URI": process.env.MONGO_URI,
    "JWT_SECRET": process.env.jwt_secret,
    "PORT": process.env.PORT,
    "URL_SITE_WEB": process.env.URL_SITE_WEB,
}
module.exports = config;