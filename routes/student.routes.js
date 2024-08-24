const express = require('express');
const router = express.Router();
const student = require('../Controller/student.controller')

router.get('/student', student.findAll)
router.get('/student/:id', student.findOne)
router.post('/student', student.create)
router.put('/student/:id', student.update)
router.delete('/student/:id', student.delete)

module.exports = router;