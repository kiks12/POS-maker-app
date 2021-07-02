/* 
google oauth callback 
dependencies
*/
import passport from "passport";
import "../../../../config/passport";
import nextConnect from "next-connect";

/* handler instance */
const handler = nextConnect();

/* export handler callback function */
export default handler.get(
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);
