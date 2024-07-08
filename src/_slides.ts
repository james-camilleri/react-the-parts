import type { Slide } from '$lib/slide'

const slides: Slide[] = [
  {
    h1: 'React: The ~~Good~~ Parts',
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
]

export default slides
