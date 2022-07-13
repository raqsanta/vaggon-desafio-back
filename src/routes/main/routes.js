const express = require('express');
const ActivityController = require('../../controllers/ActivityController');
const router = express.Router();

router.get('/', (req,res)=>{
    return res.json('vc entrou na rota main')
})

router.get('/teste', async (req,res)=>{
    
    const foundActivity = await ActivityController.getActivity(5)

    return res.json(foundActivity)
})

module.exports = router
