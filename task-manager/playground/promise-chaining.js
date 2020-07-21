require('../src/db/mongoose')
const User = require('../src/models/user.js')

User.findByIdAndUpdate('5f176470d6aa42729141b845').then((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})