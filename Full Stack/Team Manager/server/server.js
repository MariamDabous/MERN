const express =require('express');
const cors = require('cors') // This is new
const app =express();
require('./config/mongoose.config');

app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new


require('./routes/player.routes')(app); // This is new



app.listen(8000, ()=>{
    console.log("You are listining on port 8000");
}
);
