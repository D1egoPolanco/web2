const express = require ('express');
const router = express.Router();
const filtrocontroller = requiere ('../controllers/filtrocontroller');

router.get('/',filtrocontroller.index);
router.post('/',filtrocontroller.store)

module.exports  = router;
