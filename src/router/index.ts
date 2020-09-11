import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { IMetaOption, RouteType } from './type';
import DefaultLayout from '../layouts/Default.vue';
import { camelCase } from 'lodash';
import component from './component';
import mixin from './mixin';
import service from './service';

const toRoute = (meta: IMetaOption): RouteRecordRaw => ({
    path: meta.type === RouteType.Default ? `/${meta.name}` : `/${meta.type}/${meta.name}`,
    name: camelCase(meta.name),
    component: () => import('../layouts/Demo.vue'),
    meta
});

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'default-layout',
        component: DefaultLayout,
        redirect: { name: 'home' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta: {
                    title: '首页',
                    type: RouteType.Default
                }
            },
            ...component.map(toRoute),
            ...mixin.map(toRoute),
            ...service.map(toRoute)
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
