const {Router } = require('express')
const router = Router()
const {adminRegister,adminLogin} = require('./admin.controller')


router.route('/register')
      .post(adminRegister)



router.route('/login')
      .post(adminLogin)


module.exports = router