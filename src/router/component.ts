import { IMetaOption, RouteType } from './type';

const component: IMetaOption[] = [
    {
        title: 'IconFont SVG图标',
        type: RouteType.Component,
        doc: '',
        name: 'icon-font',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    },
    {
        title: 'ProgressBar 进度条',
        type: RouteType.Component,
        doc: '',
        name: 'progress-bar',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    },
    {
        title: 'TableAction 表格操作列',
        type: RouteType.Component,
        doc: '',
        name: 'table-action',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            },
            {
                name: 'disable',
                title: '禁用状态'
            },
            {
                name: 'icon',
                title: '使用图标'
            },
            {
                name: 'show',
                title: '显示/隐藏'
            },
            {
                name: 'slot',
                title: '使用插槽'
            }
        ]
    }
];

export default component;
