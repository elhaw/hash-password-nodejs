const {Router } = require('express')
const router = Router()
const {addAdmin,adminLogin} = require('./admin.controller')


router.route('/')
      .post(addAdmin)



router.route('/login')
      .post(adminLogin)


module.exports = router