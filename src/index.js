import express from "express" // modulo express
//const express =require("express")

import employeesRoutes from "./routes/employes.routes.js"
import indexRoutes from "./routes/index.routes.js"

import {PORT} from "./config.js"
const app=express()

app.use(express.json())// les pasa en formato json

app.use(indexRoutes)
app.use('/api',employeesRoutes)
app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

app.listen(PORT)
console.log("server running on port ",PORT)



