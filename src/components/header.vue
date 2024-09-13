<template>
    <header class="position-fixed h-22.5 w-full b-b-1.5 b-b-solid b-#e2e2e3 bg-#fff flex items-center justify-center">
        <div class="flex w-80 lg:w-300 items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rd-50%">
                    <img :src="AvatarImg" class="w-12 h-12 object-cover bg-#f7f8fa rd-50%" alt="">
                </div>
                <div class="font-500 text-5">
                    个人博客
                </div>
                <div class="hidden lg:block">
                    <el-input
                        v-model="keyword"
                        style="width: 240px"
                        size="large"
                        placeholder="搜索"
                        :prefix-icon="Search"
                        :class="$style.searchInput"
                        @keyup.enter="handleSearch"
                    />
                </div>
            </div>
            <div class="gap-5 hidden lg:flex">
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
import { ElMessage } from 'element-plus';
import AvatarImg from '@/assests/images/avatar.png';
import { debounce } from '@/utils/index';

const titleList = [
    { name: '首页', route: '/home' },
    { name: '在线demo', route: '/demo' },
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

const handleSearch = debounce(async () => {
    if (keyword.value.length === 0) {
        ElMessage.warning('请输入查询关键字');
        return;
    }
    const res = await fetch('/api/blogList', {
        method: 'POST', // 请求方法
        headers: {
            'Content-Type': 'application/json', // 请求头部，指定发送的数据类型
        },
        body: JSON.stringify({ keyword: keyword.value }), // 将数据转换为 JSON 字符串
    }).then(res => res.json());

    ElMessage.info(`相关博客数量为：${res.data.length}`);
}, 300);
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
