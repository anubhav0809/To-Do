const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

//export this Schema
module.exports = mongoose.model('todo', TodoItemSchema);