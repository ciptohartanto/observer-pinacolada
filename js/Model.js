const Model = function () {
  let todos = [{
    id: 1,
    text: 'a'
  }, {
    id: 2,
    text: 'bb'
  }, {
    id: 3,
    text: 'ccc'
  }]
  let dynamics = {
    currentId: null,
    inputVal: undefined,
    todoToEdit: undefined,
  }
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
  const deleteTodo = function (idx) {
    let numberIdx = Number(idx)
    let trueIdx = null
    todos.forEach((todo, idx) => {
      if (todo.id === numberIdx) {
        trueIdx = idx
      }
    })
    todos.splice(trueIdx, 1)
    this.notifyObserver()
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
    dynamics,
    addTodo,
    addObserver,
    notifyObserver,
    deleteTodo,
    observers
  }
}

export default Model