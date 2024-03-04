const router = require("express").Router()
const {register, login, getAUser, loginGoogle} = require("../controllers/auth.controller")

router.post('/register',register)
router.post('/login',login)
router.get('/:id',getAUser)
router.post('/google',loginGoogle)

module.exports = router;