const express = require("express");
const router = express.Router();
const { insertSampleProducts,getProductStats,getProductanalysis } = require("../controllers/product-controller");

router.post("/add", insertSampleProducts);
router.get("/stats",getProductStats)
router.get("/analysis",getProductanalysis)

module.exports = router;
