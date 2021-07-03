/* passport configuration */
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const Users = require("../Database/user.model");

/* passport strategy using google oauth 2 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
