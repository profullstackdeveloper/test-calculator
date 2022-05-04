var express = require("express");
var authCtrl = require("../controllers/auth.controller");

const router = express.Router();
router.route("/auth/signin").post(authCtrl.signin);

module.exports = router;
