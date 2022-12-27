const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
        type: String,
        required: [true, "setup is required"],
        minlength:[10, "min length is 10"]
    } ,
	punchline:{
        type: String,
        required: [true, "punchline is required"],
        minlength:[3, "min length is 3"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;