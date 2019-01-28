const controller = require("./controller");

module.exports = function(app){
    app.get('/api/pet', controller.index);
    app.get('/api/pet/:id', controller.show);
    app.post('/api/pet', controller.add);
    app.put('/api/pet/:id',controller.update);
    app.delete('/api/pet/:id',controller.remove);

}