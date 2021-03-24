const path = require("path");

const express = require("express");

const rootDir = require("./utils/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
