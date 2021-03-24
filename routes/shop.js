const path = require("path");

const express = require("express");

//const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

module.exports = router;
