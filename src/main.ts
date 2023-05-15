import { init } from './index'

const layout = [
  'text',
  'img:https://example.com/image.png',
]

const composer = init()

console.log(composer.render(layout))
window.app.innerHTML = composer.render(layout)
