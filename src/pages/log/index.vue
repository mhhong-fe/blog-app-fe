<template>
    <div class="mt-6 mb-10 content-center">
        <div>
            <div v-for="(node, index) in logList" :key="node.time">
                <div class="flex text-5 color-[#7A818D] items-center">
                    <div class="bg-[#D8E5FF] rounded-50% h-6 w-6 flex items-center justify-center mr-2">
                        <div class="bg-[#407FFF] rounded-50% h-3 w-3" />
                    </div>
                    <span class="font-500 text-4 color-[#111111] mr-4">{{ node.name }}</span>
                    <span class="mr-4 text-3.5">{{ node.time }}</span>
                </div>
                <div class="flex h-40">
                    <div
                        v-if="index !== logList.length - 1"
                        class="w-0 b-r-dashed b-[#D4D5D7] b-r-1 ml-3 mt-2 mb-2"
                    />
                    <div v-else class="w-1 ml-3" />
                    <div>
                        <div class="b-1 b-solid b-#dedfe0 rd-4 flex justify-center mt-4 ml-4 p-3 max-w-70">
                            {{ node.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const logList = [
    { name: '页面的简单搭建', time: '2024-08-15', content: '增加了首页/关于/更新日志页面，完成初步的页面布局' },
    { name: '项目上线', time: '2024-08-13', content: '项目上线，完成前后端服务的部署，目前啥内容都没有' },
];
</script>

<style scoped>

</style>
