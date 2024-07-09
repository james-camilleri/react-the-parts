<script lang="ts">
  import type { Tweened } from 'svelte/motion'

  import { T, useTask } from '@threlte/core'

  interface ShapeProps {
    dark: boolean
    distance: Tweened<number>
    angle: Tweened<number>
    rotationSpeedX: Tweened<number>
    rotationSpeedY: Tweened<number>
    rotationSpeedZ: Tweened<number>
    geometry: typeof T.BoxGeometry | typeof T.DodecahedronGeometry | typeof T.TetrahedronGeometry
  }

  let {
    distance,
    angle,
    rotationSpeedX,
    rotationSpeedY,
    rotationSpeedZ,
    // geometry,
    dark,
  }: ShapeProps = $props()

  function toCartesian(radius: number, theta: number) {
    return { x: radius * Math.cos(theta), y: radius * Math.sin(theta) }
  }

  function map(value: number, low1: number, high1: number, low2: number, high2: number) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
  }

  let rotationX = $state(0)
  let rotationY = $state(0)
  let rotationZ = $state(0)

  let { x, y } = $derived(toCartesian($distance, $angle))
  let colour = $derived(dark ? '#aaaaaa' : '#ffffff')

  useTask((delta) => {
    rotationX += delta * $rotationSpeedX
    rotationY += delta * $rotationSpeedY
    rotationZ += delta * $rotationSpeedZ
  })
</script>

<!-- Wireframe. -->
<T.Mesh
  position.x={x}
  position.y={y}
  position.z={map($distance, 0, 10, 50, -20)}
  rotation.x={rotationX}
  rotation.y={rotationY}
  rotation.z={rotationZ}
>
  <T.DodecahedronGeometry />
  <!-- TODO: This binding doesn't work. -->
  <!-- <svelte:component this={geometry} /> -->
  <T.MeshStandardMaterial wireframe color="#fff" />
</T.Mesh>

<!-- Main fill. -->
<T.Mesh
  position.x={x}
  position.y={y}
  position.z={map($distance, 0, 10, 50, -20)}
  rotation.x={rotationX}
  rotation.y={rotationY}
  rotation.z={rotationZ}
>
  <T.DodecahedronGeometry />
  <!-- TODO: This binding doesn't work. -->
  <T.MeshStandardMaterial color={colour} />
</T.Mesh>
