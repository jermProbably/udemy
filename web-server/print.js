const chalk = require('chalk')

const r = chalk.red
const g = chalk.green
const b = chalk.blue

const t = console.log

const tr = (text, type) => {
    if(!type) {
        t(r(text))
    }
    else if(type === 1) {
        t(r.bold(text))
    }
    else if(type === 2) {
        t(r.inverse.bold(text))
    }
}

const tg = (text, type) => {
    if(!type) {
        t(g(text))
    }
    else if(type === 1) {
        t(g.bold(text))
    }
    else if(type === 2) {
        t(g.inverse.bold(text))
    }
}

const tb = (text, type) => {
    if(!type) {
        t(b(text))
    }
    else if(type === 1) {
        t(b.bold(text))
    }
    else if(type === 2) {
        t(b.inverse.bold(text))
    }
}

const RED = (label, description = '') => {
    if(!label || label === 0){
        t(r.inverse.bold('  ERROR  '), r.bold(description))
    }
    else{
        t(r.inverse.bold(' ' + label + ' ') + ' ' + r.bold(description))
    }
}

const GREEN = (label, description = '') => {
    if(!label || label === 0){
        t(g.inverse.bold('  SUCCESS  '), g.bold(description))
    }
    else{
        t(g.inverse.bold(' ' + label + ' ') + ' ' + g.bold(description))
    }
}

const BLUE = (label, description = '') => {
    if(!label || label === 0){
        t(b.inverse.bold('  DATA  '), b.bold(description))
    }
    else{
        t(b.inverse.bold(' ' + label + ' ') + ' ' + b.bold(description))
    }
}

module.exports = {
    RED:RED,
    GREEN:GREEN,
    BLUE:BLUE,
    tr:tr,
    tg:tg,
    tb:tb,
    RB:r.inverse.bold,
    rb:r.bold,
    r:r,
    GB:g.inverse.bold,
    gb:g.bold,
    g:g,
    BB:b.inverse.bold,
    bb:b.bold,
    b:b,
    t:t
}