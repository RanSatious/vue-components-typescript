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
    }
];

export default directive;
