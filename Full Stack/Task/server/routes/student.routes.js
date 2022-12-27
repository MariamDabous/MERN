const StudentController = require('../controllers/student.controller');
module.exports = function(app){
    // app.get('/api', StudentController.index);
    app.post('/api/new', StudentController.createStudent);
    app.get('/api/all', StudentController.getAllStudents );
    app.get('/api/student/:id', StudentController.getStudent);
    app.put('/api/student/:id', StudentController.updateStudent);
    app.delete('/api/student/:id', StudentController.deleteStudent);





}

