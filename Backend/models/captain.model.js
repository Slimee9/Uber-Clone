const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength:[2, "First name must be atleast 2 characters or long"],
        },
        lastname:{
            type:String,
            minlength:[3, "Last name must be atleast 3 characters or long"],
        },
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password:{
        type:String,
        required: true,
        select:false,
    },
    socketId:{
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'auto', 'bike'],
            validate: {
                validator: function (value) {
                    return value.toLowerCase() === this.vehicleType.toLowerCase();
                },
                message: 'Invalid vehicle type'
            }
        }
    },

    location: {
        lat : {
            type: Number,
        },
        lng : {
            type: Number,
        }
    }

})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' }) 
    return token;
}

captainSchema.methods.comparePassword = async function (password)  {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain',captainSchema);


module.exports = captainModel;