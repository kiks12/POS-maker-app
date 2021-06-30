/* 
pos maker web app
web server dependencies 
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/* express instance */
const app = express();

/* json parser function */
const jsonParser = bodyParser.json();
const jsonUrlEncoding = bodyParser.urlencoded({ extended: false });

/* app intialization */
app.use(cors());
app.use(jsonParser);
app.use(jsonUrlEncoding);

/* app routes dependencies */
const loginRoute = require("./routes/login");

/* server port, environment port or 4000 */
const PORT = process.env.PORT || 4000;

/* app routes functions */
/* login route - login/ */
app.use("/login", loginRoute);

/* start server at PORT */
app.listen(PORT, () => console.log(`server running at port ${PORT}`));
