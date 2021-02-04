var express = require("express");
var router = express.Router();

const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", [verifySignUp.checkExistingEmail], controller.signup);

router.post("/signin", controller.signin);

module.exports = router;
