const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');


async function  getFare(pickup, destination){
    if(!pickup || !destination){
         throw new Error("Pickup and destination are required")
    }
    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        bike : 20,
        premium : 70
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        bike : 8,
        premium : 25
    }

    const perMinuteRate = {
        auto: 2,
        car: 3,
        bike : 1.5,
        premium : 5,

    }

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        bike : Math.round(baseFare.bike  + ((distanceTime.distance.value / 1000) * perKmRate.bike ) + ((distanceTime.duration.value / 60) * perMinuteRate.bike )),
        premium : Math.round(baseFare.premium  + ((distanceTime.distance.value / 1000) * perKmRate.premium ) + ((distanceTime.duration.value / 60) * perMinuteRate.premium ))        
    };

    return fare;

}

module.exports.getFare = getFare;

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num -1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ 
    user,pickup,destination,vehicleType
 }) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error("User, pickup, destination, and vehicleType are required")
    }

    const fare = await getFare(pickup, destination);

    console.log(fare)

    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType]
    });

    return ride;
 }
