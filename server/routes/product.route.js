const { addProduct, getAproduct, getAllProducts } = require("../controllers/product.controller");
const verifyToken = require("../midllewraes/verifyToke");

const router = require("express").Router();

router.post('/add',verifyToken,addProduct)
router.get('/:id',getAproduct)
router.get('/',getAllProducts)

module.exports = router;