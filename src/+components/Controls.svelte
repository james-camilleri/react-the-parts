<script lang="ts">
  interface ControlsProps {
    baseUrl: string
    currentSlide: number
    lastSlide: number
  }

  let { baseUrl, currentSlide, lastSlide }: ControlsProps = $props()

  let previousSlide = $derived(currentSlide !== 0 ? currentSlide - 1 : undefined)
  let nextSlide = $derived(currentSlide !== lastSlide ? currentSlide + 1 : undefined)
</script>

<div class="controls">
  <a class="previous" href="{baseUrl}/{previousSlide ?? currentSlide}">&lt;</a>
  <a class="next" href="{baseUrl}/{nextSlide ?? currentSlide}">&gt;</a>
</div>

<style>
  a,
  a:visited {
    color: var(--dark-blue);
    text-decoration: none;
  }

  a:first-child {
    padding: 0.25rem 0 0.25rem 0.5rem;
  }

  a:last-child {
    padding: 0.25rem 0.5rem 0.25rem 0;
  }
</style>
