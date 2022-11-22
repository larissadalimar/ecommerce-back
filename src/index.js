import express from 'express'

const app = express()

app.get("/", (req, res) => {
   return res.send("Projeto criado!")
})

app.listen(5000, console.log("Running in port 5000"))