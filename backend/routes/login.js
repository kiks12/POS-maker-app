/* 
web app login routes dependencies
*/
const router = require("express").Router();

/* GET login/ route */
router.get("/", (req, res) => {
  res.status(res.status).send("hello people ");
});

/* POST login/ route */
router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).send("username: " + username);
});

/* export router instance */
module.exports = router;
