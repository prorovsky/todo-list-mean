let express = require('express'),
    mongojs = require('mongojs'),
    config = require('./config'),
    db = mongojs(config.DBURL, ['todos']),
    router = express.Router();

router.get('/tasks', (req, res) => {
    db.tasks.find((err, todos) =>{
        if(err){

        }
        res.json(todos);
    });
});

module.exports = router;