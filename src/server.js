const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const home = require("./routes/home");
const r4 = require("./routes/4");

// settings
// app.set('case sensitive routing');
app.set("port", 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(home);
app.use(r4);

app.get("/hello/:username", (req, res) => {
  console.log(req.query); // ?page=asdas
  res.send(`Hello ${req.params.username}`);
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on http://localhost:${app.get("port")}`);
});
