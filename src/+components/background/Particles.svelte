<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { Instance, InstancedMesh } from '@threlte/extras'

  const PARTICLE_COUNT = 1000

  interface Particle {
    target: [number, number, number]
    position: [number, number, number]
  }

  function random(min: number, max: number) {
    return min + Math.random() * (max - min)
  }

  let particles: Particle[] = Array(PARTICLE_COUNT)
    .fill(0)
    .map(() => ({
      target: [0, 0, 0],
      position: [random(-10, 10), random(-10, 10), random(0, 1500)]
    }))

  useTask((delta) => {
    particles.forEach((particle) => {
      if (particle.position[2] < -20) {
        particle.position[2] = 100
      }

      particle.position[2] -= delta * 100
    })
    particles = particles
  })
</script>

<InstancedMesh limit={PARTICLE_COUNT} range={PARTICLE_COUNT}>
  <T.SphereGeometry args={[0.03]} />
  <T.MeshStandardMaterial colour="#00c8ff" />
  <!-- <FakeGlowMaterial glowColor="red" /> -->

  {#each particles as particle}
    <Instance position={particle.position} scale={[0.1, 0.1, 100]} />
  {/each}
</InstancedMesh>
