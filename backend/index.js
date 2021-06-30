/* 
pos maker web app
web server dependencies 
*/
const express = require("express");

/* express instance */
const app = express();

/* app routes dependencies */
const loginRoute = require("./routes/login");

/* server port, environment port or 4000 */
const PORT = process.env.PORT || 4000;

/* app routes functions */
/* login route - login/ */
app.use("login", loginRoute);

/* start server at PORT */
app.listen(PORT, () => console.log(`server running at port ${PORT}`));
