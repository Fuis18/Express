const { Router } = require("express");
// const path = require("path");
const nodemailer = require("nodemailer");

const router = Router();

// const Admission = require(path.join(__dirname, "../data", "./admission.js"));
let Admission = [];

router.get("/pages/r4", (req, res) => {
  res.json(Admission);
});

// Agregar un nuevo registro
router.post("/pages/r4", (req, res) => {
  console.log("Datos recibidos:", req.body);
  const newItem = { ...req.body, id: Admission.length + 1 };
  Admission.push(newItem);
  res.json({ message: Admission });
});

// Enviarlo al mail
const transporter = nodemailer.createTransport({
  service: "gmail", // O usa SMTP personalizado
  auth: {
    user: "fuis18larc01z@gmail.com", // Tu correo
    pass: "nprg rukg ihcb guf" // Tu contraseña (o usa un App Password si es Gmail)
  }
});

// Enviar la lista por correo y vaciar Admission
// router.post("/pages/r4/mail", async (req, res) => {
//   if (Admission.length === 0) {
//     return res.status(400).json({ error: "No hay datos para enviar" });
//   }

//   const mailOptions = {
//     from: "fuis18larc01z@gmail.com",
//     to: "warfuis18larcz018@gmail.com", // Correo de destino
//     subject: "Lista de Admisiones",
//     text: `Lista de registros:\n\n${Admission.map(a => `${a.id}. ${a.name} ${a.last} - ${a.mail}`).join("\n")}`
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Correo enviado con éxito");
//     Admission = []; // Limpiar la lista después de enviar
//     res.json({ success: "Correo enviado y datos reseteados" });
//   } catch (error) {
//     console.error("Error enviando correo:", error);
//     res.status(500).json({ error: "Error enviando correo" });
//   }
// });

module.exports = router;
