import type { Slide } from '$lib/slide'

import JQuerySample from '$assets/code/jquery-sample?raw'
import ReactLogo from '$assets/components/ReactLogo.svelte'
import AngularJsLogo from '$assets/images/angular-js-logo.png'
import BackboneJsLogo from '$assets/images/backbone-js-logo.png'
import BrowserWars from '$assets/images/browser-wars.png'
import JavaScriptAndNetscape from '$assets/images/javascript+netscape.png'
import JQuery from '$assets/images/jquery-logo.png'
import KnockoutJsLogo from '$assets/images/knockout-js-logo.svg'
import SirTimCreatesTheWeb from '$assets/images/sir-tim-creates-the-web.jpeg'
import SpaghettiAbomination1 from '$assets/images/spaghetti-abomination-1.jpg'
import SpaghettiAbomination2 from '$assets/images/spaghetti-abomination-2.webp'

const slides: Slide[] = [
  {
    h1: 'React: The ~~Good~~ Parts',
    h2: 'An abbreviated and mostly-correct introduction to React for less front-end-inclined developers.',
    template: 'title',
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
    notes: [
      'Standards were not a thing and each browser did things differently.',
      'If you think web development is a nightmare now you really have no idea.',
    ],
  },
  {
    h2: 'One Library to rule them all, and in the darkness bind them',
    image: JQuery,
    notes: [
      'JQuery manged to paper over all the insanity and expose a coherent API for people to develop interactive experiences on the web.',
    ],
  },
  {
    h2: 'Sins of our fathers',
    code: {
      source: JQuerySample,
      language: 'js',
    },
    notes: ['An example of what was happening under the hood to make the browser play nice.'],
  },
  {
    h2: 'How can we over-engineer/abuse this?',
    image: SpaghettiAbomination1,
    notes: [
      'Devs went mad with power and started building lots of great stuff.',
      'No separation between church and state, so most code just mutated the DOM willy-nilly.',
      'The DOM *was* your state, which made it very hard to keep track of things.',
    ],
  },
  {
    h2: 'The first frameworks crawl out of the primordial soup',
    images: [AngularJsLogo, BackboneJsLogo, KnockoutJsLogo],
    notes: [
      'The first frameworks tried to sort out this mess by introducing declarative modelling, with the DOM being a result of the canonical state, and not one in the same thing.',
    ],
  },
  {
    h2: 'And then...',
    component: ReactLogo,
    notes: [
      'React was pretty groundbreaking.',
      "Lots of intriguing concepts I'll cover soon.",
      'Also in this family are e.g. Vue, and (sort of Svelte).',
      "I'd consider svelte v2.5 because it was one of the first tools to realise you could avoid a lot of run-time performance issues and weirdness by pre-processing a lot of stuff in a build/compile step. In 2019. React are almost done adding a compiler to the framework. Almost.",
    ],
  },
  {
    h2: 'How can we over-engineer/abuse this, part 2: electric boogaloo.<br>Or, new tools, new problems.',
    image: SpaghettiAbomination2,
    notes: [
      'Lots of stuff that used to be done in serverland with php or ASP or magic now done on the front-end.',
      'Client side apps became larger and larger and things got unwieldy.',
    ],
  },
]

export default slides
