const mongoose =  require("mongoose")

let prioritySchema = mongoose.Schema({

    priorityName: {
        type: String,
        required: true
    },
    isActive: {
        type:Number
    }
})

const priorityModel = mongoose.model("priority",prioritySchema)
module.exports = priorityModel;