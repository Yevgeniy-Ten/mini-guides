const {Router} = require("express")
const router = Router()
const todosRoute = require("./todosRoute/todo.route")

router.use("/todos", todosRoute)

module.exports = router