/* login POST request function handler */

export default function handler(req, res) {
  /* error handling */
  if (req.method !== "POST") {
    res.status(200).send({ message: "only POST requests allowed" });
    return;
  }

  /* post request handling */
  /* body parsing */
  const body = JSON.parse(req.body);

  /* body data */
  const username = body.username;
  const password = body.password;

  console.log(username, password);
  res.redirect("/");
}
