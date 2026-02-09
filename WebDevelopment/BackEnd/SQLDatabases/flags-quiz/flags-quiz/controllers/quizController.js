const Country = require("../models/Country");

let asked = [];

exports.getQuiz = async (req, res) => {
  if (asked.length >= 10) {
    return res.redirect("/final");
  }

  const countries = await Country.find();
  const random = countries[Math.floor(Math.random() * countries.length)];

  if (asked.includes(random._id.toString())) {
    return res.redirect("/");
  }

  asked.push(random._id.toString());

  res.render("index", {
    country: random,
    score: req.session.score || 0,
  });
};

exports.checkAnswer = (req, res) => {
  const { answer, correct } = req.body;

  if (!req.session.score) req.session.score = 0;

  if (answer.toLowerCase() === correct.toLowerCase()) {
    req.session.score++;
    res.render("result", { correct: true, correctName: correct });
  } else {
    res.render("result", { correct: false, correctName: correct });
  }
};

exports.finalScreen = (req, res) => {
  res.render("final", { score: req.session.score || 0 });
  req.session.score = 0;
  asked = [];
};
