const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../Models/user");

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        {
            usernameField: "number",
            passwordField: "password",
        },
        async (number, password, done) => {
            try {
                const user = await userModel.findOne({ number });

                if (!user || !user.validatePassword(password)) {
                    return done(null, false, { message: "Invalid number or password" });
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));
};
