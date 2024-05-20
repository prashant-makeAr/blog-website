const mongoose = require('mongoose')
const express = require("express")
const path = require("path")

const userRoute = require("./routes/user")

const app = express()
const PORT = 8000

mongoose.connect('mongodb://127.0.0.1:27017/blog-website').then(() => { console.log("MongoDb Connected"); })



app.set("view engine", "ejs")
app.set('views', path.resolve("./views"))


app.get('/', (req, res) => {
    return res.render("home")
})

app.use('/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})