<script lang="ts">
  import type { Slide } from '$lib/slide'

  import SvelteMarkdown from 'svelte-markdown'

  import '../styles/slides.css'

  let { text }: Slide = $props()
  let paragraphs = $derived(
    (Array.isArray(text) ? text : text ? [text] : []).map((text) =>
      typeof text === 'string' ? { text } : text,
    ),
  )
</script>

<div class="slide">
  {#if text}
    <div>
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
    </div>
  {/if}
</div>

<style>
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0;
    text-align: center;
  }
</style>
