<script lang="ts">
  import type { Slide } from '$lib/slide'

  import SvelteMarkdown from 'svelte-markdown'

  import '../styles/slides.css'
  import { random } from '$lib/random'

  let { h1, h2, image, images }: Slide = $props()
  let imageList = $derived(image ? [image] : Array.isArray(images) ? images : [images])
  let width = $derived(Math.min(30, 100 / Math.floor(imageList.length / 2) - 5))
</script>

<div class="slide">
  {#if h1}
    <h1><SvelteMarkdown source={h1} isInline /></h1>
  {/if}
  {#if h2}
    <h2 class:h2-only={!h1}><SvelteMarkdown source={h2} isInline /></h2>
  {/if}

  <div class="grid">
    {#each imageList as image}
      <img src={image} style:--delay="{random(0.2, 0.8)}s" style:--width="{width}%" />
    {/each}
  </div>
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

  img {
    width: var(--width);
    max-height: 30vh;
    object-fit: contain;
    transform: scale(0);
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1);
    animation-delay: var(--delay);
    animation-fill-mode: forwards;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto 0;
  }

  @keyframes bounce {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }

    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
</style>
