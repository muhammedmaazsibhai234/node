const mongoose = require("mongoose")

let projectTeamSchema = mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    projectTeamMembers: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user" 
    },
    projectTeamStatus: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"status"

    }
})
const projectTeamModel = mongoose.model("projectTeam",projectTeamSchema)
module.exports = projectTeamModel;