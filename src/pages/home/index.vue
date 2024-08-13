<template>
    <div>
        <span>Home页面</span>
        <div>
            <button @click="handleClick">发起请求</button>
        </div>
    </div>
</template>

<script setup lang= "ts">
async function handleClick() {
    const res = await fetch('/api/blogInfo').then(res => res.json());
    alert(res.message);
}
</script>

<style scoped>

</style>