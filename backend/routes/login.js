/* 
web app login routes dependencies
*/
const router = require("express").Router();

/* GET login/ route */
router.get("/", (req, res) => {
  res.send("hello from login");
});

/* export router instance */
module.exports = router;
