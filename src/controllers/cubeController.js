const Cube=require('../models/Cube')

exports.getCreateCub=(req,res)=>{
        res.render('create')
}

//save cube
exports.postCreateCube=(req,res)=>{
        let cube=new Cube(req.body);
        Cube.save(cube);

//redirect
res.redirect('/');

}