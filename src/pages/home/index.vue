<template>
    <div>
        <span>Home页面</span>
        <div>
            <el-button type="primary" @click="handleClick">
                发起请求
            </el-button>
        </div>
    </div>
</template>

<script setup lang= "ts">
import { ElMessage } from 'element-plus';

async function handleClick() {
    const res = await fetch('/api/blogInfo').then(res => res.json());
    ElMessage.success(res.message);
}
</script>

<style scoped>

</style>
