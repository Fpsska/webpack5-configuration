import './index.html'
import './assets/styles/style.scss'

import { getUsers } from './assets/js/getUsers'

import image from './assets/images/image-3.jpg'

// /. imports

console.log('Hello World!')
console.log(getUsers())

const box = document.querySelector('.box')

const imageElement = new Image()
imageElement.src = image
imageElement.alt = 'nature image'
imageElement.width = 500
imageElement.height = 400

box.append(imageElement)
