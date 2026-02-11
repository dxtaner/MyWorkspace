const express = require("express");
const router = express.Router();
const controller = require("../controllers/quizController");

controller.seedDB();

router.get("/", controller.getQuiz);
router.post("/", controller.checkAnswer);

module.exports = router;
