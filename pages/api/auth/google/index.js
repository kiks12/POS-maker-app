import passport from "passport";
import "../../../../config/passport";
import nextConnect from "next-connect";

const handler = nextConnect();

export default handler.get(
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read",
    ],
  })
);
