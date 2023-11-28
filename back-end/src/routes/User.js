const router = require("express").Router();
const db = require('../services/Db')

/**
 * Returns the whole user list
 */
router.get("/", async (req, res) => {
  res.send(await db.$queryRaw`SELECT * FROM User`);
});

module.exports = router;
