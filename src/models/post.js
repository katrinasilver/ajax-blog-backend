const data = require('./data/post')
const shortid = require('short-id')
const file = require('./sync')

const get = (id) => {
  console.log(`Get one post`);
}

const getAll = (limit) => {
  console.log(`Get all posts`);
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
