var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var tasksRouter = require("./routes/tasks");

const attachTrace = require("./middleware");

var app = express();

// view engine setup
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/tasks", attachTrace, tasksRouter);

app.get("/path", attachTrace, (req, res) => {
  const trace = req.trace;
  const traceObject = {
    id: trace.id,
    timestamp: trace.timestamp,
    path: trace.path,
  };
  res.json(traceObject);
});

module.exports = app;
