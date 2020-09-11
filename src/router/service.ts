import { IMetaOption, RouteType } from './type';

const service: IMetaOption[] = [
    {
        title: 'Message 消息对话框',
        type: RouteType.Service,
        doc: '',
        name: 'message',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            },
            {
                name: 'align',
                title: '按钮对齐'
            },
            {
                name: 'title',
                title: '自定义标题'
            },
            {
                name: 'event',
                title: '回调'
            },
            {
                name: 'callback',
                title: '自定义行为'
            },
            {
                name: 'button',
                title: '自定义按钮'
            }
        ]
    }
];

export default service;
