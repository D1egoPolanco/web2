const express = require('express');
const router = express.Router();
const dulcecontroller = requiere('../controllers/dulcecontroller');

router.get('/',filtrocontroller.index);
router.post('/',filtrocontroller.store)

module.exports  = router;
