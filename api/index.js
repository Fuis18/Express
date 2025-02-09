const express = require("express");
const cors = require("cors");

const app = express();

// const home = require("../routes/home");
// const r4 = require("../routes/4");

// middlewares
app.use(cors());
app.use(express.json());

// routes
// app.use(home);
// app.use(r4);

app.get("/", (req, res) => {
  res.send("Hola, la función serverless funciona correctamente.");
});

app.get("/hello/:username", (req, res) => {
  console.log(req.query); // ?page=asdas
  res.send(`Hello ${req.params.username}`);
});

// Si estamos en Vercel, exportamos la app sin llamar a listen
module.exports = (req, res) => app(req, res);
// En desarrollo local, escuchamos en el puerto definido
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
