import style from './style.css'
import sass from './scss/main.scss'
import logo from './img/js-logo.png'
import data from './data.json'
import { suma } from './suma'

const profesor = 'Jonathan MirCha'

console.log('Hola mundo Webpack, sin configuración')
console.log(`Hola ${profesor}`)
console.log(suma(5, 3))


const d = document,
  app = d.getElementById('app'),
  h1 = d.createElement('h1'),
  img = d.createElement('img')

h1.textContent = 'Hola Mundo con Webpack otro punto de entrada }:)'
img.src = logo

app.appendChild(h1)
app.appendChild(img)

console.log(data)
