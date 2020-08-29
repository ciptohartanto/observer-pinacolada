const Controller = function (model, ui) {
  const todoBody = document.getElementById('dTodo')

  const _listenItemBackground = function (callback) {
    todoBody.addEventListener('click', (e) => {
      if (e.target.className === 'todo-item') {
        callback(e)
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
  const _listenEditButton = function (callback) {
    todoBody.addEventListener('click', (e) => {
      if (e.target.attributes["data-editButton"]) {
        callback(e)
      }
    })
  }
  const _getCurrentId = function (e) {
    let id = null || e.target.parentNode.dataset.id
    return id
  }
  const _getInputValue = function () {
    const input = document.getElementById('dInput')
    let text = undefined
    if (input.value.length !== 0) {
      input.setAttribute('placeholder', 'Write Your Todo')
      text = input.value
    } else {
      input.setAttribute('placeholder', 'Can\'t be empty, yo!')
    }
    input.value = ''
    return text
  }
  const _getNewTodo = function (e) {
    return e.target.parentNode.firstChild.value
  }
  const _getExistingText = function(e) {
    return e.target.attributes['data-todo'].value
  }
  const _setNewInputMarkup = function (e) {
    e.target.innerHTML = _dlgt_transformToInput(_getExistingText(e))
  }
  const _xtnd__addTodo = function () {
    model.addTodo(_getInputValue())
  }
  const _extnd__deleteTodo = function (e) {
    model.deleteTodo(_getCurrentId(e))
  }
  const _extnd__editTodo = function (e, text) {
    model.editTodo(_getCurrentId(e), text) //- @params { id, text}
  }
  const _dlgt_transformToInput = function (text, id) {
    return ui.transformToInput(text, id)
  }
  const __eventsOnAddButton = function () {
    _xtnd__addTodo()
  }
  const __eventsOnDelete = function (e) {
    _extnd__deleteTodo(e)
  }
  const __eventsOnEditing = function (e) {
    _extnd__editTodo(e, _getNewTodo(e))
  }
  const __eventsOnTransformingToInput = function (e) {

    _setNewInputMarkup(e)
  }
  const init = () => {
    _listenAddButton(__eventsOnAddButton)
    _listenDeleteButton(__eventsOnDelete)
    _listenItemBackground(__eventsOnTransformingToInput) // -when transforming text to input
    _listenEditButton(__eventsOnEditing)
  }
  return {
    init
  }
}

export default Controller