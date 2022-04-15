const mongoose = require("mongoose")

let moduleSchema = new mongoose.Schema({

    moduleName: {
        type: String,
        required:true
    },
    description: {
        type: String
    },
    estimatedTime: {
        type: String
    },
    StartDate:{
        type: Date

    },
    priorityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "priority"
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project"

    },statusId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"

    }
})

const moduleModel = mongoose.model("module",moduleSchema)
module.exports = moduleModel 