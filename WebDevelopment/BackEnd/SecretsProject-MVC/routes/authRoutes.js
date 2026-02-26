const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login-jwt", authController.loginJWT);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send("Google Login Success");
  },
);

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

module.exports = router;
