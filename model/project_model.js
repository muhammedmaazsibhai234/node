const mongoose = require("mongoose")

let projectSchema = mongoose.Schema({

    projectName: {
        type: String,
    },
    projectManagerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    description: {
        type: String
    },
    technology: {
        type: String
    },
    estimatedHours: {
        type: String
    },
    StartDate: {
        type: Date
    },
    completionHours: {
    type: String        
    },
    statusId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status" 
    }

})
const projectModel  =mongoose.model("project",projectSchema)
module.exports = projectModel