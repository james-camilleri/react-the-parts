<script lang="ts">
  let { startTime }: { startTime?: number } = $props()
  let currentTime = $state(0)
  let time = $derived(
    // This string split formatting is kinda hideous.
    startTime ? new Date(currentTime - startTime).toISOString().split('T')[1].split('.')[0] : '',
  )

  $effect(() => {
    if (!startTime) {
      return
    }

    currentTime = Date.now()
    const interval = setInterval(() => {
      currentTime = Date.now()
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

<span>{time}</span>

<style>
  span {
    font-size: 0.8rem;
    font-weight: 100;
    color: var(--grey);
  }
</style>
