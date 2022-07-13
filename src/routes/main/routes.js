const express = require('express');
const UserController = require('../../controllers/UserController');
const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router
