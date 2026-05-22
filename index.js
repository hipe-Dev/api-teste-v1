const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/api/teste", (req, res) => {
  res.json({
    status: "online",
    mensagem: "Servidor funcionando",
    deploy: "Coolify",
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});