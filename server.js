const express = require("express");
const path = require("path");
const app = express();
const products = require("./products.json");

// serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server (Render compatible)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
