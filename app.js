const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(function (req, res, next) {
  res.status(404).send("<h1>Halaman Tidak diTemukan</h1>");
});

app.listen(3000);
