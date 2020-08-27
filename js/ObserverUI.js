const ObserverUI = function() {

  const updateList = function (todos) {
    let markup = ''
    todos.forEach(todo => {
      markup += `<li class="todo-item">${todo.text} <button id="dDelete" class="todo-delete">X</button></li>`
    })
    const subtitle = `<span class="todo-title">To-do's</span>`
    const complete = `${subtitle}<ul id="dList" class="todo-list"> ${markup}</ul>`
    document.getElementById('dList').innerHTML = complete
  }


  const update = (data) => {
    const {todos} = data
    updateList(todos)
  }
  return {
    update
  }
}

export default ObserverUI