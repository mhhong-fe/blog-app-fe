<template>
    <div class="bg-#f4f5f5 content-height flex justify-center overflow-scroll">
        <div class="w-300 flex justify-between mt-15">
            <div>
                <div
                    v-for="item in list" :key="item.id"
                    class="w-210 h-35 rd-4 bg-#fff mb-10 p-5 pl-10 cursor-pointer"
                    :class="$style.list"
                    @click="handleClick(item.id as number)"
                >
                    <div class="font-600 text-5">
                        {{ item.title }}
                    </div>
                    <div class="mt-2.5 text-4 font-300 h-12">
                        {{ item.articleDesc }}
                    </div>
                    <div class=" flex gap-5">
                        <span class="inline-flex items-center gap-1">
                            <img :src="AuthorSrc" alt="" width="14" height="14">
                            影月
                        </span>
                        <span class="inline-flex items-center gap-1">
                            <img :src="TimeSrc" alt="" width="14" height="14">
                            {{ dayjs(item.createTime).format('YYYY-MM-DD') }}
                        </span>
                        <span class="inline-flex items-center  gap-1">
                            <img :src="CategorySrc" alt="" width="14" height="14">
                            分类
                        </span>
                        <span class="inline-flex items-center gap-1">
                            <img :src="ViewSrc" alt="" width="14" height="14">
                            {{ item.viewCount }}
                        </span>
                    </div>
                </div>
                <el-pagination
                    v-model:current-page="pageDto.pageNum"
                    v-model:page-size="pageDto.pageSize"
                    class="text-5 is-background"
                    layout="prev, pager, next"
                    :total="pageDto.total"
                />
                <div class="h-15" />
            </div>
            <div class="w-75">
                <div class="h-60 flex flex-col items-center" :class="$style.card">
                    <div class="w-20 h-20 rd-50%">
                        <img :src="AvatarImg" class="h-full w-full object-cover rd-50%" alt="">
                    </div>
                    <div class="mt-4 text-6 font-600">
                        影月
                    </div>
                    <div class="flex mt-4">
                        <div class="b-r-2 b-r-solid b-r-#000 flex flex-col items-center pr-5">
                            <div>{{ overviewData.articleCount }}</div>
                            <div>文章</div>
                        </div>
                        <div class="flex flex-col items-center pl-5">
                            <div>{{ overviewData.categoryCount }}</div>
                            <div>分类</div>
                        </div>
                    </div>
                </div>
                <div :class="$style.card" class="mt-5">
                    <div>
                        <span class="inline-flex items-center  gap-1">
                            <img :src="CategorySrc" alt="" width="14" height="14">
                            分类
                        </span>
                    </div>
                    <div v-for="item in overviewData.data" :key="item.name" class="flex justify-between px-5 mt-3">
                        <span>{{ item.name }}</span>
                        <span>{{ item.count }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { dayjs } from 'element-plus';
import { useRouter } from 'vue-router';
import { API_GET_ARTICLE_LIST, API_GET_ARTICLE_OVERVIEW, type ArticlesRow, type OverviewData } from '@/api/config/common';
import { request } from '@/api/index';
import AuthorSrc from '@/assets/imgs/author.svg';
import CategorySrc from '@/assets/imgs/category.svg';
import TimeSrc from '@/assets/imgs/time.svg';
import ViewSrc from '@/assets/imgs/views.svg';
import AvatarImg from '@/assets/imgs/avatar.png';

const list = ref([] as ArticlesRow[]);

const pageDto = ref({
    pageNum: 1,
    pageSize: 10,
    total: 0,
});

const overviewData = ref({} as OverviewData);

const router = useRouter();
function handleClick(id: number) {
    router.push(`/article/${id}`);
}

onMounted(async () => {
    const res = await request(API_GET_ARTICLE_LIST({
        pageNum: pageDto.value.pageNum,
        pageSize: pageDto.value.pageSize,
    }));
    list.value = res.data.data;

    const overviewRes = await request(API_GET_ARTICLE_OVERVIEW());
    overviewData.value = overviewRes.data.data;
});
</script>

<style module lang="scss">
.list {
    position: relative;
    top: 0;
    transition: top 0.2s linear;
}

.list:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0 , .2);
    top: -8px;
}

.card {
    border-radius: 12px;
    background-color: #fff;
    padding: 20px;
}

.card:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0 , .2);
}
</style>
