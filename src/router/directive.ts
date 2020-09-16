import { IMetaOption, RouteType } from './type';

const directive: IMetaOption[] = [
    {
        title: 'Loading 加载状态',
        type: RouteType.Directive,
        doc: '',
        name: 'loading',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    },
    {
        title: 'Title 文字提示',
        type: RouteType.Directive,
        doc: '',
        name: 'title',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            },
            {
                name: 'position',
                title: '提示位置'
            },
            {
                name: 'overflow',
                title: '溢出提示'
            },
            {
                name: 'delay',
                title: '延迟显示'
            },
            {
                name: 'effect',
                title: '主题效果'
            },
            {
                name: 'gap',
                title: '间距'
            }
        ]
    }
];

export default directive;
