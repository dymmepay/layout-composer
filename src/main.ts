import { init } from './index'

const layout = [
  'text',
  'img:https://example.com/image.png',
  'btn:click me!',
]

const composer = init()
composer.defineComposer('Button', 'btn', (src: string) => `<button>${src}</button>`)

console.log(composer.render(layout))
window.app.innerHTML = composer.render(layout)
