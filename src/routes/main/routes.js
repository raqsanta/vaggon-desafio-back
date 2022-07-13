const express = require('express');
const ActivityController = require('../../controllers/ActivityController');
const UserController = require('../../controllers/UserController');
const { verifyJWT } = require('./functions');
const router = express.Router();

router.get('/', verifyJWT, (req, res) => {
    return res.json('vc entrou na rota main')
})

router.get('/teste', async (req, res) => {

    const createdUser = await UserController.createUser(
        {
            username: 'duda',
            password: 'senhateste'
        }
    )

    return res.json(createdUser)
})

router.get('/my-activities', async (req,res)=>{

    const author_id = req.body.author_id
    //dps trocar pro jwt
 
    const getAllActivities = ActivityController.getAllActivityFromUser(author_id)
    
    return res.json(getAllActivities)

})

module.exports = router
