/* 
web app login routes dependencies
*/
const router = require("express").Router();

/* GET login/ route */
router.get("/", (req, res) => {
  const { username, password } = req.body;
  res.send(username, password);
});

/* POST login/ route */

/* export router instance */
module.exports = router;
