<template>
    <div class="mr-1">
        <img v-if="imgExtNameList.includes(extName)" class="w-3.5" :src="IconImg" alt="">
        <img v-else-if="pdfExtNameList.includes(extName)" class="w-3.5" :src="IconPdf" alt="">
        <img v-else-if="zipExtNameList.includes(extName)" class="w-3.5" :src="IconZip" alt="">
        <img v-else-if="wordExtNameList.includes(extName)" class="w-3.5" :src="IconWord" alt="">
        <img v-else-if="excelExtNameList.includes(extName)" class="w-3.5" :src="IconExcel" alt="">
        <img v-else :src="IconUnknown" alt="">
    </div>
</template>

<script setup lang="ts">
import { type ComputedRef, computed } from 'vue';
import IconImg from '@/assets/imgs/img.png';
import IconPdf from '@/assets/imgs/pdf.png';
import IconZip from '@/assets/imgs/zip.png';
import IconWord from '@/assets/imgs/word.png';
import IconExcel from '@/assets/imgs/excel.png';
import IconUnknown from '@/assets/imgs/unknown-file.png';

const { name } = defineProps<Props>();

const extName = computed(() => {
    if (!name) {
        return 'xxx';
    }
    return name.split('.').at(-1);
}) as ComputedRef<string>;

const imgExtNameList = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
const pdfExtNameList = ['pdf', 'ppt', 'pptx', 'PDF'];
const zipExtNameList = ['zip', 'rar', '7z', 'tar', 'gz'];
const wordExtNameList = ['doc', 'docx'];
const excelExtNameList = ['xls', 'xlsx'];
</script>

<script lang="ts">
interface Props {
    name?: string;
}
</script>
