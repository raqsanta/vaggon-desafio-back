
const jwt = require('jsonwebtoken')
require('dotenv/config')

//jwt verify


const verifyJWT = (req,res,next) => {

    const token = req.headers['x-access-token']

    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {

        if (err) {
            return res.json({auth: false, message: 'vc precisa se autenticar'})
        }


        req.id = decoded.id
        next()

    })

}

module.exports = {

    verifyJWT

}