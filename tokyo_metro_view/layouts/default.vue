<template>
    <div class="default">
        <gobal-app-header/>
        <slot />
    </div>
  </template>

<script setup lang="ts">
import GobalAppHeader from '@/components/global/appHeader.vue';

</script>

<style scoped>
.default {
    background-color: lightsalmon;
}
</style>