<template>
    <div class="h-100vh w-100vw flex justify-center items-center">
        <div class="card flex w-925px h-700px border-1px border-rd-5 border-#e2e2e2 overflow-hidden">
            <div class="bg-#95cdec w-440px flex items-center justify-center border-r-1px border-r-#e2e2e2">
                <img :src="LoginSrc" alt="" class="w-300px" />
                <!-- <img :src="WorkSrc" alt="" class="w-300px" /> -->
            </div>
            <div class="flex-1">
                <h2 class="mt-220px flex justify-center">blog system</h2>
                <div class="flex justify-center">
                    <el-form class="mt-40px">
                        <el-form-item label="username">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="password">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item class="flex justify-center">
                            <el-button type="primary">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginSrc from '@/assets/login.svg';
import WorkSrc from '@/assets/work.svg';
</script>

<style scoped>
.card {
    box-shadow: #e2e2e2 -5px 0 30px;
}
</style>
