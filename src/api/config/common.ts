import type { ARC } from 'axios';
import type { CommonResponseData } from '..';

export interface EditArticlesPayload {
    id?: number;
    title: string;
    content: string;
    articleDesc: string;
    categoryId: number;
}

export interface PageDto {
    pageNum: number;
    pageSize: number;
    total?: number;
}

interface GetArticleListPayload extends PageDto {
    title?: string;
}

export interface ArticlesRow extends EditArticlesPayload {
    createTime: number;
    updateTime: number;
    viewCount: number;
    author: string;
}

/**
 * @description 查询文章列表
 */
export function API_GET_ARTICLE_LIST(data: GetArticleListPayload): ARC<CommonResponseData<ArticlesRow[]>> {
    return {
        url: '/api/article/list',
        method: 'post',
        data,
    };
}

export interface CategoryCountItem {
    id: number;
    name: string;
    count: number;
}

export interface OverviewData {
    articleCount: number;
    categoryCount: number;
    data: CategoryCountItem[];
}

/**
 * @description 查询博客概览
 */
export function API_GET_ARTICLE_OVERVIEW(): ARC<CommonResponseData<OverviewData>> {
    return {
        url: '/api/article/overview',
        method: 'get',
    };
}

/**
 * @description 查询博客详情
 */
export function API_GET_ARTICLE_DETAIL(id: number): ARC<CommonResponseData<ArticlesRow>> {
    return {
        url: '/api/article/detail',
        method: 'get',
        params: { id },
    };
}
