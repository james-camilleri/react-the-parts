import type { Slide } from '$lib/slide'

import Code from './Code.svelte'
import Component from './Component.svelte'
import Default from './Default.svelte'
import IFrame from './IFrame.svelte'
import ImageGrid from './ImageGrid.svelte'
import Title from './Title.svelte'

const templates = {
  code: Code,
  component: Component,
  default: Default,
  iframe: IFrame,
  imageGrid: ImageGrid,
  title: Title,
} as const

export type TemplateName = keyof typeof templates

export function resolveTemplate(slide: Slide) {
  if (slide.iframe) {
    return templates.iframe
  }

  if (slide.code) {
    return templates.code
  }

  if (slide.component) {
    return templates.component
  }

  if (slide.images && Array.isArray(slide.images)) {
    return templates.imageGrid
  }

  return templates[slide.template ?? 'default'] ?? templates.default
}
