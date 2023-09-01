const Router = require("express");
const BrandRouter = require("./brandRouter");
const DeviceRouter = require("./deviceRouter");
const TypeRouter = require("./typeRouter");
const UserRouter = require("./userRouter");


const router = new Router();

router.use("/user", UserRouter);
router.use("/type", TypeRouter);
router.use("/brand", BrandRouter);
router.use("/device", DeviceRouter);

module.exports = router;
