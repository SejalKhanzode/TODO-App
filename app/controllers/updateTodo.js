
const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) => {
    try {
            const {id} = req.params;
            const {title, description} = req.body;
            const todo = await Todo.findByIdAndUpdate(
                {_id:id},
                {title, description, updatedAt:Date.now()}
            )
            res.status(200).json({
            success:true,
            data:todo,
            message:"Updated successfully",
        })

    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id
            const todo = await Todo.findById({_id:id });

            if(!todo){
                res.status(404)
                .json({
                    success:false,
                    message:"No data found"
                })
            }
            res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
        })

    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}