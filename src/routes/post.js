const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/post.js')

router.post('/', ctrl.create)
router.get('/', ctrl.getAll)
router.get('/:postid', ctrl.get)
router.patch('/:postid', ctrl.edit)
router.delete('/:postid', ctrl.deletePost)

module.exports = router
