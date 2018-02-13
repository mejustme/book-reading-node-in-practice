const EventEmitter = require('events').EventEmitter

class MyEvent extends EventEmitter {
  constructor () {
    super()
  }
}

const myEvent = new MyEvent()

myEvent.on('newListener', function (eventName, fun) {
  console.log(eventName)
  console.log(fun)
})

myEvent.on('event-1', function (message) {
  console.log('1:' + message)
})

myEvent.on('event-1', function (message) {
  console.log('2:', message)
})

// myEvent.removeAllListeners('event-1')
// myEvent.removeListener('event-1', myEvent._events['event-1'][0])

myEvent.emit('event-1', 'hello world')

console.log(myEvent._events)

console.log(myEvent.listeners('event-1'))

