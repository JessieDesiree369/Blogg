const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("tryna get home");
  res.render("index");
});

module.exports = router;
