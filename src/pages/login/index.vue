<template>
    <div class="h-100vh w-100vw flex justify-center items-center bg-#eef2f4">
        <div class="card flex w-925px h-660px border-rd-5 overflow-hidden">
            <div class="w-50% flex items-center justify-center" :class="isRegister ? 'bg-#f2f6f8' : 'bg-#bfdff1'">
                <img v-if="isRegister" :src="ExploreSrc" alt="" class="w-400px" />
                <img v-else :src="CodeSrc" alt="" class="w-400px" />
            </div>
            <div class="w-50% bg-#fff pt-45">
                <h2 class="flex justify-center">Blog</h2>
                <div class="flex justify-center">
                    <el-form
                        ref="formRef"
                        class="mt-40px"
                        size="large"
                        label-width="80"
                        :model="formData"
                        :rules="formRules"
                        :hide-required-asterisk="true"
                    >
                        <el-form-item label="email" prop="email">
                            <el-input v-model="formData.email" style="width: 260px"></el-input>
                        </el-form-item>
                        <el-form-item label="password" prop="password">
                            <el-input v-model="formData.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="flex justify-center w-100% mt-4">
                                <button role="button" class="button-name" @click="login">
                                    {{ isRegister ? 'Register' : 'Login' }}
                                </button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="flex items-center w-100% scale-60 ml-10 mt-6 justify-end">
                    <span class="ml-20">Login</span>
                    <label class="switch mx-3">
                        <input v-model="isRegister" type="checkbox" />
                        <span class="slider"></span>
                    </label>
                    <span>Register</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CodeSrc from '@/assets/code.svg';
import ExploreSrc from '@/assets/explore.svg';
import {API_ADD_USER} from '@/api/common';

const isRegister = ref(false);

const formData = reactive({
    email: '',
    password: '',
});

const formRules = reactive({
    email: [
        {required: true, message: '请输入邮箱', trigger: 'blur'},
        {
            validator: (rule, value: string) => {
                return new Promise((resolve, reject) => {
                    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                    if (emailRegex.test(value)) {
                        resolve(true);
                    } else {
                        reject(new Error('请输入有效的邮箱'));
                    }
                });
            },
            trigger: 'blur',
        },
    ],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
});

const formRef = ref();

async function login(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    await formRef.value.validate();
    if (isRegister.value) {
        await request(API_ADD_USER({email: formData.email, password: formData.password}));
        ElMessage.success('Register success !');
    } else {
        await request(API_USER_LOGIN({email: formData.email, password: formData.password}));
        ElMessage.success('Login success !');
    }
    window.open('/home', '_self');
}
</script>

<style scoped>
.card {
    box-shadow: #aaa8a8 -5px 0 30px;
}

/* The switch - the box around the slider */
.switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(182, 182, 182);
    transition: 0.4s;
    border-radius: 10px;
}

.slider:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 8px;
    left: 0.3em;
    bottom: 0.3em;
    transform: rotate(270deg);
    background-color: rgb(255, 255, 255);
    transition: 0.4s;
}

.switch input:checked + .slider {
    background-color: #21cc4c;
}

.switch input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

.switch input:checked + .slider:before {
    transform: translateX(1.5em);
}

.button-name {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px, rgba(45, 35, 66, 0.15) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: 'JetBrains Mono', monospace;
    height: 36px;
    width: 100px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 14px;
}

.button-name:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
        #d6d6e7 0 -3px 0 inset;
}

.button-name:hover {
    box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.button-name:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
</style>
