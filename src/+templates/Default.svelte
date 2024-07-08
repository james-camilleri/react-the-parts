<script lang="ts">
  import type { Slide } from '$lib/slide'

  import SvelteMarkdown from 'svelte-markdown'

  let { h1, h2, text }: Slide = $props()
  let paragraphs = $derived(
    (Array.isArray(text) ? text : text ? [text] : []).map((text) =>
      typeof text === 'string' ? { text } : text,
    ),
  )
</script>

{#if h1}
  <h1><SvelteMarkdown source={h1} isInline /></h1>
{/if}
{#if h2}
  <h2 class:h2-only={!h1}><SvelteMarkdown source={h2} isInline /></h2>
{/if}
{#each paragraphs as { text, style = { } }}
  {#if text === ''}
    <br />
  {/if}
  <p
    style={Object.entries(style)
      .map(([property, style]) => `${property}: ${style}`)
      .join('; ')}
  >
    <SvelteMarkdown source={text} isInline />
  </p>
{/each}

<style>
  p {
    margin: 0;
  }

  .h2-only {
    margin-inline-start: 0;
  }
</style>
