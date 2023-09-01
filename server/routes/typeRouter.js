const Router = require("express");
const typeController = require("../controllers/typeController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = new Router();

router.post("/", roleMiddleware("ADMIN"), typeController.createType);
router.get("/", typeController.getAllTypes);

module.exports = router;
