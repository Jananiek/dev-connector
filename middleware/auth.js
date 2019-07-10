const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get token from hearder
  const token = req.header("x-auth-token");
  //Check token is there
  if (!token) {
    return res.status(401).json({ msg: "No token, atherization denied!" });
  }
  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtToken"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
