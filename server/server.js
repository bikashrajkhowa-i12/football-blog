require("dotenv").config();
const express = require("express");
const cors = require("cors");

const conenctMongo = require("./db/mongo");
const sequelize = require("./db/pg");
const routes = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use(routes);

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    // Test MongoDB connection
    await conenctMongo();

    // Test PostgreSQL connection
    await sequelize.authenticate();
    console.log("PostgreSQL connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();
