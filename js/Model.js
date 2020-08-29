const Model = function () {
  let todos = []
  const observers = []
  const addTodo = function (todo) {
    let idx = todos.length + 1
    let todoObj = {
      id: idx++,
      text: todo
    }
    if (todo !== undefined) {
      todos.push(todoObj)
      this.notifyObserver()
    }
  }
  const deleteTodo = function (id) {
    todos.splice(getTrueId(id), 1)
    this.notifyObserver()
  }
  const editTodo = function (id, text) {
    todos[getTrueId(id)].text = text
    this.notifyObserver()
  }
  const getTrueId = function (id) {
    let numberIdx = Number(id)
    let trueIdx = null
    todos.forEach((todo, idx) => {
      if (todo.id === numberIdx) {
        trueIdx = idx
      }
    })
    return trueIdx
  }
  const addObserver = function (observer) {
    observers.push(observer)
  }
  const notifyObserver = function () {
    observers.forEach(o => {
      o.update(this)
    })
  }
  return {
    todos,
    addTodo,
    editTodo,
    addObserver,
    notifyObserver,
    deleteTodo
  }
}

export default Model