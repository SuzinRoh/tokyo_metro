<script setup lang="ts">
import * as THREE from 'three';
import { useWindowSize } from '@vueuse/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' 

let renderer: THREE.WebGLRenderer
const experience: Ref<HTMLCanvasElement | null> = ref(null)
const scene = new THREE.Scene()

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const camera = new THREE.PerspectiveCamera(75,aspectRatio.value, 0.1, 1000)
camera.position.set(0, 0, 2)
scene.add(camera)

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x008080})
);
scene.add(sphere)

const updateCamera = () => {
  camera.aspect = aspectRatio.value // object가 같이 줄어들지 않게
  camera.updateProjectionMatrix()
}
const updateRenderer = () => {
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
}
const setRender = () => {
  if (experience.value) {
    renderer = new THREE.WebGLRenderer({canvas: experience.value })
    updateRenderer()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

onMounted(() =>{
  setRender()
})

const loop = () => {
  
}

</script>


<template>
  <main>
    <canvas ref="experience" />
  </main>
</template>