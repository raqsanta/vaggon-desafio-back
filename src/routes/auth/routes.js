const express = require('express')
const UserController = require('../../controllers/UserController')
const router = express()

router.get('/', async (req,res)=>{

    const username = req.body.username
    const password = req.body.password

    const isValidated = await UserController.validatePassword({username,password})

    return res.json(isValidated)

})



module.exports = router