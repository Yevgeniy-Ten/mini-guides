const express = require("express")
const mongoose = require("mongoose")
const {PORT, mongoDBURI} = require("../configuration")
const middlewares = require("./middlewares/index")
const router = require("./routes/index")
const app = express()

middlewares.forEach(middleware => app.use(middleware))
const start = async () => {
    try {
        await mongoose.connect(mongoDBURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        app.use(router)
        app.listen(PORT, () => console.log(`${PORT}=>server port`))
    } catch (e) {
        console.log(e)
        app.close()
        process.exit(1)
    }
}
start()