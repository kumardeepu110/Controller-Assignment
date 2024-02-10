const usermodel = require('./model')

module.exports  = {addDocument}

function addDocument(req,res){

    let obj = new usermodel()
    obj.name = req.body.name
    obj.email = req.body.email
    obj.phone = req.body.phone
    obj.save().then(r=>{
        res.send({
            success:true,
            status:200,
            message:"Document added successfully",
            data:{
                name:obj.name,
                email:obj.email,
                phone:obj.phone
            }
        })
    }).catch(err=>{
        res.send({
            success:false,
            status:400,
            message:"Document not added",
            error:err
        })
    })
}