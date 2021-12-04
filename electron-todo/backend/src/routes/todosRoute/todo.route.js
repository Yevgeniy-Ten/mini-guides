const {Router} = require("express")
const router = Router()
const TodoController = require("./controller")
router.post("/", TodoController.create)
router.put("/:id", TodoController.update)
router.get("/", TodoController.getAll)
router.delete("/:id", TodoController.delete)

module.exports = router