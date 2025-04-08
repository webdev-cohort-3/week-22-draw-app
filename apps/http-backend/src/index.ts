import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
    // db call
    res.json({
        userId: "123"
    });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

});

app.post("/room", middleware, (req, res) => {
    // db call

    res.json({
        roomId: 123
    });
});

app.listen(3000);