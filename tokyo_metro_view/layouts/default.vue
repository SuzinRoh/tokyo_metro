<template>
    <div class="default">
        <gobal-app-header/>sdsd
        <slot />
    </div>
  </template>

<script setup lang="ts">
import GobalAppHeader from '@/components/global/appHeader.vue';

</script>

<style scoped>
.default {
    background-color: lightsalmon;
    height: 100%;
}
</style>