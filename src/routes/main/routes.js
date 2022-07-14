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

router.get('/register', async (req,res)=>{

    const {username, password} = req.body

    const createdUser = await UserController.createUser(
        {
            username,
            password
        }
    )

    return res.json(createdUser)

})

router.get('/my-activities', verifyJWT, async (req,res)=>{

    const author_id = req.id
 
    const getAllActivities = ActivityController.getAllActivityFromUser(author_id)
    
    return res.json(getAllActivities)

})

router.get('/get-activity/:id', verifyJWT, async (req,res)=>{

    const id = req.params.id
    const author_id = req.id
 
    const foundActivity = ActivityController.getActivity({id, author_id})
    
    return res.json(foundActivity)

})

router.get('/delete-activity/:id', verifyJWT, async (req,res)=>{

    const id = req.params.id
    const author_id = req.id
 
    const deletedActivity = ActivityController.deleteActivity({id, author_id})
    
    return res.json(deletedActivity)

})

router.get('/create-activity', verifyJWT, async (req,res)=>{

    const {name,description,beginsdate, expiresdate, status} = req.body
    
    const author_id = req.id
 
    const createdActivity = ActivityController.createActivity({name,description,beginsdate, expiresdate, status, author_id})
    
    return res.json(createdActivity)

})

router.get('/edit-activity', verifyJWT, async (req,res)=>{

    const {id, name,description,beginsdate, expiresdate, status} = req.body
    
    const author_id = req.id
 
    const updatedActivity = ActivityController.updatedActivity({id,name,description,beginsdate, expiresdate, status, author_id})
    
    return res.json(updatedActivity)

})



module.exports = router
