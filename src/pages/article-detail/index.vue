<template>
    <div class="bg-#f4f5f5 content-height flex justify-center">
        <div class="w-300 pt-15 flex justify-between">
            <div class="w-210 rd-3 overflow-scroll article-container">
                <MdPreview class="rd-2" :model-value="articleData.content" :editor-id="mdId" @on-get-catalog="getCatalog" />
            </div>
            <div class="w-75">
                <div class="w-full bg-#fff rd-2">
                    <div class="pl-5 text-5 font-600 lh-12 h-12 b-b-1 b-b-solid b-b-#e2e2e2">
                        目录
                    </div>
                    <ul v-if="catalogList.length !== 0" class="rounded-xl catalog-list" @click="handleCatelogClick">
                        <li
                            v-for="(item, index) in catalogList"
                            :key="index"
                            :data-index="index"
                            :class="activeIndex === index ? 'active-li' : ''"
                        >
                            <a
                                :href="`#${item.text}`"
                                :data-level="item.level"
                                :data-index="index"
                                :title="item.text"
                            >{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MdPreview } from 'md-editor-v3';
import { useRoute } from 'vue-router';
import 'md-editor-v3/lib/style.css';
import type { ArticlesRow } from '~/api/config/common';
import { API_GET_ARTICLE_DETAIL } from '~/api/config/common';
import { request } from '~/api';

const route = useRoute();
const mdId = 'preview-only';

const articleData = ref({} as ArticlesRow);

const catalogList = ref([] as CatelogItem[]);
function getCatalog(list: CatelogItem[]) {
    catalogList.value = list.slice(1);
}

const activeIndex = ref(-1);
onMounted(async () => {
    const res = await request(API_GET_ARTICLE_DETAIL(Number(route.params.id)));
    articleData.value = res.data.data;
});

function handleCatelogClick(e: MouseEvent) {
    activeIndex.value = Number(e.target?.dataset.index);
}
</script>

<script lang="ts">
interface CatelogItem {
    text: string;
    level: number;
    index: number;
}
</script>

<style scoped>

</style>
