<template>
    <div class="flex items-center justify-center flex-col h-100vh">
        <div>目标管理</div>
        <el-progress type="dashboard" :percentage="tmpPercentage" :color="colors" indeterminate :stroke-width="7">
            <template #default="{percentage}">
                <div class="text-3.5">本周跑步{{ percentage }}%</div>
            </template>
        </el-progress>
        <div>跑步</div>
        <div>
            <el-button-group>
                <el-button :icon="Minus" @click="decrease" />
                <el-button :icon="Plus" @click="increase" />
            </el-button-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Minus, Plus} from '@element-plus/icons-vue';

const tmpPercentage = ref(10);

const colors = [
    {color: '#f56c6c', percentage: 20},
    {color: '#e6a23c', percentage: 40},
    {color: '#5cb87a', percentage: 60},
    {color: '#1989fa', percentage: 80},
    {color: '#6f7ad3', percentage: 100},
];

const increase = () => {
    tmpPercentage.value += 10;
    if (tmpPercentage.value > 100) {
        tmpPercentage.value = 100;
    }
};

const decrease = () => {
    tmpPercentage.value -= 10;
    if (tmpPercentage.value < 0) {
        tmpPercentage.value = 0;
    }
};
</script>

<style scoped></style>
