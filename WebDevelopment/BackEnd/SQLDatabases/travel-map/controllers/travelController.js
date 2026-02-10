const Country = require("../models/Country");

exports.getHome = async (req, res) => {
  const visited = await Country.find({ visited: true });
  res.render("index", { visited });
};

exports.addCountry = async (req, res) => {
  const name = req.body.country;

  await Country.findOneAndUpdate(
    { name: new RegExp("^" + name + "$", "i") },
    { visited: true },
    { upsert: true },
  );

  res.redirect("/");
};
