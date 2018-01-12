'use strict'
const { todos } = require('../../utils/fixtures')

function DeleteTodoById(req, res) {
  const { swagger: { params } } = req
  const response = todos.filter(({ todo_id }) => todo_id !== parseInt(params.id.value))
  res.json({})
}

module.exports = {
  DeleteTodoById
}