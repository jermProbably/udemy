// CRUD Create Read Update Delete
const p = require('./print')

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return p.RED('CONNECTION', 'Failed!')
    }
    p.GREEN('CONNECTION', 'Success!')
    const db = client.db(databaseName)


    // updateOne

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f11f88537affa2e5483b474")
    // }, {
    //     $set: {
    //         name: "Farts",
    //         age: 12
    //     }
    // }).then((result) => {
    //     p.t(result.modifiedCount)
    // }).catch((error) => {
    //     p.t(error)
    // })

    // deleteOne
    db.collection('tasks').deleteOne({
        description: "Shit"
    }).then((result) => {
        p.t(result.modifiedCount)
    }).catch((error) => {
        p.t(error)
    })
})