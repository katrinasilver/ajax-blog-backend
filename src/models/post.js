const shortid = require('shortid')
const file = require('./sync')
const data = require('./data/post')

const get = (id) => {
  const errors = []
  const data = file.sync('read', '/post.json')
  const post = data.find(p => p.id === id)

  if (!post) {
    errors.push(`post id doesn't exist`)
    return { errors }
  }
  return post
}

const getAll = (limit) => {
  const errors = []
  const data = file.sync('read', '/post.json')

  if (!data.length) {
    errors.push(`there are no posts in the blog right now :(`)
    return { errors }
  }
  return limit ? data.slice(0, limit) : data
}

const create = (body) => {
  console.log(`create posts`);
}

const edit = (id, body) => {
  console.log(`edit posts`);
}

const deletePost = (id) => {
  console.log(`delete posts`);
}


module.exports = {
  get, getAll, create, edit, deletePost
}
