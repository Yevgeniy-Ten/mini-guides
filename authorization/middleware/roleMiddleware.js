const jwt = require("jsonwebtoken")

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(403).json({msg: "User not registered"})
            }
            const {role: userRoles} = jwt.verify(token, "yevgeniySecret")
            let hasRole = false
            userRoles.forEach(role2 => {
                if (roles.includes(role2)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: "No roles acces denied"})
            }
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({msg: "User not registered"})
        }
    }
}