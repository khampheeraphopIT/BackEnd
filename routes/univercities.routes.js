const express = require('express')
const router = express.Router();
const univercities = require('../Controller/univercities.controller')

router.get('/univercities', univercities.findAll)
router.get('/univercities/:id', univercities.findOne)
router.post('/univercities', univercities.create)
router.put('/univercities/:id', univercities.update)
router.delete('/univercities:id', univercities.delete)

module.exports = router;