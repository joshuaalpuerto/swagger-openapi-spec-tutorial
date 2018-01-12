'use strict'
const { todos } = require('../../utils/fixtures')

function UpdateTodoById(req, res) {
  const { swagger: { params: { id, todo} } } = req
  let response = todos.find(({ todo_id }) => todo_id !== parseInt(id.value))
  response =  todo.value
  res.json(response)
}

module.exports = {
  UpdateTodoById
}