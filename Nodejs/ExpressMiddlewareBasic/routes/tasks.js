const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks.controller");
// const attachTrace = require("../middleware");

// router.use(attachTrace);

router
  .post("/", tasksController.create)
  .get("/:id", tasksController.getById)
  .get("/", tasksController.getAll);

module.exports = router;
