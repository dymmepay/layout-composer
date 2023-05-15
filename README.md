# Layout Composer
This library is a simple DSL closer to JS than HTML, MD or MDX to create HTML elements.
It enforces the use of config driven UI and is not meant to be used for complex components.

We use it to write our blog posts at [https://dymme.com/blog](https://dymme.com/blog).
This tool helps us to ship faster and to focus on the content rather than the layout or tooling.

## Installation
```bash
npm install @dymme/layout-composer
```

## Usage
```js
import { init } from '@dymme/layout-composer';

// Add your own composers at init or use the default ones
const composer = init([
  name: 'Button',
  key: 'btn',
  fn: (src: string) => `<button>${src}</button>`
]);

// Or create one at any time
composer.defineComposer('Button', 'btn', (src: string) => `<button>${src}</button>`);

// Use it
composer.render(['text', 'img:https://example.com/image.png', 'btn:click me!'])
```

## Version
1.0.1

## License
MIT

## Author
[https://dymme.com](https://dymme.com)

