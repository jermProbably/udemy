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
const msgWeather = document.querySelector('#msgWeather')
const msgTemperature = document.querySelector('#msgTemperature')
const msgHumidity = document.querySelector('#msgHumidity')
const msgLatitude = document.querySelector('#msgLatitude')
const msgLongitude = document.querySelector('#msgLongitude')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/data?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(location + ' not found.')
                console.log('data.message: ' + data.message)
                msgSummary.textContent = ''
                msgError.textContent = 'Failed.'
                msgLocation.textContent = 'Location: '
                msgWeather.textContent = 'Weather: '
                msgTemperature.textContent = 'Temperature: '
                msgHumidity.textContent = 'Humidity: '
                msgLatitude.textContent = 'Latitude: '
                msgLongitude.textContent = 'Longitude: '
            } else {
                msgError.textContent = ''
                msgSummary.textContent = 'Succeeded!'
                msgLocation.textContent = 'Location: ' + data.loc
                msgWeather.textContent = 'Weather: ' + data.weather
                msgTemperature.textContent = 'Temperature: ' + data.temperature
                msgHumidity.textContent = 'Humidity: ' + data.humidity
                msgLatitude.textContent = 'Latitude: ' + data.lat
                msgLongitude.textContent = 'Longitude: ' + data.lon
                console.log('Here is the information for ' + location)
                console.log('data.message: ' + data.message)
                console.log('data: ' + data.loc)
                console.log('Weather: ' + data.weather)
                console.log('Temperature: ' + data.temperature)
                console.log('Humidity: ' + data.humidity)
                console.log('Latitude: ' + data.lat)
                console.log('Longitude: ' + data.lon)
            }
        })
    })
})