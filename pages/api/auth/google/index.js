import passport from "passport";
import "../../../../config/passport";
import nextConnect from "next-connect";

const handler = nextConnect();

export default handler.get(
  passport.authenticate("google", {
    scope: ["https://www.google.com/m8/feeds", "email", "profile"],
  })
);
