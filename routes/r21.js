const { Router } = require("express");
// const path = require("path");

const router = Router();

// const FILE_PATH = path.join(__dirname, "../data/r21.json");

let DB_DATA = [];

router.get("/pages/r21", (req, res) => {
	res.json(DB_DATA);
});

// Agregar un nuevo registro
router.post("/pages/r21", (req, res) => {
	DB_DATA = req.body; // 💥 Sobrescribe todo
	res.json({ message: DB_DATA });
});

module.exports = router;
