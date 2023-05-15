interface ComposerFunction {
  (args: string): string
}

interface ComposerItem {
  name: string
  key: string
  fn: ComposerFunction
}

type Composers = ComposerItem[]

const DEFAULT_COMPOSERS: Composers = [
  {
    name: 'Text',
    key: '',
    fn: (text: string) => `<p>${text}</p>`,
  },
  {
    name: 'Image',
    key: 'img',
    fn: (src: string) => `<img src="${src}" />`,
  }
]

export function init(composers: Composers = DEFAULT_COMPOSERS) {
  function render(layout: string[]) {
    return layout.map((item) => {
      if (!item.includes(':')) {
        item = `:${item}`
      }
      const [key, ...args] = item.split(':')

      const composer = composers.find((composer) => composer.key === key)
      if (!composer) {
        throw new Error(`Composer not found: ${key}`)
      }

      return composer.fn(args.join(':'))
    }).join('')
  }

  return {
    render,
    composers,
  }
}
