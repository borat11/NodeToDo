let toDo = require ("../models/toDoModels")

let updateController = async (req,res)=>{
    const {id,tittle,description} = req.body

    let existingToDo = await toDo.findOne({_id:id})
    if (existingToDo == null) {
      return res.send("not found")
    }

    let updateData = {
      tittle:tittle||existingToDo.tittle,
        description:description||existingToDo.description
    }
  let update =  await toDo.findByIdAndUpdate({_id:id},updateData,{new:true})
  res.send(update)

}

module.exports = updateController