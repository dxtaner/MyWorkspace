const Capital = require("../models/Capital");

exports.seedDB = async () => {
  const count = await Capital.countDocuments();
  if (count === 0) {
    await Capital.insertMany([
      { country: "Turkey", capital: "Ankara" },
      { country: "Germany", capital: "Berlin" },
      { country: "France", capital: "Paris" },
      { country: "Italy", capital: "Rome" },
      { country: "Spain", capital: "Madrid" },
      { country: "Japan", capital: "Tokyo" },
      { country: "Brazil", capital: "Brasilia" },
      { country: "Canada", capital: "Ottawa" },
      { country: "Norway", capital: "Oslo" },
      { country: "Egypt", capital: "Cairo" },
    ]);
  }
};

function initGame(req) {
  req.session.score = 0;
  req.session.asked = [];
  req.session.qNumber = 0;
}

exports.getQuiz = async (req, res) => {
  if (!req.session.qNumber) initGame(req);

  if (req.session.qNumber >= 10) {
    return res.render("final", { score: req.session.score });
  }

  const capitals = await Capital.find({
    _id: { $nin: req.session.asked },
  });

  const random = capitals[Math.floor(Math.random() * capitals.length)];

  req.session.asked.push(random._id);
  req.session.qNumber++;

  res.render("index", {
    question: random,
    qNumber: req.session.qNumber,
    score: req.session.score,
  });
};

exports.checkAnswer = (req, res) => {
  const userAnswer = req.body.answer;
  const correct = req.body.capital;

  let result = "wrong";
  if (userAnswer.toLowerCase() === correct.toLowerCase()) {
    req.session.score++;
    result = "correct";
  }

  res.render("result", { result, correct });
};
