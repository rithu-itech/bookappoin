const User = require('../models/user');

exports.postUser = async(req,res,next) =>{

    try{
        if(!req.body.phonenumber){
            throw new Error('Phone number is mandatory')
        }
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber=req.body.phonenumber;

    const data = await User.create({name:name,email:email,phonenumber:phonenumber});
    res.status(201).json({newUserDetail:data});
    
}

exports.getUser = async(req,res,next)=>{
    try{
        const user = await User.findAll();
    res.status(200).json({allUsers:user});
    }
    catch(error){
        console.log('Get user is failing',JSON.stringify(err))
        res.status(500).json({error:error})
    }
    
}

exports.deleteUser = async(req,res)=>{
    try{
        if(req.params.id == 'undefined'){
            console.log("ID is missing")
            return res.status(400).json({err:'ID is missing'})
        }
    const uId = req.params.id;
    await User.destroy({where:{id:uId}});
    res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}