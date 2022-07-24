// 引入express
const express = require('express')
//引入处理函数模块
const info_handler = require('../router_handler/inforouter')
// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入邮箱规则对象
const {sent_them} = require('../schema/check')
//创建路由实例
const router = express.Router()

//接收数据
router.post('/accept',expressJoi(sent_them),info_handler.accept_data)
//向前端发送数据
router.get('/updata',info_handler.sent_data)

//向外共享路由
module.exports = router
