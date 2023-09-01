const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Siz ro'yxatdan otmagansiz!" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "Siz admin emasiz" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(402).json({ message: "Siz hali ro'yxatdan otmadingiz!" });
    }
  };
};
