const {Router} = require("express")
const router = Router()
const controller = require("./authController")
const {check} = require("express-validator")
const authMiddleware = require("./middleware/authMiddlware")
const roleMiddleware = require("./middleware/roleMiddleware")


router.post("/registration", [check("name", "Name is empty!!").notEmpty(),
    check("password", "Password is bad length").isLength({
        min: 4,
        max: 10
    })], controller.registration)
router.post("/login",
    controller.login)
router.get("/users", roleMiddleware("User"),
    controller.getUser)

module.exports = router