<template>
    <div class="pdf-container">
        <PDF :src="props.url" />
    </div>
</template>

<script setup lang="ts">
import PDF from 'pdf-vue3';

const props = defineProps<Props>();

function onLoad() {
    console.log('PDF loaded');
}
</script>

<script lang="ts">
interface Props {
    url: string;
}
</script>

  <style>
  .pdf-container {
    border: 1px solid #ccc;
    overflow: auto;
    height: 600px; /* 根据需要设置高度 */
  }
  </style>
