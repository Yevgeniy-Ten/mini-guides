const {model, Schema} = require("mongoose")
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    createdTime: {
        type: Date,
        default: Date.now
    }

})
module.exports = model("Todo", TodoSchema)