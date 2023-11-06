const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  getAppStats,
  getCategory,
  findProducts,
} = require("../controller/productController");

const router = require("express").Router();

router.post("/create", createProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/search",searchProduct)
router.get("/stats",getAppStats)
router.get("/category",getCategory)
router.get("/find",findProducts)


module.exports = router;
