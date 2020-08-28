const ObserverUI = function () {

  const updateList = function (todos) {
    let markup = ''
    todos.forEach(todo => {
      markup += `<li class="todo-item" data-item data-todo=${todo.text}>${todo.text} <button data-delete data-id=${todo.id} class="todo-delete">X</button></li>`
    })
    const subtitle = `<span class="todo-title">To-do's</span>`
    const complete = `${subtitle}${markup}`
    document.getElementById('dList').innerHTML = complete
  }

  const transformToTextBox = function () {

  }
  const update = (data) => {
    const {
      todos,
    } = data
    updateList(todos)
  }
  return {
    update
  }
}

export default ObserverUI