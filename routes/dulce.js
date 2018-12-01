const express = require('express');
const router = express.Router();
const dulcecontroller = require('../controllers/dulcecontroller');

router.get('/',dulcecontroller.index);
router.post('/',dulcecontroller.store)

module.exports  = router;
