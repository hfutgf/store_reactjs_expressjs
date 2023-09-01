const Router = require("express");
const deviceController = require("../controllers/deviceController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = new Router();

router.post("/", roleMiddleware("ADMIN"), deviceController.createDevice);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOneById);

module.exports = router;
