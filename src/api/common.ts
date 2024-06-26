import type {ARC} from 'axios';
import type {CommonResponseData} from './request';

export interface LoginPayload {
    email: string;
    password: string;
}

export function API_ADD_USER(data: LoginPayload): ARC<CommonResponseData<boolean>> {
    return {
        url: '/user/add',
        method: 'post',
        data,
    };
}

export function API_USER_LOGIN(data: LoginPayload): ARC<CommonResponseData<boolean>> {
    return {
        url: '/user/login',
        method: 'post',
        data,
    };
}

export function API_HELLO_WORLD(): ARC<CommonResponseData<string>> {
    return {
        url: '/hello',
        method: 'get',
    };
}
