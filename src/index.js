import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get("/", (req, res) => {
   return res.send("Projeto criado!")
})

const port = process.env.PORT 

app.listen(port, console.log(`Running in port ${port}`))