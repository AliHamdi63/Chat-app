require('dotenv').config();
const express = require("express");
const cors = require("cors");




const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});