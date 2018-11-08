const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000

app.use(express.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const routes = require('./src/routes/post')
app.use('/', routes)

// Custom Errors
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 404
  res.status(status).json({ error: err })
})

// Route Errors
app.use((req, res, next) => res.status(502).json({ error: { type: 420, message: `enhance your calm :cat:` } }))

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
