const mongoose = require("mongoose")

let taskUserSchema = mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task"
    },
    TaskUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
const taskUserModel = mongoose.model("taskUser",taskUserSchema)
module.exports = taskUserModel