import Model from './js/Model.js'
import ObserverUI from './js/ObserverUI.js'
import Controller from './js/Controller.js'

const model = new Model()
const observerUI = new ObserverUI()
const controller = new Controller()

controller.watch(model)
model.addObserver(observerUI)
