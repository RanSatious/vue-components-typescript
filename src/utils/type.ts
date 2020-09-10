import { RouteType, ISection } from '../router/type';

export interface IDemoSection extends ISection {
    category: string;
}

export const RoutePathMap = {
    [RouteType.Default]: '',
    [RouteType.Component]: 'components',
    [RouteType.Directive]: 'directives',
    [RouteType.Mixin]: 'mixins',
    [RouteType.Service]: 'services',
    [RouteType.Section]: 'sections'
};
