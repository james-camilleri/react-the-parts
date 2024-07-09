<script lang="ts">
  import { onMount } from 'svelte'

  let { image }: { image: string } = $props()

  let imageFrame = $state(false)
  let canvasElement: HTMLCanvasElement | undefined = $state()
  let imageElement: HTMLImageElement | undefined = $state()

  function hasTransparentPixels(canvas: HTMLCanvasElement, image: HTMLImageElement) {
    const context = canvas?.getContext('2d')
    if (!canvas || !context || !image) {
      return false
    }

    context?.drawImage(image, 0, 0, 100, 100)
    const { data } = context.getImageData(0, 0, 10, 10)

    for (let i = 3, n = data.length; i < n; i += 4) {
      if (data[i] === 0) {
        return true
      }
    }

    return false
  }

  // Check if the image has a transparent background.
  onMount(() => {
    if (!canvasElement || !imageElement) {
      return
    }

    if (imageElement.complete) {
      imageFrame = !hasTransparentPixels(canvasElement, imageElement)
    } else {
      imageElement.addEventListener('load', () => {
        imageFrame = !hasTransparentPixels(canvasElement, imageElement)
      })
    }
  })
</script>

<div class="img-wrapper">
  <div class="img-inner-wrapper" class:frame={imageFrame}>
    <img src={image} class:frame={imageFrame} bind:this={imageElement} />
    <div class="img-drop-shadow" class:frame={imageFrame}></div>
  </div>
</div>

<canvas bind:this={canvasElement} width="100" height="100"></canvas>

<style>
  .img-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .img-inner-wrapper {
    position: relative;
    flex: 0 1 0;
    height: 90%;
    max-height: 90%;
  }

  .img-drop-shadow {
    &.frame,
    &.frame::before {
      position: absolute;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
    }

    &.frame {
      top: 0.6rem;
      left: 0.6rem;
      background: var(--light);
    }

    &.frame::before {
      top: -0.3rem;
      left: -0.3rem;
      content: '';
      background: var(--dark-blue);
    }
  }

  img {
    height: 100%;
    object-fit: contain;

    &.frame {
      outline: solid var(--dark) 3px;
      outline-offset: -2px;
    }
  }

  canvas {
    display: none;
  }
</style>
