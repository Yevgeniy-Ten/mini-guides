const Todo = require("../../models/Todo")

class TodoController {
    async create(req, res) {
        try {
            const todo = new Todo(req.body)
            todo.validate(async err => {
                if (err) return res.status(400).json(err)
                await todo.save()
                res.status(201).json(todo)
            })
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            const result = await Todo.findByIdAndUpdate(id, req.body, {
                new: true
            })
            if (!result) {
                return res.status(404).json({msg: "Correct you request"})
            }
            res.json(result)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async getAll(req, res) {
        try {
            const todos = await Todo.find()
            if (!todos.length) return res.sendStatus(404)
            res.json(todos)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const result = await Todo.findByIdAndDelete(id)
            if (!result) return res.status(400).json({msg: "Item not find"})
            res.json(result)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }
}


module.exports = new TodoController()