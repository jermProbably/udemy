const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b4c324d02bb58c04cf126d11aaee4ba&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
                        callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature
            })
        }
    })
}

module.exports = forecast