let toDo = require ("../models/toDoModels")

let toDoPostController = (req,res)=>{

     const {tittle,description,image,postedBy} = req.body

     let blog = new toDo({
        tittle: tittle,
        description:description,
        image: req.file.path,
        postedBy:postedBy
     })
     blog.save()
     res.send({message:"blog post successfully"})
}

module.exports = toDoPostController