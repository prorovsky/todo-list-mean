let express = require('express'),
    mongojs = require('mongojs'),
    config = require('../config'),
    db = mongojs(config.DBURL, ['todos']),
    router = express.Router();

router.get('/todos', (req, res) => {
    db.todos.find((err, todos) =>{
        if(err){
            console.error(err);
        }
        res.json(todos);
    });
});

router.get('/todo/:id', (req, res) => {
    db.todos.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, todo) => {
        if(err){
            console.error(err);
        }
        res.json(todo);
    });
});

router.post('/todo', (req, res) => {
    let todo = req.body;
    if(!todo.title){
        res.status(400);
        res.send('Invalid data');
    } else {
        db.todo.save(todo, (err, todo) => {
            if(err){
                console.error(err);
            } else {
                res.json(todo);
            }
        });
    }
});

router.put('/todo/:id', (req, res) => {
    ds.todos.update({_id: mongojs.ObjectId(req.params.id)}, 
        {$set: {title: req.title, isReady: req.isReady}}, (err, todo) =>{
        if(err){
            console.error(err);
        } else {
            res.send('Todo updated');
        }
    });
});

router.delete('/todo/:id', (req, res) => {
    db.todos.remove({_id: mongojs.ObjectId(req.params.id)}, (err) => {
        if(err){
            console.error(err);
        }
        res.send('Todo deleted');
    });
});

module.exports = router;