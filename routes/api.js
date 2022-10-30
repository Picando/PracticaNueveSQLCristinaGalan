const express = require("express");
const router = express.Router();
const indexAuthors = require("../api/authors"); //directorio de api
const indexPosts = require("../api/posts");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Api" });
});

router.use("/authors", indexAuthors);
router.use("/posts", indexPosts);

module.exports = router;
