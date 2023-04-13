<script setup lang="ts">
import * as THREE from 'three';
import { useWindowSize } from '@vueuse/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' 
import { AmbientLight } from 'three';

let renderer: THREE.WebGLRenderer
let controls: OrbitControls
const experience: Ref<HTMLCanvasElement | null> = ref(null)
  
const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)
  
const bgColor = new THREE.Color('#E1F0C2')
const scene = new THREE.Scene()

scene.fog = new THREE.Fog(bgColor, 0.1, 75)
const camera = new THREE.PerspectiveCamera(75,aspectRatio.value, 0.1, 1000)
camera.position.set(2, 3, 4)
camera.rotation.set(1,0,0)
scene.add(camera)


const directionalLight = new THREE.DirectionalLight(0xffffff, 5)
directionalLight.position.set(2,10,1)
directionalLight.target.position.set(1,4, 5)
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const gltfLoader = new GLTFLoader()
gltfLoader.load('/nuxty/temperaryobject.gltf', (gltf) => {
  console.log(gltf)
  scene.add(gltf.scene)
})


function updateCamera() {
  camera.aspect = aspectRatio.value // object가 같이 줄어들지 않게
  camera.updateProjectionMatrix()
}
function updateRenderer() {
  renderer.setSize(width.value, height.value)
}
function setRender() {
  if (experience.value) {
    renderer = new THREE.WebGLRenderer({canvas: experience.value, alpha: true})
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;
    updateRenderer()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

onMounted(() =>{
  setRender()
  loop()
})

const loop = () => {
  controls.update
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

</script>


<template>
  <main>
    <canvas ref="experience" />
  </main>
</template>