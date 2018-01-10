const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/index-ctrl');

/* GET home page. */
router.get('/', (req, res, next) => {
    ctrl.init(req, res, next);
    res.render('index', { title: 'Test' });
});

module.exports = router;
