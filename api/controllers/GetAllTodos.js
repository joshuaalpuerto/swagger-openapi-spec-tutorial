'use strict'
const { todos } = require('../../utils/fixtures')

function GetAllTodos(req, res) {
  res.json(todos)
}

module.exports = {
  GetAllTodos
}