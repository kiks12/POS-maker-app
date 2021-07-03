/* 
google oauth page
dependencies
*/
import passport from "passport";
import "../../../../config/passport";
import nextConnect from "next-connect";

/* handler function instance */
const handler = nextConnect();

/* export handler function with google authentication */
export default handler.get(
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read",
      "email",
    ],
  })
);
