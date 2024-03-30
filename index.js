import express from "express";

const app = express();
const port = 9000;
app.use("/",(req,res) => {
    res.json({message: "Hello from Express Ap"});
});

app.listen(9000, () => {
    console.log('Starting server on port 9000');
});