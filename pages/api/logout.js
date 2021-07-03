/* logout api page dependencies */
import nextConnect from "next-connect";
import { applySession } from "next-session";

const handler = nextConnect();

export default handler.get(async (req, res) => {
  try {
    await applySession(req, res);
    await req.session.destroy();
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
});
