const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const router = Router();

const FILE_PATH = path.join(__dirname, "../data/r21.json");

// Leer archivo JSON
function loadData() {
	try {
		const raw = fs.readFileSync(FILE_PATH, "utf8");
		return JSON.parse(raw);
	} catch (err) {
		console.error("Error leyendo JSON:", err);
		return [];
	}
}

// Guardar archivo JSON
function saveData(data) {
	try {
		fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
	} catch (err) {
		console.error("Error guardando JSON:", err);
	}
}

// GET — Obtener datos
router.get("/pages/r21", (req, res) => {
	const data = loadData();
	res.json(data);
});

// POST — Guardar datos
router.post("/pages/r21", (req, res) => {
	const body = req.body;

	if (!Array.isArray(body)) {
		return res.status(400).json({ error: "Formato inválido" });
	}

	saveData(body);

	res.json({ message: "Datos actualizados correctamente" });
});

module.exports = router;
