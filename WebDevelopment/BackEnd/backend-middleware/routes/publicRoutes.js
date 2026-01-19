const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Public route – no auth required",
  });
});

module.exports = router;
