<template>
    <div class="indexPage">
        <h4>index page</h4>
        <clientOnly>
            <TheMainCanverse/>
        </clientOnly>
    </div>
</template>

<script setup lang="ts">
import TheMainCanverse from '@/pages/threeCanvas/TheMainCanverse.vue';
</script>

<style scoped>
.indexPage {
    background-color: lightblue;;
}
</style>