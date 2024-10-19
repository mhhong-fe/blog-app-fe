<template>
    <div class="flex items-center justify-center content-height">
        <div class="flex flex-col justify-center mb-20">
            <div class="font-600 text-12 lg:text-16 animate__animated animate__bounceInLeft">
                Hello World
            </div>
            <div class="aWord">
                {{ showText }}
            </div>
        </div>
    </div>
</template>

<script setup lang= "ts">
import { computed, ref } from 'vue';

const list = [
    '或许是不知梦的缘故，流离之人追逐幻影',
    '今人不见古时月，今月曾经照古人',
    '山随平野尽，江入大荒流',
    '月下飞天镜，云生结海楼',
];

const showIndex = ref(0);
const showText = computed(() => list[showIndex.value]);

setTimeout(() => {
    showIndex.value++;
    setInterval(() => {
        if (showIndex.value < list.length - 1) {
            showIndex.value++;
        }
        else {
            showIndex.value = 0;
        }
    }, 8000);
}, 4000);
</script>

<style scoped>
.aWord {
    position: absolute;
    bottom: 35px;
    right: 55px;
    font-size: 20px;
    animation: fadeInOut 8s linear infinite;
}

@keyframes fadeInOut {
    0% {
        opacity: 1;
    }

    20% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}
</style>
