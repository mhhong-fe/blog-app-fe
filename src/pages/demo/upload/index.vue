<template>
    <div class="content-height flex mt-80 justify-center content-width">
        <el-upload
            v-model:file-list="fileList"
            class="upload-demo"
            multiple
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            :on-success="handleSuccess"
            :auto-upload="false"
        >
            <el-button type="primary">
                Click to upload
            </el-button>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
            <template #file="{ file }">
                <div class="flex">
                    <div class="w-5 h-5 shrink-0">
                        <FileIcon :name="file.name" />
                    </div>
                    <span @click="handlePreview(file)">{{ file.name }}</span>
                </div>
            </template>
        </el-upload>
        <el-dialog v-if="previewDlgVisible" v-model="previewDlgVisible" title="Shipping address" width="500">
            <!-- 关闭弹窗就销毁这个元素，不然两个pdf会重叠 -->
            <FilePreview v-if="previewDlgVisible" :url="previewUrl" />
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { UploadFile, UploadProps, UploadUserFile } from 'element-plus';
import FileIcon from '@/components/file-icon.vue';
import FilePreview from '@/components/file-preview.vue';

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles);
};

const previewUrl = ref('');
const previewDlgVisible = ref(false);

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    const reader = new FileReader();
    previewDlgVisible.value = true;
    reader.onload = (e) => {
        previewUrl.value = e.target.result; // 将文件内容设置为 PDF 的 URL
    };
    reader.readAsDataURL(uploadFile.raw); // 以 Data URL 的形式读取文件
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
        files.length + uploadFiles.length
      } totally`,
    );
};

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
      `Cancel the transfer of ${uploadFile.name} ?`,
    ).then(
        () => true,
        () => false,
    );
};

function handleSuccess(response, uploadFile: UploadFile) {
    console.log({ response, uploadFile });
}
</script>
