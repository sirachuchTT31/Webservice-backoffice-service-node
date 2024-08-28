const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.get("/back-office", (req, res) => {
    res.json({ message: "Server Running." });
});

app.use('/back-office' , require('./src/routes/auth.route'));

const PORT = 8002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `);
});