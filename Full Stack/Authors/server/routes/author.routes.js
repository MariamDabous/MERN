const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.post('/api/new', AuthorController.createAuthor );
    app.get('/api/all', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor );
}
