const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is ERROR', undefined)
        callback(undefined, [1, 4, 7])
    }, 1000)
}

doWorkCallback((error, result) => {
    if (error) {
     return console.log(error)
    }

    console.log(result)
})