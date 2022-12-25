const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const withAdminPermissions = require("./middleware/withAdminPermission");
const withAuthentication = require("./middleware/withAuthentication");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const db = require("./db/index");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(withAuthentication);
app.use(withAdminPermissions);
app.use(logger);
usersRoutes(app);
productsRoutes(app);
authRoutes(app);
orderRoutes(app);

app.listen(process.env.PORT, (err) => {
  err && console.log(err);
  console.log(`app listening on port ${process.env.PORT}`);
});
