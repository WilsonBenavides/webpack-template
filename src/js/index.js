    
import * as util from './utils'
import style from '../css/style.css'
import sass from '../scss/main.scss'
import logo from '../img/webpack-logo.svg'
import data from '../data.json'
import { suma } from './suma'    



const profesor = 'Wilson Benavides'

//console.log('Hola mundo Webpack, sin configuración')
//console.log(`Hola ${profesor}`)
console.log(util.randomIntFromRange(3, 5))
//console.log(randomIntFromRange(0, 5))

//const d = document
  //canvas = d.getElementById('canvas')
  //h1 = d.createElement('h1'),
  //const img = d.createElement('img')

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
	canvas.height = innerHeight * 0.65

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
    c.fillStyle = 'white'
    c.fill()
    c.strokeStyle = this.color
    c.stroke()
    c.closePath()
}

TicketCircle.prototype.update = function() {
    this.draw()

    if (util.distance(mouse.x, mouse.y, this.x, this.y) < this.radius) {
        console.log('collided')
        this.color = 'red'
    } else {
        this.color = 'white'        
    }   
}

// Implementation
let circles
//let circleMouse
function init() {
    circles = []    
    //circleMouse = new TicketCircle(100, 100, 30, 'green')

    let radius = canvas.width / 32
    let y = radius
    for (let i = 0; i < 8; i++) {
    	let wdth = (canvas.width / 7.48)
    	let x = (wdth  * (i + 1)) - wdth + radius
        circles.push(new TicketCircle(x, y, radius, 'white'))        
        circles.push(new TicketCircle(x, canvas.height - y, radius, 'white'))        
    }           
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
        
    // circleMouse.x = mouse.x
    // circleMouse.y = mouse.y
    // circleMouse.update()

    circles.forEach(circle => {
    	circle.update()
    })
}

init()
animate()

