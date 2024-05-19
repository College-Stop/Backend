import express from "express";
const app = express();

app.get('/', (req, res)=>{
    res.json({"ayush": "kumar singh"})
});

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});