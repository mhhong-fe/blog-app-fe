<template>
    <div class="flex items-center justify-center content-height">
        <div class="flex flex-col justify-center mb-20">
            <div class="font-600 text-12 lg:text-16 animate__animated animate__bounceInLeft">
                Hello World
            </div>
            <div class="aWord">
                或许是不知梦的缘故，流离之人追逐幻影
            </div>
        </div>
    </div>
</template>

<script setup lang= "ts">

</script>

<style scoped>
.aWord {
    position: absolute;
    bottom: 35px;
    right: 55px;
    font-size: 20px;
    font-weight: 700;
    color: transparent;
    background: linear-gradient(90deg, transparent 0%, rgb(216 26 26) 20%, rgb(255, 255, 255) 50%, rgb(216 26 26) 80%, transparent 100%);
    background-size: 80%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation: huerotate-ad62f0a1 5s linear infinite;
}

@keyframes huerotate-ad62f0a1 {
    0% {
    background-position: -500%;
    }

    100% {
        background-position: 500%;
    }
}
</style>
