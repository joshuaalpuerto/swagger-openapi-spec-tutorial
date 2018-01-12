'use strict'
const { todos } = require('../../utils/fixtures')

function AddTodo(req, res) {
  const { body: { completed, ...rest} } = req
  const response = {
    completed: !!completed,
    ...rest
  }
  todos.push(response)
  res.json(response)
}

module.exports = {
  AddTodo
}