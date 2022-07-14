const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mainRoutes = require('./routes/main/routes')
const adminRoutes = require('./routes/admin/routes')
const authRoutes = require('./routes/auth/routes')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    return res.json({message: 'teste'})
})

app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/main', mainRoutes)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('server rodando na porta '+process.env.SERVER_PORT)
})