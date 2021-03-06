import { IMetaOption, RouteType } from './type';

const mixin: IMetaOption[] = [
    {
        title: 'Dialog 对话框',
        type: RouteType.Mixin,
        doc: '',
        name: 'dialog',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            },
            {
                name: 'form',
                title: '带表单的对话框'
            }
        ]
    },
    {
        title: 'Drag 拖拽移动',
        type: RouteType.Mixin,
        doc: '',
        name: 'drag',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    },
    {
        title: 'Resize 调整大小',
        type: RouteType.Mixin,
        doc: '',
        name: 'resize',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    },
    {
        title: 'DragResize 拖拽+调整大小',
        type: RouteType.Mixin,
        doc: '',
        name: 'drag-resize',
        section: [
            {
                name: 'basic',
                title: '基本用法'
            }
        ]
    }
];

export default mixin;
