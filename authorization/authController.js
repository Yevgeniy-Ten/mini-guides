const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const generateAccessToken = (id, role) => {
    const payload = {
        id, role
    }
    return jwt.sign(payload, "yevgeniySecret", {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    msg: "Error in registration",
                    errors
                })
            }
            const {name, password} = req.body
            const candidate = await User.findOne({name})
            if (candidate) {
                return res.status(400).json({msg: "Пользователь с таким именем создан"})
            }
            const hashPass = bcrypt.hashSync(password, 6)
            const userRole = await Role.findOne({value: "User"})
            const user = new User({username: name, password: hashPass, roles: [userRole.value]})
            await user.save()
            return res.status(201).json({msg: "User created!"})
        } catch (e) {
            console.log(e)
            res.status(400).json({msg: "Register error"})
        }
    }

    async login(req, res) {
        try {
            const {name, password} = req.body
            const user = await User.findOne({username:name})
            if (!user) {
                return res.status(400).json({msg: "User not found"})
            }
            const validPass = bcrypt.compareSync(password, user.password)
            if (!validPass) {
                return res.status(400).json({msg: "Bad pass user"})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({msg: "Login error"})
        }
    }

    async getUser(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()