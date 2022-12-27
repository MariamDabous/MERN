const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"Title is required"],
        minlength:[3, "Name must be at least 3 charachters"]
    },
    status: { type: String,
    }
}, { timestamps: true });
module.exports.Student = mongoose.model('Student', StudentSchema);

