<template>
    <div class="flex justify-center items-center content-height">
        <div class="mb-20">
            一位工作{{ workYear }}年的前端cv工程师
        </div>
    </div>
</template>

<script setup lang= "ts">
import { dayjs } from 'element-plus';

const graduateDate = '2021-07-15';

const workYear = (dayjs().diff(dayjs(graduateDate), 'day') / 365).toFixed(0);
</script>

<style scoped>

</style>
