const Controller = function (model, ui) {

  // ---------------------------------------------
  // -- event listeners
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

  // ---------------------------------------------
  // -- reusable fn's
  const _getCurrentId = function (e) {
    let id = null || e.target.parentNode.dataset.id
    return id
  }
  const _getExistingText = function(e) {
    return e.target.attributes['data-todo'].value
  }
  const _validatingInputValue = function(e) {
    let input = e.target.previousElementSibling
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

  // ---------------------------------------------
  // -- extending and delegating fn's
  const _xtnd__addTodo = function (e) {
    const todo = _validatingInputValue(e)
    model.addTodo(todo)
  }
  const _xtnd__deleteTodo = function (e) {
    const id = _getCurrentId(e)
    model.deleteTodo(id)
  }
  const _xtnd__editTodo = function (e, text) {
    const id = _getCurrentId(e)
    model.editTodo(id, text) //- @params { id, text}
  }
  const _dlgt_transformToInput = function (extVal) {
    return ui.transformToInput(extVal)
  }

  // ---------------------------------------------
  // -- callbacks on events
  const __eventsOnAddButton = function (e) {
    _xtnd__addTodo(e)
  }
  const __eventsOnDelete = function (e) {
    _xtnd__deleteTodo(e)
  }
  const __eventsOnEditing = function (e) {
    const todo = _validatingInputValue(e)
    _xtnd__editTodo(e, todo)
  }
  const __eventsOnTransformingToInput = function (e) {
    e.target.innerHTML = _dlgt_transformToInput(_getExistingText(e))
  }

  // ---------------------------------------------
  // -- init
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