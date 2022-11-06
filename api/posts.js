const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getAllPostsByidAuthor,
  getAllPostsByEmailAuthor,
} = require("../models/modelsPosts");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await getAllPosts();
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/email/:emailAuthor", async (req, res, next) => {
  try {
    const [rows] = await getAllPostsByEmailAuthor(req.params.emailAuthor);
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/:idAutor", async (req, res, next) => {
  try {
    const [rows] = await getAllPostsidByAuthor(req.params.idAutor);
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//create

router.post("/", async (req, res) => {
  const elementos = { ...req.body };
  if (
    elementos.titulo === undefined ||
    elementos.descripcion === undefined ||
    elementos.fechaCreacion === undefined ||
    elementos.categoria === undefined ||
    elementos.idAutorPertenece === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await createPost({ ...req.body });
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

//update

router.put("/", async (req, res) => {
  const elementos = { ...req.body };
  if (
    elementos.titulo === undefined ||
    elementos.descripcion === undefined ||
    elementos.fechaCreacion === undefined ||
    elementos.categoria === undefined ||
    elementos.idAutorPertenece === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await updatePost({ ...req.body });
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

//delete

router.delete("/", async (req, res) => {
  const elementos = { ...req.body };
  if (
    elementos.titulo === undefined ||
    elementos.idAutorPertenece === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await deletePost({ ...req.body });
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

module.exports = router;
