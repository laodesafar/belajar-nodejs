const express = require("express");

const router = express.Router();

// admin/add-produc => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Tambah Produk</button></form>'
  );
});

// admin/add-produc => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
