// 导入joi模块，定义效验规则
const { ref, required } = require('joi')
const joi = require('joi')

//电压电流的校验规则
const OutputVoltage = joi.number().required()
const InputVoltage = joi.number().required()
const OutputCurrent = joi.number().required()

exports.sent_them = {
    body:{
        OutputVoltage ,
        InputVoltage ,
        OutputCurrent 
    }
}
