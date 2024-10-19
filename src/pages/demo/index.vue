<template>
    <div class="flex">
        <el-menu
            :default-active="demoList[0].key" :class="$style.menu" @select="handleMenuSelect"
        >
            <el-menu-item v-for="item in demoList" :key="item.key" :index="item.key">
                <template #title>
                    {{ item.title }}
                </template>
            </el-menu-item>
        </el-menu>
        <div>
            <component :is="selectDemo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { MenuItemClicked } from 'element-plus';
import ColorPicker from './color-picker/index.vue';
import RotateMoon from './rotate-moon/index.vue';
import Upload from './upload/index.vue';

const demoList = [
    { key: 'color-picker', title: '原生的取色器', component: ColorPicker },
    { key: 'rotate-moon', title: '旋转动画', component: RotateMoon },
    { key: 'upload', title: '文件上传', component: Upload },
];

const selectMenu = ref(demoList[0].key);
const selectDemo = computed(() => {
    const demoObj = demoList.find(item => item.key === selectMenu.value);
    return demoObj?.component;
});

function handleMenuSelect(index: string, indexPath: string[], item: MenuItemClicked) {
    console.log({ index, indexPath, item });
    selectMenu.value = index;
}
</script>

<style module lang="scss">
.color-display {
    width: 100px;
    height: 100px;
}

.menu {
    width: 200px;
    --el-menu-item-height: 40px;
    :global {
        .el-menu-item {
            font-size: 16px;
        }
    }
}
</style>
