const express = require('express')
const router = express.Router()
const login=require('../controller/C_login')

router.get('/', login.get)
router.post('/user', login.post)

module.exports=router