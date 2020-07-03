const p = require('../../print')

const greeter = (name = 'Andrew', age = 7) => {
    p.GREEN('Hello', name)
}

greeter('Jermz')

greeter()