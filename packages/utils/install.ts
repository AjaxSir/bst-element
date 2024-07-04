﻿/*
 * @Date: 2024-07-01 18:10:33
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-01 18:23:41
 * @Description: 
 */
import type { App, Plugin } from 'vue'
import { each } from 'lodash-es';

type SFCWithInstall<T> = T & Plugin;

export const makeInstaller = (components: Plugin[]) => {
    const installer = (app: App) => each(components, (c) => app.use(c));
    return installer as Plugin;
}

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any).name;
        app.component(name, component as Plugin);
    }
    return component as SFCWithInstall<T>;
}

