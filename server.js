const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => res.send());

// Connect Database
connectDB();

// Middleware for the data
app.use(express.json({ extended: false }));

// Define Routes
app.use("/auth", require("./routes/authentication"));
app.use("/contacts", require("./routes/contacts"));
app.use("/users", require("./routes/users"));
app.use("/messages", require("./routes/messages"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
