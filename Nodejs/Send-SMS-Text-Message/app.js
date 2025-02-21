const express = require("express");
const { Vonage } = require("@vonage/server-sdk");
const ejs = require("ejs");
const socketio = require("socket.io");
var bodyParser = require("body-parser");

const vonage = new Vonage({
  apiKey: "77d46dc1",
  apiSecret: "4kRxPOuqT162ueqA",
});

const app = express();
app.use(express.json());

app.set("view engine", "html");
app.set("view engine", "ejs");

app.engine("html", ejs.renderFile);

app.use(express.static(__dirname + "/public"));

// route
app.get("/", (req, res) => {
  res.render("index");
});

// Catch from submit
app.post("/", async (req, res) => {
  const { number, text } = req.body;
  const from = "Vonage APIs";

  try {
    const response = await vonage.sms.send({ to: number, from, text });

    // Send response back to the client
    res.json({
      success: true,
      response,
    });

    // Emit to the client
    io.emit("smsStatus", {
      id: response.messageId,
      number: response.to,
      error: null,
    });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });

    // Emit to the client in case of error
    io.emit("smsStatus", {
      id: null,
      number: number,
      error: error.message,
    });
  }
});

const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});

// Connect to socket.io
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("Connected");

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});
