export enum RouteType {
    Default = '',
    Component = 'component',
    Directive = 'directive',
    Service = 'service',
    Mixin = 'mixin',
    Section = 'section'
}

export interface IMetaOption {
    title: string;
    type: RouteType,
    doc?: string,
    name?: string,
    section?: string[]
}