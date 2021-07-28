const findUserNameController = require('./findUserNameController');
const router = require("express").Router();

router.use('/find', findUserNameController);

module.exports = router;