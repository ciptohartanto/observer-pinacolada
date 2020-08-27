const Model = function() {
  const todos = []
  const observers = []
  const addTodo = function (todo) {
    let idx = todos.length
    let todoObj = {
      id: idx ++,
      text: todo
    }
    if(todo !== undefined) {
      todos.push(todoObj)
      this.notifyObserver()
    }
  }
  const deleteTodo = function (todo) {
    const id = todos.indexOf(todo)
    todos.splice(id, 1)
    this.notifyObserver()
  }
  const addObserver = function (observer) {
    observers.push(observer)
  }
  const notifyObserver = function () {
    observers.forEach( o => {
      o.update(this)
    })
  }
  return {
    todos,
    addTodo,
    addObserver,
    notifyObserver,
    deleteTodo
  }
}

export default Model