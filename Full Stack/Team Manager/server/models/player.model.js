const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"Title is required"],
        minlength:[2, "Name must be at least 3 charachters"]
    },
    position:{
        type: String,
        required: [false]
    }

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

