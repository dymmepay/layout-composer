import { describe, expect, it } from 'vitest'
import { init } from '.'

describe('init', () => {
  it('should return render function', () => {
    const { render } = init()
    expect(render).toBeInstanceOf(Function)
  })

  it('should return composers', () => {
    const { composers } = init()
    expect(composers).toBeInstanceOf(Array)
  })

  it('should return defineComposer function', () => {
    const { defineComposer } = init()
    expect(defineComposer).toBeInstanceOf(Function)
  })
})

describe('render', () => {
  it('should render layout', () => {
    const { render } = init()
    const layout = ['text', 'img:https://example.com/image.png']
    const expected = '<p>text</p><img src="https://example.com/image.png" />'
    expect(render(layout)).toBe(expected)
  })
  it('should throw error if composer not found', () => {
    const { render } = init()
    const layout = ['text', 'img:https://example.com/image.png', 'btn:click me!']
    expect(() => render(layout)).toThrow('Composer not found: btn')
  })
  it('should render layout with custom composer', () => {
    const { render, defineComposer } = init()
    const layout = ['text', 'img:https://example.com/image.png', 'btn:click me!']
    const expected = '<p>text</p><img src="https://example.com/image.png" /><button>click me!</button>'
    defineComposer('Button', 'btn', (src: string) => `<button>${src}</button>`)
    expect(render(layout)).toBe(expected)
  })
})
