const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    img: req.body.image,
    alt: req.body.alt,
    desc: req.body.desc,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
