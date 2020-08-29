const ObserverUI = function () {

  const updateList = function (todos) {
    let markup = ''
    todos.forEach(todo => {
      markup += `<li class="todo-item" data-item data-todo=${todo.text} data-id=${todo.id}>${todo.text} <button data-delete data-id=${todo.id} class="todo-delete">X</button></li>`
    })
    const subtitle = `<span class="todo-title">To-do's</span>`
    const complete = `${subtitle}${markup}`
    document.getElementById('dList').innerHTML = complete
  }
  const transformToInput = function (exstVal) {
    return `<input class="todo-editInput" data-editInput type="text" value=${exstVal} /><button class="todo-edit"data-editButton>Edit</button><button data-delete class="todo-delete">X</button>`
  }
  const update = (data) => {
    const {
      todos,
    } = data
    updateList(todos)
  }
  return {
    update,
    transformToInput
  }
}

export default ObserverUI