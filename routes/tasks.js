let express = require('express'),
    router = express.Router();

router.get('/tasks', (req, res) => {
    res.send('tasks');
});

module.exports = router;