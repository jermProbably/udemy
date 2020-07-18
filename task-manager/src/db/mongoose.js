const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true,
    useCreateIndex: true
})

        //////// MONGOOSE SETUP //////// vv

//// CREATE NEW COLLECTION ////

    const Task = mongoose.model('Tasks', {
        description: {
            type: String,
            trim: true,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    })

//// CREATE AN ITEM IN COLLECTION

    // const toDo = new Task({ //// The "new Task" is referring to the 'const Task' made above ////
    //     description: 'Dishes',
    //     completed: true
    // })

    const toDo = new Task({ //// The "new Task" is referring to the 'const Task' made above ////
        description: 'Laundry',
        // completed: true
    })

//// SAVE YOUR NEW ITEM TO YOUR COLLECTION

    toDo.save().then(() => { //// toDo.save is referring to 'const toDo' made above ////
        console.log(toDo)
    }).catch((error) => {
        console.log('Error!', error)
    })

        //////// MONGOOSE SETUP //////// ^^


// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Need a real normal people e-mail.')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must not be a negative number.')
//             }
//         }
//     },
//     password: {
//         type: String,
//         minlength: 6,
//         trim: true,
//         required: true,
//         validate(value) {
//             if (value.includes('password')) {
//                 throw new Error('There was an error.')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '  Mike     ',
//     email: 'Mike@Mike.com    ',
//     password: '      siofjsiodjfjiosd'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })