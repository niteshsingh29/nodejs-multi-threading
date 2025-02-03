import express from "express";

const port = 3000;
const app = express();

console.log(
    "Starting without cluster......................................................."
);
console.log(`worker pid=${process.pid}`);

app.get("/not-heavy", (req, res) => {
    res.send("Success!");
});

let numberOfRequest = 0;
app.get("/heavy", (req, res) => {
    try {
        let total = 0;
        console.log("connection started: ", numberOfRequest++);

        for (let i = 0; i < 5_000_000; i++) {
            total++;
        }

        console.log("connection closed: ");
        res.send(`The result of the CPU intensive task is ${total}\n`);
    } catch (error) {
        console.error("error: ", error);
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
