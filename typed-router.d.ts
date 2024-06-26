/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/blog/[...all]': RouteRecordInfo<'/blog/[...all]', '/blog/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/blog/home/': RouteRecordInfo<'/blog/home/', '/blog/home', Record<never, never>, Record<never, never>>,
    '/blog/login/': RouteRecordInfo<'/blog/login/', '/blog/login', Record<never, never>, Record<never, never>>,
    '/blog/target/': RouteRecordInfo<'/blog/target/', '/blog/target', Record<never, never>, Record<never, never>>,
    '/home/': RouteRecordInfo<'/home/', '/home', Record<never, never>, Record<never, never>>,
    '/login/': RouteRecordInfo<'/login/', '/login', Record<never, never>, Record<never, never>>,
    '/target/': RouteRecordInfo<'/target/', '/target', Record<never, never>, Record<never, never>>,
  }
}
