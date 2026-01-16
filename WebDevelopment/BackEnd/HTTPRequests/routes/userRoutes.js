const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.json({ message: "GET all users" });
});

// POST
router.post("/", (req, res) => {
  res.json({
    message: "POST user created",
    data: req.body,
  });
});

// PUT
router.put("/:id", (req, res) => {
  res.json({
    message: `PUT user ${req.params.id} updated`,
    data: req.body,
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.json({
    message: `DELETE user ${req.params.id} deleted`,
  });
});

module.exports = router;
