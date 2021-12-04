const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 6000
const authRoutes = require("./authRoutes")

const app = express()
app.use(express.json())
app.use("/auth", authRoutes)
const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://yevgeniy:ten1234@cluster0.e1nyb.mongodb.net/AppStudy?retryWrites=true&w=majority\n" +
            " Copy", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`${PORT} server port`))
    } catch (e) {
        console.log(e)
    }
}
start()