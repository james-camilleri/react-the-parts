<script lang="ts">
  import { T } from '@threlte/core'
  import { tweened } from 'svelte/motion'

  import { SeededRandom } from '$lib/random'

  import Shape from './Shape.svelte'

  export let dark: boolean
  export let random: SeededRandom | undefined

  let shapes = [
    {
      distance: tweened(7, { duration: 1000 }),
      angle: tweened(5, { duration: 1000 }),
      rotationSpeedX: tweened(1),
      rotationSpeedY: tweened(0.5),
      rotationSpeedZ: tweened(0.1),
      geometry: T.BoxGeometry
    },
    {
      distance: tweened(2, { duration: 700 }),
      angle: tweened(4, { duration: 700 }),
      rotationSpeedX: tweened(0.8),
      rotationSpeedY: tweened(2),
      rotationSpeedZ: tweened(1.1),
      geometry: T.DodecahedronGeometry
    },
    {
      distance: tweened(9, { duration: 1500 }),
      angle: tweened(3.2, { duration: 1500 }),
      rotationSpeedX: tweened(1),
      rotationSpeedY: tweened(0.2),
      rotationSpeedZ: tweened(0.8),
      geometry: T.TetrahedronGeometry
    }
  ]

  $: {
    shapes.forEach((shape) => {
      if (!random) {
        return
      }

      const distance = random.numberBetween(1, 10)
      const speedModifier = ((10 - distance) / 10) * 2

      shape.distance.set(distance)
      shape.angle.set(random.numberBetween(0, 6.283)) // in radians
      shape.rotationSpeedX.set(random.numberBetween(0, 2) + speedModifier)
      shape.rotationSpeedY.set(random.numberBetween(0, 2) + speedModifier)
      shape.rotationSpeedZ.set(random.numberBetween(0, 2) + speedModifier)
    })

    shapes = shapes
  }
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, -30]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>

{#each shapes as { distance, angle, rotationSpeedX, rotationSpeedY, rotationSpeedZ, geometry }}
  <Shape {distance} {angle} {rotationSpeedX} {rotationSpeedY} {rotationSpeedZ} {geometry} {dark} />
{/each}

<!-- Centre of wormhole. -->
<T.PointLight position={[-10, 10, 10]} intensity={1000} color="#58c4dc" />
<T.PointLight position={[-10, -10, 10]} intensity={1000} color="#58c4dc" />
<T.PointLight position={[10, -10, 10]} intensity={1000} color="#58c4dc" />
<T.PointLight position={[10, 10, 10]} intensity={1000} color="#58c4dc" />

<!-- Edge of wormhole. -->
<T.PointLight position={[-10, 10, -12]} intensity={150} color="#00c8ff" />
<T.PointLight position={[-10, -10, -12]} intensity={150} color="#00c8ff" />
<T.PointLight position={[10, -10, -12]} intensity={150} color="#00c8ff" />
<T.PointLight position={[10, 10, -12]} intensity={150} color="#00c8ff" />
