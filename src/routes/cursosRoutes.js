const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController");

router.get("/", cursos);

/* INSCRIBIRSE EN CURSOS -------------------------------- */
router.get('/cursos', cursosController.register);
router.post('/cursos', cursosController.create);

module.exports = router;