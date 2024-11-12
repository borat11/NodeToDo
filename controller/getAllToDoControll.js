let toDo = require ("../models/toDoModels")

let getAllToDoController = async (req,res) =>{
    let data = await toDo .find({}).populate("postedBy")
    
    res.send (data)
};

module.exports = getAllToDoController