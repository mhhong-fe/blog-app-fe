<template>
    <div :class="$style.track">
        <div :class="$style.earth" />
        <div :class="$style.moon" />
    </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.track {
    width: 400px;
    height: 400px;
    margin-left: 100px;
    margin-top: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    animation: rotate 4s linear infinite;
}

.earth {
    width: 40px;
    height: 40px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.moon {
    width: 20px;
    height: 20px;
    background-color: gold;
    border-radius: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

@keyframes rotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(1turn);
    }
}
</style>
