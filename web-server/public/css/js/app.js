console.log('CLIENT SIDE THING!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msgSummary = document.querySelector('#msgSummary')
const msgError = document.querySelector('#msgError')
const msgLocation = document.querySelector('#msgLocation')
const msgTemperature = document.querySelector('#msgTemperature')
const msgLatitude = document.querySelector('#msgLatitude')
const msgLongitude = document.querySelector('#msgLongitude')
const msgWeather = document.querySelector('#msgWeather')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3030/data?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(location + ' not found.')
                console.log('data.message: ' + data.message)
                msgSummary.textContent = ''
                msgError.textContent = 'Failed.'
                msgLocation.textContent = 'Location: '
                msgTemperature.textContent = 'Temperature: '
                msgLatitude.textContent = 'Latitude: '
                msgLongitude.textContent = 'Longitude: '
                msgTemperature.textContent = 'Temperature: '
                msgWeather.textContent = 'Weather: '
            } else {
                msgError.textContent = ''
                msgSummary.textContent = 'Succeeded!'
                msgLocation.textContent = 'Location: ' + data.loc
                msgTemperature.textContent = 'Temperature: ' + data.temperature
                msgLatitude.textContent = 'Latitude: ' + data.lat
                msgLongitude.textContent = 'Longitude: ' + data.lon
                msgTemperature.textContent = 'Temperature: ' + data.temperature
                msgWeather.textContent = 'Weather: ' + data.weather
                console.log('Here is the information for ' + location)
                console.log('data.message: ' + data.message)
                console.log('data: ' + data.loc)
                console.log('Latitude: ' + data.lat)
                console.log('Longitude: ' + data.lon)
                console.log('Temperature: ' + data.temperature)
                console.log('Weather: ' + data.weather)
            }
        })
    })
})