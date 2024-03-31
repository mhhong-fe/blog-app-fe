import axios, {type ARC, type AxiosError, type AxiosResponse} from 'axios';
import {ElMessage} from 'element-plus';

const devBaseUrl = 'http://127.0.0.1:3000/blog/be';
const prodBaseUrl = '/blog/fe';

export const HTTP_STATUS = {
    OK: 200,
    EXPIRED: 301,
};

export const axiosIns = axios.create({
    timeout: 10 * 1000,
    method: 'POST',
});

type CodeType = 200 | 400 | 500 | 600 | 700;
export interface pageDto {
    pageNum: number;
    pageSize: number;
    count: number;
}

export interface CommonResponseData<T = object> {
    code: CodeType;
    msg: string;
    data: T;
    pageDto?: pageDto;
}

axiosIns.interceptors.request.use(config => {
    const modifiedConfig = {...config};
    const isDev = import.meta.env.MODE === 'development';
    modifiedConfig.url = `${isDev ? devBaseUrl : prodBaseUrl}${config.url}`;
    return modifiedConfig;
});

axiosIns.interceptors.response.use(
    response => {
        const {data, config} = response as AxiosResponse<CommonResponseData>;
        const {code, msg} = data;
        if (code === 200) {
            return Promise.resolve(response);
        }
        const path = window.location.pathname;
        const isLoginPage = path === '/fe/login';
        if (code === HTTP_STATUS.EXPIRED && !isLoginPage) {
            ElMessage.error('登录过期，请重新登录');
            setTimeout(() => {
                window.location.href = '/fe/login';
            }, 500);
            return Promise.reject(data);
        }
        if (code >= 400 && code < 600) {
            if (config.alertOnError !== false) {
                let message = msg || '服务错误';
                if (typeof config.alertOnError === 'string') {
                    message = config.alertOnError;
                }
                ElMessage({
                    message,
                    type: 'error',
                });
            }
            return Promise.reject(data);
        }
        return Promise.reject(data);
    },
    error => {
        const {code} = error as AxiosError;
        if (code === 'ECONNABORTED') {
            ElMessage({
                message: '访问超时，请刷新页面重试',
                type: 'error',
            });
        } else {
            ElMessage({
                message: '网络异常，请尝试刷新页面',
                type: 'error',
            });
        }
        return Promise.reject(error);
    }
);

export function request<R, D>(config: ARC<R, D>) {
    return axiosIns.request<R, AxiosResponse<R, D>>(config);
}
