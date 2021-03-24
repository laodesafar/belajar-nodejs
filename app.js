const path = require("path");

const express = require("express");

const rootDir = require("./utils/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use(function (req, res, next) {
  res.status(404).render("404", { docTitle: "Page Not Found", path: "" });
});

app.listen(3000);
