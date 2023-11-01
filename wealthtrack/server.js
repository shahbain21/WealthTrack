const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Basic validation (you can use a database for real user data)
    if (username === "user" && password === "password") {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
