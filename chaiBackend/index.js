require('dotenv').config()
const express = require('express')
const app = express()


const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/x", (req, res)=>{
    res.send('hello')
})

app.get('/b', (res,sep)=>{
    sep.send("<h1>test</h1>")

})

app.get('/dukhan', (req, res)=>{
    res.send('<h2>cutting chai</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})