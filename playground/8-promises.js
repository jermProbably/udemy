const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([69, 420, 'nice'])
        reject('FAILED', undefined)
    }, 1000)
})

doWorkPromise.then((result) => {
    console.log('SUCCESS!', result)
}).catch((error) => {
    console.log('Error', error)
})

