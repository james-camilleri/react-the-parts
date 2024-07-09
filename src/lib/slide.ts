import type { TemplateName } from '../+templates'
import type { Component } from 'svelte'

// TODO: This style thing is a bit of an abomination.
type Text = string | { text: string; style?: Record<string, string> }

export interface Slide {
  h1?: string
  h2?: string
  text?: Text | Text[]
  code?: {
    source: string
    language: 'js' | 'ts'
  }
  notes?: string[]
  iframe?: string
  image?: string
  images?: string | string[]
  component?: Component
  // TODO: This might be a circular dependency.
  template?: TemplateName
}
