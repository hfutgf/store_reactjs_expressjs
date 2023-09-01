const Router = require("express");
const brandController = require("../controllers/brandController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = new Router();

router.post("/", roleMiddleware("ADMIN"), brandController.createBrand);
router.get("/", brandController.getAllBrands);

module.exports = router;
