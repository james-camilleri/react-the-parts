<script lang="ts">
  import type { Slide } from '$lib/slide'

  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import typescript from 'highlight.js/lib/languages/typescript'
  import SvelteMarkdown from 'svelte-markdown'

  import '../styles/slides.css'
  import '../styles/syntax-highlight.css'

  hljs.registerLanguage('js', javascript)
  hljs.registerLanguage('ts', typescript)

  let { h1, h2, code }: Slide = $props()
  let formattedCode = $derived(hljs.highlight(code?.source, { language: code?.language }).value)
</script>

<div class="slide">
  {#if h1}
    <h1><SvelteMarkdown source={h1} isInline /></h1>
  {/if}
  {#if h2}
    <h2 class:h2-only={!h1}><SvelteMarkdown source={h2} isInline /></h2>
  {/if}

  {#if code}
    <pre><code>{@html formattedCode}</code></pre>
  {/if}
</div>

<style>
  .slide {
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }

  .h2-only {
    top: 0;
    margin-inline-start: 0;
  }

  pre {
    width: 100%;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--react-blue);
  }
</style>
