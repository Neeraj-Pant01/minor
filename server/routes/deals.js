const { getSingleUserItems, postHourlyDeal, getHourlyDeals } = require("../controllers/deals");
const verifyToken = require("../midllewraes/verifyToke")

const router = require("express").Router();

router.get('/deal/:id',getSingleUserItems);
router.post('/',verifyToken,postHourlyDeal);
router.get('/',getHourlyDeals);

module.exports = router;