const sequelize= require('../model/book-table');

exports.formGet=(req,res,next)=>{
    sequelize.findAll()
    .then((results=>{
        res.status(200).json(results);
    }))
    .catch(err=>console.log(err));

}

exports.formPost=(req,res,next)=>{
    sequelize.create({
        user:req.body.user,
        phone:req.body.phone,
        email:req.body.email
    }).then(result=>{
        res.status(200).json(result)
    }).catch(err=>console.log(err))

}

exports.formDelete=(req,res,next)=>{
    const id = req.params.id;
    sequelize.destroy({where:{
        id:id
    }}).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })

}
