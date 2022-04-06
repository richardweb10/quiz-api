const passport = require('passport');
const { generateToken, destroyToken } = require('../helpers/jwt.helper');

let PassportController = {

    localLogin: async (req, res) => {
        console.log("caso login");

        passport.authenticate("login", { session: false }, async (error, user) => {
            console.log("ejecutando *callback auth* de authenticate para estrategia local");

            //si hubo un error en el callback verify relacionado con la consulta de datos de usuario
            if (error || !user) {
                const error = {};
                error.status = 400;
                error.message = "Correo electrónico o contraseña incorrecta";
                res.status(400).send(error)
                //throw error;
            } else {
                
                const payload = {
                    sub: user._id,
                    username: user.email
                };

                const token = await generateToken(payload);

                res.json({ data: { token: token, user } });
            }

        })(req, res);
    },
    logout: async (req, res) => {
        const { body } = req;
        const result = await destroyToken(body.token);
        res.json({ data: result });
    }


}

module.exports = PassportController;
