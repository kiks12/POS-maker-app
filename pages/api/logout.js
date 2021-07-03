/* logout api page dependencies */
import nextConnect from "next-connect";

const handler = nextConnect();

export default handler.get((req, res) => {
  req.logout();
  res.redirect("/login");
});
