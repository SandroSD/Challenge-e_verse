const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "The first name is required"],
        minLength: [5, "The first name must have more than 5 letters."],
        maxLength: [20, "The first name must have less than 20 letters."]
    },
    last_name: {
        type: String,
        required: [true, "The last name is required"],
        minLength: [5, "The last name must have more than 5 letters."],
        maxLength: [20, "The last name must have less than 20 letters."]
    },
    email: {
        type: String,
        required: [true, "The email is required."],
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email."
        }
    },
    password: {
        type: String,
        required: [true, "The password is required."]
    },
    active: {
        type: Boolean,
        default: true,
        required: false
    }
});

module.exports = mongoose.model('users', userSchema);