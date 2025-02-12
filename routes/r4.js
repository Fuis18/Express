const { Router } = require("express");
// const path = require("path");

const router = Router();

// const Admission = require(path.join(__dirname, "../data", "./admission.js"));
const Admission = [];

router.get("/pages/r4", (req, res) => {
  res.json(Admission);
});

router.post("/pages/r4", (req, res) => {
  console.log("Datos recibidos:", req.body);
  const item = { ...req.body, id: Admission.length + 1 };
  Admission.push(item);
  res.json({ message: Admission });
});

module.exports = router;
