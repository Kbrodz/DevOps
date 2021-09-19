const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const redis = require("redis");
const redisClient = redis.createClient({
    host: "myredis",
    port: 6379,
    //retryStrategy: () => 1000
});

redisClient.on('connect', () => {
    console.log("Connected to Redis server");
});

redisClient.on('error', (error) => {
    console.log(error);
});

app.get('/hello', (req, res) => {
    res.send("Hello World from express server!");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
});

