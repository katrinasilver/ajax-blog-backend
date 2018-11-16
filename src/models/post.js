const shortid = require('shortid')
const file = require('./sync')
const dates = require('./date')
const data = require('./data/post')

const get = (id) => {
  const errors = []
  const data = file.sync('/post.json')
  const post = data.find(p => p.id === id)

  if (!post) {
    errors.push(`post id doesn't exist`)
    return { errors }
  }
  return post
}

const getAll = (limit) => {
  const errors = []
  const data = file.sync('/post.json')

  if (!data.length) {
    errors.push(`there are no posts in the database right now :(`)
    return { errors }
  }
  return limit ? data.slice(0, limit) : data
}

const create = (body) => {
  const errors = []
  const { title, author, content } = body
  const data = file.sync('/post.json')

  if (!body.title || !body.content) {
    errors.push(`posts must have a title and a content`)
    return { errors }
  }

  if (body.title.length > 60) {
    errors.push(`posts titles must not exceed 60 characters`)
    return { errors }
  }

  let post = {
    id: `${dates.postDate()}-${(shortid.generate()).replace('_', 0)}`,
    date: dates.postDate(),
    title,
    author,
    content
  }

  data.push(post)
  file.sync('write', '/post.json', data)

  return post
}

const edit = (id, body) => {
  const errors = []
  const { title, author, content } = body
  const data = file.sync('/post.json')
  const post = data.find(p => p.id === id)

  if (!title && !content && !author) {
    errors.push(`must use title and content for editing`)
    return { errors }
  }

  if (author && author.length > 30) {
    errors.push(`post author must not exceed 30 characters`)
    return { errors }
  }

  if (title && title.length > 60) {
    errors.push(`posts titles must not exceed 60 characters`)
    return { errors }
  }

  if (content && !title && !author) {
    post.content = content
    file.sync('write', '/post.json', data)
    return post
  }

  if (title && !content && !author) {
    post.title = title
    file.sync('/post.json', data)
    return post
  }


  if (author && !title && !content) {
    post.author = author
    file.sync('/post.json', data)
    return post
  }

    post.title = title
    post.content = content
    file.sync('/post.json', data)
    return post
}

const deletePost = (id) => {
  const errors = []
  const data = file.sync('/post.json')
  const post = data.find(p => p.id === id)
  const index = data.findIndex(p => p.id === id)

  if (!post) {
    errors.push(`post id doesn't exist`)
    return { errors }
  }

  data.splice(index, 1)
  file.sync('/post.json', data)

  return data
}

module.exports = {
  get, getAll, create, edit, deletePost
}
