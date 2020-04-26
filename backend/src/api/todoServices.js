const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.findOneAndUpdate({ new: true, runValidators: true });

module.exports = Todo;