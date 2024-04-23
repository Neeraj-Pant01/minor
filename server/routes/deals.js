const { getSingleUserItems, postHourlyDeal, getHourlyDeals, deleteDeal } = require("../controllers/deals");
const verifyToken = require("../midllewraes/verifyToke")

const router = require("express").Router();

router.get('/deal/:id',getSingleUserItems);
router.post('/',verifyToken,postHourlyDeal);
router.get('/',getHourlyDeals);
router.delete('/:id',verifyToken,deleteDeal)

module.exports = router;