<template>
    <div>
        <Header />
        <div class="pt-22.5">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue';
</script>
