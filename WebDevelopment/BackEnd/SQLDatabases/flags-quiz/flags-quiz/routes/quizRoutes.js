const express = require("express");
const router = express.Router();
const quiz = require("../controllers/quizController");

router.get("/", quiz.getQuiz);
router.post("/answer", quiz.checkAnswer);
router.get("/final", quiz.finalScreen);

module.exports = router;
