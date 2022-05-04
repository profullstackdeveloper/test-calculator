const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

module.exports.signin = (req, res) => {
  const user = {
    email: "test@tbo.com",
    password: "1234",
  };

  if (req.body.email !== user.email) {
    return res.status("401").json({
      error: "User not found",
    });
  }

  if (req.body.password !== user.password) {
    return res.status("401").json({
      error: "password don't match",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    "Tbo_sercet_key"
  );

  return res.status(200).json({
    token,
  });
};

module.exports.requireSignin = expressJwt({
  secret: "Tbo_sercet_key",
  userProperty: "auth",
});
