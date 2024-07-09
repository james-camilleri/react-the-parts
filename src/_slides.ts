import type { Slide } from '$lib/slide'

import BrowserWars from '$assets/images/browser-wars.png'
import JavaScriptAndNetscape from '$assets/images/javascript+netscape.png'
import SirTimCreatesTheWeb from '$assets/images/sir-tim-creates-the-web.jpeg'

const slides: Slide[] = [
  {
    h1: 'React: The ~~Good~~ Parts',
    h2: 'An abbreviated and mostly-correct introduction to React for less front-end-inclined developers.',
    template: 'title',
    notes: ['a note', 'another note', 'a note with *formatting*'],
  },
  {
    h1: 'Disclaimer.',
    text: [
      '**I do not like React.**',
      '',
      'There will be no fan(boy/girl)ing.',
      'There will be *opinions*.',
      'There may be snark.',
      'I will strive to be objective.',
    ],
  },
  {
    h1: 'The next ~25 minutes',
    h2: "(so you can walk out if you already know all this and I won't be offended)",
    text: [
      'What is even is React?',
      'Why is it a thing? How did it come to this?',
      'Some fundamental React concepts',
      'Common gotchas',
      'A few tips and tricks',
    ],
  },
  {
    h1: 'What???',
    h2: 'In the ever-loving **#@*!** is React?',
    text: [
      {
        text: 'A front-end *library** for building user interfaces out of individual bits called components.',
        style: {
          'font-size': '2em',
          'line-height': '1.2',
          'max-width': '65vw',
          'margin-top': '1rem',
        },
      },
      {
        text: '*not framework',
        style: { 'margin-top': '1rem' },
      },
    ],
  },
  {
    iframe: 'https://react.dev/',
    notes: ['Show concept of components here.'],
  },

  // The age of JavaScript frameworks.
  {
    h1: 'Why do we need React?',
    h2: 'A minor digression into the development of front-end frameworks.',
  },
  {
    h2: 'In the beginning',
    image: SirTimCreatesTheWeb,
  },
  {
    iframe: 'https://www.spacejam.com/1996/',
    notes: [
      'OG Space Jame website, still running on 1996 tech.',
      "Some of you weren't even born when they built this.",
      'Completely static.',
    ],
  },
  {
    h2: 'Then this happened...',
    image: JavaScriptAndNetscape,
  },
  {
    h2: 'The dark ages',
    image: BrowserWars,
  },
]

export default slides
