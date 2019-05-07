const http = require("http")
const express = require("express")

const servidor = express()

servidor.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})

servidor.get("/usuarios",(req,res)=>{
    res.sendFile(__dirname+"/usuarios.html")
})

servidor.get("/mensajes",(req,res)=>{
    res.sendFile(__dirname+"/mensajes.html")
})

servidor.get("/perfil",(req,res)=>{
    res.sendFile(__dirname+"/perfil.html")
})

servidor.get(/\/api\/[\w]+/,(req,res)=>{
    res.json([])
})

servidor.listen(8080)