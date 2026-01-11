const express = require("express");
const app = express();
const products = require("./products.json"); // must be in same folder as server.js

// serve static files from public folder
app.use(express.static("public"));

// API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
