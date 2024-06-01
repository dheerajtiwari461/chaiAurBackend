require('dotenv').config()
const express = require('express')
const app = express()


const port = 4000

const githubData = {
    
        "data": {
          "__v": 0,
          "_id": "647b633598f964861cfc48e5",
          "countryCode": "+91",
          "createdAt": "2023-06-03T15:58:45.283Z",
          "firstName": "John",
          "lastName": "Doe",
          "owner": "6476e34ebe1cfb9cc08bd446",
          "phoneNumber": "9893894838",
          "updatedAt": "2023-06-03T16:17:45.744Z"
        },
        "message": "User profile updated successfully",
        "statusCode": 200,
        "success": true
      
  }

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

app.get("/git", (req, res)=>{
    res.json(githubData.data._id)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})