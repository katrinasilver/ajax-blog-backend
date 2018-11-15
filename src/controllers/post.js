const model = require('../models/post')

const get = (req, res, next) => {
  const data = model.get(req.params.postid)

  if (data.errors) {
    return next({ status: 400, message: `post not found`, errors: data.errors })
  }

  res.status(200).json([data])
}

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json(data)
}

const create = (req, res, next) => {
  const data = model.create(req.body)

  if (data.errors) {
    return next({ status: 400, message: `add post failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const edit = (req, res, next) => {
  const data = model.edit(req.params.postid, req.body)

  if (data.errors) {
    return next({ status: 400, message: `edit post failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const deletePost = (req, res, next) => {
  const data = model.deletePost(req.params.postid)

  if (data.errors) {
    return next({ status: 400, message: `delete post failed`, errors: data.errors })
  }

  res.status(200).json(data)
}

module.exports = {
  get, getAll, create, edit, deletePost
}
