const usersRouter = require("./User");

const setupRoutes = (app) => {
  // Home Page
  app.get("/", (req, res) => {
    res.send("Welcome to WCS Express + REACT starter project");
  });

  // Users routes
  app.use("/users", usersRouter);
};

module.exports = setupRoutes;
