
const Todo = require("../models/Todo");

exports.getAllTodo = async(req,res) => {
    try {
            const todo = await Todo.find({});
            res.status(200)
        .json({
            success:true,
            data:todo,
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
            data:todo,
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