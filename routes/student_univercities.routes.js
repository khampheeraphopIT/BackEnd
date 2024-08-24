const express = require('express')
const router = express.Router();
const Student_Univercities = require('../Controller/student_univercities.controller')

router.get('/Student_Univercities', Student_Univercities.findAll)
router.post('/Student_Univercities', Student_Univercities.create)

module.exports = router;