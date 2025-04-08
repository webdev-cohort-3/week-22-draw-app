import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json("hello there");
});

app.listen(3000);