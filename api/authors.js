const express = require("express");
const router = express.Router();
const {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorByid,
  getAuthorByEmail,
} = require("../models/modelsAuthors");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await getAllAuthors();
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/email/:emailAuthor", async (req, res, next) => {
  try {
    const [rows] = await getAuthorByEmail(req.params.emailAuthor);
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/:idAutor", async (req, res, next) => {
  try {
    const [rows] = await getAuthorByid(req.params.idAutor);
    res.json(rows);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//create

router.post("/", async (req, res) => {
  const elementos = { ...req.body };
  if (elementos.nombre === undefined || elementos.email === undefined) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await createAuthor({ ...req.body });
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
    elementos.nombre === undefined ||
    elementos.email === undefined ||
    elementos.imagen === undefined
  ) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await updateAuthor({ ...req.body });
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

//delete

router.delete("/", async (req, res) => {
  const elementos = { ...req.body };
  if (elementos.email === undefined) {
    res.json({ error: "No se mandaron los suficientes parametros" });
  } else {
    try {
      const [result] = await deleteAuthor({ ...req.body });
      res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
});

module.exports = router;

module.exports = router;
