const inquirer = require("inquirer");
const qr = require("qr-image");
const fs = require("fs");

inquirer
  .prompt([
    {
      message: "Enter your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("QR code generated!");
    });
  });
