import type { Slide } from '$lib/slide'

import JQuerySample from '$assets/code/jquery-sample.js?raw'
import LoopingWithJsx from '$assets/code/jsx-looping-through-components.jsx?raw'
import KnockoutComponent from '$assets/code/knockout-component.html?raw'
import ReactClassComponent from '$assets/code/react-class-component.jsx?raw'
import ReactFunctionalComponent from '$assets/code/react-components.jsx?raw'
import ReactForm from '$assets/code/react-form.jsx?raw'
import VueComponent from '$assets/code/vue-component.html?raw'
import ReactLogo from '$assets/components/ReactLogo.svelte'
import AllJavaScript from '$assets/images/all-javascript.jpg'
import AngularJsLogo from '$assets/images/angular-js-logo.png'
import AstroLogo from '$assets/images/astro-logo.png'
import BackboneJsLogo from '$assets/images/backbone-js-logo.png'
import BrowserWars from '$assets/images/browser-wars.png'
import CircleVsSpiral from '$assets/images/circle-vs-spiral.png'
import ComponentTree from '$assets/images/component-tree.png'
import HighlightJsxComment from '$assets/images/highlight-js-jsx-comment.png'
import JavaScriptAndNetscape from '$assets/images/javascript+netscape.png'
import JQuery from '$assets/images/jquery-logo.png'
import KnockoutJsLogo from '$assets/images/knockout-js-logo.svg'
import MPA from '$assets/images/mpa.svg'
import NuxtLogo from '$assets/images/nuxt-logo.svg'
import QwikLogo from '$assets/images/qwik-logo.svg'
import ReactComponentOutline from '$assets/images/react-component-outline.png'
import ReactDevTools from '$assets/images/react-dev-tools.png'
import ReactHookLint from '$assets/images/react-hook-lint.png'
import VirtualDom from '$assets/images/react-vdom.webp'
import RemixLogo from '$assets/images/remix-logo.svg'
import SignalsLogo from '$assets/images/signals-logo.svg'
import SirTimCreatesTheWeb from '$assets/images/sir-tim-creates-the-web.jpeg'
import SolidStartLogo from '$assets/images/solid-start-logo.svg'
import SPA from '$assets/images/spa.svg'
import SpaghettiAbomination1 from '$assets/images/spaghetti-abomination-1.jpg'
import SpaghettiAbomination2 from '$assets/images/spaghetti-abomination-2.webp'
import SSG from '$assets/images/ssg.svg'
import SSR from '$assets/images/ssr.svg'
import SvelteKitLogo from '$assets/images/svelte-kit-logo.svg'
import Waterfall from '$assets/images/waterfall.gif'

