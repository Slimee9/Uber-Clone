const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register',[
    body('email').isEmail().withMessage("Please enter a valid email"),
    body('fullname.firstname').isLength({min:2}).withMessage("First name must be atleast 2 characters or long"),
    body('password').isLength({min:5}).withMessage("Password must be atleast 5 characters long"),
    body('vehicle.color').notEmpty().withMessage("Color is required"),
    body('vehicle.plate').notEmpty().withMessage("Plate is required"),
    body('vehicle.capacity').isNumeric().withMessage("Capacity must be a number"),
    body('vehicle.vehicleType').isIn(['Car', 'Auto', 'Bike']).withMessage("Invalid vehicle type")
],
    captainController.registerCaptain 
)

module.exports = router;  