const router = require('express').Router();

const cubeController = require('./controllers/cubeController')
const homeControllers = require('./controllers/homeController')

router.get('/', homeControllers.getHomePage);
router.get('/about', homeControllers.getAboutPage);


router.get('/create', cubeController.getCreateCub);
router.post('/create',cubeController.postCreateCube)
module.exports = router;