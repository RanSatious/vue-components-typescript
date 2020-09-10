import { IMetaOption, RouteType } from './type';

const component: IMetaOption[] = [
    {
        title: 'Button 按钮',
        type: RouteType.Component,
        doc: '',
        name: 'button',
        section: []
    },
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
    }
];

export default component;
