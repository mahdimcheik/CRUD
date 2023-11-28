// Setup application port depending on environment variables
const port = process.env.PORT || 3001;

// Load .env file if not in production environment
if (process.env.ENV !== "prod") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const setupRoutes = require("./routes");
const app = express();

// Handle CORS requests
app.use(cors());

// Configure routes
setupRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Your project API is listening at http://localhost:${port}`);
});
