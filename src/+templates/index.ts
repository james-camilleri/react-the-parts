import type { Slide } from '$lib/slide'

import Default from './Default.svelte'
import IFrame from './IFrame.svelte'
import Title from './Title.svelte'

const templates = {
  default: Default,
  iframe: IFrame,
  title: Title,
} as const

export type TemplateName = keyof typeof templates

export function resolveTemplate(slide: Slide) {
  if (slide.iframe) {
    return templates.iframe
  }

  return templates[slide.template ?? 'default'] ?? templates.default
}
