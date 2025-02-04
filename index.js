const express = require("express");
const cors = require("cors");
const app = express();
const triviaRoute = require("./routes/trivia.route");

const PORT = 5000;

const corsOptions = {
    origin: ["http://localhost:5000", ""],
    methods: ["GET"],
    allowedHeaders: ["COntent-Type", "Authorization"],
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", triviaRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})