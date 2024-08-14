<template>
    <header class="position-fixed h-22.5 w-full b-b-1.5 b-b-solid b-#e2e2e3 bg-#fff flex items-center justify-center">
        <div class="flex w-300 items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rd-50%">
                    <img :src="AvatarImg" class="w-12 h-12 object-cover bg-#f7f8fa rd-50%" alt="">
                </div>
                <div class="font-500 text-5">
                    个人博客
                </div>
                <div>
                    <el-input
                        v-model="keyword"
                        style="width: 240px"
                        size="large"
                        placeholder="搜索"
                        :prefix-icon="Search"
                        :class="$style.searchInput"
                    />
                </div>
            </div>
            <div class="flex gap-5">
                <div
                    v-for="item in titleList"
                    :key="item.name" class="cursor-pointer"
                    :class="item.route === activeRoute ? 'activeRoute' : ''" @click="handleRouteClick(item.route)"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AvatarImg from '@/assests/images/avatar.png';

const titleList = [
    { name: '首页', route: '/home' },
    { name: '更新日志', route: '/log' },
    { name: '关于我', route: '/about' },
];

const keyword = ref('');
const activeRoute = ref('home');

const router = useRouter();

function handleRouteClick(route: string) {
    activeRoute.value = route;
    router.push(route);
}
</script>

<style lang="scss" module>
.searchInput {
    :global {
        .el-input__wrapper {
            border-radius: 30px;
        }
    }
}
</style>
