const p = require('../../../print')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Title',
        name: 'jermz'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Title',
        name: 'jermz'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Title',
        message: 'Help Lorem Ipsum',
        name: 'jermz'
    })
})

////////// HTML version of /weather

app.get('/weather', (req, res) => {
    
    const address = req.query.address

    if (!address) {
        console.log('ERROR : Location not given.')
        
        return res.render('weather', {
            title: 'Weather',
            // error: 'Please provide a location!',
            name: 'jermz'
        })
    } else {
        geocode(address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                console.log('ERROR : Could not find this location!')
                return res.render('weather', {
                    title: 'Weather',
                    error: '/data Could not find this location!',
                    name: 'jermz'
                })
            }
    
            forecast(latitude, longitude, (error, {weather, temperature} = {}) => {
                res.render('weather', {
                    title: 'Weather Title',
                    message: 'This is the information for ' + location,
                    name: 'jermz',
                    weather: weather,
                    temperature: temperature + ' degrees farhenheit.',
                    lat: latitude,
                    lon: longitude
                })
            })
        })
    }
})

////////// JSON version of /weather as /data

app.get('/data', (req, res) => {
    
    const address = req.query.address

    if (!address) {        
        return res.send({
            error: ' '
            // message: '/data Please provide a location!'
        })
    } else {
        geocode(address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({
                    error: '/data Could not find this location!'
                })
            }
    
            forecast(latitude, longitude, (error, {weather, temperature} = {}) => {
                res.send({
                    message:'/data Successfully found a location!',
                    weather: weather,
                    temperature: temperature + ' degrees farhenheit.',
                    lat: latitude,
                    lon: longitude,
                    loc: location
                })
            })
        })
    }
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Please provide a search.'
        })
    }

    p.t(req.query.search)
    res.send({
            products: []
        }
    )
})

// If it can't find the address where the is
app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404 Help',
        message: 'You Failed Help.',
        name: 'jermz'
    })
})

// If it can't find the address at all
app.get('*', (req, res) => {
    res.render('error', {
        title: '404 Title',
        message: 'You Failed.',
        name: 'jermz'
    })
})

app.listen(3030, () => {
    p.GREEN('Server is up on port', '3030')
})