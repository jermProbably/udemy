require('../src/db/mongoose')
const Task = require('../src/models/task.js')

Task.findByIdAndDelete('5f174afb46f50f6d8ad3a76b').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})