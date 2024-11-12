let toDo = require ("../models/toDoModels")

let deleteController = async (req,res)=>{
    const {id} = req.params

    await toDo.findByIdAndDelete(id)
    res.send("delete successful")
}

module.exports = deleteController