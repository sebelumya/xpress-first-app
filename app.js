const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const error = require("./controllers/error");
const router = require("./routes/shop");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(error.get404);

app.listen(3000);
