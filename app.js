const express = require("express");
// const Product = require("./models/product");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const error = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const app = express();
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("60bc5448af5b9712169704c6")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(error.get404);

mongoConnect(() => {
  app.listen(3000);
});
