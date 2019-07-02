import style from '../css/style.css'
import sass from '../scss/main.scss'
import logo from '../img/webpack-logo.svg'
import data from '../data.json'
import suma from './suma'
import utils from './utils'

//const profesor = 'Wilson Benavides'

//console.log('Hola mundo Webpack, sin configuración')
//console.log(`Hola ${profesor}`)
//console.log(suma(5, 3))

//const d = document,
  //canvas = d.getElementById('canvas')
  //h1 = d.createElement('h1'),
  //img = d.createElement('img')

//h1.textContent = 'Hola Mundo con Webpack }:)'
//img.src = logo

//app.appendChild(h1)
//app.appendChild(img)

console.log(data)



const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth 
canvas.height = innerHeight * 0.65

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function TicketCircle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

TicketCircle.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

TicketCircle.prototype.update = function() {
    this.draw()
}

// Implementation
let circles
function init() {
    circles = []

    let radius = canvas.width / 32
    let y = radius
    for (let i = 0; i < 8; i++) {
    	let wdth = (canvas.width / 8) - (radius / 3.5)
    	let x = (wdth  * (i + 1)) - wdth + (3 * radius)
        circles.push(new TicketCircle(x, y, radius, 'blue'))        
    }           
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    circles.forEach(circle => {
    	circle.update()
    })
}

init()
animate()

