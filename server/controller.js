const Task = require("./models");

module.exports = {
    index: (req, res) => {
        Task.find().sort({type: 'asc'})
            .catch(err => {
                res.json({message:"ERROR can not find any", error:err});
            })
            .then(data => {
                res.json({message:"All Pets", task:data});
            });    
    },

    add: (req, res) => {
        Task.count({'name': req.body.name})
            .then(count => {
                if(count>0){
                    res.json({use:"Name already in use"});
                }
                else{
                    Task.create(req.body)
                    .then(data => {
                        res.json({message:"Success", task:data});
                    })
                    .catch(err => {
                        res.json({message:"ERROR can not Save", error:err});
                    });
                }
                
            })
    },

    remove: (req, res) => {
        Task.findByIdAndRemove(req.params.id)
            .catch(err => {
                res.json({message:"ERROR Deleting", error:err})
            })
            .then(data => {
                res.json({message:"Successefully Deleted", task:data})
            })
    },

    show: (req, res) => {
        Task.findById(req.params.id)
            .catch(err => {
                res.json({message:"ERROR Finding", error:err})
            })
            .then(data => {
                res.json({message:"Showing data for ID provided", task:data});
            })
    },

    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body,{runValidators: true})
            .catch(err => {
                console.log(err);
                res.json({message:"ERROR", error:err});
            })
            .then(data => {
                res.json({message:"Success updated"});
            });
    }
}

