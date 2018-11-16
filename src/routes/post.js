const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/post.js')

router.get('/', ctrl.getAll)
router.get('/:postid', ctrl.get)
router.post('/', ctrl.create)
router.patch('/:postid', ctrl.edit)
router.delete('/:postid', ctrl.deletePost)

module.exports = router
