require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/orders", require("./routes/orderRoutes"));

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Server listening
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
