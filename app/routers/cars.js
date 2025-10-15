var express = require('express');
var router = express.Router();

var carController = require('../controllers/cars');

router.get('/carId', carController.getAll);
router.post('/:carId', carController.create);
router.get('/:carId', carController.getCar);
router.put('/:carId', carController.update);
router.delete('/:carId', carController.remove);

module.exports = router;