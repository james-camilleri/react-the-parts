import type { TemplateName } from '../+templates'

// TODO: This style thing is a bit of an abomination.
type Text = string | { text: string; style?: Record<string, string> }

export interface Slide {
  h1?: string
  h2?: string
  text?: Text | Text[]
  code?: string
  notes?: string[]
  iframe?: string
  image?: string
  // TODO: This might be a circular dependency.
  template?: TemplateName
}