const slides: Slide[] = [
  {
    template: 'start',
  },
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
  {
    h2: 'Frameworks 3.0, now with Acronyms',
    images: [SSR, SvelteKitLogo, MPA, NuxtLogo, RemixLogo, SPA, SolidStartLogo, SSG],
    notes: [
      'The third wave of frameworks are more full-stack, and try to fix some of the problems their predecessors created with acronyms.',
    ],
  },
  {
    h2: 'Right back to where we started from?',
    image: CircleVsSpiral,
  },
  {
    h2: 'Crazy new stuff',
    images: [AstroLogo, QwikLogo, SignalsLogo],
    notes: [
      'Insane new stuff in the pipeline.',
      'Astro popularised "Islands" architecture.',
      'Signals are a new reactive primitive based on the ideas introduced by KnockoutJs.',
      'Qwik is doing insane stuff with loading *everything* dynamically/asynchronously.',
    ],
  },

  // Fundamental React concepts.
  {
    h1: 'How does one React?',
    h2: 'Fundamental concepts in React.',
  },
  {
    h2: 'Components',
    image: ReactComponentOutline,
    notes: [
      'Earlier frameworks had "optional" components.',
      'React was components or GTFO.',
      'A React app is a hierarchical tree of components (classes or functions).',
    ],
  },
  {
    h2: 'Internally, a React app is a giant tree',
    image: ComponentTree,
  },
  {
    code: {
      source: ReactFunctionalComponent,
      language: 'jsx',
    },
  },
  {
    code: {
      source: ReactClassComponent,
      language: 'jsx',
    },
  },

  {
    h2: 'JSX',
    image: AllJavaScript,
    notes: [
      'Rather than over-specifying a template language, React went the whole hog and put everything in JavaScript.',
      'Pros and cons. Very flexible, but quite a few trade-offs: property names, very JS-leaning.',
    ],
  },
  {
    code: {
      source: KnockoutComponent,
      language: 'html',
    },
  },
  {
    code: {
      source: VueComponent,
      language: 'html',
    },
  },
  {
    code: {
      source: LoopingWithJsx,
      language: 'jsx',
    },
  },
  {
    image: HighlightJsxComment,
    notes: [
      'Side note: something I came across while I was trying to get syntax highlighting to work',
    ],
  },
  {
    iframe: 'https://react.dev/learn/writing-markup-with-jsx#3-camelcase-salls-most-of-the-things',
    notes: ['Weird JSX things'],
  },

  {
    h2: 'Unidirectional data flow',
    // https://dribbble.com/shots/2126205-Waterfall
    image: Waterfall,
    notes: [
      'Many other frameworks implement two-way data binding (e.g. in inputs).',
      'React team found this was prone to bugs when they designed React, although how accurate this is today is questionable.',
    ],
  },
  {
    h2: 'Controlled inputs',
    code: {
      source: ReactForm,
      language: 'jsx',
    },
  },

  {
    h2: 'The Virtual DOM',
    image: VirtualDom,
    notes: [
      'Power of the virtual DOM is that it is separate from a concrete DOM implementation: this is why React can be used in browsers or as React Native.',
      "The React reconciler is called Fiber, and it's big and clever.",
    ],
  },
  {
    h2: 'Component tree = VDOM',
    image: ComponentTree,
  },

  // Tips & tricks.
  {
    h1: 'Tips and Tricks',
    h2: 'Steel-toed boots for footgun protection.',
  },
  {
    text: [
      {
        text: "Don't write React.",
        style: {
          'font-size': '2.5rem',
          'font-weight': 'bold',
        },
      },
      '(ha ha)',
    ],
    template: 'centredText',
  },
  {
    h2: 'React ESLint rules rule',
    image: ReactHookLint,
  },
  {
    h2: 'React devtools are also very handy',
    image: ReactDevTools,
  },
  {
    h2: 'The React docs are a thing of beauty',
    image: '',
  },

  {
    h2: 'References, resources, and neat stuff',
    text: [
      '**These slides**',
      'https://react-the-parts.slides.james.mt',
      'https://github.com/james-camilleri/react-the-parts',
      '',
      '**JS Framework History**',
      'https://en.wikipedia.org/wiki/Browser_wars',
      'https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks',
      'https://primalskill.blog/a-brief-history-of-javascript-frameworks',
      'https://www.swyx.io/js-third-age',
    ],
  },
  {
    h2: 'References, resources, and neat stuff',
    text: [
      '**Black magic behind hooks and rendering**',
      'https://react.dev/reference/rules/rules-of-hooks',
      'https://www.swyx.io/hooks',
      'https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e',
      'https://jser.dev/2023-06-19-how-does-usestate-work/',
      'https://jser.dev/react/2022/01/19/lifecycle-of-effect-hook/',
      'https://github.com/acdlite/react-fiber-architecture',
      '',
      "**Bitchin' about React**",
      'https://www.zachleat.com/web/react-criticism/',
      'https://joshcollinsworth.com/blog/antiquated-react',
      '',
      '**ECMA Proposal for in-browser Signals**',
      'https://github.com/tc39/proposal-signals',
    ],
  },

  {
    template: 'end',
  },
]

// <Slide subtitle="React ESLint rules rule" image={ReactHookLint} />
// <Slide subtitle="React devtools are also very handy" image={ReactDevTools} />

export default slides
