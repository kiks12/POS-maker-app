/* 
google oauth callback 
dependencies
*/
import passport from "passport";
import "../../../../config/passport";
import nextConnect from "next-connect";
import { session } from "next-session";

/* handler instance */
const handler = nextConnect();

/* passport initialization to handler */
handler.use(passport.initialize());
handler.use(session());

/* export handler callback function */
export default handler.get(
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    res.redirect("/");
  }
);
