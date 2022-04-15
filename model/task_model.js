const mongoose = require("mongoose")

let taskSchema = mongoose.Schema({

    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String

    },
    totalTime:{
        type: String
    },
    startDate: {
        type: Date
    },
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "module"
    },
    priorityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "priority"
    },
    statusId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    }
    
})
const taskModel = mongoose.model("task",taskModel)
module.exports = taskModel