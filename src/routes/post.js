const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/post.js')

router.get('/posts', ctrl.getAll)
router.get('/posts/:postid', ctrl.get)
router.post('/posts', ctrl.create)
router.patch('/posts/:postid', ctrl.edit)
router.delete('/posts/:postid', ctrl.deletePost)

module.exports = router
