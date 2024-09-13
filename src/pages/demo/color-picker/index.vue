<template>
    <div class="content-height p-4">
        <h1>原生的取色器</h1>
        <input v-model="colorDisplay" class="color-picker" type="color" @input="handleColorChange">
        <div
            class="color-display mt-2" :style="{
                backgroundColor: colorDisplay,
            }"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colorDisplay = ref('#000');

function handleColorChange() {
    console.log({ colorDisplay });
}
</script>

<style scoped>
.color-display {
    width: 100px;
    height: 100px;
}
</style>
