require('dotenv').config()

const express=require('express')

const cors=require('cors')

require('./db/Connection')

const routes=require('./Routes/Routes')

const crudappServer=express()

crudappServer.use(cors())
crudappServer.use(express.json())
crudappServer.use(routes)

const port=7000 || process.env.port
crudappServer.listen(port,()=>{
    console.log(`Server connected at ${port}!!`);
})