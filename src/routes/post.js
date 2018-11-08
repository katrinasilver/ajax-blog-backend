const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/post')

router.get('/posts', ctrl.getAll)
router.get('/posts/:postid', ctrl.get)
router.post('/posts', ctrl.create)
router.patch('/authors/:authorid', ctrl.edit)
router.delete('/authors/:authorid', ctrl.delete)

module.exports = router
