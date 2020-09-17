const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入处理请求的模块
const user_handler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', user_handler.regUser)
// 登录
router.post('/login', user_handler.login)

// 将路由对象共享出去
module.exports = router