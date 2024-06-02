import express from 'express'


const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get("/api/jokes", (req, res)=>{
    const jokes = [
        {id: 1, title: "Why did the scarecrow win an award?", content: "Because he was outstanding in his field"},
        {id: 2, title: "Why don't scientists trust atoms?", content: "Because they make up everything"},
        {id: 3, title: "Why don't lobsters share?", content: "Because they're shellfish"},
        {id: 4, title: "Why don't eggs tell jokes?", content: "They'd crack each other up"},
        {id: 5, title: "Why did the banana go to the doctor?", content: "He wasn't peeling well"}
    ]
    res.json(jokes)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));