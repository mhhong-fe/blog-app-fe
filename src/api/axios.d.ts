import 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig<D> {
        mockPrefix?: string;
        alertOnError?: boolean | string;
        completeRes?: boolean;
    }

    export interface ARC<R, D = any> extends AxiosRequestConfig<D> {
    }
}
