const Cube = require('../models/Cube');
const db = require('../db.json')

exports.getCreateCub = (req, res) => {
        res.render('create')
}

exports.postCreateCube = (req, res) => {
        //save cube
        const { name, description, imageUrl, difficultyLevel } = req.body;

        let cube = new Cube(name, description, imageUrl, difficultyLevel);

        Cube.save(cube);

        //redirect
        res.redirect('/');

};

exports.getDetails = (req, res) => {
        let cubeId=Number(req.params.cubeId);
        if(!cubeId){
                return res.redirect('/404');
        }
        let cube = db.cubes.find(x => x.id === cubeId);

        if(!cube){
                return res.redirect('/404');  
        }

        res.render('details',{cube})
};