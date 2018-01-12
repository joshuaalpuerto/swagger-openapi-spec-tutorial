'use strict'
const { todos } = require('../../utils/fixtures')

function FindTodoById(req, res) {
  const { swagger: { params } } = req
  const response = todos.find(({ todo_id }) => todo_id === parseInt(params.id.value))
  
  res.json(response || {})
}

module.exports = {
  FindTodoById
}