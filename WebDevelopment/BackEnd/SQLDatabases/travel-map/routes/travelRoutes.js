const express = require("express");
const router = express.Router();
const controller = require("../controllers/travelController");

router.get("/", controller.getHome);
router.post("/add", controller.addCountry);

module.exports = router;
