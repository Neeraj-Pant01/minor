const { addProduct, getAproduct, getAllProducts, getSuggested } = require("../controllers/product.controller");
const verifyToken = require("../midllewraes/verifyToke");

const router = require("express").Router();

router.post('/add',verifyToken,addProduct)
router.get('/:id',getAproduct)
router.get('/',getAllProducts)
router.get('/suggested/products',getSuggested)

module.exports = router;