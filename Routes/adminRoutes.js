const router = require('express').Router()
const usermodel = require('../model')
const usercontroller = require('../controller')

router.post('/', (req,res)=>{
    res.send('welcome to admin Routes')
})

router.post('/document/add',usercontroller.addDocument)

module.exports = router