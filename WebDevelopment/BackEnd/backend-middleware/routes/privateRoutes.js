const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/private", authMiddleware, (req, res) => {
  res.json({
    message: "Private route – authorized access",
  });
});

module.exports = router;
