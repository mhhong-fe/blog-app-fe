<template>
    <div class="flex justify-center items-center content-height">
        <div class="mb-20 flex flex-col items-center">
            <div>
                一位工作{{ workYear }}年的前端cv工程师
            </div>
            <div class="flex mt-3 gap-2">
                <SvgIcon name="github" :height="20" :width="20" class="text-#8a8a8a hover:text-#000 cursor-pointer" @click="jumpToGithub" />
                <SvgIcon name="juejin" :height="20" :width="20" class="text-#8a8a8a hover:text-#407fff cursor-pointer" @click="jumpToJuejin" />
            </div>
        </div>
    </div>
</template>

<script setup lang= "ts">
import { dayjs } from 'element-plus';
import SvgIcon from '@/components/svgIcon.vue';

const graduateDate = '2021-07-15';

const workYear = (dayjs().diff(dayjs(graduateDate), 'day') / 365).toFixed(0);

function jumpToJuejin() {
    window.open('https://juejin.cn/user/3043060407607560', '_blank');
}

function jumpToGithub() {
    window.open('https://github.com/mhhong-fe', '_blank');
}
</script>

<style scoped>

</style>
