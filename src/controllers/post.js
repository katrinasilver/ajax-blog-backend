const model = require('../models/post')

const get = (req, res, next) => {
  const data = model.get(req.params.postid)

  if (data.errors) {
    return next({ status: 400, message: `post not found`, errors: data.errors })
  }

  res.status(200).json(data)
}

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json(data)
}

const create = (req, res, next) => {
  console.log(`create posts`);
}

const edit = (req, res, next) => {
  console.log(`edit posts`);
}

const deletePost = (req, res, next) => {
  console.log(`delete posts`);
}

module.exports = {
  get, getAll, create, edit, deletePost
}
