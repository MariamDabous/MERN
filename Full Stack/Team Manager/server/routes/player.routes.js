const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    // app.get('/api', PlayerController.index);
    app.post('/api/new', PlayerController.createPlayer);
    app.get('/api/all', PlayerController.getAllPlayers );
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);





}

