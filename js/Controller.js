const Controller = function (){

  const watch = function (model) {
    addNewTodo(model)
    removeTodo()
  }
  const addNewTodo = function(model) {
    const button = document.getElementById('dButton')
    button.addEventListener('click', () => {
      model.addTodo(_getInputValue())
      _populateDeletes()
    })
  }
  const _populateDeletes = function () {
    const deletes = document.querySelectorAll('#dDelete')
    console.log(deletes)

  }
  const removeTodo = function (model) {
    const deletes = _populateDeletes()
    console.log(deletes)
  }
  const _getInputValue = function () {
    const input = document.getElementById('dInput')
    let inputVal = undefined
    if (input.value.length !== 0) {
      input.setAttribute('placeholder', 'Write Your Todo')
      inputVal = input.value
    } else {
      input.setAttribute('placeholder', 'Can\'t be empty, yo!')
    }
    input.value = ''
    return inputVal
  }
  return {
    watch
  }
}

export default Controller