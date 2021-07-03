/* passport configuration dependecies */
import connection from "../Database/dbConnection";
import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";

/* google oauth2 strategy declaration */
const GoogleStrategy = OAuth2Strategy;

/* passport strategy using google oauth 2 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await connection.query(
        `SELECT * FROM users WHERE id='${profile.id}'`
      );
      console.log(user.rows);
      return done(null, user.rows);
    },
    passport.serializeUser(function (user, done) {
      done(null, user);
    }),
    passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    })
  )
);
