const fs = require("fs");

fs.writeFile("message.txt", "Hello Node!", (err) => {
  if (err) throw err;
  console.log("File created");
});

const os = require("os");

console.log(os.platform());
console.log(os.homedir());
