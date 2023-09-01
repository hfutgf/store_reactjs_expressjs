const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(
        ApiError.badRequest("Email yoiki login boshatdan tanglang iltimos!")
      );
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Bunday foydalanuvchi mavjud!"));
    }
    const hashPass = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPass, role });
    const basket = await Basket.create({ id: user.id });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json(token);
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Bunday foydalanuvchi mavjud emas!"));
    }
    const compPass = bcrypt.compareSync(password, user.password);
    const token = generateJwt(user.id, user.email, user.role);
    if (compPass) {
      return res.json(token);
    }
    return res.json("Login yoki parol xato!");
  }
  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json(token);
  }
}

module.exports = new UserController();
