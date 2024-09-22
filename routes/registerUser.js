const {Router} = require('express');
const registerController = require('../controllers/register.controller.js')
const router = Router()

router.post("/register", registerController)

module.exports = router