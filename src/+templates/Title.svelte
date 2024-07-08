<script lang="ts">
  import type { Slide } from '$lib/slide'
  import '../styles/slides.css'

  import SvelteMarkdown from 'svelte-markdown'

  let { h1, h2 }: Slide = $props()
</script>

<div class="slide">
  {#if h1}
    <h1 class="title"><SvelteMarkdown source={h1} isInline /></h1>
  {/if}
  {#if h2}
    <h2><SvelteMarkdown source={h2} isInline /></h2>
  {/if}
</div>

<style>
  h1 > :global(del) {
    position: relative;
    text-decoration: none;

    &::after {
      position: absolute;
      top: 50%;
      left: -5%;
      display: block;
      width: 110%;
      height: 0.2em;
      content: '';
      background: rgb(255 69 0 / 90%);
      transform: scaleX(0) translateY(-50%);
      transform-origin: 0;
      animation: strikethrough 0.5s ease-in-out 1s forwards;
    }
  }

  h2 {
    display: block;
    width: 60vw;
    margin-top: 2.5rem;
  }

  @keyframes strikethrough {
    0% {
      transform: scaleX(0) translateY(-50%);
    }

    100% {
      transform: scaleX(1) translateY(-50%);
    }
  }
</style>
