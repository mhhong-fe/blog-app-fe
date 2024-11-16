<template>
    <div class="my-10 mx-20 text-4">
        <div class="mb-4">
            <el-dropdown class="cursor-pointer">
                <span class="el-dropdown-link">
                    视图展示
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>表格视图</el-dropdown-item>
                        <el-dropdown-item>
                            日历视图
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <el-table :data="logList" border class="custom-table-1">
            <el-table-column prop="date" label="日期" width="140">
                <template #default="{ row }">
                    <el-tag size="large" type="primary" effect="dark">
                        {{ row.date }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="category" label="分类">
                <template #default="{ row }">
                    <el-tag v-for="item in row.category" :key="item" class="mr-2" size="large" type="success" effect="dark">
                        {{ item }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="content" label="学习内容" />
            <el-table-column prop="duration" label="学习时长/h" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
const logList = [
    { date: '2024-11-06', category: ['webpack', '小程序'], content: ' webpack的基础配置', duration: 2 },
    { date: '2024-11-06', category: ['webpack', '小程序'], content: ' webpack的基础配置', duration: 2 },
];
</script>

<style scoped>

</style>
