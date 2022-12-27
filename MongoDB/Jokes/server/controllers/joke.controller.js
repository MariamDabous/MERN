const Joke = require("../models/joke.model");


//all jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//single joke
module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

//create a joke

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrrrong", error: err }));
};

//update a joke

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};