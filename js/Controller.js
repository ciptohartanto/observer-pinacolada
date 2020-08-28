const Controller = function (model, ui) {
  let inputVal = undefined
  let currentId = null
  const todoBody = document.getElementById('dTodo')
  const _listenItemBackground = function (callback) {
    todoBody.addEventListener('click', (e) => {
      if (e.target.attributes["data-item"]) {
        // callback(e)
        console.log(e)
        e.target.innerHTML = `<input type="text" value=${model.dynamics.todoToEdit} />`
      }
    })
  }
  const _listenAddButton = function (callback) {
    todoBody.addEventListener('click', (e) => {
      if (e.target.attributes["data-add-btn"]) {
        callback(e)
      }
    })
  }
  const _listenDeleteButton = function (callback) {
    todoBody.addEventListener('click', (e) => {
      if (e.target.attributes["data-delete"]) {
        callback(e)
      }
    })
  }
  const _addNewTodo = function () {
    model.addTodo(inputVal)
  }
  const _deleteATodo = function (id) {
    model.deleteTodo(id)
  }
  const _updateTodoToEdit = function (val) {
    model.dynamics.todoToEdit = val
  }
  const _setCurrentId = function (e) {
    currentId = e.target.attributes["data-id"].value
  }
  const _getInputValue = function () {
    const input = document.getElementById('dInput')
    if (input.value.length !== 0) {
      input.setAttribute('placeholder', 'Write Your Todo')
      inputVal = input.value
      // console.log(input.value.length)
    } else {
      input.setAttribute('placeholder', 'Can\'t be empty, yo!')
      inputVal = undefined
    }
    input.value = ''
  }
  const __eventsOnAddButton = function () {
    _getInputValue()
    _addNewTodo()

  }
  const __eventsOnDelete = function (e) {
    _setCurrentId(e)
    _deleteATodo(currentId)
  }
  const __eventsOnEditing = function (e) {
    _updateTodoToEdit(e.target.attributes['data-todo'].value)
    console.log(model)
  }
  const init = () => {
    _listenAddButton(__eventsOnAddButton)
    _listenDeleteButton(__eventsOnDelete)
    _listenItemBackground()

  }
  return {
    model,
    init
  }
}

export default Controller